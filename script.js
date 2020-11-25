const time = document.querySelector('.time');

function updateTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var verifyHour;

    if(hour < 12) {
        verifyHour = 'AM'
    }else{
        verifyHour = 'PM'
    }

    time.innerHTML = `<div class="time">${hour < 10 ? `0${hour}` : `${hour}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`} ${verifyHour}</div>`
}

setInterval(updateTime, 1000);