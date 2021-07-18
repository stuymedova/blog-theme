// add leading zeros (used in a blog post index)
export function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
}