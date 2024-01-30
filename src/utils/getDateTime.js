export function getCurrentDatetime() {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();

  // Extract individual components
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are zero-indexed
  const year = currentDate.getFullYear().toString();
  const hour = currentDate.getHours().toString().padStart(2, "0");
  const minute = currentDate.getMinutes().toString().padStart(2, "0");
  const second = currentDate.getSeconds().toString().padStart(2, "0");

  // Get day and month names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = dayNames[currentDate.getDay()];
  const monthName = monthNames[currentDate.getMonth()];

  // Create the datetime object with calculated values
  const datetime = {
    day,
    month,
    year,
    hour,
    minute,
    second,
    dayName,
    monthName,
  };

  return datetime;
}

// Example usage:
const currentDatetime = getCurrentDatetime();
console.log(currentDatetime);
