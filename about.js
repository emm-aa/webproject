document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contentSections = document.querySelectorAll(".tab-pane");

    function showContent(sectionId) {
        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = "none";
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    }

    // Attach event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-id");
            showContent(sectionId);
        });
    });

    // Show the first section by default
    showContent("history");
});
