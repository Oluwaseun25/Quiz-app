// Q1

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// solution (long method)
// nb-56+%=
function arrayDiff(a,b){

    let difference = []
    for(let i = 0; i < a.length; i++){
        let found = false;
    for(let j = 0; j < b.length; j++){
        if(a[i] === b[j]){
            found = true;
            break;
        }
    }    
    if(!found){
        difference.push(a[i]);
    }
    }
    return difference;
}

// solution refactored

function arrayDiff(a,b){
    return a.filter(x => !b.includes(x))
}

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }


  // Q2

//   You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// solution

// nb-56+%=
function findOutlier(integers) {
    let oddInt = integers.filter(integer => integer % 2 !== 0);
    let evenInt = integers.filter(integer => integer % 2 === 0);
    
    return oddInt.length === 1 ? oddInt[0] : evenInt[0];
  }

  function findOutlier(ints) {
    return ints.slice(0, 3).reduce((a, b) => b % 2 === 0 ? a : a + 1, 0) >= 2 ?
      ints.find(i => i % 2 === 0) : ints.find(i => i % 2 !== 0);
  }

  function findOutlier(int){
    var evens=[],odds=[];
    int.forEach(function(num){num% 2 !=0? odds.push(num):evens.push(num) });
    return odds.length>1? evens[0]: odds[0];
    }


    // Q3
//     Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

solution

function digPow(n, p){
    let nStr = n.toString()
    let total = 0
    
    for(let i = 0; i < nStr.length; i++){
      total += Math.pow(parseInt(nStr[i],10), p + i);
      }
    if(total % n === 0){
      return total / n
    } else{
      return -1
    }
  }

  function digPow(n, p){
    var str = n.toString()
    var res = 0;
    
    for(var i=0; i<str.length; i++){
      res += Math.pow(parseInt(str[i]),p++); 
    }
    
    return res%n === 0 ? res/n : -1;
  }

  function digPow(n, p){
        let total = String(n).split("").reduce(s, d, i => s + Math.pow(parseInt(d, 10),p + i));
        return total % n ? -1 : total / n
  }
//   nb-56+%=