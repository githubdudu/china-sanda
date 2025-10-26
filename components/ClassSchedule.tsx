"use client";

import { useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addDays, setHours, setMinutes } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { PopulatedClass } from "@/sanity/populated.types";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales,
});

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  resource: {
    classId: string;
    level: string;
    instructor: string;
  };
}

interface ClassScheduleProps {
  classes: PopulatedClass[];
}

export const ClassSchedule = ({ classes }: ClassScheduleProps) => {
  // Convert class schedule data to calendar events
  const events = useMemo(() => {
    const calendarEvents: CalendarEvent[] = [];
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday start

    classes.forEach((classItem) => {
      classItem.schedule?.forEach((session) => {
        if (!session.whichday || !session.timeDuration) return;

        // whichday: 1=Monday, 7=Sunday
        const dayOffset = session.whichday - 1;
        const eventDate = addDays(weekStart, dayOffset);

        // Parse time strings (e.g., "16:00", "17:00")
        if (!session.timeDuration.startTime || !session.timeDuration.endTime) return;
        const [startHour, startMinute] = session.timeDuration.startTime.split(":").map(Number);
        const [endHour, endMinute] = session.timeDuration.endTime.split(":").map(Number);

        const startTime = setMinutes(setHours(eventDate, startHour), startMinute);
        const endTime = setMinutes(setHours(eventDate, endHour), endMinute);

        calendarEvents.push({
          title: `${classItem.titleCN || classItem.title}`,
          start: startTime,
          end: endTime,
          resource: {
            classId: classItem._id,
            level: classItem.level || "beginner",
            instructor: classItem.instructor?.name || "",
          },
        });
      });
    });

    return calendarEvents;
  }, [classes]);

  // Custom event styling based on class level
  const eventStyleGetter = (event: CalendarEvent) => {
    const levelColors = {
      beginner: {
        backgroundColor: "rgb(34, 197, 94)",
        borderColor: "rgb(22, 163, 74)",
      },
      intermediate: {
        backgroundColor: "rgb(234, 179, 8)",
        borderColor: "rgb(202, 138, 4)",
      },
      advanced: {
        backgroundColor: "rgb(239, 68, 68)",
        borderColor: "rgb(220, 38, 38)",
      },
    };

    const level = event.resource.level as keyof typeof levelColors;
    const colors = levelColors[level] || levelColors.beginner;

    return {
      style: {
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        borderWidth: "2px",
        borderStyle: "solid",
        color: "white",
        borderRadius: "4px",
        fontSize: "0.875rem",
        fontWeight: "500",
      },
    };
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={["week"]}
        step={30}
        timeslots={2}
        min={new Date(2025, 0, 1, 9, 0, 0)} // 9:00 AM
        max={new Date(2025, 0, 1, 22, 0, 0)} // 10:00 PM
        eventPropGetter={eventStyleGetter}
        culture="en-GB"
        style={{ height: 600 }}
        messages={{
          week: "Week 周",
          today: "Today 今天",
          previous: "Previous 上一周",
          next: "Next 下一周",
        }}
      />

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgb(34, 197, 94)" }} />
          <span className="text-sm">Beginner 初级</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgb(234, 179, 8)" }} />
          <span className="text-sm">Intermediate 中级</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgb(239, 68, 68)" }} />
          <span className="text-sm">Advanced 高级</span>
        </div>
      </div>
    </div>
  );
};
