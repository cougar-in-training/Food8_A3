window.addEventListener("load", hentHeader);

async function hentHeader() {

	let headerHentes = await fetch("header.html");
	let header = await headerHentes.text();
	document.querySelector("#header").innerHTML = header;

	document.querySelector(".popup").style.pointerEvents = "none";
	document.querySelector("[data-popup]").style.pointerEvents = "none";
	document.querySelector("[data-kalenderImg]").style.pointerEvents = "none";
	document.querySelector("[data-tidImg]").style.pointerEvents = "none";
	document.querySelector("[data-ledigImg]").style.pointerEvents = "none";
	document.querySelector("[data-forslag]").style.pointerEvents = "none";
	document.querySelector("[data-ledigTid]").style.pointerEvents = "none";

	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "none";
	document.querySelector("[data-bookingModtaget]").style.pointerEvents = "none";
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.querySelector(".bar1 .bar2 .bar3").style.opacity = "0";

}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

////////////////////nyhedsbrev
document.querySelector("#usynlig_btn").addEventListener("click", showNyhedsbrev);
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

document.querySelector("[data-submitNyhed]").addEventListener("click", showTilmeldtNyhedsbrev);

function showTilmeldtNyhedsbrev() {
	console.log("submit");
	document.querySelector(".popup_content").style.opacity = "0";

	document.querySelector("[data-tilmeldingModtaget]").style.opacity = "1";
	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "auto";

	setTimeout(slut, 3000);
}

function slut() {
	console.log("slut");
	document.querySelector("[data-tilmeldingModtaget]").style.opacity = "0";
	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "none";
	document.querySelector(".popup").style.opacity = "0";
}

///////////////////////////nyhedsbrev slut

////////////////////book bord
document.querySelector("#usynlig2_btn").addEventListener("click", showNyhedsbrev2);
//document.querySelector("#nyhedsbrev").addEventListener("click", showNyhedsbrev);

function showNyhedsbrev2() {
	console.log("vis2");
	document.querySelector("[data-popup]").style.pointerEvents = "auto";
	document.querySelector("[data-popup]").style.opacity = "1";
	document.querySelector("[data-book]").addEventListener("click", hideNyhedsbrev2);
}


function hideNyhedsbrev2() {
	console.log("luk2");
	document.querySelector("[data-popup]").style.pointerEvents = "none";
	document.querySelector("[data-popup]").style.opacity = "0";

}


document.querySelector("[data-submitBook]").addEventListener("click", showBookingBekraeft);

function showBookingBekraeft() {
	console.log("submit");
	document.querySelector("[data-popup_content]").style.opacity = "0";

	document.querySelector("[data-bookingModtaget]").style.opacity = "1";
	document.querySelector("[data-bookingModtaget]").style.pointerEvents = "auto";

	setTimeout(slut2, 3000);
}

function slut2() {
	console.log("slut2");
	document.querySelector("[data-bookingModtaget]").style.opacity = "0";
	document.querySelector("[data-bookingModtaget]").style.pointerEvents = "none";
	document.querySelector("[data-popup]").style.opacity = "0";
}

///////////////////////////book bord slut


document.querySelector("[data-imgMockup]").addEventListener("click", showKalender);

function showKalender() {
	console.log("book");
	document.querySelector("[data-kalenderImg]").style.pointerEvents = "auto";

	document.querySelector("[data-kalenderImg]").classList.add("kalender");
	document.querySelector("[data-kalenderImg]").style.opacity = "1";

	document.querySelector("[data-kalenderImg]").addEventListener("click", fork);

}

function fork() {
	console.log("fork");

	//var random = Math.random();
	//var random = 0.6;
	if (Math.random() >= 0.5) {
		showOthers();
	} else {
		showTid();
	}
}

function showOthers() {
	console.log("declined");

	document.querySelector("[data-ledigTid]").style.opacity = "0";
	document.querySelector("[data-ledigImg]").style.opacity = "0";
	document.querySelector("[data-tidImg]").style.opacity = "0";


	document.querySelector("[data-ledigTid]").classList.remove("ledig_tid");
	document.querySelector("[data-tidImg]").classList.remove("tid");
	document.querySelector("[data-ledigImg]").classList.remove("ledig");

	document.querySelector("[data-optagetImg]").style.opacity = "1";
	document.querySelector("[data-optagetImg]").classList.add("optaget");

	setTimeout(showAlternatives, 2000);
}

function showAlternatives() {
	//	document.querySelector("[data-kalenderImg]").classList.remove("kalender");
	//	document.querySelector("[data-kalenderImg]").style.opacity = "0";
	//	document.querySelector("[data-kalenderImg]").style.pointerEvents = "none";

	//	document.querySelector("[data-optagetImg]").classList.remove("optaget");
	//	document.querySelector("[data-optagetImg]").style.opacity = "0";
	//	document.querySelector("[data-optagetImg]").style.pointerEvents = "none";

	document.querySelector("[data-forslag]").style.opacity = "1";
	document.querySelector("[data-forslag]").style.pointerEvents = "auto";

	document.querySelector("[data-forslag]").classList.add("forslag");

}



function showTid() {
	console.log("tid");
	document.querySelector("[data-tidImg]").style.pointerEvents = "auto";
	document.querySelector("[data-ledigImg]").style.pointerEvents = "auto";

	document.querySelector("[data-tidImg]").classList.add("tid");
	document.querySelector("[data-tidImg]").style.opacity = "1";
	document.querySelector("[data-ledigImg]").style.opacity = "1";
	document.querySelector("[data-ledigImg]").classList.add("ledig");

	document.querySelector("[data-tidImg]").addEventListener("click", showLedigTid);
}

function showLedigTid() {
	console.log("ledig tid");
	document.querySelector("[data-ledigTid]").style.pointerEvents = "auto";

	document.querySelector("[data-ledigTid]").classList.add("ledig_tid");
	document.querySelector("[data-ledigTid]").style.opacity = "1";

	//	document.querySelector("[data-ledigTid]").addEventListener("click", hideKalenderBooking());
	setTimeout(hideKalenderBooking, 2000);
}

function hideKalenderBooking() {
	console.log("hide kalender");

	document.querySelector(".popup").style.pointerEvents = "none";
	document.querySelector(".popup_content").style.pointerEvents = "none";
	document.querySelector("[data-ledigTid]").style.pointerEvents = "none";
	document.querySelector("[data-kalenderImg]").style.pointerEvents = "none";
	document.querySelector("[data-tidImg]").style.pointerEvents = "none";
	document.querySelector("[data-ledigImg]").style.pointerEvents = "none";
	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "none";
	document.querySelector("[data-book]").style.pointerEvents = "none";

	document.querySelector("[data-kalenderImg]").style.opacity = "0";
	document.querySelector("[data-ledigTid]").style.opacity = "0";
	document.querySelector("[data-ledigImg]").style.opacity = "0";
	document.querySelector("[data-tidImg]").style.opacity = "0";

	document.querySelector("[data-kalenderImg]").classList.remove("kalender");
	document.querySelector("[data-ledigTid]").classList.remove("ledig_tid");
	document.querySelector("[data-tidImg]").classList.remove("tid");
	document.querySelector("[data-ledigImg]").classList.remove("ledig");
}
