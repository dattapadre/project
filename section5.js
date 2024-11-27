let add=document.querySelector("#add");
let summary1=document.querySelector(".summary1");


let i=0;
summary1.addEventListener("click",function(){

    if(i===0){
        add.style.transform= "rotate(50deg)";
        i=1;
    }else{
        add.style.transform= "rotate(0deg)";
        i=0;
    }
});
