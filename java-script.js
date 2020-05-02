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

function userExperience() {
    var answer;
    var username = '';
    var savenv = '';

    while (savenv != 'yes' && 'no') {
        savenv = prompt("Do you want to save the enivroment(yes/no)");
        if (savenv == "yes") {
            answer = confirm('COOL ! NOW you should read some of our advices');
        } else if (savenv == "no") {
            answer = alert('WHY !! YOU SHOULD read some of our advices to change your mind');
        }
    }


    if (savenv == "yes") {
        username = prompt('please give us your name', 'Guest');
    } else if (savenv == "no") {
        username = alert('thank you for your visiting');
    }


    return username;

}


function userPrize() {

    var stars = prompt("how many stars do you want to achieve in this session by reading instructions?")
    var prize = 0 ;

    for (var i = 0; i < stars; i++) {

        prize = prize + 1 ;
    }

    return prize ;

}



