//2 console api
// alert("you entered correctly")
//  javascript console api
console.log("this is inside console", 4 + 6, "another log")
    // document.write("this is inside the document")
console.warn("this is a warning in console")
console.error("this is error in console")
    // console.clear() used to clear and should be writn on console
    // console.assert(4==4)used to assertion and should be writn on console
    // 3. js variables
var number = 34;
var number2 = 56;
console.log(number + number2);
// 4 datatypes in java script
var str1 = "this is string";
var str2 = "this is also a string";
// objests
var marks = {
    ravi: 34,
    shubham: 74,
    sarvesh: 100
}
console.log(marks)
    // booleans
var a = true;
console.log(a);
// undifined
var b = undefined; //is same as var b;
console.log(b);
/* A a very high level there are two types of datatypes in javascript
1. primitive data types: undefined,null,number,string,boolean,symbol
2. Refrence datatypes: 
*/
var arr = [1, 2, 3, 4, 5] //we can add string in between arr =[1,2,3,"sarvesh",4]
console.log(arr);
// 3 OPERATORS
// arithmetic operators
var a = 100;
var b = 10;
console.log("this is addition", a + b);
console.log("this is multiplication", a * b);
console.log("this is subtraction", a - b);
console.log("this is division", a / b);
// assignment operators
var c = b;
c += 2;
console.log(c);
// comparison operators
var d = 50;
var f = 60;
console.log(d == f);
//  Functions
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(10, 2);
c2 = avg(15, 3);
console.log(c1, c2);
var c = 10;
if (c < 5) {
    console.log("its true");
} else if (c == 10) {
    console.log("jaihind");
} else {
    console.log("you are a kid");
}
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < 5; i++) {
    console.log(arr[i]);
}
// or we can use this to itterate

arr.forEach(function(element) {
    console.log(element);
})
let x = 0;
while (x < arr.length) {
    console.log(arr[x]);
    x++;
}
var arr = [1, 2, 3, 4, 5]
for (var i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    console.log(arr[i]);
}
console.log(arr.length);
//  array methods
var arr = [1, 2, "jaihind", null, 5];
console.log(arr.length);
arr.pop();
console.log(arr)
arr.push("great");
arr.shift();
arr.unshift("ohh");
console.log(arr);
arr.toString();
// string methods in javascript
let strin = "sarvesh is greatest of all time";
console.log(strin.length);
console.log(strin.indexOf("is"));
console.log(strin.slice(0, 3));
var d = strin.replace("sarvesh", "diksha");
console.log(d, strin);
// dates in js
// var mydate=new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());


// dom manipulation by id;
let cat = document.getElementById('click');
console.log(cat);
let cat1 = document.getElementsByClassName('container');
console.log(cat1);
// cat1[0].style.background= "yellow"; 
cat1[0].classList.add("bgprimary");
cat1[0].classList.add("newtext");
console.log(cat1[0].innerHTML);
console.log(cat.innertext);
// Fetching elements
tn = document.getElementsByTagName("button");
gn = document.getElementsByTagName("div");

// Logging the fetched elements
console.log(tn);
console.log(gn);

// Creating a new paragraph element
let createdElement = document.createElement('p');

// Correcting the property name to 'innerText'
createdElement.innerText = "This is new text";

// Appending the created element to the first 'div'

gn[0].appendChild(createdElement);
let newone = document.createElement('p');
newone.innerText = "this is replaced one";
gn[0].replaceChild(newone, createdElement)
    // 
sel = document.querySelector('.container');
console.log(sel);
// events in javascript
function clicked() {
    console.log("this button was clocked");
}
let firstContainer = document.getElementById("firstcontainer");

// if (firstContainer) {
//     firstContainer.addEventListener('click', function() {
//         console.log("click hua");
//     });
// }
if (firstContainer) {
    firstContainer.addEventListener('mouseover', function() {
        console.log("mouse on container");
    });
}
if (firstContainer) {
    firstContainer.addEventListener('mouseout', function() {
        console.log("mouse out container");
    });
}
if (firstContainer) {
    firstContainer.addEventListener('click', function() {
        document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    });
}
// set time out set interval
sum = (a, b) => {
    return a + b;
}
logkaro = () => {
    console.log("kiya na login");
    document.querySelectorAll('.container')[1].innerHTML = "<b> kardiya change </b>"

}
setTimeout(logkaro, 5000);
// var clr = setInterval(logkaro, 5000);
// use clearinterval(clr)to stop running interval,use cleartimeout()for timeout;


// local storage
localStorage.setItem('name', "diksha");
localStorage.getItem('name');
localStorage.removeItem('name'); //to remove one item
localStorage.clear(); //to clear all local storage
// jsonn
obj = {
    name: "sarvesh",
    roll: "74",
    a: {
        are: "asdf"
    }
};
let jso = JSON.stringify(obj);
console.log(typeof(jso));
console.log(jso);
let parsed = JSON.parse(`{"name":"sarvesh","roll":"74","a":{"are":"asdf"}}`);
console.log(parsed);
// ECMA script
let ab = 45;
console.log(`this is number in string ${ab}`); //template literals
var star = "pack your bags";
var str3;
/*if (firstContainer) {
    str3 = star[0];
    firstContainer.addEventListener('click', function() {
        for (var i = 1; i < star.length;) {
            function doit() {
                str3 = str3 + star[i];
                document.querySelectorAll('firstcontainer')[1].innerText = "str3"
            }
            i++

        }
    });
}/*