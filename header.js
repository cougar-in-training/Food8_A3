window.addEventListener("load", hentHeader);

async function hentHeader() {

	let headerHentes = await fetch("header.html");
	let header = await headerHentes.text();
	document.querySelector("#header").innerHTML = header;

	document.querySelector(".popup").style.pointerEvents = "none";

}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.querySelector(".bar1 .bar2 .bar3").style.opacity = "0";

}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

////////////////////nyhedsbrev
document.querySelector("#nyhedsbrev").addEventListener("click", showNyhedsbrev);
//document.querySelector("#nyhedsbrev").addEventListener("click", showNyhedsbrev);

function showNyhedsbrev() {
	console.log("vis");
	document.querySelector(".popup").style.pointerEvents = "auto";
	document.querySelector(".popup").style.opacity = "1";
	document.querySelector(".single_btn").addEventListener("click", hideNyhedsbrev);
}


function hideNyhedsbrev() {
	console.log("luk");
	document.querySelector(".popup").style.pointerEvents = "none";
	document.querySelector(".popup").style.opacity = "0";

}
///////////////////////////nyhedsbrev slut
