// Write a JavaScript program to find two elements of the array
// such that their absolute difference is not greater
// than a given integer but is as close to the said integer.

function nearestValue(arr, thresholdValue) {
    var max = -999;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            let temp = Math.abs(arr[i] - arr[j]);
            if (temp <= thresholdValue) max = Math.max(max, temp);
        }
    }
    return max;
}