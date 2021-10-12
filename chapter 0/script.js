const quizData = [
    {
        question: "CPU scheduling is the basis of ______",
        a: "multiprogramming operating systems",
        b: "larger memory sized systems",
        c: "multiprocessor systems",
        d: "none of the mentioned",
        correct: "a",
    },
    {
        question: "Where is the operating system placed in the memory?",
        a: "in the low memory",
        b: "either low or high memory (depending on the location of interrupt vector)",
        c: "in the high memory",
        d: "none of the mentioned",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which one of the following is not a real time operating system?",
        a: "RTLinux",
        b: "VxWorks",
        c: "QNX",
        d: "Palm OS",
        correct: "d",
    },
    {
        question: "What does OS X has?",
        a: "monolithic kernel with modules",
        b: "microkernel",
        c: "hybrid kernel",
        d: "monolithic kernel",
        correct: "c",
    },
    {
        question: "What is true about Machine Learning?",
        a: "Machine Learning (ML) is that field of computer science",
        b: "ML is a type of artificial intelligence that extract patterns out of raw data by using an algorithm or method",
        c: "The main focus of ML is to allow computer systems learn from experience without being explicitly programmed or human intervention.",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "ML is a field of AI consisting of learning algorithms that? ",
        a: " At executing some taska",
        b: "Improve their performance",
        c: "Over time with experience",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "Which of the following are ML methods?",
        a: "supervised Learning",
        b: "based on human supervision",
        c: "semi-reinforcement Learning",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "A model of language consists of the categories which does not include ______",
        a: "empirical units",
        b: "System Unit",
        c: "structural units.",
        d: "data units",
        correct: "b",
    },
    {
        question: "In Model based learning methods, an iterative process takes place on the ML models that are built based on various model parameters, called ?",
        a: "mini-batches",
        b: "optimizedparameters",
        c: "superparameters",
        d: "hyperparameters",
        correct: "d",
    },
    {
        question: "Who is the inventor of AI?",
        a: "Geoffrey Hinton",
        b: "Andrew Ng",
        c: "John McCarthy",
        d: "Jürgen Schmidhuber",
        correct: "c",
    },
    {
        question: "Which of the following is the branch of AI?",
        a: "Machine Learning",
        b: "Cyber forensics",
        c: "Full-Stack Developer",
        d: "Network Design",
        correct: "a",
    },
    {
        question: "____ is the goal of artificial intelligence.",
        a: "To solve artificial problems",
        b: "To extract scientific causes",
        c: "To explain various sorts of intelligence",
        d: "To solve real-world problems",
        correct: "c",
    },
    {
        question: "Which of the following is an application of AI?",
        a: "It helps to exploits vulnerabilities to secure the firm",
        b: "Language understanding and problem-solving (Text analytics and NLP)",
        c: "Easy to create a website",
        d: "It helps to deploy applications on the cloud",
        correct: "b",
    },
    {
        question: "Which of the following is a component of AI?",
        a: "Learning",
        b: "Training",
        c: "Designing",
        d: "Puzzling",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answerEl
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
