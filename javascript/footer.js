window.addEventListener("load", hentFooter);

async function hentFooter() {
	let footerHentes = await fetch("footer.html");
	let footer = await footerHentes.text();
	document.querySelector("#footer").innerHTML = footer;
}
