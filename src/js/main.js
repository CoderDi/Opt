$(document).ready(function() {
  $(".header__phones_all").click(function(){
    $(this).toggleClass("header__phones_all--open");
    $(".header__phones_popup").toggleClass("header__phones_popup--open");
  });

  $(".header__cart_container").click(function(){
    $(".header__cart_popup").toggleClass("header__cart_popup--open");
  });
});