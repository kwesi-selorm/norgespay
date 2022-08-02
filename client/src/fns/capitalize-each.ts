export function capitalizeEachWord(str: string) {
  str = str.trim();
  const stringArr = str.split(" ");
  const cappedArr = stringArr.map(
    (str) => str[0].toUpperCase() + str.substring(1, str.length).toLowerCase()
  );
  const cappedStr = cappedArr.join(" ");
  return cappedStr;
}
