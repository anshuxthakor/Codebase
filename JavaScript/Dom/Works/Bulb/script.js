const bulb = document.querySelector(".bulb");
const button = document.querySelector(".btn");

// Toggle returns true or false
button.addEventListener("click", () => {
  if (bulb.classList.toggle("on")) {
    button.textContent = "Off";
  } else {
    button.textContent = "On";
  }
});