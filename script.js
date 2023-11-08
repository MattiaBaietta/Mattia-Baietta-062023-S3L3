let txt=document.getElementById("inserisci")
let checkpos=document.querySelector("ul")
const posizionebutton=document.getElementById("bottone")
let deleteButtons=document.querySelectorAll("input")
//console.log(posizionebutton)
let i=0

function addtxt(){
    
    let aggtxt=document.createElement("li")
    let aggbtn=document.createElement("button")
    
    aggtxt.innerText=txt.value
    aggbtn.innerText="cancella"
    aggbtn.id=i
    aggtxt.id=i
    aggbtn.className="deleteButton"   
   
    checkpos.appendChild(aggtxt)
    aggtxt.appendChild(aggbtn)
   
   
    i++
    aggbtn.addEventListener("click",function(){
        aggtxt.parentNode.removeChild(aggtxt)
    })


}
console.log(txt.value)

posizionebutton.addEventListener("click",addtxt)




