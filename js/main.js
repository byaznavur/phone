const timeCount = document.querySelector(".time-count");
const batteryCount = document.querySelector(".battery");
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  timeCount.textContent = `${hours}:${minutes}`;
}

// Har bir minutda yangilash
setInterval(updateTime, 1000);

// Dastlabki marta ishga tushirish
updateTime();

let battery = navigator.getBattery();

battery.then((batteryObject) => {
  console.log(batteryObject.level);
  batteryCount.textContent = `${Math.floor(batteryObject.level * 100)}%`;
});
