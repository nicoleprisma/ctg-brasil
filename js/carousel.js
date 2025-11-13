if (window.matchMedia("(max-width: 991px)").matches) {
  $(".destaques-banner").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

