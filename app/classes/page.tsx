import type { Metadata } from "next";
import { defaultClassesData } from "@/data/classes";
import { PopulatedClass } from "@/sanity/populated.types";
import { client } from "@/sanity/client";
import { ClassSchedule } from "@/components/ClassSchedule";

export const metadata: Metadata = {
  title: "Classes & Schedule | 课程安排 - China Sanda Club",
  description: "Explore our comprehensive class schedule including beginner Sanda, advanced training, youth programs, and more. 浏览我们全面的课程安排。",
};

// Enable static generation with on-demand revalidation
export const revalidate = false;

const CLASSES_QUERY = `*[_type == "class"] | order(_createdAt asc) {
  ...,
  instructor->
}`;

async function ClassesPage() {
  const levelColors = {
    beginner: "bg-green-500/10 text-green-600 dark:text-green-400",
    intermediate: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    advanced: "bg-red-500/10 text-red-600 dark:text-red-400",
  };

  const dayNames = ["", "MON 周一", "TUE 周二", "WED 周三", "THU 周四", "FRI 周五", "SAT 周六", "SUN 周日"];

  let classesData: PopulatedClass[] = [];
  try {
    classesData = await client.fetch<PopulatedClass[]>(CLASSES_QUERY);
    console.log("Fetched classes data successfully");
    if (!classesData) {
      throw new Error("No classes data found");
    }
  }
  catch (error) {
    console.error(error);
    classesData = defaultClassesData;
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Classes &amp; Schedule
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            课程安排
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            From beginner fundamentals to advanced competition training, find the perfect class for your goals.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 mt-2">
            从基础入门到高级竞赛训练，找到最适合您目标的课程。
          </p>
        </div>

        {/* Class List */}
        <div className="space-y-6 mb-16">
          {classesData.map((classItem) => {
            const instructorName = classItem.instructor.name;

            return (
              <div key={classItem._id} className="p-6 rounded-lg border border-foreground/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{classItem.title}</h3>
                    <p className="text-xl mb-3" style={{ color: "var(--primary)" }}>
                      {classItem.titleCN}
                    </p>
                    <p className="text-sm opacity-70 mb-2">{classItem.description}</p>
                    <p className="text-sm opacity-70">{classItem.descriptionCN}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {classItem.level && (
                      <span className={`px-3 py-1 text-xs rounded-full text-center ${levelColors[classItem.level]}`}>
                        {classItem.level.toUpperCase()}
                      </span>
                    )}
                    {classItem.tags && classItem.tags.length > 0 && (
                      <span className="px-3 py-1 text-xs rounded-full text-center bg-foreground/5">
                        {classItem.tags[0].name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-foreground/10">
                  <h4 className="font-semibold mb-2">Schedule 时间表:</h4>
                  <div className="flex flex-wrap gap-3">
                    {classItem.schedule?.map((session) => {
                      const timeRange = `${session.timeDuration?.startTime || ""} - ${session.timeDuration?.endTime || ""}`;
                      return (
                        <div key={session._key} className="px-4 py-2 rounded bg-foreground/5 text-sm">
                          <span className="font-medium">{session.whichday ? dayNames[session.whichday] : ""}</span>
                          <span className="opacity-70 ml-2">{timeRange}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-sm opacity-50 mt-3 flex flex-col gap-1">
                    {instructorName && (
                      <p>
                        Instructor 教练:
                        {" "}
                        {instructorName}
                      </p>
                    )}
                    {classItem.capacity && (
                      <p>
                        {`Capacity: ${classItem.capacity} students`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weekly Calendar View */}
        <div id="schedule" className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Weekly Schedule
            </h2>
            <p className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
              每周课程表
            </p>
            <p className="text-base opacity-70 mt-4">
              View all classes in a weekly calendar format
            </p>
            <p className="text-base opacity-70">
              以每周日历格式查看所有课程
            </p>
          </div>
          <ClassSchedule classes={classesData} />
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
