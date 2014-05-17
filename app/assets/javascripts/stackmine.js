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

// $(document).ready(function() {
//     var elements = document.getElementsById("#contact_name");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].oninvalid = function(e) {
//             e.target.setCustomValidity("");
//             if (!e.target.validity.valid) {
//                 e.target.setCustomValidity("This field cannot be left blank");
//             }
//         };
//         elements[i].oninput = function(e) {
//             e.target.setCustomValidity("");
//         };
//     }
// })
$(document).ready(function() {
  
  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');

    //FadeIn all sections   
  $body.imagesLoaded( function() {
    setTimeout(function() {
          
          // Resize sections
          adjustWindow();
          
          // Fade in sections
        $body.removeClass('loading').addClass('loaded');
    }, 800);
  });
  
  function adjustWindow(){
    
    // Init Skrollr
    var s = skrollr.init({
        forceHeight: false
    });
    
    // Get window size
      winH = $window.height();
      // Keep minimum height 550
      if(winH <= 550) {
      winH = 550;
    } 
      
      // Resize our slides
      $slide.height(winH);
      
      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));
      
  }
    
});

// $(document).ready(function() {
//   var elements = document.getElementById("contact_name");
//     elements.oninvalid = function(e) {
//       e.target.setCustomValidity("Please enter your name");
//     };
// });





    

