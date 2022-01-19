export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const formattedDate =
    newDate.toLocaleString("default", { month: "long" }) +
    " " +
    newDate.getDate() +
    ", " +
    newDate.getFullYear();
  return formattedDate;
};
