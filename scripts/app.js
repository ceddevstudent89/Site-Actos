// Navbar Animée
const btnNav = document.querySelector(".responsive-nav-btn");
const listeNav = document.querySelector("nav ul");
let imgBtn = document.querySelector(".responsive-nav-btn img");

btnNav.addEventListener("click", () => {
  listeNav.classList.toggle("active-nav");

  if (window.location.href.includes("index")) {
    if (imgBtn.src.includes("menu")) {
      imgBtn.src = "./ressources/croix.svg";
      imgBtn.style.width = "30px";
      imgBtn.style.height = "30px";
    } else {
      imgBtn.src = "./ressources/menu.svg";
      imgBtn.style.width = "40px";
      imgBtn.style.height = "40px";
    }
  } else {
    if (imgBtn.src.includes("menu")) {
      imgBtn.src = "../ressources/croix.svg";
      imgBtn.style.width = "30px";
      imgBtn.style.height = "30px";
    } else {
      imgBtn.src = "../ressources/menu.svg";
      imgBtn.style.width = "40px";
      imgBtn.style.height = "40px";
    }
  }
});

console.log(window.location.href);

// Animation FAQ
const allCross = document.querySelectorAll(".panneau-visible img");
// console.log(allCross);
allCross.forEach((logo) => {
  logo.addEventListener("click", function () {
    // console.log("clic");
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
    const currentChoice = this.parentNode.parentNode.childNodes[3];
    // console.log(height);

    if (this.src.includes("plus")) {
      this.src = "ressources/minus.svg";
      currentChoice.style.height = height + 40 + "px";
      currentChoice.style.opacity = 1;
      currentChoice.style.padding = "20px 15px";
    } else {
      this.src = "ressources/plus.svg";
      currentChoice.style.height = 0;
      currentChoice.style.opacity = 0;
      currentChoice.style.padding = "0px 15px";
    }
  });
});
