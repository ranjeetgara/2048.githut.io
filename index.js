var board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

var score = 0;

let display = () => {
  console.log(board);

  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      switch (board[i][j]) {
        case 2:
          document.getElementById("c" + i + j).innerHTML = "2";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "rgb(190, 190, 190)");
          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#776E65");
          break;

        case 4:
          document.getElementById("c" + i + j).innerHTML = "4";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "rgb(250, 190, 99)");
          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#776E65");
          break;

        case 8:
          document.getElementById("c" + i + j).innerHTML = "8";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#ffa64d");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;

        case 16:
          document.getElementById("c" + i + j).innerHTML = "16";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#ff471a");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;

        case 32:
          document.getElementById("c" + i + j).innerHTML = "32";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#cc3300");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;
        case 64:
          document.getElementById("c" + i + j).innerHTML = "64";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#e60000");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;

        case 128:
          document.getElementById("c" + i + j).innerHTML = "128";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#ffd11a");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;

        case 256:
          document.getElementById("c" + i + j).innerHTML = "256";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#bbff33");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#999999");
          break;

        case 512:
          document.getElementById("c" + i + j).innerHTML = "512";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#ff8533");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;

        case 1024:
          document.getElementById("c" + i + j).innerHTML = "1024";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#e6b800");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;

        case 2048:
          document.getElementById("c" + i + j).innerHTML = "2048";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#66ccff");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "#F9F6F2");
          break;
        default:
          document.getElementById("c" + i + j).innerHTML = "";
          obj = document.getElementById("d" + i + j);
          obj.style.setProperty("background-color", "#d6c8b9");

          obj = document.getElementById("c" + i + j);
          obj.style.setProperty("color", "none");
      }
    }
  }
};

let getrandom = () => {
  let num = Math.ceil(Math.random() * 2);
  if (num === 1) {
    return 2;
  }
  return 4;
};

let getindex = () => {
  let x = Math.floor(Math.random() * 4);
  let y = Math.floor(Math.random() * 4);
  while (board[x][y] !== 0) {
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
  }
  return [x, y];
};

let gameFinished = () => {
  obj = document.getElementById("gameover");
  obj.style.setProperty("visibility", "initial");
};

let GameOver = () => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length - 1; j += 1) {
      if (
        board[i][j] === board[i][j + 1] ||
        board[i][j] === 0 ||
        board[i][j + 1] === 0
      ) {
        return false;
      }
    }
  }
  return true;
};

let isPossible = () => {
  let ZeroIndex;
  for (let i = 0; i < board.length; i += 1) {
    ZeroIndex = board[i].indexOf(0); // first coourance of 0 in a row
    for (let j = ZeroIndex; j < board[i].length && j >= 0; j += 1) {
      // checking wether there is any non zero after the zero
      if (board[i][j] !== 0) {
        return true;
      }
    }
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length - 1; j += 1) {
      if (
        board[i][j] === board[i][j + 1] &&
        board[i][j] !== 0 &&
        board[i][j + 1] !== 0
      ) {
        return true;
      }
    }
  }
  return false;
};

let transpose = () => {
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < i; j += 1) {
      [board[i][j], board[j][i]] = [board[j][i], board[i][j]];
    }
  }
};

let horizontalFlip = () => {
  for (let i = 0; i < 4; i += 1) {
    let start = 0;
    let end = board[0].length - 1;
    while (start < end) {
      [board[i][start], board[i][end]] = [board[i][end], board[i][start]];
      start += 1;
      end -= 1;
    }
  }
};

let Compact = () => {
  // removed trailing and between zeros
  for (let i = 0; i < 4; i += 1) {
    let Zeroindex = board[i].indexOf(0);
    let index = Zeroindex + 1;
    while (Zeroindex < 4 && Zeroindex >= 0 && index < 4 && index >= 0) {
      if (board[i][index] === 0) {
        index += 1;
      } else {
        board[i][Zeroindex] = board[i][index];
        board[i][index] = 0;
        Zeroindex += 1;
        index += 1;
      }
    }
  }
};

let move = () => {
  Compact();
  // Adding adjcent numbers
  for (let i = 0; i < 4; i += 1) {
    let start = 0;
    let end = 1;
    while (start < 4 && end < 4) {
      if (board[i][start] == board[i][end]) {
        // modifiedIndex.push([i,start])
        board[i][start] *= 2;
        board[i][end] = 0;
        start = end + 1;
        end = start + 1;
      } else {
        start += 1;
        end = start + 1;
      }
    }
  }
  Compact();
};

let rightToLeft = () => {
  if (isPossible()) {
    move();
    let [x, y] = getindex();
    board[x][y] = getrandom();
    display();
  } else {
    transpose();
    if (GameOver()) {
      gameFinished();
    }
    transpose();
  }
};

let leftToRight = () => {
  horizontalFlip();
  if (isPossible()) {
    move();
    let [x, y] = getindex();
    board[x][y] = getrandom();
    horizontalFlip();
    display();
  } else {
    transpose();
    if (GameOver()) {
      gameFinished();
    }
    transpose();
    horizontalFlip();
  }
};

let bottomToTop = () => {
  transpose();
  if (isPossible()) {
    move();
    let [x, y] = getindex();
    board[x][y] = getrandom();
    transpose();
    display();
  } else {
    transpose();
    if (GameOver()) {
      gameFinished();
    }
  }
};

let topToBottom = () => {
  transpose();
  horizontalFlip();
  if (isPossible()) {
    move();
    let [x, y] = getindex();
    board[x][y] = getrandom();
    horizontalFlip();
    transpose();
    display();
  } else {
    transpose();
    if (GameOver()) {
      gameFinished();
    }
    transpose();
    horizontalFlip();
    transpose();
  }
};

window.onload = function () {
  let x, y;
  [x, y] = getindex();
  board[x][y] = 2;

  [x, y] = getindex();
  board[x][y] = 2;
  display();
};

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      rightToLeft();
      break;
    case 38:
      bottomToTop();
      break;
    case 39:
      leftToRight();
      break;
    case 40:
      topToBottom();
      break;
  }
};
