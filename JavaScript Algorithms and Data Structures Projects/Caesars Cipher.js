
function rot13(str) {
  //creating array to convert the ROT13 easily, since they just basically switches place every 13 charactes, so I use index to replace them.
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const rot13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'];
  let strArr = str.split('');
  var convertedStr = [];
  const excludeChar = [" ", "!", "?", ".","o"]

  //iterate over our str input
  for (var i = 0; i < strArr.length; i++) {
    //check if our str[index] exist in the 'cxcludechar" arr because we don't wanna convert those
    //if it isn't in the arr, then we convert it, from rot13 to alphabetical order, then push them to our store variable.
    if (excludeChar.indexOf(strArr[i]) < 0) {
      convertedStr.push(alphabet[rot13.indexOf(strArr[i])])
    } else {
      //else push without covert to the store variable.
      convertedStr.push(strArr[i])
    }
  }
  //after finishing the whole iterating looping, return the joined result.
  return convertedStr.join('')
}

console.log(rot13("T T"));


// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.