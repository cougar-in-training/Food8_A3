window.addEventListener("load", hentHeader);

async function hentHeader() {
    let headerHentes = await fetch("header.html");
    let header = await headerHentes.text();
    document.querySelector("#header").innerHTML = header;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".bar1 .bar2 .bar3").style.opacity = "0";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//==========Book Bord  ================



//document.querySelector("#book_bord").addEventListener("click", visModal);
//
//
//function visModal() {
//    console.log("visModal");
//    //    document.querySelector("#modal").style.visibility = "visible";
//    document.querySelector(".modal").style.opacity = "1";
//    document.querySelector(".modal").style.pointerEvents = "auto";
//    console.log("visModel");
//
//    document.querySelector(".modal .close").addEventListener("click", () => {
//
//        document.querySelector(".modal").style.opacity = (0);
//        document.querySelector(".modal").style.pointerEvents = "none";
//
//    });
//
//
//}
