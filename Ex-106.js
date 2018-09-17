// Write a JavaScript program to divide an integer 
// by another integer as long as the result is an integer and return the result
function divideTillInteger (number , d) {
    while(d!=1 && number%d === 0) number /= d;
    return number;
}