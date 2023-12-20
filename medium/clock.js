const time = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = "AM";

  hours = hours.toString().padStart(2, "0"); // Pad hours with a leading zero if needed
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  console.log(`Machine time: ${hours}:${minutes}:${seconds}`);

  if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }

  console.log(
    `12 hour format time: ${hours}:${minutes}:${seconds} ${meridiem}`
  );
};
setInterval(time, 1000);
