/* eslint no-fallthrough: off */
import * as dates from "date-arithmetic";

export {
  milliseconds,
  seconds,
  minutes,
  hours,
  month,
  startOf,
  endOf,
  add,
  eq,
  neq,
  gte,
  gt,
  lte,
  lt,
  inRange,
  min,
  max,
} from "date-arithmetic";
interface TimeUnit {
  seconds: number;
  minutes: number;
  hours: number;
  day: number;
}

const MILLI: TimeUnit = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
};

const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function monthsInYear(year: number) {
  let date = new Date(year, 0, 1);

  return MONTHS.map((i) => dates.month(date, i));
}

export function firstVisibleDay(date: Date, localizer: any) {
  let firstOfMonth = dates.startOf(date, "month");

  return dates.startOf(firstOfMonth, "week", localizer.startOfWeek());
}

export function lastVisibleDay(date: Date, localizer: any) {
  let endOfMonth = dates.endOf(date, "month");

  return dates.endOf(endOfMonth, "week", localizer.startOfWeek());
}

export function visibleDays(date: Date, localizer: any) {
  let current = firstVisibleDay(date, localizer),
    last = lastVisibleDay(date, localizer),
    days = [];

  while (dates.lte(current, last, "day")) {
    days.push(current);
    current = dates.add(current, 1, "day");
  }

  return days;
}

export function ceil(date: Date, unit: any) {
  let floor = dates.startOf(date, unit);

  return dates.eq(floor, date) ? floor : dates.add(floor, 1, unit);
}

export function range(start: any, end: any, unit: any = "day") {
  let current = start,
    days = [];

  while (dates.lte(current, end, unit)) {
    days.push(current);
    current = dates.add(current, 1, unit);
  }

  return days;
}

export function merge(date: Date, time: any) {
  if (time == null && date == null) return null;

  if (time == null) time = new Date();
  if (date == null) date = new Date();

  date = dates.startOf(date, "day");
  date = dates.hours(date, dates.hours(time));
  date = dates.minutes(date, dates.minutes(time));
  date = dates.seconds(date, dates.seconds(time));
  return dates.milliseconds(date, dates.milliseconds(time));
}

export function eqTime(dateA: any, dateB: any) {
  return (
    dates.hours(dateA) === dates.hours(dateB) &&
    dates.minutes(dateA) === dates.minutes(dateB) &&
    dates.seconds(dateA) === dates.seconds(dateB)
  );
}

export function isJustDate(date: any) {
  return (
    dates.hours(date) === 0 &&
    dates.minutes(date) === 0 &&
    dates.seconds(date) === 0 &&
    dates.milliseconds(date) === 0
  );
}

export function duration(
  start: Date,
  end: Date,
  unit: "weekday" | "day" | "date",
  firstOfWeek: any
): number {
  if (unit === "day") unit = "date";
  let x = dates[unit](start, undefined!, firstOfWeek);
  let y = dates[unit](end, undefined!, firstOfWeek);
  return Math.abs(
    // eslint-disable-next-line import/namespace
    (x as number) -
      // eslint-disable-next-line import/namespace
      (y as number)
  );
}

export function diff(dateA: any, dateB: any, unit: TimeUnit | any) {
  if (!unit || unit === "milliseconds") return Math.abs(+dateA - +dateB);

  // the .round() handles an edge case
  // with DST where the total won't be exact
  // since one day in the range may be shorter/longer by an hour
  return Math.round(
    Math.abs(
      +dates.startOf(dateA, unit) / MILLI[unit as keyof TimeUnit] -
        +dates.startOf(dateB, unit) / MILLI[unit as keyof TimeUnit]
    )
  );
}

export function total(date: Date, unit: any) {
  let ms = date.getTime(),
    div = 1;

  switch (unit) {
    case "week":
      div *= 7;
    case "day":
      div *= 24;
    case "hours":
      div *= 60;
    case "minutes":
      div *= 60;
    case "seconds":
      div *= 1000;
  }

  return ms / div;
}

export function week(date: any) {
  let d: Date | any = new Date(date);
  let e: Date | any = new Date(d.getFullYear(), 0, 1);
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  return Math.ceil(((d - e) / 8.64e7 + 1) / 7);
}

export function today() {
  return dates.startOf(new Date(), "day");
}

export function yesterday() {
  return dates.add(dates.startOf(new Date(), "day"), -1, "day");
}

export function tomorrow() {
  return dates.add(dates.startOf(new Date(), "day"), 1, "day");
}
