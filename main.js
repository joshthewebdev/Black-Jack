let firstCard = Math.floor(Math.random()*13)+1;
let secondCard = Math.floor(Math.random()*13)+1;
let cards = [firstCard , secondCard]
let message =  document.getElementById("question");
let cardEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let sum = firstCard + secondCard;
function startGame(){
    // cardEl.textContent = "Cards: " + cards[0] + " and " + cards[1];
    // cardEl.textContent = "Cards: " + cards;

    renderGame();
}

function renderGame(){

    cardEl.textContent = "Cards: " + cards;

sumEl.textContent = "Sum: " + sum;

if (sum < 21){
   message.textContent = "Do you want to draw another card?";
}
else if (sum === 21){
    message.textContent = "You Win!!";
}
else {
    message.textContent = "Ouch! You lose. Do you want to try again?";
}

console.log(message);
}

function newCard(){
    // console.log("Draw new card from deck?");

    if(sum ===21 || sum > 21){
        message.textContent = "Ouch! You lose. Do you want to try again?";
    }
    else{
    let newCard = Math.floor(Math.random() * 13) + 1;

    sum += newCard;

    cards.push(newCard);

    renderGame();
}
    // cardEl.textContent = "Cards: " + cards[0] + " and " + cards[1] + " and " + cards[2];
}

