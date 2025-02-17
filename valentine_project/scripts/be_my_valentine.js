let meow_bad_audio = [
  new Audio("sounds/meow_bad/meow_bad1.mp3"),
  new Audio("sounds/meow_bad/meow_bad2.mp3"),
  new Audio("sounds/meow_bad/meow_bad3.mp3"),
  new Audio("sounds/meow_bad/meow_bad4.mp3"),
  new Audio("sounds/meow_bad/meow_bad5.mp3"),
];

let meow_good_audio = [
  new Audio("sounds/meow_good/meow_good1.mp3"),
  new Audio("sounds/meow_good/meow_good2.mp3"),
  new Audio("sounds/meow_good/meow_good3.mp3"),
  new Audio("sounds/meow_good/meow_good4.mp3"),
  new Audio("sounds/meow_good/meow_good5.mp3"),
];

let final_audio = new Audio("sounds/final.mp3");

function playFinalAudio() {
  meow_good_audio.currentTime = 0;
  final_audio.currentTime = 0;
  final_audio.play();
}

let meow_count = 0;
let noButton = document.querySelector(".no");
noButton.addEventListener("mouseover", function () {
  let randomAudio = Math.floor(Math.random() * meow_bad_audio.length);
  meow_bad_audio[randomAudio].currentTime = 0;
  meow_bad_audio[randomAudio].play();
});

let yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  playFinalAudio();
  showLove();
};

yesButton.addEventListener("mouseover", function () {
  let randomAudio = Math.floor(Math.random() * meow_good_audio.length);
  meow_good_audio[randomAudio].currentTime = 0;
  meow_good_audio[randomAudio].play();
});

function showLove() {
  document.querySelector(".question").innerText = "💖💖Love youu 💖💖";
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("hearts").classList.remove("hidden");
  startHeartAnimation();
}

function replaceNoWithYes() {
  setTimeout(function () {
    alert(
      "Really? Were you seriously about to choose 'No,' you little troublemaker? Try saying 'No' now, you brave soul! 🤬😡"
    );
  }, 100);

  // Find the "No" button
  let noButton = document.querySelector(".no");
  // Create a new "Yes" button identical to the original
  let newYesButton = document.createElement("button");
  newYesButton.className = "yes";
  newYesButton.innerHTML = "Yes 🤩";
  newYesButton.onclick = function () {
    playFinalAudio();
    showLove();
  };

  newYesButton.addEventListener("mouseover", function () {
    if (meow_count > 0) playRandomGoodMeow();
    else meow_count++;
  });

  // Replace the "No" button with the new "Yes" button
  noButton.parentNode.replaceChild(newYesButton, noButton);
}
function playRandomGoodMeow() {
  let randomAudio = Math.floor(Math.random() * meow_good_audio.length);
  meow_good_audio[randomAudio].currentTime = 0;
  meow_good_audio[randomAudio].play();
}

function startHeartAnimation() {
  let hearts = document.createElement("div");
  hearts.classList.add("hearts");
  document.body.appendChild(hearts);
  setInterval(() => {
    let heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    heart.style.opacity = Math.random();
    heart.style.animation = "fall 2s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }, 200);
}
