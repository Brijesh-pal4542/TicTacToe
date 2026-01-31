// changing heading case to upper or lower.
let head=document.querySelector("h1");
let txtCase="upper";
head.onclick=()=>{
    if(txtCase==="upper"){
        head.style.textTransform="lowercase";
        txtCase="lower";
    }
    else{
        head.style.textTransform="uppercase";
        txtCase="upper";
    }
}

// Changing Theme in dark OR light mode.
let mode=document.querySelector("#mode");
let theme="light";
let lightBody=document.querySelector(".lightBody");
let container=document.querySelector(".container");
let boxes=document.querySelectorAll(".box");
mode.addEventListener("click",()=>{
    if(theme==="light"){
        lightBody.classList.add("darkBody");
        lightBody.classList.remove("lightBody");
        container.classList.add("darkC");
        container.classList.remove("lightC");
        for(i=0;i<boxes.length;i++){
            boxes[i].classList.add("darkB");
            boxes[i].classList.remove("lightB");
        }
        theme="dark";
    }
    else{
        lightBody.classList.add("lightBody");
        lightBody.classList.remove("darkBody");
        container.classList.add("lightC");
        container.classList.remove("darkC");
        for(i=0;i<boxes.length;i++){
            boxes[i].classList.add("lightB");
            boxes[i].classList.remove("darkB");
        }
        theme="light";
    }
});

// Filling boxes with "X" OR "O" on oneclick and checking winner.
let winner="false";
let pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const checkwinner=()=>{
    for(let p of pattern){
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                winner= pos1;
            }
        }
    }
}
let hide=document.querySelector(".winner");
let player1="true";
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player1==="true" && winner==="false"){
            if(box.innerText===""){
                box.innerText="X";
            }
            player1="false";
        }
        else{
            if(box.innerText==="" && winner==="false"){
                box.innerText="O";
            }
            player1="true";
        }
        checkwinner();
        // displaying winner.
        if(winner!="false"){
            hide.innerText=`Congratulations ${winner} is Winner`;
            hide.classList.remove("hide");
        }
        });
});

// reset button functioning.
let reset=document.querySelector("#reset");
reset.onclick=()=>{
    for(box of boxes){
        box.innerText="";
    }
    hide.classList.add("hide");
    winner="false";
    player1="true";
}