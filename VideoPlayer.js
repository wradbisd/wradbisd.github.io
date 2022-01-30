function loadVideoPlayers() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}


    // 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    addYoutubePlayer();
}

function addYoutubePlayer() {
    player = new YT.Player(VIDEO_CONTENT_ID, {
        width: 1280,
        height: 720,
        videoId: '',
        playerVars: {
            'start': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        closeContentDisplay();
    }
}

function startVideo(startAt = 0) {
    player.seekTo(startAt);
    player.playVideo();
}
function stopVideo() {
    player.stopVideo();
}


function GenerateThumbnail(elementID, videoID) {
    document.getElementById(elementID).style.backgroundImage = "url(https://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg), url(/StaticContent/no-content.png)";
}

function changeVideo(id) {
    player.cueVideoById(id);
}