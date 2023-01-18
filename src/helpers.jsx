
const doDoubleDigStr = (n) => {
  return n < 10 ? "0" + n : String(n);
};

export const getMomentInDay = (date) => {
  const hourHundreds = date.getHours() === 0 ? "" : String(date.getHours());
  const minuteTenth = (date.getMinutes() * 5) / 3;
  const minToString = doDoubleDigStr(minuteTenth);

  return Number(hourHundreds + minToString);
}

export const formatShowTime = (start) => {
  const formatedDate = getMomentInDay(new Date(start))
  return formatedDate
}

export const extractTime = (time) => {
  const min = doDoubleDigStr(new Date(time).getMinutes());
  const hour = doDoubleDigStr(new Date(time).getHours());

  return hour + ":" + min;
};