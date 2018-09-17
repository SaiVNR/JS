function pairs (arr) {
    var count = 0;
    for(var i = 0 ;i < arr.length; i++)
        for(var j = 1+1; j < arr.length; j++) 
            if(arr[j]%arr[i] === 0 || arr[i]%arr[j] === 0) count++;
    return count;
}