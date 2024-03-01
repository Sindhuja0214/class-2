function sayMyName(){
    console.log(" myself sindhu");
    console.log("execution done ....");

}
//arguments
sayMyName();
function addTwoNumbers(num1,num2){
    const value = num1+num2
    console.log(value);
}
addTwoNumbers(5,10);
addTwoNumbers(77,56);

function isDivisible(num, divisor){
    
        if (num % divisor === 0)
        {
            return true;
        }
            else
            {
                return false;
            }
    
        
        //getting values in console
        console.log(true);
        const result = true;
        console.log(result);
        isDivisible();
        console.log(isDivisible(5,2));
        const divResult = isDivisible(9,3);
        console.log(divResult);
    }
 const anon_func =function(param){
    console.log(" i'm anoynyous function",param);
        }
anon_func("new param");
    



let arrow_func = (a,b)=> a+b;
console.lob("function value", arrow_func(30,10));

//IIFE 
(function callMe(name) 
{
    console.log("hii",name);
})()