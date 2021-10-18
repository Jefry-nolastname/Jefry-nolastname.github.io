$(document).ready(function() {
  // Single Page Nav for highlighting nav items
  $("#tmMainNav").singlePageNav();

  // Carousel in Our Work section
  $(".tm-gallery").slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Image Pop Up
  // $(".tm-gallery").magnificPopup({
  //   delegate: ".selected", // child items selector, by clicking on it popup will open
  //   type: "image",
  //   gallery: { enabled: true }
  // });
  $(".tm-gallery-item").each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });

  $(".navbar-toggler").on("click", function(e) {
    $(".tm-sidebar").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function(e) {
    var sidebar = document.getElementById("tmSidebar");

    if (!sidebar.contains(e.target)) {
      $(".tm-sidebar").removeClass("show");
    }
  });

  $("#tmMainNav .nav-link").click(function(e) {
    $(".tm-sidebar").removeClass("show");
  });
});
