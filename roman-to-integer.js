function romanToInteger(romanNumeral) {
    const romanToNum = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let integerVal = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentRoman = romanNumeral[i];
      const currentNum = romanToNum[currentRoman];
  
      if (currentNum < prevValue) {
        integerVal -= currentNum;
      } else {
        integerVal += currentNum;
      }
  
      prevValue = currentNum;
    }
  
    return integerVal;
  }
  
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  console.log(romanToInteger(romanNumeral1)); 
  console.log(romanToInteger(romanNumeral2)); 
  