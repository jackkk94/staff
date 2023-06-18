export const addDays = (date: Date, count: number) =>
  new Date(new Date().setDate(new Date(date).getDate() - count));
