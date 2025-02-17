function goToQuiz() {
  window.location.href = "quiz.html";
}

function showPopUp() {
  // Show the popup
  document.getElementById("popup").classList.remove("hidden");

  // Blur the background
  document.querySelector(".background").classList.add("blur");
}
