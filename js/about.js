document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contentSections = document.querySelectorAll(".tab-pane");

    function showContent(sectionId) {
        contentSections.forEach(section => {
            section.style.display = "none";
        });

        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-id");
            showContent(sectionId);
        });
    });

    showContent("history");
});
