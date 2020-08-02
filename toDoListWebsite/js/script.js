function toAdd(){
  let i;
  if(localStorage.length==0){
     i=0;
  }else{
    i= localStorage.getItem("i");
  }
  let task = document.getElementById("task");
  let taskText = task.value;
  if(taskText.length>0){
  task.value= "";
  let date = new Date();
  let time = date.getHours()+" : " + date.getMinutes();
  let dateToSave = date.getDate()+ "-" + (date.getMonth()+1)+"-"+date.getFullYear();
  i++;
  localStorage.setItem("task"+i, taskText);
  localStorage.setItem("time"+i, time);
  localStorage.setItem("date"+i, dateToSave);
  localStorage.setItem("i",i);
  document.getElementById("table").innerHTML += "<tr><td>"+taskText+"</td><td>"+time+"</td><td>"+dateToSave+"</td><td><button id="+i+" onclick=\"todelete()\">delete</button></td></tr>";} else{
    alert('Please Enter Something!');
  }
}

function todelete(){
  let id = event.srcElement.id;
  localStorage.removeItem("task"+id);
  localStorage.removeItem("date"+id);
  localStorage.removeItem("time"+id);
  let i = localStorage.getItem("i");
  if(i>10&&localStorage.length==1){
    localStorage.setItem("i", 0);
  }
  location.reload(true);
}

window.onload= function(){toReload();};

function toReload(){
  let i = localStorage.getItem("i");
  for(let a=1; a<=i; a++){
    let task = localStorage.getItem("task"+a);
    if(task!=null){
      let date = localStorage.getItem("date"+a);
    let time = localStorage.getItem("time"+a);
      document.getElementById("table").innerHTML += "<tr><td>"+task+"</td><td>"+time+"</td><td>"+date+"</td><td><button id="+a+" onclick=\"todelete()\">delete</button></td></tr>";
    } else{
      continue;
    }
  }
 
}