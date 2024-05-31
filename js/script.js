document.addEventListener('DOMContentLoaded', function() {
    
    const answers = ['A', 'A', 'C', 'D', 'B', 'B', 'A', 'B', 'A', 'C'];

    window.checkAnswers = function() {
        const form = document.getElementById('quizForm');
        const resultDiv = document.getElementById('result');
        let score = 0;

        answers.forEach((answer, index) => {
            const questionNumber = index + 1;
            const selectedOption = form.querySelector(`input[name="q${questionNumber}"]:checked`);

            if (selectedOption && selectedOption.value === answer) {
                score++;
            }
        });

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
