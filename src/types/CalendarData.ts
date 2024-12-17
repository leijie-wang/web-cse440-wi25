import * as React from "react";

/**
 * Type for links.
 */
export type LinkHREF = string;

/**
 * Store calendar dates as YYYY-MM-DD strings (e.g., "2023-09-28").
 */
export type CalendarDate = string;

/**
 * Store calendar weeks as a start date (i.e., Sunday) then all relevant dates (i.e., within the week).
 */
export type CalendarWeek = {
  startDate: CalendarDate;
  dates: CalendarDate[];
};

/**
 * One or more dates associated with a calendar item.
 */
export type BaseCalendarItemDate = {
  date: CalendarDate;
};

export type BaseCalendarItemDates =
  | BaseCalendarItemDate
  | {
      dates: CalendarDate[];
    };

/**
 * One or more guests potentially associated with a calendar item.
 */
export type BaseCalendarItemGuests =
  | {}
  | {
      guest: {
        name: string;
        link?: string;
      };
    }
  | {
      guests: {
        name: string;
        link?: string;
      }[];
    };

/**
 * One or more times and locations potentially associated with a calendar item.
 */
export type BaseCalendarItemTimeAndLocations =
  | {}
  | {
      timeAndLocation: {
        time: string;
        location: string;
      };
    }
  | {
      timeAndLocations: {
        time: string;
        location: string;
      }[];
    };

/**
 * Calendar item types.
 */

export type AssignmentCalendarItemSubmission =
  | {}
  | {
      submission: "canvas";
      submitCanvasTime: string;
      submitCanvasLink: string;
    };

export type AssignmentCalendarItem = {
  type: "assignment";
  title: string;
  link?: string;
} & BaseCalendarItemDate &
  AssignmentCalendarItemSubmission;

export type EventCalendarItem = {
  type: "event";
  title: string;
  slides?: LinkHREF;
} & BaseCalendarItemDates &
  BaseCalendarItemTimeAndLocations;

export type HolidayCalendarItem = {
  type: "holiday";
  title: string;
} & BaseCalendarItemDates;

export type LectureCalendarItem = {
  type: "lecture";
  title: string;
  slides?: LinkHREF;
} & BaseCalendarItemDates &
  BaseCalendarItemGuests &
  BaseCalendarItemTimeAndLocations;

export type OfficeHourCalendarItem = {
  type: "officeHour";
  title: string;
} & BaseCalendarItemDates &
  BaseCalendarItemTimeAndLocations;

export type StudioCalendarItem = {
  type: "studio";
  title: string;
  slides?: LinkHREF;
} & BaseCalendarItemDates &
  BaseCalendarItemTimeAndLocations;

export type CalendarItem =
  | AssignmentCalendarItem
  | EventCalendarItem
  | HolidayCalendarItem
  | LectureCalendarItem
  | OfficeHourCalendarItem
  | StudioCalendarItem;

export function filterAssignmentCalendarItems(
  calendarItems: CalendarItem[],
): AssignmentCalendarItem[] {
  return calendarItems.filter((calendarItemCurrent: CalendarItem): boolean => {
    return calendarItemCurrent.type === "assignment";
  }) as AssignmentCalendarItem[];
}

export function filterEventCalendarItems(
  calendarItems: CalendarItem[],
): EventCalendarItem[] {
  return calendarItems.filter((calendarItemCurrent: CalendarItem): boolean => {
    return calendarItemCurrent.type === "event";
  }) as EventCalendarItem[];
}

export function filterHolidayCalendarItems(
  calendarItems: CalendarItem[],
): HolidayCalendarItem[] {
  return calendarItems.filter((calendarItemCurrent: CalendarItem): boolean => {
    return calendarItemCurrent.type === "holiday";
  }) as HolidayCalendarItem[];
}

export function filterLectureCalendarItems(
  calendarItems: CalendarItem[],
): LectureCalendarItem[] {
  return calendarItems.filter((calendarItemCurrent: CalendarItem): boolean => {
    return calendarItemCurrent.type === "lecture";
  }) as LectureCalendarItem[];
}

export function filterOfficeHourCalendarItems(
  calendarItems: CalendarItem[],
): OfficeHourCalendarItem[] {
  return calendarItems.filter((calendarItemCurrent: CalendarItem): boolean => {
    return calendarItemCurrent.type === "officeHour";
  }) as OfficeHourCalendarItem[];
}

export function filterStudioCalendarItems(
  calendarItems: CalendarItem[],
): StudioCalendarItem[] {
  return calendarItems.filter((calendarItemCurrent: CalendarItem): boolean => {
    return calendarItemCurrent.type === "studio";
  }) as StudioCalendarItem[];
}
