function calculateScore() {
    const answers = {
        q1: "a",  // Magnesium
        q2: "c",  // Chlorine
        q3: "a",  // Nickel
        q4: "a",  // Cerium
        q5: "b",  // Cesium
        q6: "b",  // Argon
        q7: "a",  // Gold
        q8: "a",  // Aluminum
        q9: "a",  // Neptunium
        q10: "b", // Neon
        q11: "a", // Gold
        q12: "a", // Silicon
        q13: "a", // Potassium
        q14: "a", // Platinum
        q15: "a"  // Cerium
    };

    let score = 0;

    // Iterate through each question
    for (let i = 1; i <= 15; i++) {
        const options = document.querySelectorAll(`input[name="q${i}"]`);
        const correctAnswer = answers[`q${i}`];

        options.forEach(option => {
            const label = document.querySelector(`label[for="${option.id}"]`);
            
            // Clear previous styles
            label.classList.remove("correct", "wrong");

            if (option.checked) {
                if (option.value === correctAnswer) {
                    label.classList.add("correct"); // Turn green if correct
                    score++;
                } else {
                    label.classList.add("wrong"); // Turn red if incorrect
                }
            }

            // Mark the correct answer green
            if (option.value === correctAnswer) {
                label.classList.add("correct");
            }
        });
    }

    // Display the final score
    document.getElementById("result").textContent = `Your score: ${score}/15`;
}
