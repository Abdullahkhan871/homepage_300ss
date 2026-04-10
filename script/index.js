// header for mobile
let close = document.querySelector(".close");
let open = document.querySelector(".open");
let menu = document.querySelector("nav ul");
open.addEventListener("click", (e) => {
  open.style.display = `none`;
  close.style.display = `block`;
  menu.classList.add("menu-slide-open");
  menu.classList.remove("menu-slide-close");
});
close.addEventListener("click", (e) => {
  open.style.display = `block`;
  close.style.display = `none`;
  menu.classList.add("menu-slide-close");
  menu.classList.remove("menu-slide-open");
});

//  gallery card
let galleryPopup = document.querySelector(".gallery-popup");
let galleryPopupContent = document.querySelector(".gallery-popup .container");
let closeBtn = document.querySelector(".gallery-popup-header .close");
let galleryCard = document.querySelectorAll(".gallery-card");
let iconRight = document.querySelector(".icon-right");
let iconLeft = document.querySelector(".icon-left");
let galleryPopupBodyBottom = document.querySelector(
  ".gallery-popup-body .bottom",
);
let topSlideImage = document.querySelectorAll(
  ".gallery-popup-body .top .image-wrapper .top-img",
);
let thumbnailImage = document.querySelectorAll(
  ".gallery-popup-body .bottom .image-wrapper",
);

let galleryImages = [
  {
    id: "item-1",
    url: "./images/Vector Smart Object (3).png",
  },
  {
    id: "item-2",
    url: "./images/Vector Smart Object (4).png",
  },
  {
    id: "gallery-1",
    url: "./images/Vector-Smart-Object1-1.png",
  },
  {
    id: "gallery-2",
    url: "./images/293.png",
  },
  {
    id: "item-4",
    url: "./images/Vector Smart Object (5).png",
  },
];

galleryCard.forEach((item) =>
  item.addEventListener("click", (e) => {
    // open gallery
    galleryPopup.style.display = "block";

    // to populate images on bottom of modal
    galleryPopupBodyBottomFnc();
    // to close gallery
    closeGallery();
  }),
);

// to close gallery
function closeGallery() {
  galleryPopupContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  closeBtn.addEventListener("click", () => {
    galleryPopup.style.display = "none";
  });
  galleryPopup.addEventListener("click", (e) => {
    galleryPopup.style.display = "none";
  });
}

function galleryPopupBodyBottomFnc() {
  galleryImages.forEach((item) => {
    if (galleryPopupBodyBottom.childElementCount < 5) {
      galleryPopupBodyBottom.innerHTML += `
        <div class="image-wrapper">
        <img
        src="${item.url}"
        alt=""
        class="item ${item.id}"
        />
        <div class="overlay"></div>
        </div>
        
        `;
    }
  });
}
