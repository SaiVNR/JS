// Write a JavaScript program to find the
//  number of times to replace a given number with the sum 
//  of its digits until it convert to a single digit number
function makingToOneDigit( num ) {
    var sum = 0;
    var count = 0;
    while(num > 10) {
        sum = 0;
        while(num) {
            sum += num % 10;
            num = Math.floor(num/10);
        }  
        num = sum;count++;
    }
    return count;
}