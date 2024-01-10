var scrollableElement = document.querySelector('.ritual-nav');
scrollableElement.scrollTop = scrollableElement.scrollWidth;
var audio = document.getElementById('myAudio');
var playPauseButtonAudio = document.getElementById('playPauseButton');
var progressBarAudio = document.getElementById('progressBar');
var volumeRange = document.getElementById('volumeRange');
var carousel = document.querySelector('.carousel');
carousel.addEventListener('slid.bs.carousel', function () {
    console.log('Changing slide, pausing audio');
    audio.pause();
    playPauseButtonAudio.innerHTML = '<i class="fas fa-play fs-5 bg-white rounded-circle video-play-ic ps-1" style="color: #f9c575"></i>';
});
volumeRange.addEventListener('input', function () {
    audio.volume = volumeRange.value;
});
playPauseButtonAudio.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseButtonAudio.innerHTML = '<i class="bi bi-pause-fill fs-3 lh-1 bg-white rounded-circle video-play-ic"></i>';
    } else {
        audio.pause();
        playPauseButtonAudio.innerHTML = '<i class="fas fa-play fs-5 bg-white rounded-circle video-play-ic ps-1" style="color: #f9c575"></i>';
    }
});
audio.addEventListener('timeupdate', function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBarAudio.style.width = progress + '%';
});
progressBarAudio.addEventListener('click', function (e) {
    var rect = progressBarAudio.getBoundingClientRect();
    var totalWidth = rect.width;
    var clickX = e.clientX - rect.left;
    var percentage = clickX / totalWidth;
    var newPosition = percentage * audio.duration;
    audio.currentTime = newPosition;
});

audio.addEventListener('timeupdate', function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBarAudio.style.width = progress + '%';
});

audio.addEventListener('ended', function () {
    playPauseButtonAudio.innerHTML = '<i class="fas fa-play fs-5 bg-white rounded-circle video-play-ic ps-1" style="color: #f9c575"></i>';
});
// video js
var videos = document.querySelectorAll('.video');
// Loop through each video element
videos.forEach(function (video) {
    var playPauseButton = video.parentElement.querySelector('.playPauseButton');
    var timeBarWrapper = video.parentElement.querySelector('.main_time_bar');
    var timeBar = timeBarWrapper.querySelector('.timeBar');
    var labelContainer = document.createElement('div'); // Parent div for labels
    var playedTimeLabel = document.createElement('div');
    var totalTimeLabel = document.createElement('div');
    labelContainer.className = 'labelContainer'; // Add a class to the parent div
    playedTimeLabel.className = 'playedTimeLabel';
    totalTimeLabel.className = 'totalTimeLabel';
    labelContainer.appendChild(playedTimeLabel);
    labelContainer.appendChild(totalTimeLabel);
    timeBarWrapper.appendChild(labelContainer);

    playPauseButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseButton.classList.add('playing');
        } else {
            video.pause();
            playPauseButton.classList.remove('playing');
        }
    });

    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseButton.classList.add('playing');
        } else {
            video.pause();
            playPauseButton.classList.remove('playing');
        }
    });

    timeBarWrapper.addEventListener('click', function (e) {
        var barWidth = this.offsetWidth;
        var clickX = e.clientX - this.getBoundingClientRect().left;
        var seekTime = (clickX / barWidth) * video.duration;
        video.currentTime = seekTime;
    });

    video.addEventListener('timeupdate', function () {
        var progress = (video.currentTime / video.duration) * 100;
        timeBar.style.width = progress + '%';
        timeBar.style.backgroundColor = 'white'; // Fills the played portion with white color
        var playedTime = formatTime(video.currentTime);
        var totalTime = formatTime(video.duration);
        playedTimeLabel.textContent = playedTime;
        totalTimeLabel.textContent = totalTime;
    });

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return padZero(minutes) + ':' + padZero(seconds);
    }

    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }
});
// ---audio-time---
var audio = document.getElementById('myAudio');

// Access the HTML elements for displaying time
var currentTimeElement = document.getElementById('currentTime');
var totalTimeElement = document.getElementById('totalTime');

// Update the total time display when the audio metadata is loaded
audio.addEventListener('loadedmetadata', function () {
    var totalTime = formatTime(audio.duration);
    totalTimeElement.textContent = totalTime;
});
// Add an event listener to the audio element to update the time display
audio.addEventListener('timeupdate', function () {
    // Update the current time display
    var currentTime = formatTime(audio.currentTime);
    currentTimeElement.textContent = currentTime;
});
// Function to format time in minutes and seconds
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
}
// ----cards-----
var mainCards = document.querySelectorAll('.css-square');
var cards = document.querySelectorAll('.card');
// Hide all cards initially
cards.forEach(function (card) {
    card.style.display = 'none';
});

var cardIndex = 0;  // Keep track of the current card index

