function checkAnswers() {
    let correct = 0; // Declare correct variable within the function

    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'C',
        q4: 'D',
        q5: 'B',
        q6: 'B',
        q7: 'A',
        q8: 'B',
        q9: 'A',
        q10: 'C'
    };

    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = formData.get(question);
        const questionElement = document.querySelector(`[name="${question}"]:checked`);

        if (questionElement) {
            const containerElement = questionElement.closest('.question');

            if (containerElement) {
                if (userAnswer === correctAnswer) {
                    correct++;
                    containerElement.classList.remove('wrong');
                    containerElement.classList.add('correct');
                } else {
                    containerElement.classList.remove('correct');
                    containerElement.classList.add('wrong');
                }
            }
        }
    }

    const result = document.getElementById('result');
    result.style.display = 'block';
    result.textContent = `You scored ${correct} out of 10.`;
}
