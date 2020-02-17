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

const grid = document.getElementById("grid");

const allCards = document.getElementsByClassName("card");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");

const makeFullCard = targetElement => {
  targetElement.classList.remove("halfCard", "rowCard");
  targetElement.classList.add("fullCard");
  targetElement
    .getElementsByClassName("text")[0]
    .getElementsByTagName("h2")[0]
    .classList.remove("card-title");
  targetElement
    .getElementsByClassName("text")[0]
    .getElementsByTagName("h2")[0]
    .classList.add("card-title-l");
};
const makeHalfCard = targetElement => {
  targetElement.classList.remove("fullCard", "rowCard");
  targetElement.classList.add("halfCard");
  targetElement
    .getElementsByClassName("text")[0]
    .getElementsByTagName("h2")[0]
    .classList.remove("card-title-l");
  targetElement
    .getElementsByClassName("text")[0]
    .getElementsByTagName("h2")[0]
    .classList.add("card-title");
};

const makeRowCard = targetElement => {
  targetElement.classList.remove("fullCard", "halfCard");
  targetElement.classList.add("rowCard");
  targetElement
    .getElementsByClassName("text")[0]
    .getElementsByTagName("h2")[0]
    .classList.remove("card-title-l");
  targetElement
    .getElementsByClassName("text")[0]
    .getElementsByTagName("h2")[0]
    .classList.add("card-title");
};

var xl = window.matchMedia("(min-width: 1201px)");
var l = window.matchMedia("(max-width: 1200px) and (min-width: 769px)");
var m = window.matchMedia("(max-width: 768px) and (min-width: 631px)");
var s = window.matchMedia("(max-width: 630px)");

const setXL = xl => {
  if (xl.matches) {
    for (var i = 0; i < allCards.length; i++) {
      allCards[i].classList.remove("rowCard");
    }
    makeFullCard(card1);
    makeFullCard(card4);
    makeFullCard(card6);
    makeHalfCard(card2);
    makeHalfCard(card3);
    makeHalfCard(card5);
    makeHalfCard(card7);
    makeHalfCard(card8);
    header.style.height = "125vh";
    grid.classList.remove("grid-l", "grid-m", "grid-s");
    grid.classList.add("grid-xl");
  }
};
const setL = l => {
  if (l.matches) {
    for (var i = 0; i < allCards.length; i++) {
      allCards[i].classList.remove("rowCard");
    }
    header.style.height = "200vh";
    makeFullCard(card1);
    makeFullCard(card5);
    makeHalfCard(card2);
    makeHalfCard(card3);
    makeHalfCard(card4);
    makeHalfCard(card6);
    makeHalfCard(card7);
    makeHalfCard(card8);

    grid.classList.remove("grid-xl", "grid-m", "grid-s");
    grid.classList.add("grid-l");
  }
};
const setM = m => {
  if (m.matches) {
    for (var i = 0; i < allCards.length; i++) {
      allCards[i].classList.remove("rowCard");
    }
    makeFullCard(card1);
    makeFullCard(card4);
    makeHalfCard(card2);
    makeHalfCard(card3);
    makeHalfCard(card5);
    makeHalfCard(card6);
    makeHalfCard(card7);
    makeHalfCard(card8);
    header.style.height = "200vh";
    grid.classList.remove("grid-xl", "grid-l", "grid-s");
    grid.classList.add("grid-m");
  }
};
const setS = s => {
  if (s.matches) {
    header.style.height = "120vh";
    grid.classList.remove("grid-xl", "grid-l", "grid-m");
    grid.classList.add("grid-s");
    for (var i = 0; i < allCards.length; i++) {
      makeRowCard(allCards[i]);
    }
  }
};

setXL(xl);
setL(l);
setM(m);
setS(s);

xl.addListener(setXL);
l.addListener(setL);
m.addListener(setM);
s.addListener(setS);

// var x = window.matchMedia("(max-width: 700px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes
