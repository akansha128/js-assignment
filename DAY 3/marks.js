// using conditional statements
/*function test(){
    let result;
    let mark = prompt("enter the marks of students");
    if(mark<=50){
    result =console.log("The obtain marks is ",mark , "Grade is B");
           
    }
    if(mark>=50){
    result = console.log("The obtain marks is",mark, "Grade is A");
    }
    
    return result;
    console.log(result);
    }
     test();
*/
// using ternary
let mark = prompt("enter the marks of students");

console.log(mark<= 50 ? ("mark is",mark):
            ("mark  is",mark));
 result = (mark<=50) ? "Grade is B" :  
             (mark>=50) ? "Grade is A" :
              "student is fail";

 console.log(result);
                  