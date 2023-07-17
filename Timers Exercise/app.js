//Countdown
function countDown(num) {
  let id = setInterval(() => {
    num--;
    if (num <= 0) {
      clearInterval(id);
      console.log("Done!");
    } else {
      console.log(num);
    }
  }, 1000);
}

//Random Game
function randomGame() {
  let tries = 0;
  console.log("Guessing...");

  let id = setInterval(() => {
    let randomNum = Math.random();
    tries++;

    if (randomNum >= 0.75 && tries <= 1) {
      clearInterval(id);
      console.log(`It took ${tries} try!`);
    } else if (randomNum >= 0.75 && tries >= 1) {
      clearInterval(id);
      console.log(`It took ${tries} tries!`);
    }
  }, 1000);
}


randomGame();