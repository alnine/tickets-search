export function toCapitalize(str) {
  let result = "";
  for (let char = 0; char < str.length; char++) {
    if (char === 0) {
      result = str[char].toUpperCase();
      continue;
    }
    result += str[char];
  }

  return result;
}

export function getDateString(input) {
  const inputData = {
    day: parseInt(input.split(".")[0]),
    month: parseInt(input.split(".")[1]) - 1,
    year: 20 + input.split(".")[2]
  };
  const date = new Date(inputData.year, inputData.month, inputData.day);
  const day = date.getDate();
  const month = date.toLocaleString("ru", { month: "long" }).slice(0, 3);
  const weekDay = date.toLocaleString("ru", { weekday: "short" }).slice(0, 2);

  return `${day} ${month} ${inputData.year}, ${toCapitalize(weekDay)}`;
}
