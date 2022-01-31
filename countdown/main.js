const btnStart =document.querySelector(".btnStart");

const hoursOut = document.querySelector(".hours span");
const minOut = document.querySelector(".min span");
const secOut = document.querySelector(".sec span");

let hours = 0;
let min = 5;
let sec = 0;

function newTime()
{
    if (hours < 10)
    {
        hoursOut.textContent = '0' + hours;
    }else {
        hoursOut.textContent = hours;
    }

    if (min < 10)
    {
        minOut.textContent = '0' + min;
    }else {
        minOut.textContent = min;
    }

    if (sec < 10)
    {
        secOut.textContent = '0' + sec;
    }else {
        secOut.textContent = sec;
    }
}

btnStart.addEventListener("click", ()=> {
    btnStart.style.display = "none";
    newTime();
    const prom = new Promise((resolve, reject) => {
        const Start = setInterval(()=>{
            newTime();
            sec--;
            if (sec<0){
                sec = 59;
                min--;
            }
            if (min<0){
                min=59;
                hours--;
            }
            if (hours < 0){
                hours = 0;
                min =0;
                sec =0;
                resolve('endSuccess');
                newTime();
                clearInterval(Start);
            }
        }, 1000)
    });
    prom.then(function () {
        btnStart.style.display = "inline-block";
        min = 5;
    })
})