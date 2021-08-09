/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function calculate(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}
console.log(calculate(3, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkNum(c, d) {
  return c === 50 || d === 50 || c + d == 50 ? true : false;
}
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

console.log(largestVal(50, 9, 1));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkRange(h, i) {
  return (h >= 40 && h <= 60 && i >= 40 && i <= 60) ||
    (h >= 70 && h <= 100 && i >= 70 && i <= 100)
    ? true
    : false;
}
console.log(checkRange(75, 100));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copyStr(n) {
  let str = "foram";
  return n > 0 ? console.log(str.repeat(n)) : console.log("enter valid num");
}
copyStr(5);
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityName(str2) {
  return str2.length >= 3 &&
    (str2.substring(0, 3) == "Los" || str2.substring(0, 3) == "New")
    ? str2
    : false;
}
console.log(cityName("Bombay"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function totalArray() {
  let arr = [1, 2, 3];
  let total = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
}
console.log(totalArray());
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
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
console.log(checkArr());
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function checkArr1(arr1) {
  if (arr1.indexOf(1) == -1 && arr1.indexOf(3) == -1) {
    return true;
  } else {
    return false;
  }
}

console.log(checkArr1([5, 4]));

/*11)

Create a function to find the longest string from a given array of strings.
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
console.log(findLongStr(["a", "ab", "abc"]));
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/
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
angle(119);
/*13)

Create a function to find the index of the greatest element of a given array of integers*/
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
console.log(getIndex([1, 12, 3]));
/*14)

Create a function to get the largest even number from an array of integers.
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
console.log(largestEven([10, 2, 18]));
/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.*/
function checkPositive(a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0) ? true : false;
}
console.log(checkPositive(10, -5));

/*

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function checkString(str3) {
  if (str3 < 3) {
    return str3.toUpperCase();
  }
  let beginning = str3.substring(0, 3).toLowerCase();
  let ending = str3.substring(3, str3.length);
  return beginning + ending;
}
console.log(checkString("foram"));
/*18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

*/
function findSum(a, b) {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
}
console.log(findSum(30, 20));

/*19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

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
console.log(numberFactors(5));
/*20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
const buildAcronym = (str = "") => {
  const strArr = str.split(" ");
  let res = "";
  strArr.forEach((el) => {
    const [char] = el;
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      res += char;
    }
  });
  return res;
};
console.log(buildAcronym("hello world"));
