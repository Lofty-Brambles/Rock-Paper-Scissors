console.log("test"); // Tests for response.

document.querySelector(".dash.main").addEventListener("click", function(e) {
	const main = "main";
	openTab(e, main);
});
document.querySelector(".dash.logs").addEventListener("click", function(e) {
	const logs = "logs";
	openTab(e, logs);
});
document.querySelector(".dash.gallery").addEventListener("click", function(e) {
	const gal = "gallery";
	openTab(e, gal);
});
document.getElementById("default").click();
/* Adds the tab handler switcheroo. */

/*  A set of rounds consist of the following DOM manipulations:
	> Detects a button tap and updates scores as well as logs results.
	> Runs a score check to view winner popup.  */

// Function to open a tab and close all others.
function openTab( e, tabOpen ) {
	const dash = document.getElementsByClassName("dash");
	for (let i = 0; i < dash.length; i++) {
		dash[i].className = dash[i].className.replace( " active", "" );
	}

	const tabContent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";		
	}

	document.getElementById(tabOpen).style.display = "flex";
	e.currentTarget.className += " active";
};

let round = 0, pScore = 0, cScore = 0; // Initisl counter variables
const computerWinReplies = [
	"Machine beats mortal",
	"Humans are pathetic",
	"Mechinator is unbeatable",
	"Pry your eye, machine beats thy"
];
const playerWinReplies = [
	"Humans rule",
	"How dare a machine challenge you",
	"Mechinator? More like mech-who-or",
	"Takes only one to defeat you, 3000"
];
const moveArray = ["rock", "paper", "scissors"]; // The computer's moves

const butts = document.querySelectorAll(".move");
butts.forEach( butt => {
	butt.addEventListener( "click", e => start(e) );
}); // Adds button listeners

function start( e ) {
	const playerMove = e.target.id;
	decideWinner( playerMove, random( moveArray ) );

	if ( cScore === 5 || pScore === 5 ) {
		callEndNotif();
	} // Removes button listeners on game's end
} // The main game function

function random(arr) {
	return arr[ Math.floor( Math.random() * arr.length ) ];
} // Randomiser

function decideWinner( plrMove, compMove ) {
	const plrScoreboard = document.querySelector("#player-score");
	const compScoreboard = document.querySelector("#computer-score");
	const logs = document.querySelector("#logs");
	const div = document.createElement("div");
	div.setAttribute("class", "rec");

	if ( plrMove == compMove ) {
		const longStr = [
			`<p>[ ♻ | Round ${++round} ] | It was a draw, `,
			`both of you played ${emojify(plrMove)}!`,
			`<br><em>Scores: ${pScore} - ${cScore}</em></p>`
		]
		div.innerHTML = longStr.join("");
		logs.appendChild( div ); // Checks for draws
	} else if (
		( plrMove === "rock" && compMove === "scissors") ||
		( plrMove === "scissors" && compMove === "paper") ||
		( plrMove === "paper" && compMove === "rock")
	) {
		pScore++;
		plrScoreboard.textContent = pScore;

		const longStr = [
			`<p>[ ✔ | Round ${++round} ] ${random(playerWinReplies)}, `,
			`${emojify(plrMove)} beats ${emojify(compMove)}!`,
			`<br><em>Scores: ${pScore} - ${cScore}</em></p>`
		];
		div.innerHTML = longStr.join("");
		logs.appendChild( div ); // Checks for wins
	} else if (
		( compMove === "rock" && plrMove === "scissors") ||
		( compMove === "scissors" && plrMove === "paper") ||
		( compMove === "paper" && plrMove === "rock")
	) {
		cScore++;
		compScoreboard.textContent = cScore;

		const longStr = [
			`<p>[ ❌ | Round ${++round} ] | ${random(computerWinReplies)}, `,
			`${emojify(compMove)} beats ${emojify(plrMove)}!`,
			`<br><em>Scores: ${pScore} - ${cScore}</em></p>`
		];
		div.innerHTML = longStr.join("");
		logs.appendChild( div ); // Checks for losses
	}
}

function callEndNotif() {
	const moves = document.querySelector("#moves");
	const final = document.querySelector("#final");
	const longStr = [
		`<p class="logo scores-head">`,
		``,
		`</p><button id="refresh"><img src="./assets/refresh.png" alt="Refresh" height="25px" width="25px">`,
		``,
		`</button>`
	];

	if ( cScore === 5 ) {
		longStr[1] = `Oh noey, the Mechinator won the fierce duel!`;
		longStr[3] = `Game Over`;
	} else {
		longStr[1] = `You emerge victorious over the beastly machine!!`;
		longStr[3] = `Play Again`;
	} // Decides winner
	final.innerHTML = longStr.join("");

	moves.style.display = "none";
	final.style.display = "flex";

	document.querySelector("#refresh").addEventListener( "click", () => {location.reload();} );
} // Ends game

function emojify( pick ) {
	if ( pick == "rock" ) return "rock (🥌)";
	if ( pick == "scissors" ) return "scissors (✂)";
	return "paper (📰)";
} // makes it pretty