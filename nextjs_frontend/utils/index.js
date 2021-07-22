// add leading zeros
export const pad = (num, len) => {
  return String(num).padStart(len, '0');
}

// check if URL is internal
export const isInternalURL = (href) => {
  try {
    const url = new URL(href, window.location.origin);
    return url.hostname === window.location.hostname;
  } catch {
    return false;
  }
};