mainCards.forEach(function (mainCard) {
    mainCard.addEventListener('click', function () {
        // Hide the previously shown card (if any)
        if (cardIndex > 0) {
            cards[cardIndex].style.display = 'none';
        }
        // Show the current card
        cards[cardIndex].style.display = 'block';

        // Increment the card index
        cardIndex++;
        // Reset the card index when all cards have been shown
        if (cardIndex >= cards.length) {
            cardIndex = 0;
        }
        // Hide the clicked card
        mainCard.style.display = 'none';
        // Increment the card index
        cardIndex + 1;
        // Reset the card index when all cards have been hidden
        if (cardIndex >= mainCards.length) {
            cardIndex = 0;
        }
    });
});

// ---------audio------
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var volumeRange = document.getElementById('volumeRange');
    var volumeIcon = document.getElementById('volumeIcon');
    var isMuted = false;
    var preMuteVolume = 0;

    audio.volume = volumeRange.value;
    updateVolumeStyles(volumeRange.value);

    volumeRange.addEventListener('input', function () {
        if (!isMuted) {
            audio.volume = volumeRange.value;
        }
        updateVolumeStyles(volumeRange.value);
        // Check if the volume range is greater than 0 to determine the icon.
        if (volumeRange.value > 0) {
            volumeIcon.classList.replace('bi-volume-mute', 'bi-volume-up');
        } else {
            volumeIcon.classList.replace('bi-volume-up', 'bi-volume-mute');
        }
    });

    volumeIcon.addEventListener('click', function () {
        if (isMuted) {
            // Unmute
            audio.volume = preMuteVolume;
            isMuted = false;
            volumeIcon.classList.replace('bi-volume-mute', 'bi-volume-up');
            volumeRange.value = preMuteVolume; // Set the volume range input back to the pre-mute volume
        } else {
            // Mute
            // Store the current volume before muting
            preMuteVolume = audio.volume;
            audio.volume = 0;
            isMuted = true;
            volumeIcon.classList.replace('bi-volume-up', 'bi-volume-mute');
            volumeRange.value = 0; // Set the volume range input to 0 when muted
        }
        updateVolumeStyles(audio.volume);
    });

    function updateVolumeStyles(volume) {
        var gradient;
        if (volume === 0) {
            gradient = 'linear-gradient(to right, lightgrey 0%, lightgrey 0%)';
        } else {
            // When volume is not muted, set the gradient to represent the volume level.
            gradient = 'linear-gradient(to right, white ' + (volume * 100) + '%, lightgrey ' + (volume * 100) + '%)';
        }
        volumeRange.style.background = gradient;
    }
});

