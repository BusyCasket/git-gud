//Rechner Ver. 1

function solve1() {
	var input = document.getElementById("input1").value;
	
	result = eval(input);
	
	if (isNaN(result)){
		document.getElementById("result1").innerHTML = "Check your equation!";
	} else {
		document.getElementById("result1").innerHTML = result;
	}
	
}


//Rechner Ver.2

function setSeparatorAdd(){
	document.getElementById("separator").innerHTML = "+";
}

function setSeparatorSub(){
	document.getElementById("separator").innerHTML = "-";
}

function setSeparatorMul(){
	document.getElementById("separator").innerHTML = "*";
}

function setSeparatorDiv(){
	document.getElementById("separator").innerHTML = "/";
}

function setSeparatorPot(){
	document.getElementById("separator").innerHTML = "^";
}

function solve2(){
	var numberOne = Number(document.getElementById("firstNumber").value);
	var numberTwo = Number(document.getElementById("secondNumber").value);
	var sep = document.getElementById("separator").innerHTML;
	var text = "";
	
	switch(sep) {
		
		case "+":
		text += numberOne + numberTwo;
		break;
		
		case "-":
		text += numberOne - numberTwo;
		break;
		
		case "*":
		text += numberOne * numberTwo;
		break;
		
		case "/":
		text += numberOne / numberTwo;
		break;
		
		case "^":
		text = Math.pow(numberOne, numberTwo);
		break;
		
		default:
		text += numberOne + numberTwo;
	}
	
	document.getElementById("result2").innerHTML = text;
}


//Loddo

var money = 50;

function loddo(){
	
	money -= 5;
	
	var drawn = [];
	
	var guesses = [];
	
	var z = 0;
	
	
	for (var i = 0; i < 6; i++) {
		var y = document.getElementById("guess"+i).value;
		
		if (y === ""){
			alert("Bitte alle Felder ausfüllen!");
			return;
		}
		
		if (isNaN(y)){
			alert("Nur Zahlen sind erlaubt!");
			return;
		}
		
		if (y < 1  || y > 49) {
			alert("Es sind nur Zahlen von 1 - 49 erlaubt!");
			return;
		}
		
		if (checkDoubles(guesses, y)){
			alert("Keine doppelten Zahlen!");
			return;
		} else {
			guesses.push(y);
		}
		
	}
	
	
	for (var i = 0; i < 6; i++){
		var x = Math.floor((Math.random() * (49 - 1)) + 1);
		
		if (checkDoubles(drawn, x)){
			i--;
		} else {
			drawn.push(x);
		}
		
	}
	
	
	for (var i = 0; i < 6; i++){
		var guess = guesses[i];
		if (checkDoubles(drawn, guess)){
			z = z + 1;
		}
	}
	
	switch(z){
		
		case 1:
		money = money + 1;
		playAudio();
		break;
		
		case 2:
		money = money + 5;
		playAudio();
		break;
		
		case 3:
		money = money + 500;
		playAudio();
		break;
		
		case 4:
		money = money + 50000;
		playAudio();
		break;
		
		case 5:
		money = money + 5000000;
		playAudio();
		break;
		
		case 6:
		money = money + 500000000;
		playAudio();
	}
	
	
	document.getElementById("myGuess").innerHTML = guesses.sort(function(a, b){return a - b}).join(", ");
	
	document.getElementById("draws").innerHTML = drawn.sort(function(a, b){return a - b}).join(", ");
	
	document.getElementById("matches").innerHTML = z;
	
	document.getElementById("balance").innerHTML = money;
	
}

function checkDoubles(array, element) {
	for (var i = 0;i < array.length; i++){
		if (array[i] == element){
			return true;
		} 	
		
	}
	return false;
}



function playAudio(){
	
	var cashSound = document.getElementById("cashin");
	
	cashSound.play();
}


// Circle Run
var dice = 0;
var diceRolled = false;

function wuerfeln() {
	dice = Math.floor((Math.random()*6) + 1);	
	document.getElementById("wuerfelErgebnis").innerHTML = dice;
	diceRolled = true;
}

var currentField = 0;

function ziehen() {
	if (!diceRolled) {
		alert("Du musst erst würfeln!");
		return;
	}
	var nextField = (currentField + dice) % 8;

	document.getElementById("spielfeld" + nextField).style.backgroundColor = "red";
	document.getElementById("spielfeld" + currentField).style.backgroundColor = "white";

	currentField = nextField;

	document.getElementById("wuerfelErgebnis").innerHTML = "?";
	diceRolled = false;
}
