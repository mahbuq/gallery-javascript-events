const menuBtn = document.querySelector(".menu-button");
const menuBtnImg = document.querySelector(".menu-button-img");
const aside = document.querySelector("aside");
const spanAside = document.querySelectorAll("aside span");

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const imgGallery = document.querySelectorAll(".img-gallery");
const closeModal = document.querySelector(".close-modal");
const nextImg = document.querySelector(".next");
const prevImg = document.querySelector(".prev");

const liked = document.querySelectorAll(".liked");
const likedModal = document.querySelector(".liked-md");
const imgContainer = document.querySelectorAll(".img-ctn");

// side-menu

menuBtn.addEventListener("click", function () {
  spanAside.forEach((span) => {
    if (span.classList.contains("hidden")) {
      span.classList.remove("hidden");
      aside.style.paddingRight = "70px";
      menuBtnImg.src = "./assets/open-menu.svg";
    } else {
      span.classList.add("hidden");
      aside.style.paddingRight = "20px";
      menuBtnImg.src = "./assets/closed-menu.svg";
    }
  });
});

// modal

let currentImgId = 0;

imgGallery.forEach((image) => {
  image.addEventListener("click", function () {
    modal.classList.remove("hidden");
    modalImg.src = image.src;
    modalImg.style.width = "550px";
    currentImgId = image.id;
    updateModalImg();
  });
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

prevImg.addEventListener("click", function () {
  currentImgId--;
  const newImage = imgGallery[currentImgId - 1];
  modalImg.src = newImage.src;
  updateModalImg();
});

nextImg.addEventListener("click", function () {
  currentImgId++;
  const newImage = imgGallery[currentImgId - 1];
  modalImg.src = newImage.src;
  updateModalImg();
});

function updateModalImg() {
  prevImg.classList.remove("opacity");
  nextImg.classList.remove("opacity");

  if (currentImgId == 1) {
    prevImg.classList.add("opacity");
  } else if (currentImgId == 10) {
    nextImg.classList.add("opacity");
  }
}

// like
let likedImgIndexArr = [];

modalImg.addEventListener("dblclick", function () {
  const itemLike = imgGallery[currentImgId - 1].previousElementSibling;
  likedImgIndexArr.push(imgGallery[currentImgId - 1].id);
  if (likedModal.classList.contains("hidden")) {
    likedModal.classList.remove("hidden");
    itemLike.classList.remove("hidden");
  } else {
    likedModal.classList.add("hidden");
    itemLike.classList.add("hidden");
  }
});

prevImg.addEventListener("click", function () {
  hideShowLike();
});

nextImg.addEventListener("click", function () {
  hideShowLike();
});

imgGallery.forEach((image) => {
  image.addEventListener("click", function () {
    hideShowLike();
  });
});

function hideShowLike() {
  if (!likedImgIndexArr.includes(imgGallery[currentImgId - 1].id)) {
    likedModal.classList.add("hidden");
  } else {
    likedModal.classList.remove("hidden");
  }
}
