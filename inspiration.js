 document.addEventListener("DOMContentLoaded", hentJson);

 let modtager = document.querySelector("[data-opslagModtager]");
 let template = document.querySelector("[data-opslagTemplate]");


 let filtertype;
 let filternavn = "Alle";

 let filterknapper = document.querySelectorAll(".filters button").forEach(knap => {
     knap.addEventListener("click", (e) => {
         filtertype = e.target.className;
         filternavn = e.target.textContent;

         hentJson();
     });

 });

 async function hentJson() {

     let jsonObjekt = await fetch("http://josefinerasch.dk/kea/07-cms/food8/wordpress/wp-json/wp/v2/inspiration");

     inspiration = await jsonObjekt.json();
     console.log(inspiration);
     lavFiltrering();


 }

 function lavFiltrering() {
     document.querySelector("#opslag").textContent = filternavn;
     if (filternavn != "Alle") {
         let arrr = [];
         inspiration = inspiration.filter(obs => obs.acf[filtertype] == filternavn);
     }

     inspirationOpslag();
 }


 function inspirationOpslag() {

     document.querySelector("#alleOpslag").innerHTML = "";
     inspiration.forEach(element => {
         let klon = template.cloneNode(true).content;

         klon.querySelector("[data-linkOpslag]").href = "inspiration_single.html?id=" + element.id;
         klon.querySelector("[data-alleOpslagImg]").src = element.acf.billede;
         klon.querySelector("[data-inspirationType]").innerHTML = element.acf.type;
         klon.querySelector("[data-opslagTekst]").innerHTML = element.title.rendered;

         document.querySelector("#alleOpslag").appendChild(klon);



     });
 }
