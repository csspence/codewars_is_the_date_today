/*
Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.
*/

const isToday = (date) => {
  let today = new Date();
  let todayString = today.toString().slice(0,14);
  let dateString = date.toString().slice(0,14);
  return dateString !== todayString ? false : true;
}