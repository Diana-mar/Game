window.onload=()=>{

const cards = document.querySelectorAll('.cards')
var flipped_card = false
var allowing_new_click = false
var card1, card2;

(function memoryShuffle(){
    let i = cards.length,j
    for(let k=0;k<i; k++) { 
        j = Math.floor(Math.random() * i)
        cards[k].style.order=j
        }
})();

function isSame() {
  if(card1===this)
  return
  if (allowing_new_click)
  return
  this.classList.add('flip')
  if (!flipped_card) {
    card1 = this
    flipped_card = true
    return
  }
  card2 = this
  
  if(card1.dataset.framework === card2.dataset.framework){ 
    card1.removeEventListener('click', isSame)
    card2.removeEventListener('click', isSame)
    card1=0
    card2=0
    flipped_card=false
    allowing_new_click=false
    }
  else{
    allowing_new_click = true;
    setTimeout(() => {
    card1.classList.remove('flip')
    card2.classList.remove('flip')
    card1=0
    card2=0
    flipped_card=false
    allowing_new_click=false
    }, 1200)
    }
}

for(let i=0; i<cards.length; ++i){
    cards[i].addEventListener('click', isSame)
    }
}



/*
    Table part
*/

var answers =["python", "android", "javascript", "ruby", "java", "c++", "kotlin", "github"]

const form =document.getElementById("form")
var python=document.getElementById("py")
var android=document.getElementById("andr")
var js=document.getElementById("js")
var ruby=document.getElementById("ruby")
var java=document.getElementById("java")
var cpp=document.getElementById("cpp")
var kotlin=document.getElementById("kt")
var git=document.getElementById("git")
var result=0
const b=[python, android, js, ruby, java, cpp, kotlin, git]

function validate() {
    for(let i=0; i<8; i++){
        if(b[i].value.toLowerCase() == answers[i]){
            result++
        }
    }
    if(result>4)
    alert("!!!Congratulations!!!, you scored " +result+"/8 points")
    else
    alert("Thank you for your interest in the game. You scored "+ result +"/8 points")
    alert("ANSWERS\n python \n android\n javascript\n ruby\n java\n c++\n kotlin\n github")
}
