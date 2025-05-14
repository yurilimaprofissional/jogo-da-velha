const selecBox = document.querySelector(".select-box"),
selectXBtn = selecBox.querySelector(".playerX"),
selectOBtn = selecBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board");

window.onload = ()=> {
    selectXBtn.onclick = ()=> {
        selecBox.classList.add("hide");
        playBoard.classList.add("show");
    }

    selectOBtn.onclick = ()=> {
        selecBox.classList.add("hide");
        playBoard.classList.add("show");
    }
}