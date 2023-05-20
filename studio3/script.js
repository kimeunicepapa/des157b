(function(){
    'use strict';

    // var macyInstance = Macy({
    //     // See below for all available options.
    //     container: '#container',
    //     trueOrder: false,
    //     margin: 20,
    //     waitForImages: true,
    //     debug: true,
    //     columns: 3,
    //     breakAt: {
    //         1200: 3,
    //         940: 2,
    //         520: 1,
    //     },
    // });

    // macyInstance.runOnImageLoad(function () {
    //     macyInstance.recalculate(true);
    //   }, true);

    Parse.initialize("Ccn4NLbCJ5JzqOGir3MRX8dNzfnJOkSSL7EUywu4","vBhc8IVEn1QyGW96K0iyy9uHxpRhSRpqBX5TW8Ky"); 
    Parse.serverURL = 'https://parseapi.back4app.com/';


    const sendLove = document.getElementById("sendlove");
    const notLove = document.getElementById("notlove");
    const sendLoveForm = document.getElementById("send-love");
    const notLoveForm = document.getElementById("not-love");
    const loveList = document.querySelector("#container");
    const inputs = document.querySelectorAll("#send-love input:not([type=submit])");


    // async function displayLove() {
    //     const friends = Parse.Object.extend('Love');
    //     const query = new Parse.Query(Love);
    //     const results = await query.ascending('love').find();
    //     console.log(results);
    // }
    
    // displayLove();

    async function displayLove(){
        const love = Parse.Object.extend('Love');
        const query = new Parse.Query(love);
        // You can also query by using a parameter of an object
        // query.equalTo('objectId', 'xKue915KBG');
        try {
          const results = await query.find();

          results.forEach(function(eachLove) {
            // Access the Parse Object attributes using the .GET method
            const id = eachLove.id;
            const lovemsg = eachLove.get('lovemsg');
            console.log(lovemsg);

            const theLoveItem = document.createElement("li");
            theLoveItem.setAttribute("id", `r-${id}`);
            theLoveItem.innerHTML = ` 
            <h2>I love...</h2>
            <div class="flower"><img src="images/daisy.png" alt="daisy"></div>
            <div class="love">
                ${lovemsg}
            </div>`;

            loveList.append(theLoveItem);
          });
        } catch (error) {
          console.error('Error while fetching Love', error);
        }
    };

    displayLove();
    

    sendLove.addEventListener('click', function(event){
        event.preventDefault();
        sendLoveForm.className = "send-love-onscreen";
    })

    sendLoveForm.addEventListener('submit', function(event){
        event.preventDefault();
        sendLoveForm.className = "send-love-offscreen";

        addLove();
    })

    async function addLove() {
        const newLove = {};

        for (let i=0; i<inputs.length; i++){
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newLove[key] = value;
        }
        if (newLove.lovemsg !=""){
            const newLoveData = new Parse.Object('Love');
            newLoveData.set('lovemsg', newLove.lovemsg);
            // newLoveData.set('lovemsg');
            try {
                const result = await newLoveData.save();
                // Access the Parse Object attributes using the .GET method
                resetFormFields();
                sendLoveForm.className = "send-love-offscreen";
                loveList.innerHTML = '';
                displayLove();
                console.log('Love created', result);
            } catch (error) {
                console.error('Error while creating Love: ', error);
            }
        } else {
            sendLoveForm.className = "send-love-offscreen";
        }
    }

    // notLove.addEventListener('click', function(event){
    //     event.preventDefault();
    //     notLoveForm.className = "not-love-onscreen";
    // })

//    notLoveForm.addEventListener('submit', function(event){
//         event.preventDefault();
//         notLoveForm.className = "not-love-offscreen";

//         // addFriend();
//     })

    function resetFormFields(){
        document.getElementById("lovemsg").value = "";
       
    }
})();