$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 1000 });
    $("#carouselButton").click(function () {


        if ($(carouselButton).children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $(carouselButton).children('span').removeClass('fa-pause');
            $(carouselButton).children('span').addClass('fa-play')

        }
        else if ($(carouselButton).children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $(carouselButton).children('span').removeClass('fa-play');
            $(carouselButton).children('span').addClass('fa-pause')

        }
    });
    $("#loginButton").click(function () {
        alert("Welcome user")
        $("#loginModal").modal('show');
    });
    $(".loginClose").click(function () {
        $("#loginModal").modal('hide');
    });
    $("#reserveForm").click(function () {
        $("#reserveFormModal").modal('show');
    });
    $(".reserveFormClose").click(function () {

        $("#reserveFormModal").modal('hide');
    });
    $('.modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

});