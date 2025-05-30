let balance = 0;
const resultText = document.getElementById("result");
const balanceText = document.getElementById("balance");
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinButton");

spinBtn.addEventListener("click", () => {
  const rotation = Math.floor(3600 + Math.random() * 360); // random spin
  wheel.style.transform = rotate(${rotation}deg);

  spinBtn.disabled = true;
  resultText.innerText = "Spinning...";

  setTimeout(() => {
    const reward = Math.floor(Math.random() * 100) + 1;
    balance += reward;
    balanceText.innerText = balance;
    resultText.innerText = 🎉 You won ${reward} coins!;
    spinBtn.disabled = false;
  }, 3100);
});