// 'use strict';
// var today = new Date();
// var hourNow = today.getHours();
// if (hourNow > 18) {
//     greeting = 'Good evening, Class!';
//   } else if (hourNow > 12) {
//     greeting = 'Good afternoon, Class!';
//   } else if (hourNow >= 0) {
//     greeting = 'Good morning!';
//   } else {
//     greeting = 'Something went wrong!';
//   }
// document.write('<h3>'+greeting+'</h3>');

'use strict';
var answer;
var username;

var savenv = prompt("Do you want to save the enivroment(yes/no)");
if (savenv == "yes") {
    answer = confirm('COOL ! NOW you should read some of our advices');
} else if  (savenv == "no"){
    answer = confirm('WHY !! YOU SHOULD read some of our advices to change your mind');
}


if (savenv == "yes") {
    username = prompt('please give us your name');
} else if ( savenv == "no") {
    username = confirm('thank you for your visiting');
}

document.write('Welcome '+ username)


