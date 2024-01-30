export const getBrowser = () => {
  const userAgent = navigator.userAgent;
  const isOpera = userAgent.indexOf("OPR") > -1;
  const isFirefox = userAgent.indexOf("Firefox") > -1;
  const isSafari = userAgent.indexOf("Safari") > -1;
  const isChrome = userAgent.indexOf("Chrome") > -1;
  const isEdge = userAgent.indexOf("Edg") > -1;
  const isIE =
    userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1;

  if (isOpera) {
    return "Opera";
  } else if (isFirefox) {
    return "Firefox";
  } else if (isSafari) {
    return "Safari";
  } else if (isChrome) {
    return "Chrome";
  } else if (isEdge) {
    return "Edge";
  } else if (isIE) {
    return "Internet Explorer";
  } else {
    return "Unknown";
  }
};
