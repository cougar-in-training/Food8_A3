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
let imgArray = {
	"topDiv": [{
		"topImg1": "forsideTop",
		"timedelay": 3000
	}],
	"nedDiv": [{
		"nedImg1": "forsideNed",
		"timedelay": 3000
	}],
	"sideDiv": [{
		"sideImg1": "forsideInspiration",
		"timedelay": 3000
	}]
};
let topImg = imgArray.topdiv;
let botImg = imgArray.nedDiv;
let sideImg = imgArray.sideDiv;
let topDivImg = document.querySelector('[data-forsideTop]').children[0];
let botDivImg = document.querySelector('[data-forsideNed]').children[0];
let sideDivImg = document.queryCommandState('[data-forsideInspiration]').children[0];
let time = 10;

let imge_1 = function () {
	let elm_1 = topImg[Math.floor(Math.random() * topImg.length)];
	topDivImg.src = elm_1.topImg1;
	let time = elm_1.timedelay;
	setTimeout(imge_1, time);
};
setTimeout(imge_1, time);

let imge_2 = function () {
	let elm_2 = botImg[Math.floor(Math.random() * botImg.length)];
	botDivImg.src = elm_2.nedImg1;
	let time = elm_2.timedelay;
	setTimeout(imge_2, time);
};
setTimeout(imge_2, time);

let imge_3 = function () {
	let elm_3 = sideImg[Math.floor(Math.random() * sideImg.length)];
	sideDivImg.src = elm_3.sideImg1;
	let time = elm_3.timedelay;
	setTimeout(imge_3, time);
};
setTimeout(imge_3, time);
