// start of 1-problem

/*
const numbers = [];
const numberOne = Number(prompt("Birinchi sonni kiriting"));
const numberTwo = Number(prompt("Ikkinchi sonni kiriting"));
const numberThree = Number(prompt("Uchinchi sonni kiriting"));
numbers.push(numberOne, numberTwo, numberThree);

const sumInput = function(numbers){
     var collected = 0;
     for(let num of numbers){
         if(numberOne == "" || numberTwo =="" || numberThree ==""){
           console.log("To'g'ri son kiriting");
       } else{
           collected += num;
         }
     }
     return collected;
} 
console.log(numbers);
console.log(sumInput(numbers));
*/

// end of 1-problem
 



// start of 2-problem

/*
const varOne = ["Jazz", "Blues"];
console.log(varOne);
varOne.push("Rock-n-roll");
console.log(varOne);
varOne[Math.ceil(varOne.length/2)-1]="Classic";
console.log(varOne);
varOne.shift()
console.log(varOne);
varOne.unshift("Reggae")
varOne.unshift("Rap")
console.log(varOne);
*/

// end of 2-problem





// start of 3-problem

/*
let salaries = {
  "Akmal":1200, 
  "Salim":5200, 
  "Karima":1800, 
}
const arr = Object.values(salaries)
const sumSalaries = function(salaries){
  var summa = 0;
  for(let element of arr){
   summa +=element;
  }
  return summa;
}
console.log(sumSalaries(arr));
*/

// end of 3-problem





// start of 4-problem

/*
const calcNumbers = [1, 2, 3, 4, 5];

const calcSum = function(array){
  const evenNum = [];
  const oddNum = [];
    for(let i of calcNumbers){
    if(i % 2 === 0){
     evenNum.push(calcNumbers[i]);
    } else{
     oddNum.push(calcNumbers[i])
    }
  }
return `${evenNum} VS ${oddNum}`
}
console.log(calcSum(calcNumbers));
*/
// end of 4-problem




// start of 5-problem
/*
const nums = [-3, -2, 1, 5];

const maxNumber = nums[nums.length-1]
const minNumber =nums[0]
const leftNumbers = []
for(let i=minNumber; i <= maxNumber; i++){
  if(!nums.includes(i)){
    leftNumbers.push(i);
  } 
}
console.log(leftNumbers);
*/

// end of 5-problem