function getColor() {
  let color = "#";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

let intervalId;
let startChangingBg = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = getColor();
  }
};
let stopChangingBg = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document
  .getElementById("start")
  .addEventListener("click", startChangingBg, false);
document
  .getElementById("stop")
  .addEventListener("click", stopChangingBg, false);
