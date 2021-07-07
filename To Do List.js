showtask();
let input=document.getElementById("input");

function addTask(){
let webtask=localStorage.getItem("myTask");
if(webtask== null || webtask==""){
taskObj=[];
}
else{
taskObj=JSON.parse(webtask);
}
taskObj.push(input.value);
localStorage.setItem("myTask", JSON.stringify(taskObj));
input.value= null;
showtask();
}

function showtask(){
let webtask=localStorage.getItem("myTask");
if(webtask== null || webtask==""){
taskObj=[];
}
else{
taskObj=JSON.parse(webtask);
}
let item_list=document.getElementById("item_list")
let html="";
taskObj.forEach((item, index) =>{
html+=`
<div class="items">
<p class="p_text">${item}</p>
<button class="deleteTask" onclick="deleteTask(${index})"><i class="fas fa-trash-alt"></i></button>
</div>`;
});
item_list.innerHTML=html;
}
function deleteTask(index){
let conf=confirm("Are you sure you want to delete the Task?");
if(conf===true){
let webtask=localStorage.getItem("myTask");
let taskObj=JSON.parse(webtask);
taskObj.splice(index, 1);
localStorage.setItem("myTask", JSON.stringify(taskObj))
showtask();
}
}