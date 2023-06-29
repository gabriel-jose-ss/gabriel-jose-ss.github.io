const noButton = document.getElementById("no-button");
const memeImage = document.getElementById("meme-image");

noButton.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

document.getElementById("yes-button").addEventListener("click", () => {
  document.querySelector(".title").style.display = "none";
  document.querySelector(".button-container").style.display = "none";
  memeImage.classList.remove("hidden");
});
