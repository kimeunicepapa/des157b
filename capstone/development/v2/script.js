(function(){
    'use strict';
    console.log("reading js");

    Parse.initialize("JyGYPvydQFTW0X9XOVQjA16PCiA5u8dP7vXsHoXu","cxIki35zNK5XFbRMyERpEiG8tnOawX6oYx0ry9fY"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const loveBtn = document.getElementById("love-button");
    const adviceBtn = document.getElementById("advice-button");
    const addLoveForm = document.getElementById("love-form");
    const addAdviceForm = document.getElementById("advice-form");
    const loveList = document.getElementById("loveContainer");

    /*////////////////// SUBMIT BUTTON INTERACTION //////////////////*/
    loveBtn.addEventListener("click", function(event){
        event.preventDefault();
        addLoveForm.className = "love-form-onscreen";
    })

    adviceBtn.addEventListener("click", function(event){
        event.preventDefault();
        addAdviceForm.className = "advice-form-onscreen";
    })

    addLoveForm.addEventListener("submit", function(event){
        event.preventDefault();
        addLoveForm.className = "love-form-offscreen";
    })

    addAdviceForm.addEventListener("submit", function(event){
        event.preventDefault();
        addAdviceForm.className = "advice-form-offscreen";
    })
    
    /*////////////////// DISPLAY ENTRIES //////////////////*/

    async function displayLove(){
        const love = Parse.Object.extend('Love');
        const loveQuery = new Parse.Query(love);
        const loveResults = await loveQuery.ascending('lmsg').find();
        console.log(loveResults);

        loveResults.forEach(function(eachLove){
            const id = eachLove.id;
            const lmsg = eachLove.get('lmsg');
            const llikes = eachLove.get('llikes');
            const ldislikes = eachLove.get('ldislikes');

            const loveListItem = document.createElement("li");
            loveListItem.setAttribute("id", `r-${id}`);
            loveListItem.innerHTML = `
            <h2>I love...</h2>
            <div class="flower"><img src="images/daisy.png" alt="daisy">
            <div class="love">
                ${lmsg}
            </div></div>`

            loveList.append(loveListItem);
        })
    }

    displayLove();

})();