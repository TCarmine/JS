
// here the goal is achied with fadeIN / fadeOUT
// if using this is not possible use arrow function

$(document).ready(function(ev) {

  $('main > aside > li').click(function(ev) {

    $('main > aside > li').removeClass('selected');
    $(this).addClass('selected');

    $('section').removeClass('active');
    let targetsIdentity = $(this).attr('unique');
    $(`section[unique=${targetsIdentity}]`).addClass('active');
  })

})

// $(document).ready(function(ev) {
//
//  $('main > aside > li').click(function(ev) {
//
//    $('main > aside > li').removeClass('selected');
//    $(this).addClass('selected');
//
//    $('section').removeClass('active');
//    let targetsIdentity = $(this).attr('unique');
//    $(`section[unique=${targetsIdentity}]`).addClass('active');
//  })
// })
