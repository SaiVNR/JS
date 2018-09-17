// Write a JavaScript program to find the maximal number from a
//  given positive integer by deleting
//  exactly one digit of the given number.

function maxNumberAfterDeleteingOneDigit( number ) {
    var given = number + " ";
    var max = 0;
    for(var i = given.length-1; i>0; i--) max = Math.max(max, given.substr(0,i-1) + given.substr(i)); 
    return max;
}