// ---------Video------
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videothree');
    var volumeRangethree = document.getElementById('volumeRangethree');
    var volumeIcon = document.getElementById('volumeIcon2'); // Added this line
    // Initialize volume icon based on initial volume
    updateVolumeIcon(video.volume); // Uncomment this line

    video.volume = volumeRangethree.value;
    updateVolumeStyles(volumeRangethree.value);
    volumeRangethree.addEventListener('input', function () {
        video.volume = volumeRangethree.value;
        updateVolumeIcon(video.volume);
        updateVolumeStyles(volumeRangethree.value);
    });
    // Add click event listener to volume icon
    volumeIcon.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            video.volume = 1; // Set the volume to maximum when unmuting
            updateVolumeIcon(video.volume);
            document.getElementById('volumeRangethree').value = 100; // Set the input range to 100 for maximum volume
            updateVolumeStyles(1); // Set the gradient to fully filled
        } else {
            video.muted = true;
            updateVolumeIcon(0);
            document.getElementById('volumeRangethree').value = 0;
            updateVolumeStyles(0);
        }
    });
    // Update volume icon based on volume/mute state
    function updateVolumeIcon(volume) {
        if (video.muted || volume === 0) {
            volumeIcon.classList.remove('bi-volume-up');
            volumeIcon.classList.add('bi-volume-mute');
        } else {
            volumeIcon.classList.remove('bi-volume-mute');
            volumeIcon.classList.add('bi-volume-up');
        }
    }
    function updateVolumeStyles(volume) {
        var gradient = 'linear-gradient(to right, white ' + (volume * 100) + '%, transparent ' + (volume * 100) + '%)';
        volumeRangethree.style.background = gradient;
    }
});
// ---------------------
//    start||game
//------------------------
$(document).ready(function () {
    $(".defaultp1").click(function () {
        $(".go1").show();
        $(".defaultp1").hide();
        $(".player-9").hide();
        $(".player-1").show();
        $(".cardd1 img").css("visibility", "hidden");
        $(".cardd2 img").css("visibility", "hidden");
        $(".cardd3 img").css("visibility", "hidden");
        $(".cardd4 img").css("visibility", "hidden");
        $(".cardd5 img").css("visibility", "hidden");
        $(".cardd6 img").css("visibility", "hidden");
        $(".cardd7 img").css("visibility", "hidden");
        $(".cardd8 img").css("visibility", "hidden");
        $(".cardd9 img").css("visibility", "hidden");
        $(".cardd1").removeClass("b-none");
        $(".cardd2").removeClass("b-none");
        $(".cardd3").removeClass("b-none");
        $(".cardd4").removeClass("b-none");
        $(".cardd5").removeClass("b-none");
        $(".cardd6").removeClass("b-none");
        $(".cardd7").removeClass("b-none");
        $(".cardd8").removeClass("b-none");
        $(".cardd9").removeClass("b-none");
        $(".cardfix1").show();
        $(".cardfix2").show();
        $(".cardfix3").show();
        $(".cardfix4").show();
        $(".cardfix5").show();
        $(".cardfix6").show();
        $(".cardfix7").show();
        $(".cardfix8").show();
        $(".cardfix9").show();
    });
    $(".go1").click(function () {
        $(".defaultp2").show();
        $(".go1").hide();
        $(".cardd1 img").css("visibility", "visible");
        $(".cardd1").addClass("b-none");
        $(".cardfix9").hide();
        $(".cardfix8").hide();
        $(".cardfix7").hide();
    });
    $(".defaultp2").click(function () {
        $(".defaultp2").hide();
        $(".go2").show();
        $(".player-1").hide();
        $(".player-2").show();
    });
    $(".go2").click(function () {
        $(".defaultp3").show();
        $(".go2").hide();
        $(".cardd2 img").css("visibility", "visible");
        $(".cardd2").addClass("b-none");
    });
    $(".defaultp3").click(function () {
        $(".defaultp3").hide();
        $(".go3").show();
        $(".player-2").hide();
        $(".player-3").show();
    });
    $(".go3").click(function () {
        $(".defaultp4").show();
        $(".go3").hide();
        $(".cardd3 img").css("visibility", "visible");
        $(".cardd3").addClass("b-none");
        $(".cardfix6").hide();
        $(".cardfix5").hide();
    });
    $(".defaultp4").click(function () {
        $(".defaultp4").hide();
        $(".go4").show();
        $(".player-3").hide();
        $(".player-4").show();
    });
    $(".go4").click(function () {
        $(".defaultp5").show();
        $(".go4").hide();
        $(".cardd4 img").css("visibility", "visible");
        $(".cardd4").addClass("b-none");
    });
    $(".defaultp5").click(function () {
        $(".defaultp5").hide();
        $(".go5").show();
        $(".player-4").hide();
        $(".player-5").show();
    });
    $(".go5").click(function () {
        $(".defaultp6").show();
        $(".go5").hide();
        $(".cardd5 img").css("visibility", "visible");
        $(".cardd5").addClass("b-none");
        $(".cardfix4").hide();
    });

    $(".defaultp6").click(function () {
        $(".defaultp6").hide();
        $(".go6").show();
        $(".player-5").hide();
        $(".player-6").show();
    });
    $(".go6").click(function () {
        $(".defaultp7").show();
        $(".go6").hide();
        $(".cardd6 img").css("visibility", "visible");
        $(".cardd6").addClass("b-none");
        $(".cardfix3").hide();
    });
    $(".defaultp7").click(function () {
        $(".defaultp7").hide();
        $(".go7").show();
        $(".player-6").hide();
        $(".player-7").show();
    });
    $(".go7").click(function () {
        $(".defaultp8").show();
        $(".go7").hide();
        $(".cardd7 img").css("visibility", "visible");
        $(".cardd7").addClass("b-none");
        $(".cardfix2").hide();
    });
    $(".defaultp8").click(function () {
        $(".defaultp8").hide();
        $(".go8").show();
        $(".player-7").hide();
        $(".player-8").show();
    });
    $(".go8").click(function () {
        $(".defaultp9").show();
        $(".go8").hide();
        $(".cardd8 img").css("visibility", "visible");
        $(".cardd8").addClass("b-none");
        $(".cardfix2").hide();
    });
    $(".defaultp9").click(function () {
        $(".defaultp9").hide();
        $(".go9").show();
        $(".player-8").hide();
        $(".player-9").show();
    });
    $(".go9").click(function () {
        $(".defaultp1").show();
        $(".go9").hide();
        $(".cardd9 img").css("visibility", "visible");
        $(".cardd9").addClass("b-none");
        $(".cardfix1").hide();
    });
// ------------------------
//     start||video slide 
// ------------------------
    const video = document.querySelector('video');
    const yelVideo = document.querySelector('.yel-video');

    video.addEventListener('play', function () {
        yelVideo.style.display = 'none';
    });

    video.addEventListener('pause', function () {
        yelVideo.style.display = 'block';
    });
// ------------------------
// slide 2 click preview 
//-------------------------
    $(".click-preview").click(function () {
        $(".preview-popup").hide();
        $(this).parent().siblings(".preview-popup").show();
    });
});
