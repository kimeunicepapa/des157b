(function(){
    'use strict';
    console.log('reading js');

    let globalData;
    let numDataPoints;

    async function getData(){
        const myData = await fetch('data/journal.json');
        const data = await myData.json();
        globalData = data;
    
        //put values into globalData array
        // globalData = Object.values(data);
        //get number of entries in json
        // numDataPoints = dataPoints.length;

        document.querySelector('nav ul').innerHTML = createButtons(data);

        createEvents();
    }

    // function showPointInfo(point, data){
    //     document.querySelector('#date').innerHTML = data[point].date;
    //     document.querySelector('#time').innerHTML = data[point].time;
    //     document.querySelector('#location').innerHTML = data[point].location;
    // }

    function createButtons(data){
        let html = ''
        //put keys in array
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachPoint){
            html += `<li><button id="${eachPoint}">${eachPoint}</button></li>`;
        })
        return html;
    }

    function createEvents(){
        const buttons = document.querySelectorAll('button');

        for (const button of buttons){
            button.addEventListener('click', function(event){
                const id = event.target.id;
                updateInterface(id, globalData);
            })
        }
    }

    function updateInterface(value, jsonData){
        console.log(value);

        let info = '';
        // let location = '';
        let imgs = '';
        info += `<h2>${jsonData[value].time}</h2><h2>In ${jsonData[value].location}</h2>`;
        // location += `<h2>${jsonData[value].location}</h2>`;

        if (jsonData[value].hasOwnProperty('images')){
            for(let i=0; i<jsonData[value].images.length; i++){
                console.log(jsonData[value].images[i]);
                imgs += `<img src="${jsonData[value].images[i]}" alt="journal page">`;
            }
        } else {
            imgs = ``;
        }

        document.querySelector('#info').innerHTML = info;
        // document.querySelector('#location').innerHTML = location;
        document.querySelector('#images').innerHTML = imgs;
    }

    getData();
})();