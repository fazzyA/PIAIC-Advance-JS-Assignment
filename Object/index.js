const objResume = {};

function continueForm(form,secform){
// console.log('first')
var myform = document.getElementById(form);
var secform = document.getElementById(secform);
var signupBtn = document.getElementById('signupBtn');
myform.style.display='none';
secform.style.display='block';
signupBtn.style.backgroundColor='rgb(226, 95, 43)';
signupBtn.style.color='white';

}
const show = (form) =>{
    var myform = document.getElementById(form);

    myform.style.display='block';
}
const back = (form, secform) =>{
    var myform = document.getElementById(form);
    var secform = document.getElementById(secform);
    myform.style.display='block';
    secform.style.display='none';
}
/// years of experience through for loop
(function() { // don't leak
    var elm = document.getElementById('yrs'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 1; i <= 42; i++) { // loop, i like 42.
        var option = document.createElement('option'); // create the option element
        option.value = i; // set the value property
        option.appendChild(document.createTextNode("" + i)); // set the textContent in a safe way.
        df.appendChild(option); // append the option to the document fragment
    }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
}());

const handleChange =(e)=>{    
 console.log(e.value)
//objResume[e.name]=e.value;
//console.log(objResume)
  }
  
const submit = (e)=>{
    // var firstname = document.getElementsByName('fname').value;
    // var lname = document.getElementsByName('lname').value;
    // var email = document.getElementsByName('email').value;
    // var offadd = document.getElementsByName('offadd').value;
    // var address = document.getElementsByName('address').value;
    // var add2 = document.getElementsByName('add2').value;
    // var city = document.getElementsByName('city').value;
    // var state = document.getElementsByName('state').value;
    // var country = document.getElementsByName('country').value;
    // var phone = document.getElementsByName('phone').value;
    // var mphone = document.getElementsByName('mphone').value;
    // var postcode = document.getElementsByName('postcode').value;
    // var jobtitle = document.getElementsByName('jobtitle').value;
    // var city2 = document.getElementsByName('city2').value;
    // var interest = document.getElementsByName('interest').value;
    // var other = document.getElementsByName('other').value;
    // var website = document.getElementsByName('website').value;
    //console.log(firstname)
}//submit
//field "search";
var pattern = /[?&]fname=/;
var URL = location.search;

if(pattern.test(URL))
{
    const params = new URLSearchParams(window.location.search)
    var fname = params.get('fname');
    var firstname = params.get('fname');
    var lname =  params.get('lname');
    var email =  params.get('email');
    var offadd =  params.get('offadd');
    var address =  params.get('address');
    var add2 =  params.get('add2');
    var city =  params.get('city');
    var state =  params.get('state');
    var country =  params.get('country');
    var phone =  params.get('phone');
    var mphone =  params.get('mphone');
    var postcode =  params.get('postcode');
    var jobtitle =  params.get('jobtitle');
    var city2 =  params.get('city2');
    var interest =  params.get('interest');
    var other =  params.get('other');
    var website =  params.get('website');
    var mybody = document.getElementById('body');

    var divResume=document.createElement('div');
    divResume.id='divResume';
    var h1=document.createElement('H1');
    var p1=document.createElement('P');
    var p2=document.createElement('P');
    var p3=document.createElement('P');
    var p4=document.createElement('P');
    var p5=document.createElement('P');
    var p6=document.createElement('P');
    var p7=document.createElement('P');
    var p8=document.createElement('P');
    var p9=document.createElement('P');
    var br = document.createElement("br");

    var txt1 = document.createTextNode('Resume');
    var txt2 = document.createTextNode('First Name: '+fname);
    var txt3 = document.createTextNode('last Name: '+lname);
    var txt4 = document.createTextNode('Email: '+email);
    var txt5 = document.createTextNode('Adress: '+address);
    var txt6 = document.createTextNode('City: '+city);
    var txt7 = document.createTextNode('State: '+state);
    var txt8 = document.createTextNode('country: '+country);
    h1.appendChild(txt1);

    p1.appendChild(txt2);

    p2.appendChild(txt3);    

    p3.appendChild(txt4);    

    p4.appendChild(txt5);    

    p5.appendChild(txt6);    
    p6.appendChild(txt7);    
    p7.appendChild(txt8);    

    divResume.appendChild(h1);
    divResume.appendChild(p1);
    divResume.appendChild(p2);
    divResume.appendChild(p3);
    divResume.appendChild(p4);
    divResume.appendChild(p5);
    divResume.appendChild(p6);
    divResume.appendChild(p7);
    mybody.appendChild(divResume);

  //  alert(fname1);
}else{
   // alert("Not found!");
}