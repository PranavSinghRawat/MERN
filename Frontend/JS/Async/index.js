function abcd(cb){
    cb();
}
abcd(function(){
    console.log('hey');
})