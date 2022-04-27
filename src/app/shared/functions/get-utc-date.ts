export function getUtcDate(localDate: Date): Date {
  const localTime: number = localDate.getTime();
  const offset: number = localDate.getTimezoneOffset() * 60 * 1000;
  const utcTime: number = localTime + offset;
  return new Date(utcTime);
}
