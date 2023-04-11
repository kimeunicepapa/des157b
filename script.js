(function() {
    'use strict';

    const lists = document.querySelectorAll('section li');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const h3s = document.querySelectorAll('h3');
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const classInfo = document.querySelector('#classInfo');
    const quarter = document.querySelector('#quarter');
    const circle = document.querySelector('#circle');
    const mushroom = document.querySelector('#mushroom');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            h1.className = 'switch';
            h2.className = 'switch';
            body.className = 'switch';
            banner.className = 'switch';
            classInfo.className = 'switch';
            quarter.className = 'switch';
            circle.className = 'switch';
            mushroom.className = 'switch';
            button.className = 'switch';
            button.innerHTML = 'BAUHAUS';
            
            for (const list of lists) {
                list.className = 'switch';
            }
            for (const h3 of h3s) {
                h3.className = 'switch';
            }
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            // list.removeAttribute('class');
            h1.removeAttribute('class'); 
            h2.removeAttribute('class');    
            body.removeAttribute('class');
            banner.removeAttribute('class');
            classInfo.removeAttribute('class');
            quarter.removeAttribute('class');
            circle.removeAttribute('class');
            mushroom.removeAttribute('class');
            button.removeAttribute('class');
            button.innerHTML = 'PSYCHEDELIC';
            for (const h3 of h3s) {
                h3.removeAttribute('class');
            }
            for (const list of lists) {
                list.removeAttribute('class');
            }
            for (const section of sections) {
                section.removeAttribute('class');
            }

            mode = 'dark';
        }
    })
})();