let timer;
let seconds = 0;
let minutes = 0;

function startGame() {
  disappearTable();
  document.querySelector("#start-btn").onclick = () => {
    disappearButton();
    showTable();
    configurateGame();
    startTimer();
  };
}

function disappearButton() {
  document.querySelector("#start-btn").style.display = "none";
}

function showTable() {
  document.querySelector(".table").style.display = "block";
}

function disappearTable() {
  document.querySelector(".table").style.display = "none";
}

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    document.querySelector("#seconds").textContent =
      seconds < 10 ? `0${seconds}` : seconds;
    document.querySelector("#minutes").textContent =
      minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function clearTimerDisplay() {
  document.querySelector("#timer").textContent = "";
}

function showFinalTime() {
  const finalTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  document.querySelector(
    ".showFinalResult"
  ).textContent = `The time took to finish the game is: ${finalTime}`;

  clearTimerDisplay();
}

const $cards = document.querySelectorAll(".card");
let $firstCard = null;
let matchedPairs = 0;

function configurateGame() {
  const baseColors = ["red", "blue", "green", "yellow"];
  const repeteableColors = baseColors.concat(baseColors);
  configurateCards($cards, repeteableColors);
}

function configurateCards($cards, colors) {
  const randomColors = colors.sort(function () {
    return 0.5 - Math.random();
  });

  randomColors.forEach((color, i) => {
    const cardBack = $cards[i].querySelector(".back-card");
    cardBack.classList.add(color);
  });
}

$cards.forEach((card) => {
  card.addEventListener("click", () => {
    handleCardClick(card);
  });
});

function handleCardClick($currentCard) {
  $currentCard.classList.add("flipped");

  if ($firstCard === null) {
    $firstCard = $currentCard;
  } else {
    if ($firstCard === $currentCard) {
      return;
    }

    if (cardsMatch($firstCard, $currentCard)) {
      removeCard($firstCard);
      removeCard($currentCard);
      matchedPairs++;
      if (matchedPairs === $cards.length / 2) {
        setTimeout(() => {
          stopTimer();
          showFinalTime();
        }, 1000);
      }
    } else {
      hideCard($firstCard);
      hideCard($currentCard);
    }
    $firstCard = null;
  }
}

function cardsMatch($card1, $card2) {
  return (
    $card1.querySelector(".back-card").className ===
    $card2.querySelector(".back-card").className
  );
}

function hideCard($card) {
  setTimeout(() => {
    $card.classList.remove("flipped");
  }, 500);
}

function removeCard($card) {
  setTimeout(() => {
    $card.classList.add("matched");
    $card.remove();
  }, 500);
}

startGame();
