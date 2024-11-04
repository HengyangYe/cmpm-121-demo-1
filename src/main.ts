import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Step 1
const gameName = "L❤️vely game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
header.style.textAlign = "center";
header.style.position = "flex";
header.style.top = "0";
header.style.width = "100%";
header.style.marginTop = "10px";

app.append(header);

// Step 2: Main Action Button
const mainActionButton = document.createElement("button");
mainActionButton.innerText = "😢 Number of Cries";
mainActionButton.style.fontSize = "1.5rem";
mainActionButton.style.fontWeight = "bold";
mainActionButton.style.padding = "20px 40px";
mainActionButton.style.marginTop = "60px"; // Ensures space at the top

let counter: number = 0;
let growthRate: number = 0;

// Main Counter Display
const mainCounterDisplay = document.createElement("div");
mainCounterDisplay.innerText = `${counter} Forgiveness points`;
mainCounterDisplay.style.fontSize = "1.5rem";
mainCounterDisplay.style.marginTop = "20px";

// Growth Rate Display
const growthRateDisplay = document.createElement("div");
growthRateDisplay.innerText = `Forgiveness Rate: ${growthRate.toFixed(2)} points/sec`;
growthRateDisplay.style.fontSize = "1.5rem";
growthRateDisplay.style.marginTop = "10px";

// Step 3 SetInterval for growth
setInterval(() => {
  counter += growthRate;
  mainCounterDisplay.innerText = `${counter.toFixed(2)} Forgiveness points`;
  updateButtonStates();
}, 1000);

mainActionButton.addEventListener("click", () => {
  counter++;
  mainCounterDisplay.innerText = `${counter} Forgiveness points`;
  updateButtonStates();
});

mainActionButton.addEventListener("mousedown", applyButtonPressEffect);
mainActionButton.addEventListener("mouseup", resetButtonEffect);
mainActionButton.addEventListener("mouseleave", resetButtonEffect);

function applyButtonPressEffect() {
  mainActionButton.style.transform = "scale(0.95)";
  mainActionButton.style.transition = "transform 0.1s ease";
}

function resetButtonEffect() {
  mainActionButton.style.transform = "scale(1)";
  mainActionButton.style.transition = "transform 0.1s ease";
}

// Step 4 requestAnimationFrame for counter update
let lastTime = performance.now();
function updateCounter(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000; // Calculate time difference in seconds
  lastTime = currentTime;
  counter += deltaTime;
  mainCounterDisplay.innerText = `${counter.toFixed(2)} Forgiveness points`;
  requestAnimationFrame(updateCounter);
}
requestAnimationFrame(updateCounter);

// Step 5,6,7 => Item Buttons and Counters
interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "🎧 Listen to excuses", cost: 10, rate: 0.1 },
  { name: "💔 Regain trust", cost: 100, rate: 2.0 },
  { name: "❤️ Save the relationship", cost: 1000, rate: 50 },
];

const itemCounters: { [key: string]: number } = {
  "🎧 Listen to excuses": 0,
  "💔 Regain trust": 0,
  "❤️ Save the relationship": 0,
};

availableItems.forEach((item) => {
  const itemButton = document.createElement("button");
  itemButton.innerText = `${item.name} (${item.cost.toFixed(2)} Forgiveness)`;
  itemButton.style.fontSize = "1.5rem";
  itemButton.style.marginTop = "10px";
  itemButton.disabled = true;

  const itemCounterDisplay = document.createElement("div");
  itemCounterDisplay.innerText = `${itemCounters[item.name]} ${item.name} purchased (${item.rate} Forgiveness/sec)`;
  itemCounterDisplay.style.fontSize = "1.5rem";
  itemCounterDisplay.style.marginTop = "5px";

  itemButton.addEventListener("click", () => {
    const cost = calculateNewPrice(item.cost, itemCounters[item.name]);
    if (counter >= cost) {
      counter -= cost;
      growthRate += item.rate;
      itemCounters[item.name]++;
      updateButtonStates();
      itemButton.innerText = `${item.name} (${calculateNewPrice(item.cost, itemCounters[item.name]).toFixed(2)} Forgiveness)`;
      itemCounterDisplay.innerText = `${itemCounters[item.name]} ${item.name} purchased (${item.rate} Forgiveness/sec)`;
    }
  });

  app.appendChild(itemButton);
  app.appendChild(itemCounterDisplay);
});

// Exponential growth function for pricing
function calculateNewPrice(basePrice: number, purchaseCount: number): number {
  return basePrice * Math.pow(1.15, purchaseCount);
}

// Update button and display states
function updateButtonStates() {
  availableItems.forEach((item) => {
    const cost = calculateNewPrice(item.cost, itemCounters[item.name]);
    const itemButton = Array.from(app.children).find((el) =>
      (el as HTMLButtonElement).innerText.includes(item.name),
    ) as HTMLButtonElement;

    itemButton.disabled = counter < cost;

    const itemCounterDisplay = Array.from(app.children).find((el) =>
      (el as HTMLDivElement).innerText.includes(`${item.name} purchased`),
    ) as HTMLDivElement;

    itemCounterDisplay.innerText = `${itemCounters[item.name]} ${item.name} purchased (${item.rate} Forgiveness/sec)`;
  });

  mainCounterDisplay.innerText = `${counter.toFixed(2)} Forgiveness points`;
  growthRateDisplay.innerText = `Forgiveness Rate: ${growthRate.toFixed(2)} points/sec`;
}

// Append main elements to the app
app.appendChild(mainActionButton);
app.appendChild(mainCounterDisplay);
app.appendChild(growthRateDisplay);
