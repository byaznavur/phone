const correntDate = document.querySelector(".time");
correntDate.innerHTML = `${
  new Date().getHours() + ":" + new Date().getMinutes()
}`;
