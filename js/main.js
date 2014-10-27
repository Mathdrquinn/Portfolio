$(document).ready(function () {

    upBlog('https://mathdrquinn.wordpress.com/feed/', $('#blog') );

    $(window).on('scroll', function(){
        $('.cd-timeline-block').each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img').removeClass('is-hidden').addClass('bounce-in');
                $(this).removeClass('is-hidden').addClass('bounce-in');
            }
        });
        $('.social').each(function(){
            console.log('in socail scroll');
            console.log($(this).offset().top);
            console.log();
            if( $(this).offset().top >= $('#stats').offset().top+10 ) {
                console.log('MADE IT TO IF STATMENT');
                $(this).addClass('bg-blue-shade');

            }
            if( $(this).offset().top <= $('#stats').offset().top+10 && $(this).hasClass('bg-blue-shade') ) {
                console.log('MADE IT TO REMOVE IF STATMENT');
                $(this).removeClass('bg-blue-shade');

            }
        });
        var buffer = $(window).scrollTop()*0.22+47;
        $('#social-bar').css('top', buffer);

    });

    $(".top-bar").on('click', '#resume', function (e) {
        e.preventDefault();

        if($('#cd-timeline').hasClass('inplace')) {
            $('#cd-timeline').addClass('makeAbsolute').addClass('moveLeft').removeClass('inplace');

            $('#blog').addClass('makeAbsolute').addClass('moveRight').removeClass('inplace');

            $('#projects').addClass('makeAbsolute').addClass('moveRight').removeClass('inplace');
        }

        if($('#portfolioDoc').hasClass('inplace')) {
            $('#portfolioDoc').removeClass('moveDown').removeClass('makeRelative').removeClass('inplace');
        }

        setTimeout(function() {
            $('#resumeDoc').addClass('moveDown').addClass('inplace');

            setTimeout(function() {
                $('#resumeDoc').addClass('makeRelative')
            }, 300);
        }, 500);

    })

    $(".top-bar").on('click', '#portfolio', function (e) {
        e.preventDefault();

        if($('#cd-timeline').hasClass('inplace')) {
            $('#cd-timeline').addClass('makeAbsolute').addClass('moveLeft').removeClass('inplace');

            $('#blog').addClass('makeAbsolute').addClass('moveRight').removeClass('inplace');

            $('#projects').addClass('makeAbsolute').addClass('moveRight').removeClass('inplace');
        }

        if($('#resumeDoc').hasClass('inplace')) {
            $('#resumeDoc').removeClass('moveDown').removeClass('makeRelative').removeClass('inplace');
        }

        setTimeout(function() {
            $('#portfolioDoc').addClass('moveDown').addClass('inplace');

            setTimeout(function() {
                $('#portfolioDoc').addClass('makeRelative')
            }, 300);
        }, 500);
    })

    $(".top-bar").on('click', '#nameTag', function (e) {
        e.preventDefault();

        if($('#portfolioDoc').hasClass('inplace')) {
            $('#portfolioDoc').removeClass('moveDown').removeClass('makeRelative').removeClass('inplace');
        }

        if($('#resumeDoc').hasClass('inplace')) {
            $('#resumeDoc').removeClass('moveDown').removeClass('makeRelative').removeClass('inplace');
        }

        setTimeout(function() {
            $('#cd-timeline').removeClass('moveLeft').removeClass('makeAbsolute').addClass('inplace');

            $('#blog').removeClass('moveRight').removeClass('makeAbsolute').addClass('inplace');

            $('#projects').removeClass('moveRight').removeClass('makeAbsolute').addClass('inplace');
        }, 800);
    })

    $('#portfolioDoc').on('mouseenter', '.projectCard', function () {
        console.log('mouseenter');
        $(this).addClass('fade');
    })
    $('#portfolioDoc').on('mouseleave', '.projectCard', function () {
        console.log('mouseLeave');
        $(this).removeClass('fade');
    })
})

function addMoveDown(obj) {
    $(obj).addClass('moveDown');
}