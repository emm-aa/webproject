document.addEventListener("DOMContentLoaded", 
    function() {
        const calendar = document.getElementById("event-calendar");
    const today = new Date();

    calendar.innerHTML = '<p>The date today: ${today.toDateString()}</p>';
});

 