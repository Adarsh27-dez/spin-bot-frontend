const API_URL = "https://script.google.com/macros/s/AKfycbzxMzk8k-ZwTpXTpI00CtAln9p4Vi5bUGTbu-fR4jpufISE7Mi83V9SZ91NnYb_5qLh/exec"; // <-- Replace this with your actual Web App URL

async function spinWheel(userId, username) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ userId, username }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (data.status === "wait") {
      alert(⏳ You can spin again in ${data.hoursLeft} hour(s)!);
    } else if (data.status === "success") {
      alert(🎉 You won ${data.reward} coins! Your new balance is ${data.balance} coins.);
      document.getElementById("balance").innerText = data.balance;
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Network or server issue occurred.");
  }
}
