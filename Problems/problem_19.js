// Check Armstrong Number (3 digit)

const num = 253;
const numStr = num.toString();

const num_1 = Number(numStr[0]);  
const num_2 = Number(numStr[1]);     
const num_3 = Number(numStr[2]);     

const total = num_1**3 + num_2**3 + num_3**3;
if(total == num){
  console.log(` ${num}  is an Armstrong number`)   
} else{

    console.log(` ${num}  is not Armstrong number`)
}

// ----Sample Input/Output:

// Input: 153 → Output: Armstrong
// Input: 123 → Output: Not Armstrong