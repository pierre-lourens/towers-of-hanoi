let userPegs = Number(prompt("Welcome to Towers of Hanoi! How many pegs would you like", 3));
let userDiscs = Number(prompt("How many discs would you like?", 3));
alert("Open your console to play!");
let board = TowersGame(userPegs, userDiscs);
