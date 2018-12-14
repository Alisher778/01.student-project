function getChanges(sum, chan) {
	var coins = [1, 5, 10, 25, 50, 100].reverse();
	var change = (sum * 100) - (chan * 100);
	let obj = {1: 0, 5: 0, 10: 0, 25: 0, 50: 0, 100: 0}
	for(let i=0; i<coins.length; i++) {
		while(change >= coins[i]) {
            obj[coins[i]]++
            change -= coins[i];
        }
	}
    
    let result = [];
    for(let x in obj) {
        result.push(obj[x]);
    }
    console.log(result)
}

getChanges(5, 0.99);