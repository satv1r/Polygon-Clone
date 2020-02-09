const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const searchText = document.getElementById("searchText");
const header = document.getElementById("header");
const body = document.querySelector("body");

const gaming = document.getElementById("mGaming");
const gamingDC = document.getElementById("gamingDC");
const entertainment = document.getElementById("mEntertainment");
const entertainmentDC = document.getElementById("entertainmentDC");
const more = document.getElementById("mMore");
const moreDC = document.getElementById("moreDC");

gamingDC.style.display = "none";
entertainmentDC.style.display = "none";
moreDC.style.display = "none";

gaming.addEventListener("click", e => {
  if (gamingDC.style.display === "none") {
    moreDC.style.display = "none";
    entertainmentDC.style.display = "none";
    gamingDC.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    gamingDC.style.display = "none";
    body.style.overflow = "visible";
  }
  e.preventDefault();
});

entertainment.addEventListener("click", e => {
  if (entertainmentDC.style.display === "none") {
    moreDC.style.display = "none";
    gamingDC.style.display = "none";
    entertainmentDC.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    entertainmentDC.style.display = "none";
    body.style.overflow = "visible";
  }
  e.preventDefault();
});

more.addEventListener("click", e => {
  if (moreDC.style.display === "none") {
    entertainmentDC.style.display = "none";
    gamingDC.style.display = "none";
    moreDC.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    moreDC.style.display = "none";
    body.style.overflow = "visible";
  }
  e.preventDefault();
});

header.addEventListener("click", e => {
  searchIcon.style.color = "";
  searchBar.style.display = "none";
  e.preventDefault();
});

searchIcon.addEventListener("click", e => {
  if (searchBar.style.display === "flex") {
    console.log("making invisible");
    searchIcon.style.color = "";
    searchBar.style.display = "none";
  } else {
    console.log("making visible!");
    searchIcon.style.color = "rgb(92, 9, 92)";
    searchBar.style.display = "flex";
    searchText.focus();
  }

  e.preventDefault();
});
