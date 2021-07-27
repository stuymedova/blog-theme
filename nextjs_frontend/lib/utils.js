// add leading zeros
export const pad = (num, len) => {
  return String(num).padStart(len, '0');
}