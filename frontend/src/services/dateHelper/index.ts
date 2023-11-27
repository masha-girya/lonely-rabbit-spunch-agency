export const formatDate = (date: string) => {
  const inputDate = new Date(date);
  // const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = inputDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  console.log(formattedDate); // Output: "Oct 31, 2023"

  return formattedDate;
};
