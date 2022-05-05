function openTab( event, tabName ) {
	
	const tabId = document.querySelectorAll( "[id^=main]" );
	for ( let i = 0; i < tabId.length; i++ ) {
		tabId[ i ].style.display = "none";
	}

	const dash = document.getElementsByClassName( "dash" );
	for ( let i = 0; i < dash.length; i++ ) {
		dash[ i ].className = dash[ i ].className.replace( " active", "" );
	}

	document.getElementById( tabName ).style.display = "block";

	event.currentTarget.className += " active";

};