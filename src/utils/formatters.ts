export const dateToForm = (date: string) => {
  const [year, month, day] = date.split("-");
  let d = new Date(Number(year), Number(month) - 1, Number(day));
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  return `${mo} ${da}, ${ye}`;
};
