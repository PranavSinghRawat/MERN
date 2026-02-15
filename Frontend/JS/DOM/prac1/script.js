var h1=document.querySelector("h1");
h1.innerHTML="kuch bhi"
h1.setAttribute('id','hero')
var img1=document.querySelector('#img1')
var img2=document.querySelector('#img2')
var btn=document.querySelector('button')
btn.addEventListener('click',function(){
    var img1src=img1.getAttribute('src')
    var img2src=img2.getAttribute('src')
    img1.setAttribute('src',img2src)
    img2.setAttribute('src',img1src)
})