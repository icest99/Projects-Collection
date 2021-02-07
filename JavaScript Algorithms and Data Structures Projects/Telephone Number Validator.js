function telephoneCheck(str) {
  // making regex that will check all of these variation, if match, they are a valid telephone number
  const regex = /^(?:^(\d\d\d|\(\d\d\d\))[-|\s]\d\d\d[-|\s]\d\d\d\d|^(\d\d\d|\(\d\d\d\))\d\d\d[-|\s]\d\d\d\d|^([1])[-|\s]\d\d\d[-\s]\d\d\d[-\s]\d\d\d\d|^([1])[-\s]\(\d\d\d\)[-|\s]\d\d\d[-\s]\d\d\d\d|^([1])(\(\d\d\d\))\d\d\d[-|\s]\d\d\d\d)$/g
  const numOnlyRegex = /^([\d]+)$/

// some example of the variation that these two regex detect
//   555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// if length of our string is less than 10, then it's for sure not a telephone number
  if (str.length < 10) {
  return false
  //if it's a pure number without anything in-between, then we will check it's length, if the str is more than 10 then return false, else return true
  } else if (numOnlyRegex.test(str)) {
    return str.length > 10? false:true
  } else {
  return regex.test(str);
  }

}

console.log(telephoneCheck("27576227382"));



// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.