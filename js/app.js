// Header fixed

window.addEventListener('scroll', function() {
    const nav = this.document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});


// Smooth scroll

$(function() {


    // Smooth scroll

    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        const $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate( {
            scrollTop: blockOffset
        }, 1000);

    });


    // Slider about 

    const sliderAbout = $('#container__slider');

    sliderAbout.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
      });


    //   Slider news

    const sliderNews = $('#news__slider');

    sliderNews.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
      });





});