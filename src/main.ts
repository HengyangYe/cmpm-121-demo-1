import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My L❤️vely game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerText = "❤️ A Normal Button ❤️";
button.style.fontSize = "1.5rem";
button.style.fontWeight = "bold";
button.style.padding = "20px 40px";

let counter: number = 0;
let growthRate: number = 0;

setInterval(() => {
  counter += growthRate; // Growth 
  counterDiv.innerText = `${counter.toFixed(2)} ❤️`;
  if (counter >= 10) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }
}, 1000);

let lastTime = performance.now();

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

button.addEventListener("click", () => {
  counter++;
  counterDiv.innerText = `${counter} ❤️`;
  if (counter >= 10) {
    upgradeButton.disabled = false;
  }
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

let upgradeCounter: number = 0;

const upgradeButton = document.createElement("button");
upgradeButton.innerText = "🤡 Purchase Upgrade ( 10 ❤️ )";
upgradeButton.style.fontSize = "1.5rem";
upgradeButton.style.marginTop = "20px";
upgradeButton.disabled = true;

const upgradeCounterDiv = document.createElement("div");
upgradeCounterDiv.innerText = `${upgradeCounter} 🤡`;
upgradeCounterDiv.style.fontSize = "1.5rem";
upgradeCounterDiv.style.marginTop = "10px";

upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10;
    growthRate++;
    counterDiv.innerText = `${counter.toFixed(2)} ❤️`;
    upgradeCounter++;
    upgradeCounterDiv.innerText = `${upgradeCounter} 🤡`;
  }
});

app.appendChild(button);
app.appendChild(counterDiv);
app.appendChild(upgradeButton);
app.appendChild(upgradeCounterDiv);