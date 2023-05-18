function addZeroInDate(date) {
  return date < 10 ? (date = "0" + date) : date;
}
const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

export function getUserDate(t) {
  let postDate = new Date(t);
  const month = months[postDate.getMonth()];
  const day = addZeroInDate(postDate.getDate());
  const formattedDate = `${day} ${month}, ${postDate.getFullYear()}`;
  // console.log(formattedDate); // "Березень 31, 2023"
  return formattedDate;
}
