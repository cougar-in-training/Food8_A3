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

//document.querySelector("#book_bord").addEventListener("click", visModel);
//
//
//function visModel() {
//    document.querySelector("#popup").style.visibility = "visible";
//
//}
// Get the modal
let modal = document.getElementById("modal");
console.log(modal);

// Get the button that opens the modal
let btn = document.getElementById("book_bord");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName(".close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
