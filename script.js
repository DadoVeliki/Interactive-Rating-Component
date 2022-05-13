let gumb1=document.querySelectorAll('.btn');

console.log(gumb1);
let oznaceni=0;
gumb1.forEach(gumb =>{
    gumb.addEventListener("click",()=>{
        console.log(gumb);
        
        for(let i=0;i<5;i++){
            gumb1[i].style-="background-color:hsl(216, 12%, 54%);";
            gumb1[i].style+="background-color:#3D3C3C;";
        }
        gumb.style="background-color:hsl(216, 12%, 54%);";
        
        oznaceni=parseInt(gumb.innerText);
        console.log('oznaceni: '+oznaceni);
    });
});

let submit=document.querySelector('.btn2');
let divZaSkriti=document.querySelector('.glavni');
let divZaPokazati=document.querySelector('.drugi');
let ocjena=document.querySelector('.btn6');
submit.addEventListener("click",()=>{
    divZaSkriti.style="display:none;";

    divZaPokazati.style-="display: none;";
    divZaPokazati.style="display:block;display:flex;flex-direction: column; padding:50px;justify-content:center;align-items:center;";
    
    ocjena.innerText=`You selected ${oznaceni} out of 5`;
});

