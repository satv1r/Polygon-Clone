const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const searchText = document.getElementById("searchText");
const header = document.getElementById("header");

const mGaming = document.getElementById("mGaming");
const mEntertainment = document.getElementById("mEntertainment");
const more = document.getElementById("more");
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
