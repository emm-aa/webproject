// Getting all required elements
const galleryImages = document.querySelectorAll(".gallery .image img");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");
const prevBtn = previewBox.querySelector(".prev");
const nextBtn = previewBox.querySelector(".next");

let currentIndex = 0;

// Update total images count
totalImg.textContent = galleryImages.length;

// Function to show the preview box
const showPreview = (index) => {
    currentIndex = index;
    const selectedImage = galleryImages[index];
    previewImg.src = selectedImage.src;
    currentImg.textContent = index + 1;

    // Show/hide navigation buttons
    prevBtn.style.display = index === 0 ? "none" : "block";
    nextBtn.style.display = index === galleryImages.length - 1 ? "none" : "block";

    // Show preview box and shadow
    previewBox.classList.add("show");
    shadow.classList.add("show");
    shadow.style.display = "block";
    document.body.style.overflow = "hidden"; // Lock body scroll
};

// Close the preview box
const closePreview = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    shadow.style.display = "none";
    document.body.style.overflow = "auto"; // Restore body scroll
};

// Navigate to the previous image
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        showPreview(currentIndex - 1);
    }
});

// Navigate to the next image
nextBtn.addEventListener("click", () => {
    if (currentIndex < galleryImages.length - 1) {
        showPreview(currentIndex + 1);
    }
});

// Add click event to each gallery image
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        showPreview(index);
    });
});

// Add click event to close icon
closeIcon.addEventListener("click", closePreview);

// Add click event to shadow to close the preview
shadow.addEventListener("click", closePreview);
