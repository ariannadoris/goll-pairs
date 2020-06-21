let colorMaps = [
    "black",
    "white",
    "yellow",
    "orange",
    "rosa",
    "red",
    "purple",
    "blue",
    "green",
    "brown"
];

let isChrome = navigator.userAgent.indexOf("Chrome") > -1;

function createStylesheet(name) {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.href = "goll-"+ name + ".css";
    link.rel = "stylesheet";
    link.id = "colorcss";

    head.appendChild(link);
}

function changeColor(index) {
        var video = document.getElementById('introvideo');
        var source = document.getElementById('source');

        document.getElementById("colorcss").remove();
        createStylesheet(colorMaps[index]);

        if(typeof video !== undefined) {
            if(source != null) {
                source.setAttribute("src", "assets/goll-"+ colorMaps[index] + (isChrome ? ".mp4" : ".webm"));
                source.setAttribute("type", "video/" + (isChrome ? "mp4": "webm"));
            }
            if(video != null) {
                video.load();
                video.play();
            }
        }

        console.log("Selected theme " + colorMaps[index]);

        localStorage.setItem("color-selection", index);
}

function loadColor() {
    var selectedcolor = localStorage.getItem("color-selection");
    if(selectedcolor == null ) {
        selectedcolor = 0;
    }
    
    if(selectedcolor !== undefined) {
        console.log("Save user selected theme " + selectedcolor);
        changeColor(selectedcolor);
    }
}

function initDefaults() {
    // always init game with sound off
    localStorage.setItem("music", 0);
    localStorage.setItem("audio", 0);
}

function setState() {
    var musicEnabled = localStorage.getItem("music");
    var elem = document.getElementById("music");
    if(musicEnabled == 1 ) {
        elem.classList.remove("music-off");
        elem.classList.add("music-on");
    }
    else {
        elem.classList.remove("music-on");
        elem.classList.add("music-off");
    }

    var soundEnabled = localStorage.getItem("sound");
    var elem = document.getElementById("sound");
    if(soundEnabled == 1 ) {
        elem.classList.remove("sound-off");
        elem.classList.add("sound-on");

    }
    else {
        elem.classList.remove("sound-on");
        elem.classList.add("sound-off");
    }

    console.log("Music is " + (musicEnabled == 0 ? "disabled" : "enabled"));
    console.log("Sound is " + (soundEnabled == 0 ? "disabled" : "enabled"));

}

function toggleMusic() {
    var musicEnabled = localStorage.getItem("music");
    var elem = document.getElementById("music");
    
    var music = document.getElementById("intro-music");
    
    if(musicEnabled == 0 ) {
        musicEnabled = 1;
        elem.classList.remove("music-off");
        elem.classList.add("music-on");
        if(music != null)
            music.play();
    }
    else {
        musicEnabled = 0;
        elem.classList.remove("music-on");
        elem.classList.add("music-off");
        if(music != null)
            music.pause();
    }
    localStorage.setItem("music", musicEnabled);
}

function toggleSound() {
    var soundEnabled = localStorage.getItem("sound");
    var elem = document.getElementById("sound");
    
    if(soundEnabled == 0 ) {
        soundEnabled = 1;
        elem.classList.remove("sound-off");
        elem.classList.add("sound-on");

    }
    else {
        soundEnabled = 0;
        elem.classList.remove("sound-on");
        elem.classList.add("sound-off");
    }
    localStorage.setItem("sound", soundEnabled);
}

function displayHighscore() {
    var elem = document.getElementById("highscore");
    if(elem != null) {
        var highscore = localStorage.getItem("highscore");
        if( highscore != null ) {
            elem.innerText = "Highscore: " + highscore;
        }
    }
}