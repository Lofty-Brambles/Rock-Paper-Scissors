function get() {

	let round = 0, pScore = 0, cScore = 0;
	const table = {};

	console.log( "🏆 | Start | 🏆" );

	main: while(true) {

		const playerPick = prompt( `Round ${++round}: Choose! Rock, paper or scissors?` ).toLowerCase().trim();
        console.log( "🔄 | Processing" );

		if ( verifyPick( playerPick ) ) {
			console.log( "❌ | You made an invalid input! Please try again!" );
			continue main;
		};

		const {message, resultEntry, res} = decideWinner( playerPick, computerPlay() );
		if ( res === "Player" ) pScore++;
		if ( res === "Computer") cScore++;
		resultEntry["Score-card"] = `${pScore} - ${cScore}`;
		table[`Round ${round}`] = resultEntry;

		console.log( message );
		console.table( table );

		if ( cScore == 5) {
			console.log( "❎ | Match over! Unfortunately, the computer wins... | ❎" );
            break main;
		} else if ( pScore == 5 ) {
			console.log( "✅ | Match over! You win! | ✅" );
            break main;
		} else {
			console.log( "🔃 | Next Round!" )
		};
	};

}

function verifyPick( pick ) {
	if ( ( pick !== "rock" ) && ( pick !== "scissors" ) && ( pick !== "paper" ) ) return true;
	return false;
};

function computerPlay() {
    const results = [ "rock", "paper", "scissors" ];
    return results[ Math.floor( Math.random() * results.length ) ];
}

function emojify( pick ) {
	if ( pick == "rock" ) return "🥌";
	if ( pick == "scissors" ) return "✂";
	return "📰";
}

function decideWinner( pPick , cPick ) {
	const event = {
        "rock": {
            "rock": ["You Draw!", ""],
            "paper": ["You Lose! Rock [🗿] loses to Paper [📄]!", "Computer"],
            "scissors": ["You Win! Rock [🗿] defeats Scissors [✂]!", "Player"]
        },
        "scissors": {
            "rock": ["You Lose! Scissors [✂] loses to Rock [🗿]!", "Computer"],
            "paper": ["You Win! Scissors [✂] defeats Paper [📄]!", "Player"],
            "scissors": ["You Draw!", ""]
        },
        "paper": {
            "rock": ["You Win! Paper [📄] defeats Rock [🗿]!", "Player"],
            "paper": ["You Draw!", ""],
            "scissors": ["You Lose! Paper [📄] loses to Scissors [✂]!", "Computer"]
        }
    };

	let returnArray = event[pPick][cPick];
	const mes = returnArray[0];
	
	return {
		message: mes,
		resultEntry: {
			"Player's Pick": emojify(pPick),
			"Computer's Pick": emojify(cPick)
		},
		res: returnArray[1]
	};
}

get();