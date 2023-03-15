const rock = "./img/rock.jpg";
const paper = "./img/paper.jpg";
const scissors = "./img/scissors-01.jpg";

const images = [rock, paper, scissors];

function displayRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  document.querySelector("#enemy-hand").src = randomImage;
}

function playAgain() {
  document.querySelector("#choices").style.display = "flex";
  document.querySelector("#announcement").innerHTML = "Choose a hand";
  document.querySelector("#player-hand").src = "./img/choose-a-hand-01.jpg";
  document.querySelector("#play-again-button").setAttribute("hidden", true);
}

function play() {
  clearInterval(intervalId);
  document.querySelector("#choices").style.display = "none";
  const timestamp = new Date().getTime();
  const randomIndex = timestamp % 3;
  const enemyHand = images[randomIndex];

  document.querySelector("#enemy-hand").src = enemyHand;

  const srcValuePlayer = document
    .querySelector("#player-hand")
    .getAttribute("src");

  const srcValueEnemy = document
    .querySelector("#enemy-hand")
    .getAttribute("src");

  if (srcValuePlayer === rock) {
    if (srcValueEnemy === rock) {
      document.querySelector("#announcement").innerHTML = "It's a tie!";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("It's a tie");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    } else if (srcValueEnemy === paper) {
      document.querySelector("#announcement").innerHTML = "Boo! You lose";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("Boo! You lose");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    } else {
      document.querySelector("#announcement").innerHTML = "Yay! You win!";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("Yay! You win!");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    }
  } else if (srcValuePlayer === paper) {
    if (srcValueEnemy === paper) {
      document.querySelector("#announcement").innerHTML = "It's a tie!";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("It's a tie");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    } else if (srcValueEnemy === scissors) {
      document.querySelector("#announcement").innerHTML = "Boo! You lose";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("Boo! You lose");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    } else {
      document.querySelector("#announcement").innerHTML = "Yay! You win!";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("Yay! You win!");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    }
  } else if (srcValuePlayer === scissors) {
    if (srcValueEnemy === scissors) {
      document.querySelector("#announcement").innerHTML = "It's a tie!";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("It's a tie");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    } else if (srcValueEnemy === rock) {
      document.querySelector("#announcement").innerHTML = "Boo! You lose";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("Boo! You lose");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    } else {
      document.querySelector("#announcement").innerHTML = "Yay! You win!";
      document.querySelector("#play-button").setAttribute("hidden", true);
      document.querySelector("#play-again-button").removeAttribute("hidden");

      setTimeout(() => {
        alert("Yay! You win!");
        intervalId = setInterval(displayRandomImage, 300);
      }, 1000);
    }
  }
}

let intervalId = setInterval(displayRandomImage, 300);

document.querySelector("#choose-rock").addEventListener("click", () => {
  document.querySelector("#player-hand").src = rock;
  document.querySelector("#play-button").removeAttribute("hidden");
  document.querySelector("#play-again-button").setAttribute("hidden", true);
});

document.querySelector("#choose-paper").addEventListener("click", () => {
  document.querySelector("#player-hand").src = paper;
  document.querySelector("#play-button").removeAttribute("hidden");
  document.querySelector("#play-again-button").setAttribute("hidden", true);
});

document.querySelector("#choose-scissors").addEventListener("click", () => {
  document.querySelector("#player-hand").src = scissors;
  document.querySelector("#play-button").removeAttribute("hidden");
  document.querySelector("#play-again-button").setAttribute("hidden", true);
});
