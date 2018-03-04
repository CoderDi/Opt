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
  
  $(".cart__deliv .cart__deliv_check").on('click', function(){
    if ($("#deliv-pochta").prop('checked')) {
      $(".cart__deliv--pochta").show();
      $(".cart__deliv--cur").hide();
      
    }
    if ($("#deliv-cur").prop('checked')) {
      $(".cart__deliv--pochta").hide();
      $(".cart__deliv--cur").show();
    }
  });

  $(".cab__item_details").click(function(){
    $(this).toggleClass("cab__item_details--open");
    $(this).parents(".cab__item").find(".cab__item_hidetext").toggleClass("cab__item_hidetext--open");
  });

  $(".cab__garage_item-addvin").click(function(){
    $(this).hide();
    $(this).parents(".cab__garage_item").find(".cab__garage_item_vin").show();
  });
  $(".cab__garage_item_vin--save").click(function(){
    $(this).hide();
    $(this).parents(".cab__garage_item").find(".cab__garage_item_vin--link").show();
    $(this).parents(".cab__garage_item").find(".cab__garage_item_vin--edit").show();
    $(this).parents(".cab__garage_item").find("input").addClass("editable").attr('readonly', true);
  });
  $(".cab__garage_item_vin--edit").click(function(){
    $(this).hide();
    $(this).parents(".cab__garage_item").find(".cab__garage_item_vin--save").show();
    $(this).parents(".cab__garage_item").find("input").removeClass("editable").attr('readonly', false);
  });

  $(".cab__data_line_input input").on('input', function() {
    $buffer = $(this).parents(".cab__data_line").find(".input-buffer");
    $buffer.text($(this).val());
    $(this).width($buffer.width() + 30);
  });

  $(".cab__data_line--accept").click(function(){
    $(this).hide();
    $(this).parents(".cab__data_line").find(".cab__data_line--edit").show();
    $(this).parents(".cab__data_line").find(".cab__data_line--decline").hide();
    $(this).parents(".cab__data_line").find("input").addClass("editable").attr('readonly', true);
  });
  $(".cab__data_line--edit").click(function(){
    $(this).hide();
    $(this).parents(".cab__data_line").find(".cab__data_line--accept").show();
    $(this).parents(".cab__data_line").find(".cab__data_line--decline").show();
    $(this).parents(".cab__data_line").find("input").removeClass("editable").attr('readonly', false);
  });

  $(".cab__data_address-delete").click(function(){
    $(this).parents('.cab__data_address').remove();
  });

  $(".category__filter_title").click(function(){
    $(this).find("i").toggleClass('rotate');
    $(this).parents(".category__filter_block").find(".category__filter_drop").toggleClass("category__filter_drop--open");
  });

  $(".item__favourite").click(function(){
    $(this).toggleClass("item__favourite--star");
  });




  $(".card__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: "<i class='fa fa-long-arrow-left card__slider_btn card__slider_btn--prev'></i>",
    nextArrow: "<i class='fa fa-long-arrow-right card__slider_btn card__slider_btn--next'></i>"
  });
});








