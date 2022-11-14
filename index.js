let word = document.getElementById("word");
let cWord = document.getElementById("wCount");
let lCount = document.getElementById("lCount");

let countWord = 0, countChar = 0;

word.addEventListener("change", () => {
  let sentence = word.value;
  wordCounter(sentence);
  charCounter(sentence);
  cWord.innerText = countWord;
  lCount.innerText = countChar;
  countWord = 0;
});

function wordCounter(str){
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) !== ' ' && (i === 0 || str.charAt(i - 1) === ' ')){
            countWord++;
        }
    }
}

function charCounter(str){
    str = str.split(' ').join("");
    countChar = str.length;
}

