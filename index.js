let options=["rock","paper","scissors"]
let userScore=0
let computerScore=0
let imgs=document.querySelectorAll(".images")
imgs.forEach(item=>{
    item.addEventListener("click",function(event){
let computer=options[Math.floor(Math.random()*3)]
console.log(computer)
let user=event.target.alt
document.getElementById("poption").innerHTML="Player:"+user
document.getElementById("coption").innerHTML="computer:"+computer
if((user=="paper")&&(computer=="paper")){
    document.getElementById("wtext").innerHTML="You are lucky,it is a draw."
}
else if((user=="rock")&&(computer=="rock")){
    document.getElementById("wtext").innerHTML="You are lucky,it is a draw."
}
else if((user=="scissors")&&(computer=="scissors")){
    document.getElementById("wtext").innerHTML="You are lucky,it is a draw."
}
else if((user=="rock")&&(computer=="scissors")){
   userScore++
}
else if((user=="scissors")&&(computer=="rock")){
    computerScore++
 }
else if((user=="scissors")&&(computer=="paper")){
    userScore++
 }
else if((user=="paper")&&(computer=="scissors")){
    computerScore++
 }
else if((user=="paper")&&(computer=="rock")){
    userScore++
 }
 else if((user=="rock")&&(computer=="paper")){
    computerScore++
 }
if (userScore>computerScore){
   document.getElementById("wtext").innerHTML="Winner:User"
}
else if(userScore<computerScore){
   document.getElementById("wtext").innerHTML="Winner:Computer"
}
else{
    document.getElementById("wtext").innerHTML="Winner:It is a tie"
}
document.getElementById("UserScoreValue").innerHTML=userScore
document.getElementById("compScoreValue").innerHTML=computerScore
    })
})