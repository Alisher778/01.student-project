fetch('https://jsonplaceholder.typicode.com/todos')
	.then(res => res.json())
	.then(data => {
        var newData = data.slice(0,10);
        console.log(newData)
        var num = [2,3,4,5,7,9]
        var k = newData.map((n, i) => {
            return n
        }).sort((a,b) => a-b);
        
        var task = newData.filter(item => item.completed === true);
        console.log(task)
    })
	.catch(err => console.log(err))