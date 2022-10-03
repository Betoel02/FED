// JavaScript Document - met ondersteuning van Sanne nav werkend gekregen!)
console.log("hi");

var menuButton = document.querySelector("header li:nth-of-type(4) button");
// var buttonOpen

menuButton.addEventListener("click", openMenu);

function openMenu() {
    var headerNav = document.querySelector("header nav:first-of-type");
    headerNav.classList.add("buttonOpen");
    /*class zichtbaar bij het open klikken*/
}

var closeButton = document.querySelector("header nav button");

closeButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    var headerNav = document.querySelector("header nav:first-of-type");
    headerNav.classList.remove("buttonOpen");
}
