/* script.js */

document.getElementById('calculate-btn').addEventListener('click', function() {
  let totalScore = 0;
  // List of question names
  const questions = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];
  
  // Loop through each question to sum the selected radio value
  for (let i = 0; i < questions.length; i++) {
    const radios = document.getElementsByName(questions[i]);
    let answered = false;
    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        totalScore += parseInt(radios[j].value, 10);
        answered = true;
        break;
      }
    }
    // If any question is unanswered, alert the user and stop calculation.
    if (!answered) {
      alert("Please answer all questions before calculating your risk.");
      return;
    }
  }
  
  // Determine vulnerability level and corresponding description
  let vulnerabilityLevel = '';
  let description = '';
  
  if (totalScore >= 0 && totalScore <= 3) {
    vulnerabilityLevel = 'Low Vulnerability';
    description = 'Strong security practices in place; minor adjustments may further enhance security.';
  } else if (totalScore >= 4 && totalScore <= 6) {
    vulnerabilityLevel = 'Moderate Vulnerability';
    description = 'Good practices, but there are noticeable gaps that could expose the user to threats.';
  } else if (totalScore >= 7 && totalScore <= 10) {
    vulnerabilityLevel = 'High Vulnerability';
    description = 'Poor security practices leave the user exposed to significant risks; immediate action required.';
  } else if (totalScore >= 11 && totalScore <= 15) {
    vulnerabilityLevel = 'Extreme Vulnerability';
    description = 'Extremely poor security habits; high likelihood of compromise; urgent measures needed.';
  }
  
  // Display the result in the designated div
  document.getElementById('result').innerHTML = `
    <p><strong>Total Score:</strong> ${totalScore}</p>
    <p><strong>Vulnerability Level:</strong> ${vulnerabilityLevel}</p>
    <p>${description}</p>
  `;
});
