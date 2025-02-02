// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Grab the "View Episodes" button and add an event listener to it
    const viewEpisodesBtn = document.getElementById("viewEpisodesBtn");

    // Get the episodes list section that should be shown when the button is clicked
    const episodesList = document.getElementById("episodes-list");

    // Initially hide the episodes list
    episodesList.style.display = "none";

    // When the "View Episodes" button is clicked
    viewEpisodesBtn.addEventListener("click", function() {
        // Show the episodes list (Episode 1 and Episode 2 buttons)
        episodesList.style.display = "block";
    });

});
