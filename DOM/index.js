var div = document.createElement("div");
div.className = "div1";

/// first heading
var h1 = document.createElement("h1");
h1.className='heading';
var txt = document.createTextNode("To-Do List UI!"); //heading text

h1.appendChild(txt)
div.appendChild(h1)
////input text for add todo
var input = document.createElement("input");
input.type='text';
input.placeholder='What To Do';
//// Add btn
var btn = document.createElement("button");
var txt = document.createTextNode("Add");
btn.appendChild(txt)

btn.className='addbtn'
var br = document.createElement("br");

div.appendChild(input)
div.appendChild(br)
div.appendChild(btn)
//// add li item for todo list
var ul =  document.createElement('ul') // ul

//dynamic li for each item
var listItems = ['First Item To Do','Second Item To Do','Third Item To Do'];
listItems.forEach(function(item){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += item;
});
div.appendChild(ul)// attaching ul to div

document.getElementById('divtwo').appendChild(div); ///attaching to body

///Add delete btn for eact LI item ///

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var btn = document.createElement("button");

  var txt = document.createTextNode("x");
  btn.appendChild(txt);
  btn.className = "styled";

  span.appendChild(btn);

  myNodelist[i].appendChild(span);
}


//////////////////////////////////////////////////////////////
