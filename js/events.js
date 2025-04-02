document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const dateString = today.toDateString();


    const tableHTML = `
        <table class="calendar-table">
            <tr>
                <td><strong>The date today </strong></td>
                <td>${dateString}</td>
            </tr>
        </table>
    `;


    document.getElementById("event-calendar").innerHTML = tableHTML;
});

