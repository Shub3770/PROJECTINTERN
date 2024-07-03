const dayselement = document.querySelector(".days");
const hourselement = document.querySelector(".hours");
const minuteselement = document.querySelector(".minutes");
const secondselement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const countertime= document.querySelector(".countertimer")

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerfunction = () => {
  let present = new Date();
  let dd = String(present.getDate()).padStart(2, "0");
  let mm = String(present.getMonth() + 1).padStart(2, "0");
  let yy = present.getFullYear();

  let enterdate;
  do {
    enterdate = parseInt(prompt("Enter date (1-31): ").padStart(2, "0"));
  } while (!(enterdate >= 1 && enterdate <= 31));

  let enteryear;
  do {
    enteryear = parseInt(prompt("Enter year (current year or later): "));
    if (enteryear >= yy) {
      break; // Exit loop if valid year entered
    }
    alert("Please enter a valid year greater than or equal to the current year.");
  } while (true);

  let entermonth;
  do {
    entermonth = parseInt(prompt("Enter month (1-12): ").padStart(2, "0"));
  } while (!(entermonth >= 1 && entermonth <= 12));

  const targetdate = new Date(enteryear, entermonth - 1, enterdate);

 const timer= setInterval(() => {
    const today = new Date();
    const difference = targetdate - today;

    if (difference < 0) {
      // If target date is in the past
      clearInterval(timer);
      countertime.style.display="none";
      heading.innerText="countdown is over";
      return;
    }

    const leftday = Math.floor(difference / day);
    const lefthour = Math.floor((difference % day) / hour);
    const leftminute = Math.floor((difference % hour) / minute);
    const leftsecond = Math.floor((difference % minute) / second);

    dayselement.innerText = leftday;
    hourselement.innerText = lefthour;
    minuteselement.innerText = leftminute;
    secondselement.innerText = leftsecond;
  }, 1000); // Update every second
};

timerfunction();
