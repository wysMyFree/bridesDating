$(document).ready(function() {
    $('#myModal').modal('show');

    $('#lang-select').styler();


    $('#date').datepicker({
    });
$('.main-menu').click(function(){
    $('#main-menu').slideToggle();
});

$('.lang').click(function(){
    $('#main-menu').hide();
});

    $('.btn.drop-form').click(function(){
        $('#search-girl').slideToggle();
    });


    $('.main-menu-index').click(function(){
    });


    $('#datepicker, #datapicker-mobile').datepicker({

    });


    $('#carousel-girl-popular, .my-popular-ctrl ').hover(
        function(){
        $('.my-popular-ctrl').fadeIn( 1000 );

    },
      function(){
          $( '.my-popular-ctrl' ).fadeOut( 1000 );
      }
    );
    $('#carousel-girl-online, .my-online-ctrl').hover(
        function(){
            $('.my-online-ctrl').fadeIn( 1000 );

        },
        function(){
            $( '.my-online-ctrl' ).fadeOut( 1000 );
        }
    );

     $('a.btn.advanced-srch').click(function(){
            $('.invisible-form').slideToggle();
            $(this).toggleClass('my-color');
            $('#icon').toggleClass('glyphicon-triangle-top');
    });

    $('a.btn.dashboard-menu').click(function(){
        $('.drop-dashboard').slideToggle();
    });

    $('.catalog .menu_item a span.fa').click(function(){
        $(this).toggleClass('fa-caret-up');
    });





    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });


});