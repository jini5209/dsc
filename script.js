
var button=document.getElementById('button');
var input=document.getElementById('input');
var list=document.getElementById('list');
var count=1;
button.addEventListener('click', clickButton);

function clickButton(){
    var li=document.createElement('li');
   
    li.setAttribute("id","li"+count);
    li.setAttribute("class", "list-group-item");
    
    
    li.innerHTML=input.value;
    li.innerHTML += "<button style='float: right; claer:both;' id='delete' ' class='btn btn-outline-primary' type='button' onclick='remove("+count+")'>Delete</button>"
    li.innerHTML += "<button style='float: right; claer:both;' id='complete' ' class='btn btn-outline-secondary'type='button' onclick='complete("+count+")'>Complete</button>"
    list.appendChild(li);
    
    count=count+1;
    input.value="";
}

function remove(count) {
    var li=document.getElementById("li"+count);
    list.removeChild(li);
}

function complete(count) {
    var li = document.getElementById('li'+count);
    li.style.textDecoration = "line-through";
    
}