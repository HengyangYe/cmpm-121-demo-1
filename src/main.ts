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

const counterDiv = document.createElement("div");
counterDiv.innerText = `${counter} ❤️`;
counterDiv.style.fontSize = "1.5rem";
counterDiv.style.marginTop = "20px";


button.addEventListener("click", () => {
  counter++;
  counterDiv.innerText = `${counter} ❤️`;
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

app.appendChild(button);
app.appendChild(counterDiv);