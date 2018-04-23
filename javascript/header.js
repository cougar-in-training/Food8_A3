window.addEventListener("load", hentHeader);

async function hentHeader() {
	let headerHentes = await fetch("header.html");
	let header = await headerHentes.text();
	document.querySelector("#header").innerHTML = header;
}




//function toggleMenu() {
//	console.log("virker du");
//	document.querySelector(".burger").classList.toggle("change");
//	document.querySelector("nav").classList.toggle("show");
//}
//document.querySelector(".burger").addEventListener("click", toggleMenu);
//document.querySelector("nav").addEventListener("click", toggleMenu);
//
//
//window.onscroll = function () {
//	stickyNav()
//};
//
//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//
//function stickyNav() {
//	if (window.pageYOffset >= sticky) {
//		navbar.classList.add("sticky")
//	} else {
//		navbar.classList.remove("sticky");
//	}
//}
