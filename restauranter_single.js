
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

        if ( restaurant_single == null ){
            document.querySelector(".modtager_single").innerHTML = "Ingen id eller sidan inte funnits"
        }



        visRestaurant_single();
    }

    function visRestaurant_single(){

        klon.querySelector("[data-restaurant_splash]").src = restaurant_single.acf.coverbillede.url;
        klon.querySelector("[data-restaurant_name]").innerHTML = restaurant_single.title.rendered;
        klon.querySelector("[data-restaurant-overskrift]").innerHTML = restaurant_single.title.rendered;
        klon.querySelector("[data-restaurant-manchet]").innerHTML = restaurant_single.acf.manchet;
        klon.querySelector("[data-restaurant-description]").innerHTML = restaurant_single.acf.beskrivelse;

        klon.querySelector("[data-opening_hours_text]").innerHTML = "<h3>Åbningstider</h3>";
        klon.querySelector("[data-contact_text]").innerHTML = "<h3>Kontakt</h3>";
        klon.querySelector("[data-adress_text]").innerHTML = "<h3>Adresse</h3>";
        klon.querySelector("[data-hygien_text]").innerHTML = "<h3>Kontrolrapport</h3>";

        klon.querySelector("[data-opening-hours]").innerHTML = restaurant_single.acf.åbningstider;
        klon.querySelector("[data-contact]").innerHTML = restaurant_single.acf.kontakt;
        klon.querySelector("[data-adress]").innerHTML = restaurant_single.acf.adresse;
        klon.querySelector("[data-hygien]").href = restaurant_single.acf.kontrolrapport;
        document.querySelector("[data-page-title]").textContent = restaurant_single.title.rendered;

        // console.log("Inserting image");

        let galleri_modtager = document.querySelector("[data-gallery-modtager]");
        let acf = restaurant_single.acf
        let billeder = [
            acf.b_1,
            acf.b_2,
            acf.b_3,
            acf.b_4,
            acf.b_5,
            acf.b_6
        ];
        billeder.forEach(bild => {
            let img = document.createElement("img");
            img.src = bild
    
            galleri_modtager.appendChild(img)
        })

        modtager.appendChild(klon);


        if( id === "190" ){
            hentRetterJson();
            document.querySelector('.menu_display').classList.remove('hidden');
        }


    }

    let retter;

    let template_restaurant_menu = document.querySelector("[data-menu-restaurants]");
    // console.log(template_restaurant_menu);

    async function hentRetterJson() {

            let jsonObject = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/retter?per_page=100");

            retter = await jsonObject.json();

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


                let menu_klon = template_restaurant_menu.cloneNode(true).content;
//                menu_klon.querySelector("[data-dish-category]").innerHTML = ret.acf.kategori;
//                menu_klon.querySelector("[data-dish-type]").innerHTML = ret.acf.type_af_ret;
                menu_klon.querySelector("[data-price]").innerHTML = ret.acf.pris + " " +"kr";
                menu_klon.querySelector("[data-dish-name]").innerHTML = ret.title.rendered;
                menu_klon.querySelector("[data-description]").innerHTML = ret.acf.beskrivelse_af_ret;


                ret.acf.kategori.forEach(kategoriString => {
                    /**** Den enkelte rätts kategori ****/
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
                    if ( kategoriString === "frokost"){
                        selskabsmenu_modtager.appendChild(menu_klon);
                    }

                })

                modtager.appendChild(menu_klon);

                
            })

            menuBtnClick();
    }



/******* Dropdown restaurant menu button ********/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


// Close the dropdown menu if the user clicks outside of it
function menuBtnClick() {


    let modtagerSingle = document.querySelector('.modtager_single');
    let menubtn = modtagerSingle.querySelector("[data-restaurant-menubtn]");

    menubtn.addEventListener( 'click', (clickEvent) =>{
        clickEvent.preventDefault()
        document.querySelector("#myDropdown").classList.toggle("show");
    })
    

    let menuSubBtns = modtagerSingle.querySelectorAll('#myDropdown > a') // Dette er nu et array.

    menuSubBtns.forEach( submenuBtn => {
        submenuBtn.addEventListener( 'click', clickEvent => {
            document.querySelector("#myDropdown").classList.remove("show");
        })
    })
}

