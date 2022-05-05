function openTab( event, tabName ) {
	
	const dash = document.getElementsByClassName( "dash" );
	for ( let i = 0; i < dash.length; i++ ) {
		dash[ i ].className = dash[ i ].className.replace( " active", "" );
	}
	
	const tabContent = document.getElementsByClassName( "tabcontent" );
	for ( let i = 0; i < tabContent.length; i++ ) {
		tabContent[ i ].style.display = "none";
	}

	document.getElementById( tabName ).style.display = "block";

	event.currentTarget.className += " active";

};

document.getElementById( "default" ).click();