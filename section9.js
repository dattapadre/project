let all=document.querySelector("#all");
let angular=document.querySelector("#angular");
let mongodb=document.querySelector("#mongodb");
let bootsrap=document.querySelector("#bootstrap");
let mo=document.querySelector("#mo");
let b=document.querySelector("#b");
let angu=document.querySelector("#angu"); 
let r=document.querySelector("#r");
let v=document.querySelector("#v");
let list=document.querySelector(".list");
let list1=document.querySelector(".list1");
let list2=document.querySelector(".list2");
let list3=document.querySelector(".list3");



all.addEventListener("click",function(){
    mo.style.display="inline-block";
    r.style.display="inline-block";
    angu.style.display="inline-block";
    v.style.display="inline-block";
    b.style.display="inline-block";
    list1.style.border="none";
    list2.style.border="none";
    list3.style.border="none";
    all.style.borderBottom="2px solid blue";
});


angular.addEventListener("click",function(){
    mo.style.display="inline-block";
    r.style.display="inline-block";
    angu.style.display="inline-block";
    v.style.display="none";
    b.style.display="none";
    list.style.border="none";
    list2.style.border="none";
    list3.style.border="none";
    angular.style.borderBottom="2px solid blue";
})

mongodb.addEventListener("click",function(){
        angu.style.display="none";
        mo.style.display="inline-block";
        b.style.display="none";
        r.style.display="none";
        v.style.display="none";
        list1.style.border="none";
        list.style.border="none";
        list3.style.border="none";
        mongodb.style.borderBottom="2px solid blue";
})

bootsrap.addEventListener("click",function(){
        angu.style.display="none";
        mo.style.display="none";
        r.style.display="none";
        v.style.display="none";
        b.style.display="inline-block";
        list1.style.border="none";
        list2.style.border="none";
        list.style.border="none";
        bootsrap.style.borderBottom="2px solid blue";
})
