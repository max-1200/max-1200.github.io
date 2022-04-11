//code for the listenerevent used from https://www.youtube.com/watch?v=A87C2nM4etk

// var navigationList = document.getElementById("navigation_list");
// var listItems = navigationList.getElementsByClassName("list_text_style");
//option above did not work, could not find classname witin vavigationlist parameters

// var navigationList = document.getElementById("navigationlist");

// var listItems = document.getElementsByClassName("list_text_style");

// for (var i = 0; i < listItems.length; i++) {
//     //for loop is just so this only happens to the listitems 
//     listItems[i].addEventListener('click', function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     })
// }

// $('.navigation_list li').click(function(){
//     $('.navigation_list li').removeClass('active');
//     $(this).addClass('active');
// })

// $('.test').on('click','li', function(){
//     $(this).addClass('active').siblings().removeClass('active');
//  });




// // Get the container element
// var btnContainer = document.getElementById("myDIV");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// window.onload = function () {
//     //document.getElementById does not work without the page being fully loaded. This fixes that, yet could still cause issues in the future
//     //otherewise put it into a script function in the html file
//     var navigationList = document.getElementById("navigationlist");
//     var listItems = navigationList.getElementsByClassName("list_text_style");

//     for (var i = 0; i < listItems.length; i++) {
//         //for loop is just so this only happens to the listitems 
//         listItems[i].addEventListener('click', function () {
//             var current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//         })
//     }

// }

// var project_02_list = document.getElementByTagName("a[href='");

    // project_02_list.addEventListener('click', function(){
    // })

    // var footerElement = document.getElementById("footerId");

    // for (var i = 0; i < footerElement.length; i++) {
    //     footerElement[i].addEventListener('click', function () {
    //         var current = document.getElementsByClassName("active");

    //         if(current.length > 0){
    //             current[0].className = current[0].className.replace(" active", "");
    //         }

    //         this.className += " active";
    //     })
    // }


    // window.onload = function(){
    //     jQuery(function ($) {
    //         //location.reload(false);
    //         var pathname = window.location.href;
    //         $('li a').each(function () {
    //             if (this.href === pathname) {
    //                 $(this).addClass('active');
    //             }
    //         });
    //     });
    // }

    // jQuery(document).ready(function($){
    //     var path = window.location.pathname.split("/").pop(); 
    //     //split makes sure that the url name does not matter
    //     console.log(path);
    // })