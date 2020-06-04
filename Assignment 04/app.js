!(function ($) {

  // Toggle navbar
  $('.nav-btn').click(function () {
    $('.nav-btn').toggleClass('change');
  });

  // Navbar
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 200) {
      $('.navbar-menu').addClass('custom-nav');
    }
    else {
      $('.navbar-menu').removeClass('custom-nav');
    }
  });

  // Smooth Scrolling
  $('.slide-section').click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    console.log("Href: " + $(href).offset().top);

    $('html, body').animate({
      scrollTop: $(href).offset().top
    })
  })

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });


})(jQuery);

// goto Kanwal Studio

function gotoKanwalStudio() {
  window.location = "./pages/kanwalstudiopackage.html";
} 
function gotodiamond() {
  window.location = "./pages/diamondpackage.html";
} 
function gotogold() {
  window.location = "./pages/goldpackage.html";
} 
function gotosilver() {
  window.location = "./pages/silverpackage.html";
}
function gotoContact(){
  window.location = './contact.html';
}
function hometoContact(){
  window.location = './pages/contact.html';
}