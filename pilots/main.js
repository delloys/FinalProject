
const holes = document.querySelectorAll(".hole");
const btnStart =document.querySelector(".btnStart");
function clickOnHole(e) {
    let choice;
    let count = 0;

    for (let i = 0; i < holes.length; i++) {
        if (holes[i] === e.currentTarget) {
            choice = i;
        }
    }

    let line = Math.floor(choice / 4);
    let column = choice % 4;

    for (let i = 0; i < holes.length; i++) {
        if (Math.floor(i / 4) === line || i % 4 === column) {
            if (holes[i].style.backgroundColor === "darksalmon") {
                holes[i].style.backgroundColor = "plum";
            } else holes[i].style.backgroundColor = "darksalmon";
        }
    }

    for (let i = 0; i < holes.length; i++) {
        if (holes[i].style.backgroundColor === "darksalmon") {
            count++;
        }
    }

    if (count === 16) {
        for (let i = 0; i < holes.length; i++) {
            btnStart.style.display = "inline-block";
            holes[i].style.backgroundColor = "plum";
        }
    }
}

btnStart.addEventListener("click", ()=> {
    btnStart.style.display = "none";

    for (let i = 0; i < holes.length; i++) {
        holes[i].addEventListener("click", clickOnHole);
    }
});