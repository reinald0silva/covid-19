$(document).ready(function() {
    $('body > div.grid-container.text-shadow > div.header > div.nav-header.mt-2 > ul > li:nth-child(1) > a').addClass('active');
    $('#main-dados1').hide();
    $('#main-dados2').hide();
    $('#main-dados1').show();

    $('body > div > div.header > div.nav-header.mt-2 > ul > li > a').click(function() {
        $('body > div > div.header > div.nav-header.mt-2 > ul > li > a').removeClass('active');
        $(this).addClass('active');

        $('#main-dados1').hide();
        $('#main-dados2').hide();

        var activeTabe = $(this).attr('href');


        $(activeTabe).show();
        return false;
    });



    // $('#button1').addClass('active');
    // $('.main').hide();
    // $('#main-dados1').show();

    // $('body > div > div.nav-header.mt-2 > ul > li > a').click(function() {
    //     $('body > div > div.nav-header.mt-2 > ul > li a').removeClass('active');
    //     $(this).addClass('active');
    //     $('.main').hide();

    //     var activeTabe = $(this).attr('href');
    //     console.log(activeTabe)

    //     $(activeTabe).show();

    //     return false;
    // })
});