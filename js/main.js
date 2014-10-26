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
        $('#cd-timeline').addClass('makeAbsolute');
        $('#cd-timeline').addClass('moveLeft');

        $('#blog').addClass('makeAbsolute');
        $('#blog').addClass('moveRight');

        $('#projects').addClass('makeAbsolute');
        $('#projects').addClass('moveRight');

        $('#resumeDoc').slideDown(3000);
    })

})