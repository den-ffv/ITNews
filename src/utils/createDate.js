function addZeroInDate(date) {
  return date < 10 ? (date = "0" + date) : date;
}
const months = [
  "Січ.",
  "Лют.",
  "Берез.",
  "Квіт.",
  "Трав.",
  "Черв.",
  "Лип.",
  "Серп.",
  "Верес.",
  "Жовт.",
  "Листоп.",
  "Груд.",
];

export function getUserDate(t) {
  let postDate = new Date(t);
  const month = months[postDate.getMonth()];
  const day = addZeroInDate(postDate.getDate());
  const formattedDate = `${month}${day},${postDate.getFullYear()}`;
  // console.log(formattedDate); // "Березень 31, 2023"
  return formattedDate;
}
