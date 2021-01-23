    $('.dote').on('click', function(e) {

        e.preventDefault();

        $($(this).siblings()).removeClass("dote-active");
        $($(this).parent().siblings().find("img")).removeClass("img-active")

        $('.dote').removeClass('dote-active'); // При клике удаляем класс active
        $('.first__slider-inner__img-img-1').removeClass('img-active');

        $(this).addClass('dote-active'); //При клике по табу добавляем кдасс active
        $($(this).attr('href')).addClass('img-active'); // Добавляем атрибут табу и активируем соответствующую форму     "images/arrow-left-black.svg"

    });

