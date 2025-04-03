document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Toggle the "show" class for the content
            content.classList.toggle("show");

            // Close other accordion items (optional)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.nextElementSibling.classList.remove("show");
                }
            });
        });
    });
});