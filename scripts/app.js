console.log('hi');

var firstSentence = 'Go to Year 3000!';
var secondSentence = 'Stay in the present and be miserable!';
var thirdSentence = 'You\'re a package delivery boy!';
var fourthSentence = 'You\'re a pizza delivery boy!';
var fifthSentence = 'Sell human horn.';
var sixthSentence = 'Write for Female sexy lawyer.';
var seventhSentence = 'Save Leela!';
var eighthSentence = 'Go back in time to save Leela!';


window.onload = function(event) {
	var nameInput = document.getElementById('first_name');
	var nameBtn = document.getElementById('name_btn');
	var firstChoice = document.getElementById('choice-one');
	var secondChoice = document.getElementById('choice-two');
	var thirdChoice = document.getElementById('choice-three');
	var fourthChoice = document.getElementById('choice-four');
	var fifthChoice = document.getElementById('choice-five');
	var sixthChoice = document.getElementById('choice-six');
	var seventhChoice = document.getElementById('choice-seven');
	var eighthChoice = document.getElementById('choice-eight');


	firstChoice.onclick = function(event) {
		createRow(firstSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	thirdChoice.onclick = function(event) {
		createRow(thirdSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fourthChoice.onclick = function(event) {
		createRow(fourthSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fifthChoice.onclick = function(event) {
		createRow(fifthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	sixthChoice.onclick = function(event) {
		createRow(sixthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	eighthChoice.onclick = function(event) {
		createRow(eighthSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	nameBtn.onclick = function(event) {
		// console.log(event);
		console.log(nameInput.value);
		createRow('Welcome aboard, ' + nameInput.value + "!");
	}

	console.log(nameInput, nameBtn);
}

// This function creates and adds rows to app
function createRow(words) {
	console.log(words);
	// need a new div
	var row = document.createElement('div');
	// this creates a div element that sits no where on the page YET.
	var col = document.createElement('div');
	var p = document.createElement('p');
	p.innerHTML = words;
	row.append(col);
	row.className = 'row';
	col.className = 'col s12';
	col.append(p);
	console.log(row);
	// append whole thing to app below
	var app = document.getElementById('app');
	app.append(row);

}

