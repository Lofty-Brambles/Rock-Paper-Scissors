console.log("test");
function openTab( name, tabOpen ) {
	const dash = document.getElementsByClassName("dash");
	for (let i = 0; i < dash.length; i++) {
		dash[i].className = dash[i].className.replace( " active", "" );
	}

	const tabContent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";		
	}

	document.getElementById(tabOpen).style.display = "flex";
	name.currentTarget.className += " active";
}

document.getElementById("default").click();