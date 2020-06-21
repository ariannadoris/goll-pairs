let gollCongratulationMessages = [
    "You are likeable!",
    "You are beautiful!",
    "You are perfect!",
    "We are a good match!",
    "I think of you as more than a friend.",
    "We are perfect for each other.",
    "With you, forever isn’t too long.",
    "You complete me.",
    "You are my treasure—the most precious thing in my life.",
    "I just wouldn’t feel complete without you.",
    "You are my world. Gravity always pulls me toward you.",
    "I enjoy your company.",
    "I'm smitten with you.",
    "You mean so much to me.",
    "You are captivating.",
    "With you, forever isn’t too long.",
    "You always brighten up my day.",
    "We have really good chemistry.",
    "You are incredible.",
    "We are meant for each other.",
    "You are the sunshine in my day and the moonlight in my night.",
    "I’m so excited that we have so much time to be with each other.",
    "You've got what I need.",
    "I’m happy just to see you happy.",
    "You are my favorite.",
    "Every time I see you, you leave me breathless.",
    "You are my sunshine.",
    "For you, I will risk it all.",
    "You are worth the wait.",
    "I'm under your spell.",
    "I appreciate everything you are.",
    "If this was all a dream, I’d choose not to wake up.",
    "I'm ready to take it to the next level.",
    "You are the only one who makes me truly smile.",
    "You are the object of my affection.",
    "You take my breath away.",
    "You are my most favorite part of reality.",
    "You are my dream come true.",
    "I feel so lucky to have you.",
    "All I ever want is to make you happy.",
    "I always have an amazing time with you.",
    "Butterflies in my stomach flutter whenever I’m with you.",
    "I think you are the one.",
    "I'm totally down with you.",
    "I'm so excited that we have so much time to be with each other.",
    "I'm fond of you.",
    "How did you become the utterly amazing person that you are?",
    "I’ll always choose you."

];

let gollCongratulationPoems = [
[   "I want to be that birch",
    "That you love so much:",
    "A hundred arms I would have to protect you",
    "A hundred green and gentle hands",
    "To caress you!",
    "I would have the best birds in the world",
    "To wake you at dawn",
    "And to comfort you in the evening.",
    "In the hours of summer, I could",
    "Cover you with the petals of the sun",
    "In my shadow at night",
    "I held your fearful dreams"
]];

function getCongratulationMessage() {
    let index = Math.floor(Math.random() * gollCongratulationMessages.length);
    return gollCongratulationMessages[index];
}

function getCongratulationPoemMessage() {
    let index = Math.floor(Math.random() * gollCongratulationPoems.length);
    return gollCongratulationPoems[index];
}

function getCongratulationPoem() {
    let str = "";
    let poem = getCongratulationPoemMessage();
    for( let i = 0; i < poem.length; i ++ ) {
        str = str.concat(poem[i]).concat("<br/>");
    }
    return str;
}

function setCongratulationMessage(numberOfPairs) {
    let youWon = document.getElementById("you-won");
    let index = Math.floor(Math.random() * 10);

    if( numberOfPairs <= 8 || index != 5) {
        youWon.innerText = getCongratulationMessage();
        youWon.classList.add('visible');
    }
    else {
        youWon.innerHTML = getCongratulationPoem();
        youWon.classList.add('poem');
    }
}
