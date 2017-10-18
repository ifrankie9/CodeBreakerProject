let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == "" || attempt.value == ""){
      setHiddenFields();
    };
    if (!validateInput(input.value)){
      return;
    }
    attempt ++;

    if (getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } else if (getResults(input.value) == false && attempt.value >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields(){
  answer.value = Math.floor(Math.random() * 10000).toString();  //why not "let answer"
  attempt.value = 0;
  while(answer.value.length < 4){
    answer.value = "0" + answer.value;
  }
}

function setMessage(message){
  document.getElementById('message').innerHTML = message;
}

function showAnswer(success){
  let code = document.getElementById('code');
  if(success){
    code.className += 'success';
  } else {
    code.className += 'failure';
  }
  code.innerHTML = answer.value;
}

function ahowReplay(){
  document.getElementById('guessing-div').style.display = "none";
  document.getElementById('replay-div').style.display = "block";
}

function validateInput(input){
//  if (input.length == 4){
//    return true;
//  } else {
//    setMessage("Guesses must be exactly 4 characters long.");
//    return false;
//  }
   if (input.length != 4) {
     setMessage("Guesses must be exactly 4 characters long.");
     return false;
   }
   return true;
}

function getResults(input){
  let resultHtml = "<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">";
  for(i=0; i<input.length; i++){
    if (input.charAt(i) == answer.value.charAt(i)){
      resultHtml += "<span class="glyphicon glyphicon-ok"></span>";
    } else if (answer.value.indexOf(input.charAt(i)) > -1){
      resultHtml += "<span class="glyphicon glyphicon-transfer"></span>";
    }
      rightCount ++;
    } else {
      resultHtml += "<span class="glyphicon glyphicon-ok"></span>";
    <span class="glyphicon glyphicon-remove"></span>;
    }
    resultHtml += "</div><div>";
    document.getElementById('results').innerHTML += resultHtml;
  }
  if (input == answer.value){
    return true;
  }
  return false;
}
