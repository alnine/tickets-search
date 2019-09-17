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
