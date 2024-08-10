let scoreEl = document.getElementById("score-el")
let gcoreEl = document.getElementById("gcore-el")
let count=0
let score =0
function one(){
    count+= 1
    scoreEl.textContent= count
}
function two(){
    count+= 2
    scoreEl.textContent= count
}
function three(){
    count+= 3
    scoreEl.textContent= count
}
function one1(){
    score+= 1
    gcoreEl.textContent= score
}
function two1(){
    score+= 2
    gcoreEl.textContent= score
}
function three1(){
    score+= 3
    gcoreEl.textContent= score
}
scoreEl.textContent= count
scoreEl.textContent= 0
gcoreEl.textContent = score 
gcoreEl.textContent = 0
function newgame(){
    count=0
    score=0
    scoreEl.textContent=0
    gcoreEl.textContent=0
}

