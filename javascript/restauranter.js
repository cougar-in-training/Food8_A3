        let restauranter;
        let modtager = document.querySelector("[data-restaurantItemModtager]");

        let template_page = document.querySelector("[data-page-restaurants]");

        let klon = template_page.cloneNode(true).content;

        modtager.appendChild(klon);

        document.addEventListener("DOMContentLoaded", hentJson);

        let template_item = document.querySelector("[data-restaurants-grid-item]");

    async function hentJson() {


            let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/restauranter");


            restauranter = await jsonObject.json();


            visRestauranter();
    }

        function visRestauranter() {


			restauranter.forEach(restaurant => {

                console.log(restaurant);

                let grid_item_klon = template_item.cloneNode(true).content;

                grid_item_klon.querySelector("[data-h2]").textContent = restaurant.title.rendered;
                grid_item_klon.querySelector("[data-img]").src = restaurant.acf.coverbillede.url;
                grid_item_klon.querySelector("[data-restaurants-grid-item-id]").href = "http://127.0.0.1:59117/html/restauranter_single.html?id="+restaurant.id;

                modtager.appendChild(grid_item_klon);

            })
            }
