
function convertToRoman(num) {
  //create two array to iterate over them, when we iterate over them we check for the heightest number to sbutract our 'num' input, from numForCon arr. after we subtract it by that amount we add it Roman equivalence to our result storage variable "storeRomanNum". And just repeat the process until it goes to 0
  const numForCon = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let storeRomanNum = "";
  
  //iterating over our array of numForCon
  for (let i = 0; i <= numForCon.length; i++) { //I use NumForCon.length here, because well.. we can't iterate furthur than what we have in our array.
      //console.log(i,numForCon[i]);

      //if our total num input is still higher than the selected index number, we keep repeating it (subtracting) untill it break out of the loop (num is now less than the current index numForCon, then we move onto the next and repeat. till 0)
      while (num >= numForCon[i]){
          storeRomanNum += romanNum[i];
          num -= numForCon[i];
      }
  }
  return storeRomanNum
}

console.log(convertToRoman(649));



// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.