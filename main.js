/******************
 * YOUR CODE HERE *
 ******************/
const xify = str => {
  let newStr = ''
  for (let char of str) {
    if (typeof char === 'string') {
      newStr += 'x'
    }
  }
  return newStr
}

const yellingChars = str => {
  let newStr = ''
  for (let char of str) {
    newStr += char + '!'
  }
  return newStr
}

const indexedChars = str => {
  let newStr = ''
  for (let i = 0; i < str.length; i++){
    newStr += i + str[i]
  }
  return newStr
}

const exclaim = str => {
  let newStr = ''
  for (let char of str) {
    if (char === '.' || char === '?') {
      newStr += '!'
    } else {
      newStr += char
    }
  }
  return newStr
}

const repeatIt = (str, num) => {
  let newStr = ''
  for (let i = 0; i < num; i++){
    newStr += str
  }
  return newStr
}

const truncate = str => {
  let newStr = ''
  if (str.length <= 18) {
    return str
  } else {
    newStr += str.slice(0, 15) + '...'
  }
  return newStr
}

const ciEmailify = str => {
  const splitName = str.split(" ")
  let newEmail = []
  
  newEmail.push(`${splitName[0]}.${splitName[1]}@codeimmersives.com`)

  return newEmail.join('').toLowerCase()
}

const reverse = str => {
  let revStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}

const onlyVowels = str => {
  let vowelStr = ''
  const vowels = 'aeiouAEIOU'
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelStr += char
    }
  }
  return vowelStr
}

const numberedChars = str => {
    let newStr = ''
    for (let i = 0; i < str.length; i++){
      newStr += `(${[i + 1]})${str[i]}`
    }
  return newStr
}

const crazyCase = str => {
  let newStr = ''
  for (let i = 0; i < str.length; i++){
    if (i % 2) {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i].toLowerCase()
    }
  }
  return newStr
}

const titleCase = str => {
  return str.toLowerCase().split(' ').map(i => {
    return (i.charAt(0).toUpperCase() + i.slice(1));
  }).join(' ');
}

const camelCase = str => {
  let newStr = ''
  for (i = 0; i < str.length; i++){
  if(str[i] === ' '){
      newStr += `${str[i+1].toUpperCase()}`
      i++
  } else {
      newStr += str[i].toLowerCase()
  }
  }
  return newStr
}

 function crazyCase2ReturnOfCrazyCase(str){
    let newStr = "";
    let charCount = 0;
    for (const char of str) {
        
        if (char === " ") {
            newStr += ' '
            continue;
        }
            
        if (charCount % 2 === 0) {
            newStr += char.toLowerCase();
        } else {
            newStr += char.toUpperCase();
        }
        
        charCount += 1;
    }   
    return newStr 
 }



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
