function win(){
    let e = document.createTextNode("YOU WIN!!!");
    let v  = document.createElement('h2');
    v.appendChild(e);
    document.getElementsByTagName('body')[0].appendChild(v).style.textAlign='center';
    final();

}
function final(){
    var body = document.getElementsByTagName('body');
    body = body[0];
    let text = document.createTextNode("For new game click f5!!!");
    let h2  = document.createElement('h2');
    h2.appendChild(text);
    body.appendChild(h2);
    body.style.textAlign =  'center';
}
let name = prompt("What's your name? ");
if (!name) {
  alert('Hello stranger!');
} else {
  alert('Hello ' + name);
}

const words = ['tomato', 'fish', 'javascript', 'html', 'football'];
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let answerWord = [];
for (let index = 0; index < word.length; index++) {
  answerWord.push('_');
}
console.log(answerWord);
let starting = confirm('STARTING THE GAME?');
if (starting) {
  alert('Yes!!!! We are starting!!!');
  let remainingLetters = word.length;
  let tries = 10;
  while (remainingLetters > 0 && tries > 0) {
    alert('Chances: ' + tries + '\nYour word is: ' + answerWord.join(' '));

    let letter = prompt('Write a letter: ');
    let correct = false;
    if (letter == null) {
      alert(':( SAD!!! The word was: ' + word);
      final();
      break;
    } else if (letter.length > 1) {
      tries--;
      alert('Please write a single letter!');
    } else {
      for (let index = 0; index < word.length; index++) {
        if (letter == word[index]) {
          correct = true;
          answerWord[index] = letter;
          remainingLetters--;
        }
      }
      if (!correct) {
        tries--;
        alert('Your letter is missing :( ! Try again!');
      }
    }
  }
  if (remainingLetters == 0 && tries > 0) {
    alert(
      name +
        ' you won the game! The word was: ' +
        word +
        '\nFor new game click f5!!!'
    );
    win();
  } else if (tries <= 0) {
    alert(':( You LOST!!!\nTry again!!!\nFor new game click f5!!!');
    final();
    

  }
} else {
  alert(':(  SAD!!! YOUR WORD WAS: ' + word);
  final();
}
