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

// Step 2
const button = document.createElement("button");
button.innerText = "😢 Number of Cries";
button.style.fontSize = "1.5rem";
button.style.fontWeight = "bold";
button.style.padding = "20px 40px";
button.style.marginTop = "60px"; // Makesure space at top

let counter: number = 0;
let growthRate: number = 0;

// Step 3 SetInterval
setInterval(() => {
  counter += growthRate; // Growth
  counterDiv.innerText = `${counter.toFixed(2)} Forgiveness points`;
  updateButtonStates();
}, 1000);

button.addEventListener("click", () => {
  counter++;
  counterDiv.innerText = `${counter} Forgiveness points`;
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
  counterDiv.innerText = `${counter.toFixed(2)} Forgiveness points`;
  requestAnimationFrame(updateCounter);
}

requestAnimationFrame(updateCounter);

const counterDiv = document.createElement("div");
counterDiv.innerText = `${counter} Forgiveness points`;
counterDiv.style.fontSize = "1.5rem";
counterDiv.style.marginTop = "20px";

// Step 5,6,7 =>
const growthRateDiv = document.createElement("div");
growthRateDiv.innerText = `Forgiveness Rate: ${growthRate.toFixed(2)} points/sec`;
growthRateDiv.style.fontSize = "1.5rem";
growthRateDiv.style.marginTop = "10px";

// Step 9 Data-driven design
interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "🎧 Listen to excuses", cost: 10, rate: 0.1 },
  { name: "💔 Regain trust", cost: 100, rate: 2.0 },
  { name: "❤️ Save the relationship", cost: 1000, rate: 50 }
];

const itemCounters: { [key: string]: number } = {
  "🎧 Listen to excuses": 0,
  "💔 Regain trust": 0,
  "❤️ Save the relationship": 0
};

// Use availableItems array for loops
availableItems.forEach((item) => {
  const button = document.createElement("button");
  button.innerText = `${item.name} (${item.cost.toFixed(2)} Forgiveness)`;
  button.style.fontSize = "1.5rem";
  button.style.marginTop = "10px";
  button.disabled = true;

  const counterDiv = document.createElement("div");
  counterDiv.innerText = `${itemCounters[item.name]} ${item.name} purchased (${item.rate} Forgiveness/sec)`;
  counterDiv.style.fontSize = "1.5rem";
  counterDiv.style.marginTop = "5px";

  // Click button to purchased upgraded
  button.addEventListener("click", () => {
    const cost = calculateNewPrice(item.cost, itemCounters[item.name]);
    if (counter >= cost) {
      counter -= cost;
      growthRate += item.rate;
      itemCounters[item.name]++;
      updateButtonStates();
      button.innerText = `${item.name} (${calculateNewPrice(item.cost, itemCounters[item.name]).toFixed(2)} Forgiveness)`;
      counterDiv.innerText = `${itemCounters[item.name]} ${item.name} purchased (${item.rate} Forgiveness/sec)`;
    }
  });

  // Append elements
  app.appendChild(button);
  app.appendChild(counterDiv);
});

// Exponential_grow
function calculateNewPrice(basePrice: number, purchaseCount: number): number {
  return basePrice * Math.pow(1.15, purchaseCount);
}

// Update all button state
function updateButtonStates() {
  availableItems.forEach((item) => {
    const cost = calculateNewPrice(item.cost, itemCounters[item.name]);
    const button = Array.from(app.children).find(
      (el) => (el as HTMLButtonElement).innerText.includes(item.name)
    ) as HTMLButtonElement;

    button.disabled = counter < cost;

    // Updated main counter and growth rate display
    const counterDiv = Array.from(app.children).find(
      (el) => (el as HTMLDivElement).innerText.includes(`${item.name} purchased`)
    ) as HTMLDivElement;

    counterDiv.innerText = `${itemCounters[item.name]} ${item.name} purchased (${item.rate} Forgiveness/sec)`;
  });

  counterDiv.innerText = `${counter.toFixed(2)} Forgiveness points`;
  growthRateDiv.innerText = `Forgiveness Rate: ${growthRate.toFixed(2)} points/sec`;
}

// Append elements
app.appendChild(button);
app.appendChild(counterDiv);
app.appendChild(growthRateDiv);
