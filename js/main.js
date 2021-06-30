$(document).ready(function () {
    //   메인 슬라이드 탑

    $(".nav-tabs > li > a").on('click', () => {
        $('.nav-tabs > li > a').removeClass("active");
        $(this).addClass("active");
    });

    var benefit = new Swiper(".benefit-wrap .swiper-container", {
        loop: true,
        navigation: {
            nextEl: ".navi_next",
            prevEl: ".navi_prev"
        },
        breakpoints: {
            280: {
                slidesPerView: 3,
            },
            412 : {
                slidesPerView: 4,
            },

            541: {
                slidesPerView: 5
            }
        }
    });

    var swiper = new Swiper(".main-slider", {
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
    });

    // 메인 슬라이드 컨텐츠
    var swiper = new Swiper(".vr-slider", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".vr_next",
            prevEl: ".vr_prev",
        },

        breakpoints : {
            280: {
                slidesPerView: 2.2,
            },
            411: {
                slidesPerView: 3,
            }
        }
    });

    var swiper = new Swiper(".here-slider", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".here_next",
            prevEl: ".here_prev",
        },

        breakpoints : {
            280: {
                slidesPerView: 2,
            },
            414: {
                slidesPerView: 3,
            }
        }
    });

    var swiper = new Swiper(".new-brand", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".new_next",
            prevEl: ".new_prev",
        },

        breakpoints : {
            280: {
                slidesPerView: 2,
            },
            411: {
                slidesPerView: 3,
            }
        }
    });

    var swiper = new Swiper(".tip-slider", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".tip_next",
            prevEl: ".tip_prev",
        },

        breakpoints : {
            280: {
                slidesPerView: 2,
            },
            411: {
                slidesPerView: 3,
            }
        }
    });

    var swiper = new Swiper(".menu-swiper", {
        loop: true,
        slidesPerView: 4,
        center: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".menu_next",
            prevEl: ".menu_prev"
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            281: {
                slidesPerView: 2,
            },
            414: {
                slidesPerView: 3,
            },
            541: {
                slidesPerView: 4,
            }
        }
    });

    var swiper = new Swiper(".wedding-swiper", {
        loop: true,
        slidesPerView: 2.5,
        centeredSlide: true,
        center: true,
        spaceBetween: 10,
    });

    var swiper = new Swiper(".wedding-swiper", {
        loop: true,
        slidesPerView: 4,
        centeredSlide: true,
        center: true,
        spaceBetween: 10,
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            539: {
                slidesPerView: 2,
            },
            542: {
                slidesPerView: 4,
            }
        }
    });

    var swiper = new Swiper(".list-swiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: ".list_next",
            prevEl: ".list_prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            539: {
                slidesPerView: 2,
            },
            542: {
                slidesPerView: 3,
            }
        }
    });


    var swiper = new Swiper(".product-swiper", {
        loop: true,
        spaceBetween: 10,
        center: true,
        centeredSlides: true,
        grabCursor: true,

        breakpoints: {

            280: {
                slidesPerView: 1.8,
            },

            414: {
                slidesPerView: 2.5
            }

        }
    });



    // 탭 전환
    $(".tab_wrap li").on("click", () => {
        $('.tab_wrap li').removeClass('active');
        $(this).addClass("active");
    });

    

    new Swiper('.weddingSlider', {
        slidesPerView: 2.75,
        spaceBetween: 15,
        breakpoints: {
            280 : {
                slidesPerView: 1.8,
                spaceBetween: 15,
            },
            540 : {
                slidesPerView: 2.75,
                spaceBetween: 15,
            }
        }
    });
    new Swiper('.weddingSliderBottom', {
        slidesPerView: 2.75,
        spaceBetween: 30,
        breakpoints: {
            280 : {
                slidesPerView: 1.8,
                spaceBetween: 15,
            },
            540 : {
                slidesPerView: 2.75,
                spaceBetween: 15,
            }
        }
    });

    var $tabButtonItem = $('#tab-button li'),
    $tabSelect = $('#tab-select'),
    $tabContents = $('.tab-contents'),
    activeClass = 'is-active';

    $tabButtonItem.first().addClass(activeClass);
    $tabContents.not(':first').hide();

    // button
    $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
    });

    // select
    $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
    });


    $(function () {
        $(".container-sub-head a").click(function () {
            $(".container-sub-head a").removeClass("active");
        });
    });
});