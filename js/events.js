$(document).ready(function() {
    $('#button1').addClass('active');
    $('.main').hide();
    $('#main-dados1').show();

    $('body > div > div.nav-header.mt-2 > ul > li > a').click(function() {
        $('body > div > div.nav-header.mt-2 > ul > li a').removeClass('active');
        $(this).addClass('active');
        $('.main').hide();

        var activeTabe = $(this).attr('href');

        $(activeTabe).show();

        return false;
    })
});