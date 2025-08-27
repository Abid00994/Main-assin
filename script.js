// Default values
let heartCount = 0;
let coins = 100;
let copyCount = 0;

// Selectors
const heartCountEl = document.getElementById("heartCount");
const coinsEl = document.getElementById("coins");
const copyCountEl = document.getElementById("copyCount");

// Functions to update counts
function increaseHeart() {
  heartCount++;
  heartCountEl.textContent = heartCount;
}

function decreaseCoins(amount = 20) {
  if (coins >= amount) {
    coins -= amount;
    coinsEl.textContent = coins;
    return true; // success
  } else {
    alert("Not enough coins!");
    return false; // failed
  }
}

function increaseCopy() {
  copyCount++;
  copyCountEl.textContent = copyCount;
}



// Demo: Click navbar to increase heart (for testing only)
document.querySelector(".navbar").addEventListener("click", () => {
  increaseHeart();
});


let heartCount1 = 0;
let coins1 = 100;
let copyCount1 = 0;

const heartCountEl2 = document.getElementById("heartCount");
const coinsEl2 = document.getElementById("coins");
const copyCountEl2 = document.getElementById("copyCount");

function increaseHeart() {
  heartCount++;
  heartCountEl.textContent = heartCount;
}

function decreaseCoins(amount = 20) {
  if (coins >= amount) {
    coins -= amount;
    coinsEl.textContent = coins;
  } else {
    alert("Not enough coins!");
  }
}

function increaseCopy() {
  copyCount++;
  copyCountEl.textContent = copyCount;
}

// Demo: Click hero section to test coin deduction
document.querySelector(".hero").addEventListener("click", () => {
  decreaseCoins();
});



// Copy hotline number
function copyNumber(number, service) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Copied ${service} (${number}) to clipboard!`);
    increaseCopy();
  });
}

// Make a call
function makeCall(service, number) {
  if (coins >= 20) {
    coins -= 20;
    coinsEl.textContent = coins;

    const now = new Date();
    const time = now.toLocaleTimeString();

    alert(`Calling ${service} at ${number}...`);
    
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    li.textContent = `${service} (${number}) - ${time}`;
    historyList.appendChild(li);
  } else {
    alert("Not enough coins to make a call!");
  }
}

// Clear history
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
