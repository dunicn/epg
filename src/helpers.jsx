import React from 'react'

const end = "2023-01-16T03:10:00+01:00"
const start = "2023-01-16T02:50:00+01:00"

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