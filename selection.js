const gameInfo = document.querySelectorAll('.gameInfo');
const myGames = document.querySelector('.listGames')
const listGames = games[0];

gameInfo.forEach((item, index) => {
    item.innerHTML = `<div class="gameInfo"><img src=${games[index].capa} alt=""><p>${games[index].name}</p></div>`
})

var interface = document.querySelector('.interface');
var logo = document.querySelector('.game-logo');
var progress = document.querySelector('.progress');
var totaltrophies = document.querySelector('.totaltrophies');

gameInfo.forEach((item, index) => {
    var conquests = games[index].conquests;
    var trophies = games[index].trophies;
    
    item.addEventListener('click', () => {
        interface.style.backgroundImage = `url(${games[index].background})`
        logo.innerHTML = `<img src=${games[index].logo} alt="">`
        progress.innerHTML = `
        <div class="progress">
            <p>Progresso</p>
            <h3>${parseInt((conquests/trophies)*100)}%</h3>
        </div>`

        totaltrophies.innerHTML = `
        <div class="totaltrophies">
            <p>Conquistados</p>
            <h3>${conquests}/${trophies}</h3>
        </div>` 
    })
})