document.addEventListener('DOMContentLoaded', function() {
    const answers = ['A', 'A', 'C', 'D', 'B', 'B', 'A', 'B', 'A', 'C'];

    window.checkAnswers = function() {
        const form = document.getElementById('quizForm');
        const resultDiv = document.getElementById('result');
        let score = 0;

        for (let index = 0; index < answers.length; index++) {
            const questionNumber = index + 1;
            const selectedOption = form.querySelector(`input[name="q${questionNumber}"]:checked`);
            const questionDiv = form.querySelector(`input[name="q${questionNumber}"]:checked`)?.parentElement.parentElement;

            if (selectedOption) {
                if (selectedOption.value === answers[index]) {
                    score++;
                    questionDiv.classList.add('correct');
                    questionDiv.classList.remove('wrong');
                } else {
                    questionDiv.classList.add('wrong');
                    questionDiv.classList.remove('correct');
                }
            } else {
                if (questionDiv) {
                    questionDiv.classList.add('wrong');
                    questionDiv.classList.remove('correct');
                }
            }
        }

        const totalQuestions = answers.length;
        const scorePercentage = (score / totalQuestions) * 100;

        resultDiv.innerHTML = `<h3>Your Score: ${score} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%)</h3>`;

        if (scorePercentage >= 70) {
            document.querySelector('.avatar1 img').style.display = 'block';
            document.querySelector('.avatar img').style.display = 'none';
        } else {
            document.querySelector('.avatar img').style.display = 'block';
            document.querySelector('.avatar1 img').style.display = 'none';
        }
    };
});
    