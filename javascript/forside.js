let forsideImg;
let minTemplate = document.querySelector("#forsideTemplate");

//hent json
document.addEventListener("DOMContentLoaded", hentJsonTop);

async function hentJsonTop() {
	let jsonTop = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/forhandler");
	//vis objekt som Json
	forsideTop = await jsonTop.json();

	visTop();
}

//lav klon af template
function visTop() {
	console.log("hallo!");

	//kør json array'et igennem og lav en klon af template
	forsideTop.forEach(element => {
		let klon = minTemplate.cloneNode(true).content;

		klon.querySelector("[data-forsideTop]").src = element.acf.coverbillede;
		//
		//		klon.querySelector("[data-forsideNed]").src = element.acf.coverbillede;
		//
		//		klon.querySelector("[data-forsideInspiration]").src = element.acf.billede;

		document.querySelector("#forsideModtager").appendChild(klon);
	})
}

document.addEventListener("DOMContentLoaded", hentJsonNed);

async function hentJsonNed() {
	let jsonNed = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/restauranter");
	//vis objekt som Json
	forsideNed = await jsonNed.json();

	visNed();
}

function visNed() {
	console.log("hej!");

	forsideNed.forEach(element => {
		let klon = minTemplate.cloneNode(true).content;

		klon.querySelector("[data-forsideNed]").src = element.acf.coverbillede.url;

		document.querySelector("#forsideModtager").appendChild(klon);
	})
}

document.addEventListener("DOMContentLoaded", hentJsonInspiration);

async function hentJsonInspiration() {
	let jsonInspiration = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/inspiration");
	//vis objekt som Json
	forsideInspiration = await jsonInspiration.json();

	visInspiration();
}

function visInspiration() {
	console.log("godmorgen!");

	forsideInspiration.forEach(element => {
		let klon = minTemplate.cloneNode(true).content;

		klon.querySelector("[data-forsideInspiration]").src = element.acf.billede;

		document.querySelector("#forsideModtager").appendChild(klon);
	})
}
