function showSurvey() {
  /* Shows the survey form and hides the survey form rendering button to disable unneccessary requests.*/
  document.getElementById("survey-form").style.display = "block";
  document.getElementById("take-survey-button").style.display = "none";
}

/* Shows the confirmation image and hides the survey form to stop unneccessary feedback from being sent.*/
function showConfirmation() {
  document.getElementById("survey-form").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
}