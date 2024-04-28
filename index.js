let dollar=document.querySelector(".dollar");
let dinar=document.querySelector(".dinar");


    dollar.onkeyup=()=>{
        dinar.value= Math.round(dollar.value*3.09).toFixed(3)
    }
    dinar.onkeyup=()=>{
        dollar.value= Math.round(dinar.value/3.09).toFixed(3)
    }
