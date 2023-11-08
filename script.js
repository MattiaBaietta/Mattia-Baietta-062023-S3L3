let txt=document.getElementById("inserisci")
let checkpos=document.querySelector("ul")
const posizionebutton=document.getElementById("bottone")

//console.log(posizionebutton)
let i=0

function addtxt(){
    
    let aggtxt=document.createElement("li")
    let aggbtn=document.createElement("button")
    
    aggtxt.innerText=txt.value
    aggbtn.innerText="cancella"
    aggbtn.className="deleteButton"   
   
    checkpos.appendChild(aggtxt)
    aggtxt.appendChild(aggbtn)
   
    aggbtn.addEventListener("click",function(){
        aggtxt.parentNode.removeChild(aggtxt)
    })
    aggtxt.addEventListener("click",function(){
        if(aggtxt.style.textDecoration== "line-through")
        {
            aggtxt.style.textDecoration="none"
        }
        else{
        aggtxt.style.textDecoration= "line-through"
    }
    })

}
console.log(txt.value)

posizionebutton.addEventListener("click",addtxt)



