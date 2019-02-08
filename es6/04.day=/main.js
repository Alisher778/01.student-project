const pa = document.getElementById('result');
let myData = [];
let el = [];
let found = [];
const select =function(sel) {
    return document.getElementById(sel)
};
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(data => data.json())
	.then(res => {
        myData = res.slice(0,10);
		res.slice(0,10).forEach((item, index) => {
            const li = `<li id=${item.id} onclick="remove(${item.id})">${item.userId} - ${item.id} - ${item.title}</li>`;
            pa.innerHTML += li;
		})
    })
    .catch(err => console.log(err))

    function remove(id) {
        found = myData.find(item => item.id === id);
        // myData = myData.filter(item => item.id !== id );
       
        select('user').style.display = 'block';
        select('id').innerHTML = found.id;
        select('name').innerHTML = found.title;
        select('status').innerHTML = found.completed;
    }

    function ha() {
        console.log('Close clicked');

        found = null;
        select('user').style.display = 'none';
        select('id').innerHTML = '';
        select('name').innerHTML = '';
        select('status').innerHTML = '';
    }

