// alert("click here to proceed");
console.time('time taken');
console.log("hello guys");
console.warn("....WARNING...");
console.error("an error occured");
var a ={ name:"Akanksha", age :"19", city: "pune"}
var b ={ name:"Chetana", age :"20", city: "pune"}
var c ={ name:"Gayatri", age :"21", city: "pune"}
//console.log(a);
//console.log(b);
//console.log(c);
console.table({a,b,c})
console.log({a,b,c})
console.log('%c custom message','color:red;')
console.timeEnd('time taken');