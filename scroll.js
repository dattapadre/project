let home=document.querySelector("#home");
let about=document.querySelector("#About");
let services=document.querySelector("#services");
let resume=document.querySelector("#Resume");
let projects=document.querySelector("#projects");
let blogs=document.querySelector("#Blogs");
let contact=document.querySelector("#contact");

let value=this.window.scrollY;
console.log(value);

home.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
});
about.addEventListener("click",function(){
  window.scrollTo({
    top: 1948,
    behavior: 'smooth'
  });
});
services.addEventListener("click",function(){
    window.scrollTo({
        top: 1235,
        behavior: 'smooth'
      });
});
resume.addEventListener("click",function(){
    window.scrollTo({
        top:652,
        behavior: 'smooth'
      })
});
projects.addEventListener("click",function(){
    window.scrollTo({
        top: 3846,
        behavior: 'smooth'
      })
});

blogs.addEventListener("click",function(){
  window.scrollTo({
      top: 4781,
      behavior: 'smooth'
    })
});
contact.addEventListener("click",function(){
  window.scrollTo({
      top: 5691,
      behavior: 'smooth'
    })
});