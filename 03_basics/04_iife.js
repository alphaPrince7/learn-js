// Immediately invoked function expressions (IIFE)

//Named IIFE
(function chai(){
    console.log('DB connected')
})();

// Unnamed iffe 
((name)=>{
    console.log(`DB connected ${name}`)
})("Prince")
