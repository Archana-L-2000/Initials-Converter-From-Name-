/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

function createInitialsFromName(name) {
  // Complete the function
  
  let str = "";
  arr = name.split(" ");
  

  if (arr.length === 1) {
    arr.forEach((element) => {
       str=element.substring(0, 2).toUpperCase();
    });
  } else if (arr.length === 2) {
    arr.forEach((element) => {
      initial = element.charAt(0).toUpperCase();
      str += initial;
     });
  } 

  else {
    arr.forEach((element) => {
      if (element === arr[0] || element === arr[arr.length - 1]) {
       initial = element.charAt(0).toUpperCase();
        str += initial;
      }
    });
  }
  return(str);
}


//console.log(createInitialsFromName(name))
module.exports = createInitialsFromName;