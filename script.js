const card = document.getElementById("card");
const particleLayer = document.getElementById("particle-layer");

let burstInterval;

card.addEventListener("click", () => {
  if (!card.classList.contains("open")) {
    card.classList.add("open");
    startBurst();
  }
});

function createBurst() {
  const colors = [
    "#ff0033","#ff8c00","#ffd400",
    "#00ff99","#00c6ff","#9d00ff",
    "#ff00aa","#39ff14"
  ];

  for (let i = 0; i < 45; i++) {
    const bubble = document.createElement("div");
    bubble.className = "burst";

    const size = Math.random() * 30 + 8;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.top = Math.random() * 100 + "vh";

    particleLayer.appendChild(bubble);

    setTimeout(() => bubble.remove(), 1200);
  }
}

function startBurst() {
  burstInterval = setInterval(createBurst, 80);
}