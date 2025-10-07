// Check Leap Year

const year= 2025;
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
  console.log(`Leap Year: ${year}`)
}else{
    console.log(`No Leap Year: ${year}`)
}

//----- Sample Input/Output:

// Input: 2020 → Output: Leap Year
// Input: 2021 → Output: Not Leap Year