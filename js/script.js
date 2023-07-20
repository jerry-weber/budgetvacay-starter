let tripInfoButton = document.querySelector(".trip-info");
let dailyBudget = document.querySelector(".daily-budget");

let tripInfo = function () {
  let totalBudget = Number(prompt("What is your total budget for this trip? "));
  let accommodation = Number(prompt("What are your accommodation costs? "));
  let numDays = Number(prompt("How many days does your trip last? "));

  calculateDailyBudget(totalBudget, accommodation, numDays);
};

let calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  let daily = ((totalBudget - accommodation) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

tripInfoButton.addEventListener("click", tripInfo);
