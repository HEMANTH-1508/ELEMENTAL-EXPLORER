function calculateScore() {
    const answers = {
        q1: "c",  // Sodium
        q2: "b",  // Bromine
        q3: "a",  // Argon
        q4: "b",  // Group 2
        q5: "b",  // Iron
        q6: "b",  // Non-reactive
        q7: "b",  // Group 2
        q8: "a",  // Boron
        q9: "a",  // Hydrogen
        q10: "a", // High reactivity
        q11: "d", // Helium
        q12: "d", // Aluminum
        q13: "c", // Fluorine
        q14: "d", // Group 18
        q15: "b"  // Silicon
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
