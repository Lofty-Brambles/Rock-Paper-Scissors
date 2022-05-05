function openTab( event, tabName ) {
	
	const dash = document.getElementsByClassName( "dash" );
	for ( let i = 0; i < dash.length; i++ ) {
		dash[ i ].className = dash[ i ].className.replace( " active", "" );
	}
	
	const tabId = document.querySelectorAll( "[id^=main]" );
	for ( let i = 0; i < tabId.length; i++ ) {
		tabId[ i ].style.display = "none";
	}

	document.getElementById( tabName ).style.display = "block";

	event.currentTarget.className += " active";

};