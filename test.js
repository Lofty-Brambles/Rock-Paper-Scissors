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
const computerWinReplies = [];
const playerWinReplies = [];
const moveArray = ["rock", "paper", "scissors"]; // The computer's moves

const butts = document.querySelectorAll(".move");
butts.forEach( butt => {
	butt.addEventListener( "click", start() );
}); // Adds button listeners

function start( e ) {
	const playerMove = e.target.id;
	const con = random( moveArray );
	console.log(con);
	decideWinner( playerMove, con );

	if ( cScore === 5 || pScore === 5 ) {
		callEndNotif();
		butts.forEach( butt => {
			butt.removeEventListener( "click", start() );
		});
	} // Removes button listeners on game's end
} // The main game function

function random(arr) {
	return arr[ Math.floor( Math.random() * arr.length ) ];
}

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
		logs.appendChild( div );
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
		logs.appendChild( div );
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
		logs.appendChild( div );
	}
}

function callEndNotif() {
	const div = document.createElement("div");
	
}