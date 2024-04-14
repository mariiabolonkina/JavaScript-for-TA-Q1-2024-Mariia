//task1
// let newWindow = window.open("", "", "width=300, height=300");
//setTimeout(function(){
// newWindow.resizeTo(500,500);
//}, 2000);
// setTimeout(function(){
// newWindow.moveTo("200", "200");
//}, 4000);
// setTimeout(function(){
//     newWindow.close();
// }, 6000);


//task2
// function changeCSS() {

// let textElement = document.querySelector('text');
//     textElement.style.color = 'orange';
//     textElement.style.fontSize = '20px';
//     textElement.style.fontFamily = 'Comic Sans MS'
// }

//task3
// document.getElementById('button1').onclick = function() {
//     document.body.style.backgroundColor = 'blue';
// };

// document.getElementById('button2').ondblclick = function() {
//     document.body.style.backgroundColor = 'pink';
// };

// let button3 = document.getElementById('button3');
//     button3 .onmousedown = function () {
//         document.body.style.backgroundColor = 'brown';
//     }
// button3.onmouseup = function() {
//     document.body.style.backgroundColor = 'white';
// }

// let link = document.getElementById('link');
//     link .onmouseover = function () {
//         document.body.style.backgroundColor = 'yellow';
//     }
// link.onmouseout = function() {  
//     document.body.style.backgroundColor = 'white';
// }

//task4
// function removeSelectedOption() {
//     let list = document.getElementById('nameList');
//     list.remove(list.selectedIndex);
// }

//task5
// let button = document.getElementById(".oneButton");
// let statusMessage = document.createElement("div");
// document.body.appendChild(statusMessage);

// button.addEventListener("mouseover", function() {
//     eventLog.innerHTML += "Mouse on me!<br>"
// });
// button.addEventListener("mouseleave", function() {
//     eventLog.innerHTML += "Mouse is not on me!<br>"
// });
// button.addEventListener("click", function() {
//     eventLog.innerHTML += "I was pressed!<br>"
// });

//task6
// function showWindowsSize() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//  document.getElementById("dimensions").innerText = "Width: " + width + "; Height: " + height;
// }
// window.onload = showWindowsSize;
// window.onresize = showWindowsSize;
