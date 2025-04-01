document.addEventListener("DOMContentLoaded", 
    function() {
        
    const today = new Date();
    document.getElementById("event-calendar").innerHTML = `The date today: ${today.toDateString()}`;
}
);

 