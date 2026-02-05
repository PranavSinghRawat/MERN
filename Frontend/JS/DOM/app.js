var h=document.querySelector('h1');
console.log(h);
var h1=document.getElementById('id');
console.log(h1);
var button=document.querySelector('button');
var box=document.querySelector('.box');
button.addEventListener('click',function(){
    box.style.backgroundColor='green'
})
h.addEventListener('click',function(){
    console.log('clicked on h');
    h.innerHTML="kuch bhi";
    h.style.color="red";
    h.style.backgroundColor="yellow";
})

