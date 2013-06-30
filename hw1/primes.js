#!/usr/bin/env node
var fs = require('fs');
var outFile = "primes.txt";
var num = 100;

var isPrime = function(k) {
    var i = 2;
    var primeFlag = true;
    while(i <= Math.ceil(Math.sqrt(k))) {
        if(k % i == 0) {
            primeFlag = false;
            break;
        }
        i++;
    };
    return primeFlag;
};

var testNPrimes = function(n) {
    var i = 3;
    var arr = [2];
    while (arr.length !== n ) {
        if(isPrime(i)) {
            arr.push(i);
            console.log("add: " + i +"\n");
        }
	i++;
    }
    return arr;
};

var writeFile = function(arr) {
    var string = arr.join(",");
    fs.writeFileSync(outFile, string);
    console.log("Script: " + __filename + "\nWrote to: " + outFile);
};

writeFile(testNPrimes(num));
