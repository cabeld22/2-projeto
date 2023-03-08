const buttonMenu = document.getElementById("buttonMenu");
let imgbtn = document.querySelector("#imagem-do-botao");
let linksMenu = document.getElementById("links-menu");
let menu = document.getElementById("menu");
buttonMenu.addEventListener("click", function () {
  if (document.querySelector(".img-on")) {
    document.querySelector(".img-on").src = "./img/icon-menu-close.svg";
    imgbtn.classList.remove("img-on");
    imgbtn.classList.add("img-off");

    linksMenu.classList.remove("menu-oculto");
    linksMenu.classList.add("links-menu");
    menu.classList.add("menu-voador");
  } else {
    document.querySelector(".img-off").src = "./img/icon-menu.svg";
    imgbtn.classList.remove("img-off");
    imgbtn.classList.add("img-on");
    document.getElementById("links-menu").classList.remove("menu-oculto");
    linksMenu.classList.add("menu-oculto");

    linksMenu.classList.remove("links-menu");
    menu.classList.remove("menu-voador");
  }
});
