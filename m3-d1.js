/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function calculate(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}
console.log("-----------------EX1----------------");
console.log(calculate(3, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkNum(c, d) {
  return c === 50 || d === 50 || c + d == 50 ? true : false;
}
console.log("-----------------EX2----------------");
console.log(checkNum(30, 50));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removeChar(str, n) {
  let oldStr = str.substr(0, n);
  let newStr = str.substr(n + 1, str.length);
  return oldStr + newStr;
}
console.log("-----------------EX3----------------");
console.log(removeChar("foram", 2));
/*

4)
 Create a function to find the largest of three given integers.
*/
function largestVal(e, f, g) {
  let num = 0;
  if (e > f) {
    num = e;
  } else {
    num = f;
  }
  if (g > num) {
    num = g;
  }
  return num;
}
console.log("-----------------EX4----------------");
console.log(largestVal(50, 9, 1));
/*
5)
Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don't.
*/
function checkRange(h, i) {
  return (h >= 40 && h <= 60 && i >= 40 && i <= 60) ||
    (h >= 70 && h <= 100 && i >= 70 && i <= 100)
    ? true
    : false;
}
console.log("-----------------EX5----------------");
console.log(checkRange(75, 100));
/*
6) 

Create a function to create a new string composed of a specified number of copies of a given string. Pass the string and the number of copies as parameters.
*/
function copyStr(n) {
  let str = "foram";
  return n > 0 ? console.log(str.repeat(n)) : console.log("enter valid num");
}
console.log("-----------------EX6----------------");
copyStr(5);
/*

7)
Create a function to display the city name if the string begins with "Los" or "New". Pass the city name as a parameter. Return false if they start with a different string.
*/
function cityName(str2) {
  return str2.length >= 3 &&
    (str2.substring(0, 3) == "Los" || str2.substring(0, 3) == "New")
    ? str2
    : false;
}
console.log("-----------------EX7----------------");
console.log(cityName("Bombay"));

/*
8)
Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
*/
function totalArray() {
  let arr = [1, 2, 3];
  let total = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
}
console.log("-----------------EX8----------------");
console.log(totalArray());
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.Return true is it does, false if it doesn't. 
*/
function checkArr() {
  let arr = [5, 6, 7];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("-----------------EX9----------------");
console.log(checkArr());
/*

10)
Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. Return true if it doesn't, false if it does
*/
function checkArr1(arr1) {
  if (arr1.indexOf(1) == -1 && arr1.indexOf(3) == -1) {
    return true;
  } else {
    return false;
  }
}
console.log("-----------------EX10----------------");
console.log(checkArr1([5, 4]));

/*11)

Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.
*/
function findLongStr(strArr) {
  let arr2 = 0;
  for (let i = 0; i < strArr.length; i++) {
    arr2 = strArr[i];
    if (strArr[i].length > arr2.length) {
      arr2 = strArr[i];
    }
  }
  return arr2;
}
console.log("-----------------EX11----------------");
console.log(findLongStr(["f", "fo", "for"]));
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.Return Acute
    Right angle: An 90 degree angle. Return Right
    Obtuse angle: An angle between 90 and 180 degrees. Return Obtuse
    Straight angle: A 180 degree angle.Return Straight*/
function angle(a) {
  if (a > 0 && a < 90) {
    console.log(" Acute angle: An angle between 0 and 90 degrees.");
  }
  if (a == 90) {
    console.log(" Right angle: An 90 degree angle.");
  }
  if (a > 90 && a < 180) {
    console.log("btuse angle: An angle between 90 and 180 degrees.");
  }
  if (a == 180) {
    console.log("Straight angle: A 180 degree angle.");
  }

  return a;
}
console.log("-----------------EX12----------------");
angle(119);

/*13)
Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter*/
function getIndex(arrIndex) {
  let element = "";
  let index = "";
  for (let i = 0; i < arrIndex.length; i++) {
    if (arrIndex[i] > element) {
      element = arrIndex[i];
      index = i;
    }
  }
  return index;
}
console.log("-----------------EX13----------------");
console.log(getIndex([1, 12, 3]));
/*14)
Create a function to find and return the largest even number from an array of integers that is passed a parameter.
*/
function largestEven(arrEven) {
  let element = "";

  for (let i = 0; i < arrEven.length; i++) {
    if (arrEven[i] > element && arrEven[i] % 2 === 0) {
      element = arrEven[i];
    }
  }
  return element;
}
console.log("-----------------EX14----------------");
console.log(largestEven([10, 2, 18]));
/*
15)
Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. Return true if that's the case, return false if it's not.*/
function checkPositive(a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0) ? true : false;
}
console.log("-----------------EX15----------------");
console.log(checkPositive(10, -5));

/*
16)

Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter.
*/
function checkString(str3) {
  if (str3.length < 3) {
    return str3.toUpperCase();
  }
  let beginning = str3.substring(0, 3).toLowerCase();
  let ending = str3.substring(3).toUpperCase();
  return beginning + ending;
}
console.log("-----------------EX16----------------");
console.log(checkString("foram"));

/*17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
function findSum(a, b) {
  const sum = a + b;
  return sum >= 50 && sum <= 80 ? 65 : 80;
}
console.log("-----------------EX17----------------");
console.log(findSum(30, 10));

/*18)

Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
The number has 3 as a factor ⇒ return Diego 
The number has 5 as a factor ⇒ return Riccardo 
The number has 7 as a factor ⇒ return Stefano 
If the number does not have 3,5, or 7, return the original number. 
⚠️ The factor is an integer which evenly divides a number without leaving a remainder. 
One number can have more than one factor, in that case you should return both names. 
Ex: 15 has both 3 and 5 has factors: the function will return DiegoRiccardo

*/
function numberFactors(getNum) {
  let number = "";

  if (getNum % 3 == 0) {
    console.log("Diego");
  }
  if (getNum % 5 == 0) {
    console.log("Riccardo");
  }
  if (getNum % 7 == 0) {
    console.log("Stefano");
  }

  return number;
}
console.log("-----------------EX18----------------");
console.log(numberFactors(15));
/*19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
function getDigit(word) {
  return word[0];
}
function getAcronym(str) {
  var words = str.split(" ");
  var acr = words.map(getDigit);
  return acr.join("").toUpperCase();
}
console.log("-----------------EX19----------------");
console.log(getAcronym("hello world"));
