document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
	let url = new URL(window.location.href);
	let parameter = new URLSearchParams(url.search);
	let id = parameter.get("id");
	if (id == null) {
		console.log("Yolo")
		document.querySelector("[data-forhandlernavn]").textContent = "INGET ID ELLER JEG HAR IKKE FUNDET NOGET!!"
	}

	let jsonData = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/forhandler/" + id);
	let single = await jsonData.json();
	document.querySelector("[data-coverbillede]").src = single.acf.coverbillede;
	document.querySelector("[data-manchet]").innerHTML = single.acf.manchet;
	document.querySelector("[data-beskrivelse]").innerHTML = single.acf.beskrivelse;
	document.querySelector("[data-titel-hours]").textContent = "Åbningstider";
	document.querySelector("[data-opening-hours]").innerHTML = single.acf.åbningstider;
	document.querySelector("[data-titel-contact]").textContent = "Kontakt";
	document.querySelector("[data-contact]").innerHTML = single.acf.kontakt;
	document.querySelector("[data-titel-adress]").textContent = "Find os";
	document.querySelector("[data-adress]").innerHTML = single.acf.adresse;
	document.querySelector("[data-titel-hygien]").textContent = "Kontrolrapport";
	document.querySelector("[data-hygien]").textContent = single.acf.kontrollrapport;
	document.querySelector("[data-forhandlerNavn]").textContent = single.acf.navn_pa_forhandler;
	document.querySelector("[data-page-title]").textContent = single.acf.navn_pa_forhandler;

	let galleri_modtager = document.querySelector("[data-gallery-modtager]");
	let acf = single.acf
	let billeder = [
            acf.billede_1,
            acf.billede_2,
            acf.billede_3,
        ];

	billeder.forEach(bild => {
		let img = document.createElement("img");
		img.src = bild

		galleri_modtager.appendChild(img)
	})

	// ændre url efter / og erstatter med forhandlernavnet
	let stateObj = {
		forhandler_single: "navn"
	};

	//syntaks: history.pushState("object or string representing the state of the page", "new title", "newURL");
	history.pushState(stateObj, "forhandler", single.acf.navn_pa_forhandler);



}
