document.getElementById("spinBtn").addEventListener("click", async function () {
  const userId = "user123";  // Replace with dynamic user if needed
  const res = await fetch("https://script.google.com/macros/s/AKfycbwk4CzlKt9vi2B7XHvUUPYrYm0eIK10bN4R3UifLWIBnR_CNovl6SxzdooeiIc0zeBv/exec", {
    method: "POST",
    body: JSON.stringify({ userId: userId }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  const coins = data.coins;
  document.getElementById("balance").innerText = 🔥 Balance: ${coins} coins;
});
