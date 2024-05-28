let correct = 0;


function checkAnswers() {
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
    } ;

    // loop this
    if (q1 == "A") {
        correct++;
    }   
    else{
    var element = document.getElementById("quizForm");
     element.classList.add("wrong");
    }

    
    // let score = 0;
    // const form = document.getElementById('quizForm');
    // const formData = new FormData(form);

    // for (const [question, correctAnswer] of Object.entries(answers)) {
    //     if (formData.get(question) === correctAnswer) {
    //         score++;
    //     }
    // }

    const result = document.getElementById('result');
    result.style.display = 'block';
    result.textContent = `You scored ${correct} out of 10.`;
}

