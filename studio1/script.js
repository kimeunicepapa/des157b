(function(){
    'use strict';

    document.addEventListener('mousemove', reportPos);
    const myVideo = document.querySelector('#myVideo');
    const myBackVideo = document.querySelector('#myBackVideo');
    const fs = document.querySelector(".fa-expand");


    let prevXLoc = 0;
    let prevXLocBack = 0;
    
    function reportPos (event){
        const windowWidth = window.innerWidth;
        const widthPercent = windowWidth / 181;

        console.log(`width percent ${widthPercent}`);
        const xPos = event.clientX;
        const changeRotation = Math.floor(xPos/ widthPercent);

        console.log(`change rotation is ${changeRotation}`);

        if(changeRotation !== prevXLoc){
            myVideo.style.transform = `rotate(${changeRotation}deg)`;
            prevXLoc = changeRotation;
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