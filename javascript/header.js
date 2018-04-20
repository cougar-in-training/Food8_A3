window.addEventListener("load", hentHeader);

async function hentHeader() {
	let headerHentes = await fetch("header.html");
	let header = await headerHentes.text();
	document.querySelector("#header").innerHTML = header;
}
