let body=document.querySelector("body");
console.log(body);

let cal=document.getElementById("cal");
console.log(cal);

let calInp=document.getElementById("calInp");
console.log(calInp);

function backspace(){
    // console.log(typeof calInp.value)
    calInp.value=calInp.value.slice(0,-1)
}


// EVENT LISTERNER FOR CLICK
cal.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.innerHTML=="("){
        calInp.value+="("
    }
    else if(e.target.innerHTML==")"){
        calInp.value+=")"
    }
    else if(e.target.innerHTML=="%"){
        calInp.value+="%"
    }
    else if(e.target.innerHTML=="/"){
        calInp.value+="/"
    }
    else if(e.target.innerHTML=="."){
        calInp.value+="."
    }
    else if(e.target.innerHTML=="*"){
        calInp.value+="*"
    }
    else if(e.target.innerHTML=="-"){
        calInp.value+="-"
    }
    else if(e.target.innerHTML=="+"){
        calInp.value+="+"
    }
    
    else if(e.target.innerHTML=="0"){
        calInp.value+="0"
    }
    else if(e.target.innerHTML=="1"){
        calInp.value+="1"
    }
    else if(e.target.innerHTML=="2"){
        calInp.value+="2"
    }
    else if(e.target.innerHTML=="3"){
        calInp.value+="3"
    }
    else if(e.target.innerHTML=="4"){
        calInp.value+="4"
    }
    else if(e.target.innerHTML=="5"){
        calInp.value+="5"
    }
    else if(e.target.innerHTML=="6"){
        calInp.value+="6"
    }
    else if(e.target.innerHTML=="7"){
        calInp.value+="7"
    }
    else if(e.target.innerHTML=="8"){
        calInp.value+="8"
    }
    else if(e.target.innerHTML=="9"){
        calInp.value+="9"
    }

    // IT WILL CLEAR THE INPUT
    else if(e.target.innerHTML=="clr"){
        calInp.value=""
    }

  
    // ON HITTING EUALS TO IT SHOULD PRINT ANSWER
    else if(e.target.innerHTML=="="){
        // calInp.value+="="
        // IT SHOULD CALL A METHOD OR FUNCTION
        // console.log(Number(calInp.value))
        calInp.value+=` = ${eval(calInp.value)}`

    }

})

//  its for keypressed






