export const getDeviceType = () => {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/Android/i)) {
    return "Android";
  } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
    return "iOS";
  } else if (userAgent.match(/Windows/i)) {
    return "Windows";
  } else if (userAgent.match(/Macintosh/i)) {
    return "Mac";
  } else if (userAgent.match(/Linux/i)) {
    return "Linux";
  } else {
    return "Unknown";
  }
};
