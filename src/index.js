import "./styles/styles.css";

const app = document.getElementById("main");

const dynamicText = document.createElement("p");
dynamicText.innerText = "What's up Dude?";
dynamicText.classList.add(
  "transition-opacity",
  "duration-500",
  "my-20",
  "text-center",
  "text-2xl",
  "font-bold"
);

function modifyText(el) {
  const randomText = [
    "What's up Dude?",
    "Nothing to do, eh?",
    "Why even bothering?",
    "Wait! I've got nothing to say...",
    "Mama!!! I need some help over here!!!",
    // "Maa!! Yo, there's a strange cat outside!",
    // "I don't want it to start a fight with Lucy",
    // "Maaa!!! It looks like grandma the f@#%&ng thing!",
    // "Blink! Mothaf#$&aa!!",
  ];

  let index = Math.floor(Math.random() * randomText.length);

  el.classList.toggle("opacity-0");
  setTimeout(() => {
    el.innerText = randomText[index];
    el.classList.toggle("opacity-0");
  }, 250);
}

app.appendChild(dynamicText);
setInterval(() => {
  modifyText(dynamicText);
}, 3000);
