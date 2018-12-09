console.log('messaging');
var users = JSON.parse(localStorage.data);

function loadUsers() {
    var userList = document.getElementById('users');

    for(var i=0; i<users.length; i++) {
        var newUser = 
         `<li id="user${users[i].id}">
            <img src="img/user.svg" alt="">
            <div class="user-info">
                <h3>${users[i].full_name} by ${users[i].username}</h3>
            </div>
            <button id=${users[i].id} onclick="removeUser(this.id)">X</button>
        </li>`
        userList.innerHTML += newUser;
    }
}
loadUsers();

function removeUser(id) {
   var parentElement = document.getElementById('user'+id);
   parentElement.remove();
   var localStorageData = JSON.parse(localStorage.data);

   var newLocalstorageData = [];
   for(var i=0; i<localStorageData.length; i++) {
        if(localStorageData[i].id != id) {
            newLocalstorageData.push(localStorageData[i]);
        }
   }
   localStorage.data = JSON.stringify(newLocalstorageData);
}

function addMsg() {
    var msgArea = document.getElementById('messageArea');
    var message = document.querySelector('.emojionearea-editor').innerHTML;
    console.log(msgArea, message);
    msgArea.innerHTML += '<p>'+message+'</p><br>';
}