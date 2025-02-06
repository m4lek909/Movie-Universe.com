// Function to play a random episode
function playRandomEpisode() {
    console.log("playRandomEpisode called"); // Debugging

    // Get a random season (1 to 5)
    const randomSeason = Math.floor(Math.random() * 5) + 1;
    console.log("Random season:", randomSeason); // Debugging

    // Get the episodes for the selected season
    const episodes = choufliHalEpisodes[randomSeason];
    console.log("Episodes for season:", episodes); // Debugging

    // Get a random episode number (1 to the number of episodes in the season)
    const randomEpisodeNumber = Math.floor(Math.random() * Object.keys(episodes).length) + 1;
    console.log("Random episode number:", randomEpisodeNumber); // Debugging

    // Get the video ID for the random episode
    const randomVideoId = episodes[randomEpisodeNumber];
    console.log("Random video ID:", randomVideoId); // Debugging

    if (randomVideoId) {
        // Play the random episode
        playEpisode(randomVideoId);
    } else {
        console.error("Invalid episode number or video ID not found.");
    }
}

// Function to play an episode
function playEpisode(videoId) {
    const embedLink = `https://drive.google.com/file/d/${videoId}/preview`;
    const videoFrame = document.getElementById("video-frame");
    const videoContainer = document.getElementById("video-container");

    if (!videoFrame || !videoContainer) {
        console.error("videoFrame or videoContainer not found!");
        return;
    }

    // Set the iframe source to the embed link
    videoFrame.src = embedLink;

    // Show the video container
    videoContainer.style.display = "block";
}

// Update the toggleChoufliHal function to show/hide the "RANDOM EPISODE" button
function toggleChoufliHal() {
    const seasonsDiv = document.getElementById("seasons");
    const randomEpisodeButton = document.getElementById("random-episode-button");
    const allSeasonContainers = document.querySelectorAll('[id^="season-"]');

    if (!seasonsDiv || !randomEpisodeButton) {
        console.error("seasonsDiv or randomEpisodeButton not found!");
        return;
    }

    console.log("toggleChoufliHal called"); // Debugging

    if (seasonsDiv.style.display === "none" || seasonsDiv.style.display === "") {
        // Show the seasons list and the "RANDOM EPISODE" button
        seasonsDiv.style.display = "block";
        randomEpisodeButton.style.display = "inline-block";
    } else {
        // Hide the seasons list, "RANDOM EPISODE" button, and all episode containers
        seasonsDiv.style.display = "none";
        randomEpisodeButton.style.display = "none";
        allSeasonContainers.forEach(container => {
            container.style.display = "none";
        });
    }
}
