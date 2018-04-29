let event;
let template = document.querySelector("[data-eventTemplate]");

document.addEventListener("DOMContentLoaded", hentEventJson);

async function hentEventJson() {
	//hent json
	let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/arrangement");
	//vis objekt som json
	event = await jsonObject.json();
	visEvent();
}
//lav klon af templat

function visEvent() {
	event.forEach(element => {
		let klon = template.cloneNode(true).content;

		klon.querySelector("[data-eventsTitle]").innerHTML = element.acf.titel_pa_arrangementet;

		klon.querySelector("[data-eventsArrangør]").textContent = element.acf.arrangor;

		/*klon.querySelector("[data-eventsBeskrivelse]").innerHTML = element.acf.beskrivelse_af_arrangementet;*/

		klon.querySelector("[data-eventImage]").src = element.acf.billede;

		klon.querySelector("[data-dato]").textContent = element.acf.dato;

		klon.querySelector("[data-tidspunkt]").textContent = element.acf.tidspunkt;

		klon.querySelector("[data-adresse]").textContent = element.acf.adresse_hvor_arrangementet_afholdes;

		klon.querySelector("[data-billet]").textContent = element.acf.kob_billet;

		klon.querySelector("[data-single]").href = "event_single.html?id=" + element.id;

		document.querySelector("[data-modtager]").appendChild(klon);

	})

}
