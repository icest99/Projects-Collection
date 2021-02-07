function palindrome(str) {
  //check for certain string that I dont want, like number, non alphabetic characters etc with regex.
  const fixedStr = str.replace(/_|\W/g,"").toLowerCase();
  
  //split-them
  const splitStr = fixedStr.split('')

  //make an empty array to store new string.
  let reverseSortStr = [];

    //reverse  the string and check if they are the same with the original string.
  splitStr.forEach(letter => reverseSortStr.unshift(letter));
  if (reverseSortStr.join('') === splitStr.join('')){
    return true;
  }
  return false;
}

console.log(palindrome("1 eye for of 1 eye."));

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

