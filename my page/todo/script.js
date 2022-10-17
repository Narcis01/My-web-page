let n=0;
function get_taks(){
    console.log(document.getElementById('input').value)
    var form = document.getElementById("form");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);
    var task=document.getElementById('input').value;
    add_task(task);
}

function add_task(task){
    var box=document.createElement('div');
    box.className="tasks";
    box.id="box"+n;
   
    
    var del=document.createElement('button');
    del.className="delete";
    del.id="delete"+n;
    del.addEventListener('click',function(){
      document.getElementById("tasks").removeChild(document.getElementById(box.id));
      n--;
      document.getElementById('items_number').textContent=n+" items left";
    })
    del.textContent=" X ";
    
    var text=document.createTextNode(task);
    box.appendChild(text);
    box.appendChild(del);
    document.getElementById("tasks").appendChild(box);
    
    n++;
    document.getElementById('items_number').textContent=n+" items left";
    var i=0
  
    
}
var nr=0;
function mode(){
  if(nr%2==0)
  { nr++;
    var button=document.getElementsByClassName("delete");
    var task=document.getElementsByClassName("tasks");
    for(var i=0;i<task.length;i++){
    task[i].style.backgroundColor="#E4E4E4";
    button[i].style.backgroundColor="#E4E4E4";
    task[i].style.color="black";}

    document.body.style.backgroundColor="#E4E4E4";
    document.getElementById("img_back").src="images/bg-desktop-light.jpg";
    document.getElementById("container").style.backgroundColor="#C3C3C3";
    document.getElementById("submit").style.backgroundColor="#C3C3C3";
    document.getElementById("submit").style.color="black";
    document.getElementById("sun").style.backgroundColor="#C3C3C3";
    document.getElementById("title").style.color="black";
    document.getElementById("items_number").style.color="black";
    
    
  }
  else {
    nr++;
    document.body.style.backgroundColor="hsl(235, 21%, 11%)";
    document.getElementById("img_back").src="images/bg-desktop-dark.jpg";
    document.getElementById("container").style.backgroundColor="hsl(235, 24%, 19%)";
    document.getElementById("submit").style.backgroundColor="hsl(235, 52%, 26%)";
    document.getElementById("submit").style.color="white";
    document.getElementById("sun").style.backgroundColor="hsl(235, 24%, 19%)";
  }
}


