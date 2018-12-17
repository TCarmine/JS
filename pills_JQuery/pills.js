
// here the goal is achied with fadeIN / fadeOUT
// if using this is not possible use arrow function

$(document).ready(function(ev) {


  $('button').on('mouseenter mouseleave', function() {
    let targetsButton = $(this).attr('btn');

    $(`button > p[btn=${targetsButton}]`).addClass('activeButton');
  });

  $('main > aside > li').click(function(ev) {

    $('main > aside > li').removeClass('selected');
    $(this).addClass('selected');

    $('section').removeClass('active');
    let targetsIdentity = $(this).attr('unique');
    $(`section[unique=${targetsIdentity}]`).addClass('active');
  })

})
