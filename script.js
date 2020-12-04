// Previous bg: body.style.background = "radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%) no-repeat";
// Get Elements from the page
let clock = document.querySelector('.clock');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

const body = document.querySelector('body');

const winterbtn = document.getElementById('winter-bg');
const defaultbtn = document.getElementById('original-bg');

const hoursPicker = document.getElementById('hours-picker');
const notification = document.getElementById('notification');
const alarmSet = document.getElementById('alarmSet');
const showAlarm = document.getElementById('showAlarm');
const closePopup = document.getElementById('closePopup');

const popup = document.getElementById('popup');

// Define functions
// Clock ticking and updating function
function updateTime(){
    const currentTime = new Date();
    const options = {
        month: 'short'
    };
    const prettyTime = new Intl.DateTimeFormat('en-US', options).format(currentTime);
    hours.innerHTML = currentTime.getHours();
    minutes.innerHTML = currentTime.getMinutes();
    seconds.innerHTML = currentTime.getSeconds();

    month.innerHTML = prettyTime;
    day.innerHTML = currentTime.getDate();
    year.innerHTML = currentTime.getFullYear();
}
// Getting a current time period - used to set seasonal background
function timePeriod(){
    let now = new Date();
    let thisMonth = now.getMonth();
    let word =  '';
    switch(thisMonth){
        case 0,1,11: word = 'winter'; break;
        case 2,3,4: word  = 'spring'; break;
        case 5,6,7: word = 'summer'; break;
        case 8,9,10: word = 'autumn'; break;
    }
    return word;
}
// Set seasonal beacground
function setWinterBg(){
    let image = '/images/' + timePeriod() + '.jpg';
    if(image != '') {
        body.style.background = "url(." + image +") no-repeat scroll";
        body.style.backgroundSize = "cover";
    } else {
        console.log('No Image Found!');
    }
}
// Setting back to default background
function setDefaultBg(){
    body.style.background = "radial-gradient(ellipse at center, #FA1616 0%, #912719 40%, #590701 100%)";
}
// Setting an alarm
function setAlarm(){
    let alarm = hoursPicker.value;
    notification.innerHTML = `Your alarm is set at ${alarm}!`;
}

// Toggle popup - show alarm
function showPopup(){
    popup.classList.toggle("visible");
}


// Program working
updateTime();
let clocktick = setInterval(updateTime, 1000); 

winterbtn.addEventListener('click', setWinterBg);
defaultbtn.addEventListener('click', setDefaultBg);
alarmSet.addEventListener('click', setAlarm);
showAlarm.addEventListener('click', showPopup);
closePopup.addEventListener('click', showPopup);




