(function(){
    'use strict';

    Parse.initialize("jsBJY51ikHQMBJMShMNiE8v3J9pchT5npZkYug5J","gC3N3rPJBr9iD5sElZMzetvz4QcenjDgKzAeba0Z"); 
    Parse.serverURL = 'https://parseapi.back4app.com/';


    const sendLove = document.getElementById("sendlove");
    const notLove = document.getElementById("notlove");
    const sendLoveForm = document.getElementById("send-love");
    const notLoveForm = document.getElementById("not-love");

    sendLove.addEventListener('click', function(event){
        event.preventDefault();
        sendLoveForm.className = "send-love-onscreen";
    })

    sendLoveForm.addEventListener('submit', function(event){
        event.preventDefault();
        sendLoveForm.className = "send-love-offscreen";

        // addFriend();
    })

    notLove.addEventListener('click', function(event){
        event.preventDefault();
        notLoveForm.className = "not-love-onscreen";
    })

   notLoveForm.addEventListener('submit', function(event){
        event.preventDefault();
        notLoveForm.className = "not-love-offscreen";

        // addFriend();
    })
})();