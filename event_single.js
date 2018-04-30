document.addEventListener("DOMContentLoaded", hentEventJson);

async function hentEventJson() {
	// let urlParams = new URLSearchParams(window.location.search);
	// let id = urlParams.get("id");
	let url = new URL(window.location.href);
	let parameter = new URLSearchParams(url.search);
	let id = parameter.get("id");



	let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/arrangement/" + id);

	let singleEvent = await jsonObject.json();

	document.querySelector("[data-eventsTitle]").innerHTML = singleEvent.acf.titel_pa_arrangementet;

	document.querySelector("[data-eventsArrangør]").textContent = singleEvent.acf.arrangor;

	document.querySelector("[data-eventsBeskrivelse]").innerHTML = singleEvent.acf.beskrivelse_af_arrangementet;

	console.log(singleEvent);
	document.querySelector("[data-eventImage]").src = singleEvent.acf.billede;

	document.querySelector("[data-dato]").textContent = singleEvent.acf.dato;

	document.querySelector("[data-tidspunkt]").textContent = singleEvent.acf.tidspunkt;

	document.querySelector("[data-adresse]").textContent = singleEvent.acf.adresse_hvor_arrangementet_afholdes;

	document.querySelector("[data-billet]").textContent = singleEvent.acf.kob_billet;

}
