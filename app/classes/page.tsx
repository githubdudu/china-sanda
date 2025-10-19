import type { Metadata } from "next";
import { classes } from "@/data/classes";

export const metadata: Metadata = {
  title: "Classes & Schedule | 课程安排 - China Sanda Club",
  description: "Explore our comprehensive class schedule including beginner Sanda, advanced training, youth programs, and more. 浏览我们全面的课程安排。",
};

const ClassesPage = () => {
  const levelColors = {
    beginner: "bg-green-500/10 text-green-600 dark:text-green-400",
    intermediate: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    advanced: "bg-red-500/10 text-red-600 dark:text-red-400",
    allLevels: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

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

        {/* Placeholder: ClassSchedule component will be rendered here */}
        <div className="space-y-6">
          {classes.map((classItem) => (
            <div key={classItem.id} className="p-6 rounded-lg border border-foreground/10">
              {/* TODO: Replace with ClassSchedule component */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{classItem.name}</h3>
                  <p className="text-xl mb-3" style={{ color: "var(--primary)" }}>
                    {classItem.nameChinese}
                  </p>
                  <p className="text-sm opacity-70 mb-2">{classItem.description}</p>
                  <p className="text-sm opacity-70">{classItem.descriptionChinese}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className={`px-3 py-1 text-xs rounded-full text-center ${levelColors[classItem.level]}`}>
                    {classItem.level.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full text-center bg-foreground/5">
                    {`${classItem.duration} min`}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-foreground/10">
                <h4 className="font-semibold mb-2">Schedule:</h4>
                <div className="flex flex-wrap gap-3">
                  {classItem.schedule.map((session, idx) => (
                    <div key={idx} className="px-4 py-2 rounded bg-foreground/5 text-sm">
                      <span className="font-medium">{session.day}</span>
                      <span className="opacity-70 ml-2">{session.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm opacity-50 mt-3">
                  {`Capacity: ${classItem.capacity} students`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
