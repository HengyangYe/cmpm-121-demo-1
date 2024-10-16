import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My L❤️vely game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerText = "❤️ A Normal Button ❤️";
button.style.padding = "20px 40px";
button.style.fontSize = "1.5rem";
button.style.fontWeight = "bold";
button.style.borderWidth = "5px";

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