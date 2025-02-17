function submitQuiz() {
  const correctAnswers = {
    q1: "c",
    q2: "c",
    q3: ["a", "b"],
    q4: "b",
    q5: "c",
  };

  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  // Loop through each question
  for (let question in correctAnswers) {
    let selectedAnswers = document.querySelectorAll(
      `input[name="${question}"]:checked`
    );
    let selectedValues = Array.from(selectedAnswers).map(
      (input) => input.value
    );

    if (Array.isArray(correctAnswers[question])) {
      // For multiple correct answers
      if (
        selectedValues.length > 0 &&
        selectedValues.every((answer) =>
          correctAnswers[question].includes(answer)
        ) &&
        correctAnswers[question].every((correct) =>
          selectedValues.includes(correct)
        )
      ) {
        score++;
      }
    } else {
      // For single correct answers
      if (selectedValues[0] === correctAnswers[question]) {
        score++;
      }
    }
  }

  if (score === totalQuestions) {
    showCongratsPopup(); // Show the congratulations popup
  } else {
    showWrongPopup(); // Show the wrong answers popup
  }
}

function showCongratsPopup() {
  document.getElementById("congratsPopup").classList.remove("hidden");
}

function showWrongPopup() {
  document.getElementById("wrongPopup").classList.remove("hidden");
}

function closeWrongPopup() {
  document.getElementById("wrongPopup").classList.add("hidden");
}

function goToYes_No() {
  window.location.href = "be_my_valentine.html";
}
