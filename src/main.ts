import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Step 1
const gameName = "My L❤️vely game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 2
const button = document.createElement("button");
button.innerText = "❤️ A Normal Button ❤️";
button.style.fontSize = "1.5rem";
button.style.fontWeight = "bold";
button.style.padding = "20px 40px";

let counter: number = 0;
let growthRate: number = 0;

// Step 3 SetInterval
setInterval(() => {
  counter += growthRate; // Growth
  counterDiv.innerText = `${counter.toFixed(2)} ❤️`;
  updateButtonStates();
}, 1000);

button.addEventListener("click", () => {
  counter++;
  counterDiv.innerText = `${counter} ❤️`;
  updateButtonStates();
});

button.addEventListener("mousedown", () => {
  button.style.transform = "scale(0.95)";
  button.style.transition = "transform 0.1s ease";
});

button.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
  button.style.transition = "transform 0.1s ease";
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)";
});

let lastTime = performance.now();

// Step 4 requestAnimationFrame
function updateCounter(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000; // Calculate time difference in seconds
  lastTime = currentTime;
  counter += deltaTime; // Increment counter based on elapsed time
  counterDiv.innerText = `${counter.toFixed(2)} ❤️`;
  requestAnimationFrame(updateCounter);
}

requestAnimationFrame(updateCounter);

const counterDiv = document.createElement("div");
counterDiv.innerText = `${counter} ❤️`;
counterDiv.style.fontSize = "1.5rem";
counterDiv.style.marginTop = "20px";


// Step 5,6,7 =>
// Display the growth rate
const growthRateDiv = document.createElement("div");
growthRateDiv.innerText = `Growth Rate: ${growthRate.toFixed(2)} units/sec`;
growthRateDiv.style.fontSize = "1.5rem";
growthRateDiv.style.marginTop = "10px";

// Price increase factor
let upgradeCounterA: number = 0;
let upgradeCounterB: number = 0;
let upgradeCounterC: number = 0;

const basePriceA = 10;
const basePriceB = 100;
const basePriceC = 1000;
const priceIncreaseFactor = 1.15;

// Calculate new price
function calculateNewPrice(basePrice: number, purchaseCount: number): number {
  return basePrice * Math.pow(priceIncreaseFactor, purchaseCount);
}

const upgradeAButton = document.createElement("button");
upgradeAButton.innerText = `🤡 Purchase Upgrade A (${basePriceA.toFixed(2)} ❤️)`;
upgradeAButton.style.fontSize = "1.5rem";
upgradeAButton.style.marginTop = "10px";
upgradeAButton.disabled = true;

const upgradeBButton = document.createElement("button");
upgradeBButton.innerText = `🤡 Purchase Upgrade B (${basePriceB.toFixed(2)} ❤️)`;
upgradeBButton.style.fontSize = "1.5rem";
upgradeBButton.style.marginTop = "10px";
upgradeBButton.disabled = true;

const upgradeCButton = document.createElement("button");
upgradeCButton.innerText = `🤡 Purchase Upgrade C (${basePriceC.toFixed(2)} ❤️)`;
upgradeCButton.style.fontSize = "1.5rem";
upgradeCButton.style.marginTop = "10px";
upgradeCButton.disabled = true;

const upgradeCounterADiv = document.createElement("div");
upgradeCounterADiv.innerText = `${upgradeCounterA} Upgrade A purchased (0.1 units/sec)`;
upgradeCounterADiv.style.fontSize = "1.5rem";
upgradeCounterADiv.style.marginTop = "5px";

const upgradeCounterBDiv = document.createElement("div");
upgradeCounterBDiv.innerText = `${upgradeCounterB} Upgrade B purchased (2.0 units/sec)`;
upgradeCounterBDiv.style.fontSize = "1.5rem";
upgradeCounterBDiv.style.marginTop = "5px";

const upgradeCounterCDiv = document.createElement("div");
upgradeCounterCDiv.innerText = `${upgradeCounterC} Upgrade C purchased (50 units/sec)`;
upgradeCounterCDiv.style.fontSize = "1.5rem";
upgradeCounterCDiv.style.marginTop = "5px";

// Upgrade A
upgradeAButton.addEventListener("click", () => {
  if (counter >= calculateNewPrice(basePriceA, upgradeCounterA)) {
    counter -= calculateNewPrice(basePriceA, upgradeCounterA);
    growthRate += 0.1;
    upgradeCounterA++;
    updateButtonStates();
    upgradeAButton.innerText = `🤡 Purchase Upgrade A (${calculateNewPrice(basePriceA, upgradeCounterA).toFixed(2)} ❤️)`;
    upgradeCounterADiv.innerText = `${upgradeCounterA} Upgrade A purchased`;
  }
});

// Upgrade B
upgradeBButton.addEventListener("click", () => {
  if (counter >= calculateNewPrice(basePriceB, upgradeCounterB)) {
    counter -= calculateNewPrice(basePriceB, upgradeCounterB);
    growthRate += 2.0;
    upgradeCounterB++;
    updateButtonStates();
    upgradeBButton.innerText = `🤡 Purchase Upgrade B (${calculateNewPrice(basePriceB, upgradeCounterB).toFixed(2)} ❤️)`;
    upgradeCounterBDiv.innerText = `${upgradeCounterB} Upgrade B purchased`;
  }
});

// Upgrade C
upgradeCButton.addEventListener("click", () => {
  if (counter >= calculateNewPrice(basePriceC, upgradeCounterC)) {
    counter -= calculateNewPrice(basePriceC, upgradeCounterC);
    growthRate += 50;
    upgradeCounterC++;
    updateButtonStates();
    upgradeCButton.innerText = `🤡 Purchase Upgrade C (${calculateNewPrice(basePriceC, upgradeCounterC).toFixed(2)} ❤️)`;
    upgradeCounterCDiv.innerText = `${upgradeCounterC} Upgrade C purchased`;
  }
});

// Update button states based on current counter and price
function updateButtonStates() {
  upgradeAButton.disabled = counter < calculateNewPrice(basePriceA, upgradeCounterA);
  upgradeBButton.disabled = counter < calculateNewPrice(basePriceB, upgradeCounterB);
  upgradeCButton.disabled = counter < calculateNewPrice(basePriceC, upgradeCounterC);

  counterDiv.innerText = `${counter.toFixed(2)} ❤️`;
  growthRateDiv.innerText = `Growth Rate: ${growthRate.toFixed(2)} units/sec`;
}

button.addEventListener("click", () => {
  counter++;
  counterDiv.innerText = `${counter} ❤️`;
  updateButtonStates();
});

button.addEventListener("mousedown", () => {
  button.style.transform = "scale(0.95)";
  button.style.transition = "transform 0.1s ease";
});

button.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
  button.style.transition = "transform 0.1s ease";
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)";
});

// Append elements
app.appendChild(button);
app.appendChild(counterDiv);
app.appendChild(growthRateDiv);
app.appendChild(upgradeAButton);
app.appendChild(upgradeCounterADiv);
app.appendChild(upgradeBButton);
app.appendChild(upgradeCounterBDiv);
app.appendChild(upgradeCButton);
app.appendChild(upgradeCounterCDiv);
