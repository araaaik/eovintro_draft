const root = document.documentElement;
const progressBar = document.querySelector(".progress-bar");
const buttons = document.querySelectorAll("[data-progress]");
const progressValue = document.querySelector("[data-progress-value]");

function setProgress(value) {
  root.style.setProperty("--progress", `${value}%`);
  progressBar.setAttribute("aria-valuenow", value);
  progressValue.textContent = `${value}%`;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.progress === String(value));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setProgress(button.dataset.progress));
});
