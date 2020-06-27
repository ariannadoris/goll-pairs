/* eslint-disable */
//  Embed html videos with correct background color
//  Created by Vinzenz Aubry for sansho
//  Feel free to improve!
//  Base Code by Feng (https://stackoverflow.com/questions/35214962/html5-video-background-color-not-matching-background-color-of-website-in-some#44523649)
//	Contact: vinzenz@sansho.studio

//  June 2020: modified for Goll Pairs


var vid;
var wrapper;
var canvas;
var ratio;
var vidWidth;
var vidHeight;

function  drawingLoop() {
    window.requestAnimationFrame(drawingLoop)

    ctx.drawImage(vid, 0, 0, vidWidth, vidHeight, // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle);
}

function setVideoBgColor(vid, backgroundElement) {
    // draw first four pixel of video to a canvas
    // then get pixel color from that canvas
    let canvas = document.createElement("canvas");
    canvas.width = 8;
    canvas.height = 8;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(vid, 0, 0, 8, 8);
    
    let p = ctx.getImageData(0, 0, 8, 8).data;
    
    //dont take the first but fourth pixel [r g b]
    backgroundElement.style.backgroundColor = "rgb(" + p[60] + "," + p[61] + "," + p[62] + ")";
}

function resizeWindow() {
    vidWidth = vid.style.width;
    vidHeight = vid.style.height;

    canvas.width = vid.offsetWidth * ratio;
    canvas.height = vid.offsetHeight * ratio;

    canvas.style.left = vid.style.left;
    canvas.style.top = vid.style.top;
    canvas.style.right = vid.style.right;
    canvas.style.bottom = vid.style.bottom;
    //redraw canvas after resize
    ctx.drawImage(vid, 0, 0, vidWidth, vidHeight, // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle);
}

function loadedMetadata() {
    
    vidWidth = vid.style.width;
    vidHeight = vid.style.height;

    canvas.width = vid.offsetWidth * ratio;
    canvas.height = vid.offsetHeight * ratio;

    canvas.style.left = vid.style.left;
    canvas.style.top = vid.style.top;
    canvas.style.right = vid.style.right;
    canvas.style.bottom = vid.style.bottom;

    drawingLoop();
}

function loadedData() {
    setVideoBgColor(vid, wrapper);
}

function fixAutoPlay() {
    if(vid.paused){
        vid.play();
    }

    // Remove events
    document.removeEventListener('touchstart', fixAutoPlay);
    document.removeEventListener('touchend', fixAutoPlay);
    document.removeEventListener('scroll', fixAutoPlay);
}

function fengsFix(videoId, wrapperId, canvasId) {
       
    vid = document.getElementById(videoId);
    wrapper = document.getElementById(wrapperId);
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext('2d');
    ratio = window.devicePixelRatio || 1;
    
    // iOS 6-8
    document.addEventListener('touchstart', fixAutoPlay);
    // iOS 9
    document.addEventListener('touchend', fixAutoPlay);
    // Scroll (Just in case for Desktop)
    document.addEventListener('scroll', fixAutoPlay);

    vid.addEventListener('loadedmetadata', loadedMetadata);
    vid.addEventListener('loadeddata', loadedData);

    vid.load();
    vid.play();
    //this.vid.src = this.vid.dataset.src;
    //this.vid.play();

    window.onresize = resizeWindow;

}