function isPrime( n ) {
	if(n == 2 || n == 5) return true;
	if(n === 1 || n%2 === 0 || n%5 == 0) return false;
	for(let i = 3; i*i<=n ; i+=2) {
		if(n%i == 0) {
			//console.log(i);
			return false;
		}
	}
	return true;
}

function generatePrime( n ) {
	var arr = new Array();
	for(var i = 1; i < n; i++) {
		if(isPrime(i)) {
			arr.push(i);
		}
	}
	console.log(arr);
}