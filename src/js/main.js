$(document).ready(function() {
  $(".header__phones_all").click(function(){
    $(this).toggleClass("header__phones_all--open");
    $(".header__phones_popup").toggleClass("header__phones_popup--open");
  });

  $(".header__cart_container").click(function(){
    $(".header__cart_popup").toggleClass("header__cart_popup--open");
  });
  $(".header__cab_nologin").click(function(){
    $(".header__cab_popup").toggleClass("header__cab_popup--open");
  });
  $(".header__vin_span").click(function(){
    $(".header__vin_popup").toggleClass("header__vin_popup--open");
  });
  $(".minus").click(function(){
    if (parseInt($(this).parents(".cart__item").find(".value").html()) > 1) {
      $(this).parents(".cart__item").find(".value").html(parseInt($(this).parents(".cart__item").find(".value").html()) - 1);
    }
  });
  $(".plus").click(function(){
    $(this).parents(".cart__item").find(".value").html(parseInt($(this).parents(".cart__item").find(".value").html()) + 1);
  });

  $(".cart__item_delete").click(function(){
    $(this).parents(".cart__item").find(".cart__item_rem-mes").addClass("cart__item_rem-mes--show");
    $(this).parents(".cart__item").find(".cart__item_container").remove();
    
  });
});