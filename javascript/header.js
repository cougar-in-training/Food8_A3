window.addEventListener("load", hentHeader);

async function hentHeader() {
	let headerHentes = await fetch("header.html");
	let header = await headerHentes.text();
	document.querySelector("#header").innerHTML = header;
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.querySelector(".bar1 .bar2 .bar3").style.opacity = "0";

}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
