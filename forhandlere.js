        let forhandler;
		let template = document.querySelector("[data-forhandlerTemplate]");

		document.addEventListener("DOMContentLoaded", hentJson);

		async function hentJson() {
			let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/forhandler");
			forhandler = await jsonObject.json();
			visForhandlere();

		}
		function visForhandlere() {
			forhandler.forEach(element => {
				let klon = template.cloneNode(true).content;
				klon.querySelector("[data-link]").href = "forhandler_single.html?id=" + element.id;
				klon.querySelector("[data-coverbillede]").src = element.acf.coverbillede;
				klon.querySelector("[data-forhandlerNavn]").textContent = element.acf.navn_pa_forhandler;
				document.querySelector("[data-modtager]").appendChild(klon);
			})
		}
