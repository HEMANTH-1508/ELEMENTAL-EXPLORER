function calculateScore() {
    const answers = {
        q1: "b",  // Lithium
        q2: "b",  // Chlorine
        q3: "a",  // 6
        q4: "a",  // Iron
        q5: "b",  // Copper
        q6: "b",  // Silicon
        q7: "b",  // Fluorine
        q8: "a",  // Neon
        q9: "a",  // Pb
        q10: "a", // Graphite
        q11: "a", // Mercury
        q12: "a", // Argon
        q13: "a", // Iodine
        q14: "a", // Oxygen
        q15: "a"  // Iron
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
