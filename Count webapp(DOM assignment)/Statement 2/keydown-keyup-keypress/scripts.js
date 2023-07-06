let Inc_bt1=document.getElementById("Button-1")
let Dec_bt2=document.getElementById("ButtonAdd1")
let Res_bt3=document.getElementById("resetButton")


function increment(){
    document.querySelector(".Text").innerText=Number(document.querySelector(".Text").innerText)+1
}

function decrement(){
    document.querySelector(".Text").innerText=Number(document.querySelector(".Text").innerText)-1
}

function reset(){
    document.querySelector(".Text").innerText=0
}

Inc_bt1.addEventListener("keydown",decrement)
Dec_bt2.addEventListener("keyup",increment)
Res_bt3.addEventListener("keypress",reset)

