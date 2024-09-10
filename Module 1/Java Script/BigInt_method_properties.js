let big_int=456789098765434n
console.log("printing the big int value::"+big_int)
////////////
let big_int2=BigInt(987654567890)
console.log("Calling the big int value directly"+big_int2)
//////////////////difference between them by using adddtion
let num1=98765123456789n
let x=num1+1n
console.log(x)
big_int3=BigInt(98765123456789)
big_int3=big_int3+1n
 console.log(big_int3)

x = Number.MAX_SAFE_INTEGER;
x = x + 1; // 9007199254740992
x = x + 1; // 9007199254740992 (same as above)
console.log("always same with max no more store::"+x)

 x = BigInt(Number.MAX_SAFE_INTEGER);
x = x + 1n; // 9007199254740992n
x = x + 1n; // 9007199254740993n (correct now)
console.log("has been length increase::"+x)