    let url = new URL(window.location.href);

    let parameter = new URLSearchParams(url.search);

    let id = parameter.get("id");
//    let id = "190";

    let restaurant_single;

    let modtager = document.querySelector(".modtager");

    let restaurant_single_template = document.querySelector("[data-single-restaurants]");

    let klon = restaurant_single_template.cloneNode(true).content;


    document.addEventListener("DOMContentLoaded", hentJson);

    async function hentJson() {


            let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/restauranter/" + id);


            restaurant_single = await jsonObject.json();


            visRestaurant_single();
    }
        console.log(visRestaurant_single);
    function visRestaurant_single(){

        klon.querySelector("[data-restaurant_splash]").src = restaurant_single.acf.coverbillede.url;
        klon.querySelector("[data-restaurant_name]").innerHTML = restaurant_single.title.rendered;
        klon.querySelector("[data-restaurant-overskrift]").innerHTML = restaurant_single.title.rendered;
        klon.querySelector("[data-restaurant-manchet]").innerHTML = restaurant_single.acf.manchet;
        klon.querySelector("[data-restaurant-description]").innerHTML = restaurant_single.acf.beskrivelse;
        klon.querySelector("[data-opening-hours]").innerHTML = restaurant_single.acf.åbningstider;
        klon.querySelector("[data-contact]").innerHTML = restaurant_single.acf.kontakt;
        klon.querySelector("[data-adress]").innerHTML = restaurant_single.acf.adresse;
        klon.querySelector("[data-hygien]").innerHTML = restaurant_single.acf.kontrolrapport;

        modtager.appendChild(klon);

        if( id === "190" ){
            hentRetterJson();
            document.querySelector('.menu_display').classList.remove('hidden');
        }

    }

    let retter;

    let template_restaurant_menu = document.querySelector("[data-menu-restaurants]");


    async function hentRetterJson() {


            let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/retter?per_page=100");


            retter = await jsonObject.json();
            console.log(retter);

            visRetter();

    }

    let morgen_modtager = document.querySelector(".morgen_modtager");
    let brunch_modtager = document.querySelector(".brunch_modtager");
    let frokost_modtager = document.querySelector(".frokost_modtager");
    let aften_modtager = document.querySelector(".aften_modtager");
    let drikkevarer_modtager = document.querySelector(".drikkevarer_modtager");
    let selskabsmenu_modtager = document.querySelector(".selskabsmenu_modtager");


    function visRetter(){

			retter.forEach(ret => {

//                console.log(ret);


                let menu_klon = template_restaurant_menu.cloneNode(true).content;
//              menu_klon.querySelector("[data-dish-category]").innerHTML = ret.acf.kategori;
//              menu_klon.querySelector("[data-dish-type]").innerHTML = ret.acf.type_af_ret;
                menu_klon.querySelector("[data-price]").innerHTML = ret.acf.pris;
                menu_klon.querySelector("[data-dish-name]").innerHTML = ret.title.rendered;
                menu_klon.querySelector("[data-description]").innerHTML = ret.acf.beskrivelse_af_ret;


                ret.acf.kategori.forEach(kategoriString => {
                    /**** Den enkelte rets kategori ****/
                    console.log(kategoriString)
                    if ( kategoriString === "morgen"){
                        morgen_modtager.appendChild(menu_klon);
                    }
                    if ( kategoriString === "brunch"){
                        brunch_modtager.appendChild(menu_klon);
                    }
                    if ( kategoriString === "frokost"){
                        frokost_modtager.appendChild(menu_klon);
                    }
                    if ( kategoriString === "aften"){
                        aften_modtager.appendChild(menu_klon);
                    }
                    if ( kategoriString === "drikkevarer"){
                        drikkevarer_modtager.appendChild(menu_klon);
                    }

                })

                modtager.appendChild(menu_klon);

            })
    }


