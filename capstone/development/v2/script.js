(function(){
    'use strict';
    console.log("reading js");

    Parse.initialize("JyGYPvydQFTW0X9XOVQjA16PCiA5u8dP7vXsHoXu","cxIki35zNK5XFbRMyERpEiG8tnOawX6oYx0ry9fY"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const loveBtn = document.getElementById("love-button");
    const adviceBtn = document.getElementById("advice-button");
    const addLoveForm = document.getElementById("love-form");
    const addAdviceForm = document.getElementById("advice-form");
    const loveList = document.querySelector("#loveContainer");
    const adviceList = document.querySelector("#adviceContainer");
    const loveInputs = document.querySelectorAll("#love-form textarea");
    const adviceInputs = document.querySelectorAll("#advice-form textarea");


    /*////////////////// DISPLAY ENTRIES //////////////////*/

    async function displayLove(){
        const love = Parse.Object.extend('Love');
        const loveQuery = new Parse.Query(love);
        const loveResults = await loveQuery.ascending('lovemsg').find();
        console.log(loveResults);

        loveResults.forEach(function(eachLove){
            const id = eachLove.id;
            const lmsg = eachLove.get('lovemsg');
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

    async function displayAdvice(){
        const advice = Parse.Object.extend('Advice');
        const adviceQuery = new Parse.Query(advice);
        const adviceResults = await adviceQuery.ascending('advicemsg').find();
        console.log(adviceResults);

        adviceResults.forEach(function(eachAdvice){
            const id = eachAdvice.id;
            const advicemsg = eachAdvice.get('advicemsg');
            const alikes = eachAdvice.get('alikes');
            const adislikes = eachAdvice.get('adislikes');

            const adviceListItem = document.createElement("li");
            adviceListItem.setAttribute("id", `r-${id}`);
            adviceListItem.innerHTML = `
            <h2>I wish...</h2>
            <div class="flower"><img src="images/daisy.png" alt="daisy">
            <div class="love">
                ${advicemsg}
            </div></div>`

            adviceList.append(adviceListItem);
        })
    }

    displayAdvice();


    /*////////////////// SUBMIT BUTTON INTERACTION //////////////////*/
    // loveBtn.addEventListener("click", function(event){
    //     event.preventDefault();
    //     addLoveForm.className = "love-form-onscreen";
    // })

    adviceBtn.addEventListener("click", function(event){
        event.preventDefault();
        addAdviceForm.className = "advice-form-onscreen";
    })

    addLoveForm.addEventListener("submit", function(event){
        event.preventDefault();
        // addLoveForm.className = "love-form-offscreen";
        addLove();
    })

    async function addLove() {
        const newLove = {};

        for (let i=0; i<loveInputs.length; i++){
            let key = loveInputs[i].getAttribute('name');
            let value = loveInputs[i].value;
            newLove[key] = value;
        }
        if (newLove.lovemsg !=""){
            const newLoveData = new Parse.Object('Love');
            newLoveData.set('lovemsg', newLove.lovemsg);
            // newLoveData.set('lmsg');
            try {
                const result = await newLoveData.save();
                // Access the Parse Object attributes using the .GET method
                resetFormFields();
                addLoveForm.className = "love-form-offscreen";
                loveList.innerHTML = '';
                displayLove();
                console.log('Love created', result);
            } catch (error) {
                console.error('Error while creating Love: ', error);
            }
        } else {
            addLoveForm.className = "love-form-offscreen";
        }
    }

    

    addAdviceForm.addEventListener("submit", function(event){
        event.preventDefault();
        // addAdviceForm.className = "advice-form-offscreen";
        addAdvice()
    })

    async function addAdvice() {
        const newAdvice = {};

        for (let i=0; i<adviceInputs.length; i++){
            let key = adviceInputs[i].getAttribute('name');
            let value = adviceInputs[i].value;
            newAdvice[key] = value;
        }
        if (newAdvice.advicemsg !=""){
            const newAdviceData = new Parse.Object('Advice');
            newAdviceData.set('advicemsg', newAdvice.advicemsg);
            // newLoveData.set('advicemsg');
            try {
                const adviceResult = await newAdviceData.save();
                // Access the Parse Object attributes using the .GET method
                resetFormFields();
                addAdviceForm.className = "advice-form-offscreen";
                adviceList.innerHTML = '';
                displayAdvice();
                console.log('Advice created', adviceResult);
            } catch (error) {
                console.error('Error while creating Advice: ', error);
            }
        } else {
            addAdviceForm.className = "advice-form-offscreen";
        }
    }

    function resetFormFields(){
        document.getElementById("lovemsg").value = "";
        document.getElementById("advicemsg").value = "";
    }

})();