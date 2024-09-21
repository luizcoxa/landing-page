// Array of image URLs for the banner
const bannerImages = [
    "assets/img/ayrton_senna_legado_marketing_esportivo.jpg",
    "assets/img/ayrtonSenna.jpg",

  ];
  
// Index to track the current image
let currentIndex = 0;

// Function to change the banner image
function changeBannerImage() {
  const bannerImageElement = document.getElementById('bannerImage');
  currentIndex = (currentIndex + 1) % bannerImages.length;
  bannerImageElement.src = bannerImages[currentIndex];
}

// Change banner image every 3 seconds
setInterval(changeBannerImage, 3000);

// Function to open the modal
function openModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImage.src = src;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}