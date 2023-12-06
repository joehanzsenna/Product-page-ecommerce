/** @format */

let cartIcon = document.querySelector(".cart-icon");
let cartModal = document.querySelector(".cart-modal");
let cartNumber = document.querySelector(".cart-item-number");
let cartTotalPrice = document.querySelector(".cart-total-price");
let cartContainer = document.querySelector(".cart-container");
let cartEmpty = document.querySelector(".cart-empty");
let cartIconNumber = document.querySelector(".cart-div small");
let addToCartBtn = document.querySelector(".add-to-cart");
let deleteIcon = document.querySelector(".delete-icon");

// =======================

let allImages = document.querySelectorAll(".images-thumbnails img");
let mainImage = document.querySelector(".main-image");
let previousIcon = document.querySelector(".previous-icon");
let nextIcon = document.querySelector(".next-icon");

// ========= Carousel Modal ======
let carouselModal = document.querySelector(".carousel-modal");
let carouselModalClose = document.querySelector(".close-icon");
let allImagesModal = document.querySelectorAll(".images-thumbnails-modal img");
let mainImageModal = document.querySelector(".main-image-modal");
let previousIconModal = document.querySelector(".previous-icon-modal");
let nextIconModal = document.querySelector(".next-icon-modal");

let currentIndex = 1;

let allBtns = document.querySelectorAll(".item-count p");
let minus = allBtns[0];
let numberElement = allBtns[1];
let plus = allBtns[2];

let itemNumber = 0;

cartIcon.addEventListener("click", () => {
  cartModal.classList.toggle("active");
});

deleteIcon.addEventListener("click", () => {
  cartIconNumber.classList.remove("active");
  cartContainer.classList.remove("active");
  cartEmpty.classList.add("active");
});

minus.addEventListener("click", () => {
  if (!(itemNumber < 1)) {
    itemNumber--;
    numberElement.textContent = itemNumber;
  }
});
plus.addEventListener("click", () => {
  itemNumber++;
  numberElement.textContent = itemNumber;
});

addToCartBtn.addEventListener("click", () => {
  if (itemNumber > 0) {
    cartContainer.classList.add("active");
    cartEmpty.classList.remove("active");
    cartNumber.textContent = itemNumber;
    cartTotalPrice.textContent = `$${itemNumber * 375}.00`;
    cartIconNumber.classList.add("active");
    cartIconNumber.textContent = itemNumber;
  }
});

// ========= Carousel =========

nextIcon.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > 4) {
    currentIndex = 1;
  }
  mainImage.setAttribute("src", `./images/image-product-${currentIndex}.jpg`);
});

previousIcon.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 4;
  }
  mainImage.setAttribute("src", `./images/image-product-${currentIndex}.jpg`);
});

allImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    let clickedImagePath = e.target
      .getAttribute("src")
      .replace("-thumbnail", "");
    currentIndex = Number(clickedImagePath.charAt(clickedImagePath.length - 5));
    mainImage.setAttribute("src", clickedImagePath);
    allImages.forEach((eachImage) => eachImage.classList.remove("active"));
    image.classList.add("active");
    UpdateCarouselState();
  });
});

mainImage.addEventListener("click", () => {
  UpdateCarouselState();
  if (window.innerWidth > 991) {
    carouselModal.classList.add("popup");
  }
});

// ======== Carousel Modal ======

function UpdateCarouselState() {
  if (currentIndex < 1) {
    currentIndex = 4;
  } else if (currentIndex > 4) {
    currentIndex = 1;
  }
  mainImageModal.setAttribute(
    "src",
    `./images/image-product-${currentIndex}.jpg`
  );
  allImagesModal.forEach((eachImage) => {
    if (eachImage.getAttribute("value") == currentIndex) {
      eachImage.classList.add("active");
    } else {
      eachImage.classList.remove("active");
    }
  });
}

carouselModalClose.addEventListener("click", () => {
  carouselModal.classList.remove("popup");
});

nextIconModal.addEventListener("click", () => {
  currentIndex++;
  UpdateCarouselState();
});

previousIconModal.addEventListener("click", () => {
  currentIndex--;
  UpdateCarouselState();
});

allImagesModal.forEach((image) => {
  image.addEventListener("click", (e) => {
    let clickedImagePath = e.target
      .getAttribute("src")
      .replace("-thumbnail", "");
    mainImageModal.setAttribute("src", clickedImagePath);
    currentIndex = Number(e.target.getAttribute("value"));
    UpdateCarouselState();
  });
});

// ================ navbar ==============

let hamburger = document.querySelector(".hamburger");
let bars = document.querySelectorAll(".hamburger span");
let ul = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
});
