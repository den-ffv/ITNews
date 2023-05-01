
export function minutReadFullPost(textRead){
  const averageWordsPerMinute = 1000;
  const wordsCount = textRead.props.children.length;
  const readingTimeInMinutes = Math.round(wordsCount / averageWordsPerMinute) + " min read";
  return readingTimeInMinutes
}
export function minutRead(textRead){
  const averageWordsPerMinute = 1000;
  const wordsCount = textRead.length;
  const readingTimeInMinutes = Math.round(wordsCount / averageWordsPerMinute) + " min read";
  return readingTimeInMinutes
}
