function getChanges(sum, change) {
	var coins = [1, 5, 10, 25, 50, 100].reverse();
	var change = sum - change;
	let obj = {}
	for(var i=0; i<coins.length; i++) {
		for(var j=0; i<change - coins[i]; j++) {
			console.log(1)
			if(obj[coins[i]]) {
				obj[coins[i]]++
			} else {
				obj[coins[i]] = 1
			}
			
		}
	}
	console.log(obj)
}

getChanges(500, 99);