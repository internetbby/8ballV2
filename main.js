let chatForm = document.querySelector("[data-chat-form]");
let userInput = document.querySelector("[data-user-question]");
let historyList = document.querySelector("[data-output]");
let chatHistory = [];

let answers = ["As I see it, yes"];




answers.push("Ask again later");
answers.push("Better not tell you now");
answers.push("Cannot predict now");
answers.push("Concentrate and ask again");
answers.push("Don’t count on it");
answers.push("It is certain");
answers.push("It is decidedly so");
answers.push("Most likely");
answers.push("My reply is no");
answers.push("My sources say no");
answers.push("Outlook not so good");
answers.push("Outlook good");
answers.push("Signs point to yes");
answers.push("Very doubtful");
answers.push("Without a doubt");
answers.push("Yes");
answers.push("Yes – definitely");
answers.push("You may rely on it");

let random = Math.floor(Math.random() * answers.length + 1);

let interrogationWords= ["will","should","can","?","Will", "Should", "Can"];
let containsQuestion = false; 

let userQuestion= userInput.value;
console.log(userQuestion);

function checkIfQuestion(userQuestion){
  for (let i = 0; i<interrogationWords.length; i++ ){
     containsQuestion = userQuestion.includes(interrogationWords[i]);
  }


  if (containsQuestion =false){
    console.log("not a question"); 
  }
}


chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  chatHistory.push(userInput.value);


  let userQuestion= userInput.value;
  console.log(userQuestion);
  checkIfQuestion(userQuestion);


  random = Math.floor(Math.random() * answers.length);
  chatHistory.push(answers[random]);
  updateHistory();

  console.log(answers[random]);
});


function updateHistory() {
  historyList.innerHTML = "";
  chatHistory.forEach((item, index) => {
    let newItem = document.createElement("li");
    if (index % 2 == 0) {
      newItem.classList.add("user-question");
    } else {
      newItem.classList.add("answer");

    }
    
    let text = document.createTextNode("user-question");
    newItem.appendChild(text);
    newItem.innerText = item;
    historyList.append(newItem);
  });
}

