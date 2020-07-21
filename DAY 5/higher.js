console.log("...Higher order function...");

    let arr =[];
    
    for(let i=0;i<5;i++)
    arr.push(prompt("Enter a positive number"));
    arr=arr.map(Number);
    console.log(arr)
let odd= arr.filter(el=>el%2!==0);

let oddcubes=arr.filter(el=>el%2!==0).map(el=>el**3);
console.log(odd);
console.log(oddcubes);









