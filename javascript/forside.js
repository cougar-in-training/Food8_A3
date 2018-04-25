let positioner = [];
let map;
let mapModtager = document.querySelector(".mapModtager");

async function hentJson() {
	let jsonObjekt = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/restauranter");
	//vis objekt som Json
	positioner = await jsonObjekt.json();
	console.log(positioner);


	let geocoder = new google.maps.Geocoder();



	//opret geocoder objekt
	positioner.forEach(pos => {
		// console.log("adresse er: ", pos.acf.adresse);
		// console.log("title er: ", pos.title.rendered);
		// console.log("icon er: ", pos.acf.coverbillede.url);
		let newAdresse = pos.acf.adresse;
		let newTitle = pos.title.rendered;
		let newIcon = pos.acf.logo.url;
		let newTid = pos.acf.åbningstider;



		geocoder.geocode({
			'address': newAdresse

		}, function (results, status) {
			if (status === 'OK') {
				//resultsMap.setCenter(results[0].geometry.location);
				let marker = new google.maps.Marker({
					map: map,
					title: newTitle,
					icon: newIcon,
					position: results[0].geometry.location
				});
				let infowindow = new google.maps.InfoWindow({
					content: "<h2>" + newTitle + "</h2> <p>" + pos.acf.adresse + "</p> <p>" + newTid + "</p>"
				});
				marker.addListener('click', () => {
					infowindow.open(map, marker);
				});

			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}


		});


	});


}

async function hentJsonShops() {
	let jsonShops = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/forhandler");
	//vis objekt som Json
	positioner2 = await jsonShops.json();
	console.log(positioner2);


	let geocoder = new google.maps.Geocoder();



	//opret geocoder objekt
	positioner2.forEach(pos2 => {
		// console.log("adresse er: ", pos.acf.adresse);
		// console.log("title er: ", pos.title.rendered);
		// console.log("icon er: ", pos.acf.coverbillede.url);
		let newAdresse2 = pos2.acf.adresse;
		let newTitle2 = pos2.acf.navn_pa_forhandler;
		let newIcon2 = pos2.acf.logo;
		let newTid2 = pos2.acf.åbningstider;



		geocoder.geocode({
			'address': newAdresse2

		}, function (results, status) {
			if (status === 'OK') {
				//resultsMap.setCenter(results[0].geometry.location);
				let marker2 = new google.maps.Marker({
					map: map,
					title: newTitle2,
					icon: newIcon2,
					position: results[0].geometry.location
				});
				let infowindow = new google.maps.InfoWindow({
					content: "<h2>" + newTitle2 + "</h2> <p>" + pos2.acf.adresse + "</p> <p>" + newTid2 + "</p>"
				});
				marker2.addListener('click', () => {
					infowindow.open(map, marker2);
				});

			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}


		});


	});


}




function initMap() {
	console.log("positioner er:", positioner);
	//koordinater for kortets centrum
	let copenhagen = {
		lat: 55.676097,
		lng: 12.568337
	};

	//function til at oprette et kort
	map = new google.maps.Map(document.querySelector('#map'), {

		//zoom level
		zoom: 13,
		center: copenhagen
	});

	hentJson();
	hentJsonShops();
};
