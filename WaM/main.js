const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const btnStart =document.querySelector(".btnStart");

btnStart.addEventListener("click", ()=> {
    let count = 0;
    btnStart.style.display = "none";
    const interval = setInterval(()=> {
        let i = Math.floor(Math.random()*16);

        holes[i].style.backgroundColor = "darksalmon";
        if (count === 15) {
            clearInterval(interval);
            score.innerText = 0;
            count = 0;
            btnStart.style.display="inline-block";
        }

        setTimeout(()=>{
            holes[i].style.backgroundColor = "plum";
        }, 1000);
    },1300);

    for (let i = 0;i<holes.length;i++){
        holes[i].addEventListener("click", ()=>{
            if (holes[i].style.backgroundColor === "darksalmon") {
                count++;
                score.innerText = count;
            }
        });
    }
});