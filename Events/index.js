var liList = document.getElementsByTagName("li");
var i;
for (i = 0; i < liList.length; i++) {
    var myspan = document.createElement("span");
    var btn = document.createElement("button");
    var btntxt = document.createTextNode("x");
    btn.className = "styled";
    myspan.className = "del";
    btn.type = "button";
    btn.onclick = function() { var par = this.parentElement;
      par.parentElement.style.display = "none"; };
     btn.appendChild(btntxt);
   myspan.appendChild(btn);
   liList[i].appendChild(myspan);
  }
function deleteTodo(){
    console.log('im in delete')
    var divv = this.parentElement;
    console.log(divv)
    divv.style.display = "none";

}  //this.parentElement.style.display = "none"

function newTodo(){
  var li =  document.createElement('li') // li element to display new todo
  var txt = document.getElementById('addTodo').value; //get input value and
  var text = document.createTextNode(txt); 
  li.appendChild(text) // put text in li as child
  li.onclick = function() { 
    li.className = "check"; };

  document.getElementById("myList").appendChild(li) // append li to parent UL list
  document.getElementById('addTodo').value = ''; //empty input after submitting todo

  /// now delete btn
  var myspan = document.createElement("span");
  var btn = document.createElement("button");
  var btntxt = document.createTextNode("x");
  btn.className = "styled";
  myspan.className = "del";
  btn.type = "button";
  //btn.setAttribute("onclick","deleteTodo();");
  btn.onclick = function() { var par = this.parentElement;
    par.parentElement.style.display = "none"; };
   btn.appendChild(btntxt);
 myspan.appendChild(btn);
  li.appendChild(myspan);
}

