let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let input = document.querySelector('.input')

btn1.addEventListener('click' ,()=>{
   // alert('ok')
   input.type = "text";
   btn1.style.display = "none";
   btn2.style.display = "block";
});
btn2.addEventListener('click' ,()=>{
   // alert('ok')
   input.type = "password";
   btn2.style.display = "none";
   btn1.style.display = "block";
});
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let body = document.querySelector('body');

moon.addEventListener('click', function(){
   body.classList.add("mode");
   if(body.classList.contains('mode')){
      moon.style .marginTop = '-100%'; }
});
sun.addEventListener('click', function(){
   body.classList.remove("mode");
   if(!body.classList.contains('mode')){
      moon.style .marginTop = '0%';
   }
});
let nav = document.querySelector('#nav');
let test = 0;
window.addEventListener('scroll',function(){
   let top = document.documentElement.scrollTop;
   if(test > top){
      nav.classList.add('active');
   }else{
    nav.classList.remove('active');
   }
   test = top;
});
let clrgen = document.querySelector("#clrgen");
let clrbtn = document.querySelector(".clrbtn");

clrbtn.addEventListener('click' , function(){
   let red = Math.round(Math.random() * 255);
   let blue = Math.round(Math.random() * 255);
   let green = Math.round(Math.random() * 255);

    console.log(red);
    console.log(blue);
    console.log(green);
   clrgen.style.background = `rgb(${red}, ${green}, ${blue})`

});