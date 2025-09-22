console.log("test.js loaded");

setTimeout(()=>{
    console.log("test.js timeout")
},3000)


console.log("After 3 sconds in test.js");

setImmediate(() => {
    console.log("test.js immediate")
})

setTimeout(()=>{
    console.log("after 0 seconds in test.js")
})

console.log("after immediate in test.js");

// Timer phase
setTimeout(() => console.log('4. Timeout'), 0);

// Check phase
setImmediate(() => console.log('5. Immediate'));