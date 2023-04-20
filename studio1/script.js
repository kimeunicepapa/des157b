(function(){
    'use strict';

    document.addEventListener('mousemove', reportPos);
    const myVideo = document.querySelector('#myVideo');
    const myQuote = document.querySelector('#quote');
    const fs = document.querySelector(".fa-expand");

    let prevXLoc = 0;
    let prevXLocBack = 0;
    
    function reportPos (event){
        const windowWidth = window.innerWidth;
        const widthPercent = windowWidth / 181;
        const widthPercentScale = windowWidth / 2;

        console.log(`width percent ${widthPercent}`);
        const xPos = event.clientX;
        const changeRotation = Math.floor(xPos/ widthPercent);
        const changeScale = xPos/widthPercentScale;

        console.log(`change rotation is ${changeRotation}`);

        if(changeRotation !== prevXLoc){
            myVideo.style.transform = `rotate(${changeRotation}deg) scale(${changeScale})`;
            prevXLoc = changeRotation;
        }

    }

    const intervalID = setInterval(checkTime, 1000);

    function checkTime(){
        if (myVideo.currentTime > 5) {
            quote.className = 'showing';
        } else {
            quote.className = 'hidden';
        }

    }

    fs.addEventListener('click', function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
})()