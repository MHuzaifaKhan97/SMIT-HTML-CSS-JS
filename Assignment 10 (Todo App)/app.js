var todoApp = document.getElementById('todoApp');

var h1 = document.createElement('h1');
var h1Text = document.createTextNode("Welcome to Todo App");
h1.setAttribute('class','h1');
h1.appendChild(h1Text);

var input = document.createElement('input');
input.setAttribute('class','input');
input.setAttribute('id','textBox');
input.setAttribute('type','text');
input.setAttribute('placeholder',' Enter Here...');

var space1 = document.createElement('br');
var space2 = document.createElement('br');


var insBtn = document.createElement('button');
var insBtnText = document.createTextNode("Add");
insBtn.setAttribute('onClick','createList();')
insBtn.setAttribute('class','btn');
insBtn.appendChild(insBtnText);


var rmvBtn = document.createElement('button');
var rmvBtnText = document.createTextNode("Remove All");
rmvBtn.setAttribute('onClick','removeAll();')
rmvBtn.setAttribute('class','btn');
rmvBtn.appendChild(rmvBtnText);


var ul = document.createElement('ul');
ul.setAttribute('id','todoList');


todoApp.appendChild(h1);
todoApp.appendChild(input);
todoApp.appendChild(space1);
todoApp.appendChild(space2);
todoApp.appendChild(insBtn);
todoApp.appendChild(rmvBtn);
todoApp.appendChild(ul);


function createList(){

    var text = document.getElementById('textBox').value;
    if(text === "")
    {
        window.alert('Please Enter Something');
    }
    else
    {
    var myList = document.getElementById('todoList');
    var newItem = document.createElement('li');
    newItem.setAttribute('class','li');
    var newItemText = document.createTextNode(text);
    newItem.appendChild(newItemText);
    
    var btnEdit = document.createElement("button");
    btnEdit.setAttribute('class','liBtn');
    var btnEditText = document.createTextNode("Edit");
    btnEdit.appendChild(btnEditText);

    btnEdit.addEventListener("click",function(){
       var EditText = prompt("",text);
       if(EditText === "")
       {

       }
       else {
       newItemText.data = "";
       newItemText = document.createTextNode(EditText);
       newItem.appendChild(newItemText);
        }  
    });
    
    var btnRemove = document.createElement("button");
    btnRemove.setAttribute('class','liBtn');
    var btnRemoveText = document.createTextNode("Remove");
    btnRemove.appendChild(btnRemoveText);

    btnRemove.addEventListener('click',function(){
        document.getElementById('todoList').removeChild(newItem);
    });

    myList.appendChild(newItem);
    newItem.appendChild(btnEdit);
    newItem.appendChild(btnRemove);

    }
    document.getElementById('textBox').value = "";
}

function removeAll(){
    document.getElementById('todoList').innerHTML = "";
}
