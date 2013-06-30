#!/usr/bin/env node
var fs = require('fs');
var outFile = "primes.txt";
var num = 100;

var isPrime = function(k) {
    var i = 2;
    var primeFlag = true;
    while(i < Math.sqrt(k)) {
        if(k % i == 0) {
            primeFlag = false;
            break;
        }
    };
    return primeFlag;
};

var testNPrimes = function(n) {
    var i = 3;
    var arr = [2];
    while (arr.length !== n ) {
        if(isPrime(i)) {
            arr.push(i);
            ++i;
        }
    }
    return arr;
};

var writeFile = function(arr) {
    var string = arr.join(",");
    fs.writeFileSync(outFile, string);
    console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outFile);
};

writeFile(testNPrimes(num));
