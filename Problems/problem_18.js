//  Check Odd and Positive

const num = 9;
if(num> 0 && num %2 !==0 ){
    console.log('Odd & Positive')
}else if(num >0 && num % 2 == 0){
    console.log('Even and Positive')
}else if(num <0 && num % 2 !==0){
    console.log('Odd and Negetive')
}else if(num <0 && num % 2 == 0){
    console.log('Even and Negetive')
}else{
    console.log('Number is Invalid')
}

// Sample Input/Output:

// Input: 7 → Output: Odd & Positive
// Input: -5 → Output: Odd but Not Positive
