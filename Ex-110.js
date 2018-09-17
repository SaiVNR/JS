function numberOfEvenNumbers( arr, num ) {
	var count = 0;
	var index = 0;
	while(arr[index] != num && index < arr.length) {
		if(arr[index]%2 == 0) {
			count++;
		}
		index++;
	}
	return count;
}