const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
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
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question:
      "We ________ a lovely three weeks in the south of Spain last year",
    a: "took",
    b: "did",
    c: "spent",
    d: "passed",
    correct: "c",
  },
  {
    question: "Please don't forget to message me when you ________ home",
    a: "will get",
    b: "get",
    c: "are going to get",
    d: "are getting",
    correct: "b",
  },

  {
    question: "There are ___ levels of heading in HTML",
    a: "Three",
    b: "Fou",
    c: "Fiv",
    d: "Six",
    correct: "d",
  },
  {
    question:
      "The decimal range of network address for class B network is between",
    a: "127-190",
    b: "128-190",
    c: "128-191",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What is the Full Form of the SPX?",
    a: "Sequenced Packet Exchange",
    b: "Sequence Packet Exchange",
    c: "Sequenced Packets Exchange",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the Full Form of the IMAP?",
    a: "Internet Mail Access Protocol",
    b: "Internet Mails Access Protocol",
    c: "Internet Memo Access Protocol",
    d: "All of the Above",
    correct: "a",
  },
  {
    question:
      "The ___ at the bottom of your window provides you the status of how much percentage of the Web Page",
    a: "Program Indicator",
    b: "Program Director",
    c: "Progress Indicator",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "The Major components of the Web browser are ___",
    a: "Menu bar",
    b: "Toolbar",
    c: "Location",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: " ___ is widely known as the father of the World Wide Web",
    a: "Tom burners-lee",
    b: " Tom bruce-lee",
    c: "Tim bruce-lee",
    d: "Tim Berners-Lee",
    correct: "d",
  },
 
  {
    question: "The leading bit pattern for the class c network is",
    a: "0",
    b: "10",
    c: "101",
    d: " None of the above",
    correct: "d",
  },
  {
    question: "URL is an acronym for",
    a: "Universal research locator",
    b: "Universal resource locator",
    c: "Uniform research locator",
    d: "Uniform resource locator",
    correct: "d",
  },
  {
    question:"The program which can be used to make your computer act as a terminal is",
    a: "Terminal simulation program",
    b: "Terminal emulation program",
    c: "Terminal emulsion program",
    d: "None of the above",
    correct: "b",
  },
  {
    question:"We should view your web page differently",
    a: " Operating systems, Screen Sizes, resolutions",
    b: "Screen Sizes",
    c: " Operating systems",
    d: "None of the above",
    correct: "a",
  },
  {
    question:" The different ways of Creating Graphics for the Web are.",
    a: "Graphics packages",
    b: "Digital cameras",
    c: "Graphics packages, Digital cameras, Scanned",
    d: "None of the above",
    correct: "c",
  },
  {
    question:"We should Check whether your website performs properly on the following operating systems:",
    a: "Windows Only.",
    b: "UNIX, Macintosh",
    c: "UNIX, Macintosh, MS Windows, Linux",
    d: " None of the above",
    correct: "c",
  },
  {
    question:"Various INPUT types are",
    a: "CHECKBOX, RADIO",
    b: "CHECKBOX, HIDDEN",
    c: "CHECKBOX, RADIO, HIDDEN",
    d: " None of the above",
    correct: "d",
  },
  {
    question:"The commonly used text editors are:",
    a: "WordPad",
    b: "WordPad, Notepad",
    c: "WordPad, Write pad, Notepad",
    d: "None of the above",
    correct: "c",
  },
  {
    question:"For a particular font its size attribute can be an absolute value ranging from",
    a: "1-10",
    b: " 1-9",
    c: " 1-8",
    d: " 1-7",
    correct: "d",
  },
  {
    question:"The following is best suitable for remote administration of a computer.",
    a: "WAIS",
    b: "Browsers",
    c: " Telnet",
    d: "None of the above",
    correct: "c",
  },
  {
    question:"The purpose of markup is to",
    a: " Add hypertext capabilities",
    b: "Enhance the document",
    c: " Both (a) & (b)",
    d: " None of the above",
    correct: "c",
  },
  {
    question:"HTML is the method where ordinary text can be converted into",
    a: " ASCII Text",
    b: "EBCDIC Text",
    c: "Hypertext",
    d: "None of the above",
    correct: "c",
  },
  {
    question:"The ___ element can be used to identify your HTML file to the outside world",
    a: "Title",
    b: "Body",
    c: "Head",
    d: "None of the above",
    correct: "a",
  },
  {
    question:"The tag to give visual division between sections of the page and which causes the browser to draw an embossed line is",
    a: "<HL>",
    b: "<HR>",
    c: "<UR>",
    d: "None of the above",
    correct: "b",
  },
  {
    question:" Which one of the following tags are used to insert graphics on the web page?",
    a: "<IMAGE>",
    b: "<IMAGES>",
    c: "<IMG>",
    d: "<GRAPHICS>",
    correct: "c",
  },
  {
    question:"Which of the following is false?",
    a: "TYPE and NAME are the attributes of the INPUT tag",
    b: "SCR is a must if UNPUT TYPE is an image",
    c: "POST allows the content of the forms to be passed one element at a time",
    d: "GET allows accepting one element at a time",
    correct: "d",
  },
  {
    question:"HTTP, SSL are-",
    a: "Internet service",
    b: " Internet domains",
    c: "Internet protocol",
    d: "Window server",
    correct: "b",
  },
  {
    question:" A ___ is an identifier that denotes a storage location",
    a: " Constant",
    b: "Reference type",
    c: "Variable",
    d: " Object",
    correct: "c",
  },
  {
    question:"An ___ is a symbol that tells the computer to perform certain mathematical or logical manipulations.",
    a: "Operator",
    b: "Expression",
    c: "Condition",
    d: "Logic",
    correct: "a",
  },
  {
    question:"___ causes the loop to continue with the next iteration after skipping any statements in between.",
    a: "Loop",
    b: " Exit",
    c: "Break",
    d: "Continue",
    correct: "d",
  },
  {
    question:"An ___ is a group of contiguous or related data items that share a common name.",
    a: "Operator",
    b: "Integer",
    c: "Exponential",
    d: "Array",
    correct: "d",
  },
  {
    question:"Multidimensional arrays are sometimes called ___ Arrays.",
    a: "Square",
    b: "Triangular",
    c: "Rectangular",
    d: "Cube",
    correct: "c",
  },
  {
    question:"The formal parameter list is always enclosed in ___.",
    a: "Square",
    b: "Semicolon",
    c: "Parenthesis",
    d: "Colon",
    correct: "c",
  },
  {
    question:"___ variables are visible only in the block they are declared.",
    a: "System",
    b: "Global",
    c: "Local",
    d: "Console",
    correct: "c",
  },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
