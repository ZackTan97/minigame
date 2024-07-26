// scripts.js

const cardDeck = [ //Total of 40 card text
    "Give Instruction to someone",
    "Ask For Something",
    "Talk About Time",
    "Talk About Work",
    "Talk About Food",
    "Talk About The Past",
    "Talk About Music",
    "Swap Places",
    "Touch Your Ear",
    "Touch Your Lips",
    "Stick Out Your Tongue",
    "Make Comparison",
    "Say “OK”",
    "Say “YES”",
    "Say “NO”",
    "Say “It’s Not Me”",
    "Say “What?!”",
    "Say “Hah??”",
    "Say “It’s Your Turn”",
    "Agree With Others",
    "Scratch Your Face",
    "Wave Your Hand",
    "Pointing Finger",
    "Singing",
    "Said A Song Name",
    "Shout or Scream",
    "Look Backward",
    "Show SideEye",
    "Don’t Talk 20 Sec",
    "Don’t Move for 10 Sec",
    "Speak Another language (Except English)",
    "Make Eye Signal",
    "Look At Your Phone",
    "Shake Your head",
    "Do a Hi five",
    "Put Your Hands In The Air",
    "Handshake",
    "Explain How To Play Gotchu",
    "Dancing",
    "Stand Up"
];

const changeButton = document.querySelector('#changeButton');
const cardText = document.querySelector('#cardText');
changeButton.onclick = showNewCard;

// Card Randomizer Function
function makeRandomCard() {
    const randomCardNumber = Math.floor(Math.random() * cardDeck.length);
    return cardDeck[randomCardNumber];
}

function showNewCard(){
    function updateCountdown(count) {
        if (count > 0) {
            cardText.textContent = count; // Update countdown text
            setTimeout(() => {
                updateCountdown(count - 1); // Call updateCountdown with count - 1 after 1000ms
            }, 800); // Repeat every 1000ms (1 second)
        } else {
            cardText.textContent = makeRandomCard(); // Set card text after countdown finishes
        }
    }
    // Start the countdown from 3
    updateCountdown(3);
}






function goToHomepage() {
    window.location.href = 'Homepage.html';
}

function goToGameplay() {
    window.location.href = 'Gameplay.html';
}
function goToInstruction() {
    window.location.href = 'Instruction.html';
}