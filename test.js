console.log("test");

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
}