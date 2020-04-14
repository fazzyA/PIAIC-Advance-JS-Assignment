var div = document.createElement("div");
div.className = "div1";

/// first heading
var h1 = document.createElement("h1");
h1.className='heading';
var txt = document.createTextNode("To-Do List!"); //heading text

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

var ul =  document.createElement('ul') // li element to display new todo
var li =  document.createElement('li') 
var text = document.createTextNode('First Item To Do'); 
li.appendChild(text) // put text in li as child
var li2 =  document.createElement('li') // li element to display new todo
var text2 = document.createTextNode('Second Item To Do'); 
li2.appendChild(text2) 
var li3 =  document.createElement('li') // li element to display new todo
var text3 = document.createTextNode('Third Item To Do'); 
li3.appendChild(text3) // put text in li as child

ul.appendChild(li)  // attaching list to ul
ul.appendChild(li2)
ul.appendChild(li3)
div.appendChild(ul)// attaching ul to div

document.getElementById('body').appendChild(div); ///attaching to body

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
