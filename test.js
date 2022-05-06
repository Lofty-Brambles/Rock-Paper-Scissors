console.log("test");

document.querySelector(".dash.main").addEventListener("click", openTab("main"));
document.querySelector(".dash.logs").addEventListener("click", openTab("logs"));
document.querySelector(".dash.gallery").addEventListener("click", openTab("gallery"));
document.getElementById("default").click();

function openTab( tabOpen ) {
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
}
