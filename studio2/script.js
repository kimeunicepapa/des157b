(function(){
    'use strict';
    console.log('reading js');

    let globalData;
    let numDataPoints;

    async function getData(){
        const myData = await fetch('data/journal.json');
        const data = await myData.json();
        //put keys in array
        const dataPoints = Object.keys(data);
        //put values into globalData array
        globalData = Object.values(data);
        //get number of entries in json
        numDataPoints = dataPoints.length;
    }
})();