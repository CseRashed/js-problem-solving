// Simple Calculator (+, -, *, /)

const num_1 =10;
const num_2 = 15;
const oprerator= '/'
if(oprerator ==="+"){
    console.log(num_1+num_2)
}else if(oprerator === '-'){
    console.log(num_1-num_2)
}else if(oprerator==='*'){
    console.log(num_1*num_2)
}else if(oprerator==='/'){
    console.log(num_1/num_2)
}else{
    console.log('Operator is Invalid')
}

//----- Sample Input/Output:

// Input: 10 5 + → Output: 15
// Input: 10 5 * → Output: 50