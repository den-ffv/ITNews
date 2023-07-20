function addZeroInDate(date) {
  return date < 10 ? (date = "0" + date) : date;
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getUserDate(t) {
  let postDate = new Date(t);
  const month = months[postDate.getMonth()];
  const day = addZeroInDate(postDate.getDate());
  const formattedDate = `${day} ${month}, ${postDate.getFullYear()}`;
  return formattedDate;
}
