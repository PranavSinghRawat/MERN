function getprofiledata(username){
    return fetch(`https://api.github.com/users/${username}`).then(raw=>{
        if(!raw.ok){
            throw new Error('user not found')
        }else{
            return raw.json()
        }
    })
}
function getreps(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw=>{
        if(!raw.ok){
            throw new Error('failed to fetch repos')
        }else{
            return raw.json();
        }
    })
}
let searchbtn=document.querySelector('.search')
let usernameinp=document.querySelector('.usernameinp')
searchbtn.addEventListener('click',function(){
   let username=usernameinp.value.trim();
   if(username.length>0){
    getprofiledata(username).then(data=>{
        console.log(data);
    })
   }else{
    alert();
   }
})