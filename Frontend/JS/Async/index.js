// function abcd(cb){
//     cb();
// }
// abcd(function(){
//     console.log('hey');
// })

// function stepone(cb){
//     console.log("step 1");
//     cb();
// }
// function steptwo(cb){
//     console.log("step 2")
//     cb();
// }
// function stepthree(cb){
//     console.log("step 3")
//     cb();
// }
// stepone(()=>{
//     steptwo(()=>{
//         stepthree(()=>{
//             console.log("all callbacks called");
//         })
//     })
// })


//Promises 
function stepone() {
    return new Promise(function (res, rej) {
        console.log("Step 1");
        res();

    });
}
function steptwo() {
    return new Promise(function (res, rej) {
        console.log("Step 2");
        res();

    });
}
function stepthree() {
    return new Promise(function (res, rej) {
        console.log("Step 3");
        res();

    });
}
stepone().then(steptwo).then(stepthree).then(function () {
    console.log("all callbacks called");

});

// Task 1
function orderpizza() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let chance = Math.random() < 0.7;
            if (chance) res();
            else rej();
        }, 2000)
    });
}
orderpizza().then(()=>{
    console.log('pizza dilivered');
}).catch(()=>{
    console.log('pizza not dilivered');
});


// Task 2
function getuser(){
    return new Promise((res,rej)=>{
        setTimeout((res,rej)=>{
            res({id:1,name: 'pranav'});
        },1000);
    })
}
function getpost(userid){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(['title1','title2']);
        }, 1000);
    })
}
function getcomments(postid){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(['great post','you rocked']);
        }, 1000);
    })
}
getuser().then(function(data){
    console.log(data);
    return getpost(data.id)
}).then(function(titles){
    console.log(titles);
    return getcomments('ada');
}).then(function(cmts){
    console.log(cmts);
}).finally(function(){
    console.log('done');
})

// Task3
function fakeapidelay(endpoint){
    const data={
        user : ['pranav','suraj'],
        post : ['noice going','keep it up'],
    }
    let delay=Math.random()*2000+1000;
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(data[endpoint]);
        }, delay);
    })
}
fakeapidelay('user').then((data)=>{
    console.log(data);
})