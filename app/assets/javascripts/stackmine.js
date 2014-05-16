$(document).ready(function() {
    $('#bs-example-navbar-collapse-1 ul li a').click(function() {
     $('#bs-example-navbar-collapse-1').collapse('hide')
  });

  $('a#portfolioModal1').click(function() {
    $('#myModal1').modal('show');
  });

  $('a#portfolioModal2').click(function() {
    $('#myModal2').modal('show');
  });

  $('a#portfolioModal3').click(function() {
    $('#myModal3').modal('show');
  });

  $('a#portfolioModal4').click(function() {
    $('#myModal4').modal('show');
  });

  $('a#portfolioModal5').click(function() {
    $('#myModal5').modal('show');
  });  

  // $('body').removeClass('loading').addClass('loaded'); 
 });

$(window).scroll(function() {
var windscroll = $(window).scrollTop();
if (windscroll >= 0) {
  $('main section').each(function(i) {
    if ($(this).position().top <= windscroll + 100) {
        // $('nav li a.active').addClass('active');
        $('nav li a.active').removeClass('active');
        $('nav li a').eq(i).addClass('active');
        }
    });
  } 
}).scroll();





    

