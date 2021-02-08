$(document).ready(function () {
    $('.porta').on("click", function (e) {
        e.preventDefault();
        $('.cabo1').slideToggle();
    });
});