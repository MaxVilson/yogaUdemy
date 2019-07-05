window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let infoHeader = document.querySelector('.info-header'),
        infoHeaderTab = document.querySelectorAll('.info-header-tab'),
        infoContent = document.querySelectorAll('.info-tabcontent');

    function hideContent(a) {
        for (let i = a; i < infoContent.length; i++) {
            infoContent[i].classList.remove('show');
            infoContent[i].classList.add('hide');
        }
    }

    hideContent(1);

    function showContent(b) {
        if (infoContent[b].classList.contains('hide')) {
            infoContent[b].classList.remove('hide');
            infoContent[b].classList.add('show');
        }
    }


    infoHeader.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < infoHeaderTab.length; i++) {
                if (target == infoHeaderTab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    })


    let deadline = '2019-07-04';   
    
    function getTimeRemaining(time) {
        let t = Date.parse(time) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            interval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if (t.total <= 0) {
                clearInterval(interval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00'; 
            }
        }
    }

    setClock('timer', deadline);
});
