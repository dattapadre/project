let menu_icin=document.querySelector("#menu_icon");
const menu=document.querySelector(".menu");
let menu_list=document.querySelector(".menu_list");
let check=0;
menu_icon.addEventListener("click",function(){
   if(check===0){
    menu.style.height="500px";
    menu.style.transitionDuration="0.5s";
    check=1;
   }else{
    menu.style.height="80px";
    menu.style.transitionDuration="0.5s";
    check=0;
   }
});

 let header_but=document.querySelector("#header_but");
 let menu_logo=document.querySelector(".menu_logo");
 let menu_but=document.querySelector(".menu_but");


 window.addEventListener("scroll",function(){
   let value=this.window.scrollY;
   if(value>2){
      menu.style.backgroundColor="white";
      menu.style.height="75px";
      menu.style.transitionProperty="height";
      menu.style.transitionDuration="0.5s";
      header_but.style.backgroundColor="#00bbd4";
      header_but.style.color="white";
      header_but.style.borderColor="#00bbd4"


   }else{
      menu.style.backgroundColor="#fef3ed";
      menu.style.height="80px";
      menu.style.transitionProperty="height";
      menu.style.transitionDuration="0.5s";
      header_but.style.backgroundColor="white";
      header_but.style.color="chartreuse";
   }

 })