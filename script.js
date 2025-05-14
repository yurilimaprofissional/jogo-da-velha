const selecBox = document.querySelector(".select-box"),
selectXBtn = selecBox.querySelector(".playerX"),
selectOBtn = selecBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
player = document.querySelectorAll(".player");

window.onload = ()=> {

    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick","clickedBox(this)")
        ;

    }



    selectXBtn.onclick = ()=> {
        selecBox.classList.add("hide");
        playBoard.classList.add("show");
    }

    selectOBtn.onclick = ()=> {
        selecBox.classList.add("hide");
        playBoard.classList.add("show");
        player.setAttribute("class", "player active players")
        ;
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "fas fa-circle";

function clickedBox(element) {
    if(player.classList.contains("players")){
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        player.classList.add("active");
    }
    else {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        player.classList.add("active");
    }
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(()=> {
        bot();
    },randomDelayTime);
    
}


function bot(){
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount ==0) {
            array.push(i);
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if(array.length > 0){ 
        if(player.classList.contains("players")){
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        player.classList.add("active");
    }
    else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        player.classList.add("active");
    }

    }

}