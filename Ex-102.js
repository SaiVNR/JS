// Write a JavaScript program to find the number of inversions of a given array of integers. 
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j

function doInversions(givenArray) {
    var count = 0;
    for (var i = 0; i < givenArray.length; i++) {
        for (var j = i + 1; j < givenArray.length; j++) {
            if (givenArray[i] > givenArray[j])
                count++;
        }
    }
    return count;
}