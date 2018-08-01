



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var Interval ;
let reset = document.getElementById("resetbtn")
let card = document.getElementsByClassName("card");
let cards = [...card];
let openedCards = [];
let move = document.getElementById("moves");
let moves = 0
const starsl = document.querySelectorAll(".fa-star");
let stars = document.getElementsByClassName("fa-star");
let matchCards = document.getElementsByClassName("match")

let modal = document.getElementById("Smodal")
let lmodal = document.getElementById("Lmodal")
let closebtn = document.getElementById("closebtn")
let gameover = document.getElementsByClassName("gameover");
let reseticon = document.getElementById("restart")

function restart(){
	openedCards = []
	startGame();
 clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  moves = 0;

  move.innerHTML = moves;
    
     for (var i= 0; i < starsl.length; i++){
        starsl[i].classList.remove("fa-star-o")
        
    }
      moves++;
}

function myfunction(){
		modal.style.display = 'none';
		restart();
}

function myfunction2(){
	lmodal.style.display = 'none';
		restart();
}

function congrats(){
	if(matchCards.length === 16){
		console.log(closebtn)
 closebtn.addEventListener('click',function (e){
	modal.style.display = 'none';
})

fsec = appendSeconds.innerHTML
ftens = appendTens.innerHTML

     var staRating = document.querySelector(".stars").innerHTML;
        document.getElementById("FMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = staRating;
        document.getElementById("Fseconds").innerHTML = fsec;
         document.getElementById("Ftens").innerHTML = ftens;
     clearInterval(Interval);
     modal.style.display = 'block';
    
      }
}

function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
function starcount(){
	if(moves === 5){ 
    stars[2].classList.add("fa-star-o");
      
	}else if(moves === 10){
	 stars[1].classList.add("fa-star-o");	
	}else if(moves === 15){
	  stars[0].classList.add("fa-star-o");
	}else if (moves === 16){
	  clearInterval(Interval);
      lmodal.style.display = 'block';
      
	}
}

var showCard = function (){
   
   clearInterval(Interval);
   Interval = setInterval(startTimer, 10);
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
  
       openedCards.push(this);
       matchingValidator();
          }

   function unmatched(){
   	openedCards[0].classList.remove("close");
	openedCards[1].classList.remove("close");
	openedCards[0].classList.add("unmatch");
	openedCards[1].classList.add("unmatch");
	(function(oldOpenedCards){
    setTimeout(function(){
        console.log(oldOpenedCards)
        oldOpenedCards[0].classList.remove("unmatch","open","show","disabled");
        oldOpenedCards[1].classList.remove("unmatch","open","show","disabled");
        oldOpenedCards[0].classList.add("close");
        oldOpenedCards[1].classList.add("close");     

        // do the required steps
        setTimeout(function(){ 
            // use the copied variable 
            oldOpenedCards[0].classList.remove("close");
            oldOpenedCards[1].classList.remove("close");

        },1200);

    },1100);
})(openedCards);
 moves++;
move.innerHTML = moves;
  starcount();
}

  function matchingValidator(){
   if (openedCards.length === 2) {
     if (openedCards[0].children[0].className === openedCards[1].children[0].className) {
   
	openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.add("freeze");
    openedCards[1].classList.add("freeze");
    openedCards[0].classList.add("close");
	openedCards[1].classList.add("close");
    setTimeout(function(){ 
       openedCards[0].classList.remove("close");
	   openedCards[1].classList.remove("close");
        openedCards = []
	},300)
       congrats();
     } else {
      unmatched();
       openedCards = [];
     }
   }
}

for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", showCard);
   reseticon.addEventListener('click', restart);
};


const deck = document.querySelector(".deck");
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
              cards[i].classList.remove("show", "open", "match", "disabled");

   }


}


window.onload = startGame();


