function appen() {
  if ($(window).width() <= 882) {
    $('#tabs__item--container-mark').append( $('.tabs__area .tabs__area-mark') );
    $('#tabs__item--container-year').append( $('.tabs__area .tabs__area-year') );
    $('#tabs__item--container-model1').append( $('.tabs__area .tabs__area-model1') );
    $('#tabs__item--container-body').append( $('.tabs__area .tabs__area-body') );
    $('#tabs__item--container-dvig1').append( $('.tabs__area .tabs__area-dvig1') );
    $('#tabs__item--container-modif').append( $('.tabs__area .tabs__area-modif') );
    $('.news__block_mobile-title').append( $('.news__block_right .news__title, .news__block_right .news__label') );
  } else {
    $('.tabs__area').append( $('#tabs__item--container-mark .tabs__area-mark') );
    $('.tabs__area').append( $('#tabs__item--container-year .tabs__area-year') );
    $('.tabs__area').append( $('#tabs__item--container-model1 .tabs__area-model1') );
    $('.tabs__area').append( $('#tabs__item--container-body .tabs__area-body') );
    $('.tabs__area').append( $('#tabs__item--container-dvig1 .tabs__area-dvig1') );
    $('.tabs__area').append( $('#tabs__item--container-modif .tabs__area-modif') );
    $('.news__block_pc-title').append( $('.news__block_mobile-title .news__title, .news__block_mobile-title .news__label') );
  }
}



$(window).resize(function(){
  appen();
});
$(document).ready(function() {
  appen();




  $(".header__phones_all").click(function(){
    $(this).toggleClass("header__phones_all--open");
    $(".header__phones_popup").toggleClass("header__phones_popup--open");
  });

  $(".js-get-sms").click(function(){
    if ($("#sms-input").val() == "123") {
      $("#no-number").show();
    } else {
      $("#form-get-sms").hide();
      $("#no-number").hide();
      $("#get-sms-caption").hide();
      $("#sms-form").show();
    }
  });
  $(".js-get-code").click(function(){
    if ($("#code-input").val() == "123") {
      $("#no-code").show();
    } else {
      $(".header__cab_popup").removeClass("header__cab_popup--open");
      $("#no-code").hide();
      $("#form-get-sms").show();
      $("#get-sms-caption").show();
      $("#sms-form").hide();
      $(".header__cab_nologin").hide();
      $(".header__cab_login").css("display", "flex");      
    }
  });
  
  $(".cab__history_table-link").click(function(){
    $(".js-history-table").hide();
    $(".js-cab-zakaz").show();
    $("#js-more-cab").hide();
  });
  $("#js-cab-back").click(function(){
    $(".js-history-table").show();
    $(".js-cab-zakaz").hide();
    $("#js-more-cab").show();
  });
  $(".item__favourite").click(function(){
    $(".menu__item_favourite").css("display", "flex");
    $(".menu__favourite_popup").addClass("menu__favourite_popup-open");
  });
  $(".menu__favourite_popup_btn").click(function(){
    $(".menu__favourite_popup").removeClass("menu__favourite_popup-open");
  });

  $(".js-more-proiz").click(function(){
    $("#js-more-pro").addClass("popup-show");
  });
  $(".js-tth-open").click(function(){
    $("#js-tth").addClass("popup-show");
  });

  $(".card__slider_cart").click(function(){
    $("#js-add-cart").addClass("popup-show");
  });
  $(".js-tocart").click(function(){
    $("#js-add-cart").addClass("popup-show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup-show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup-show");
  });

  $(".header__cab_out").click(function(){
    $(".header__cab_login").css("display", "none");
    $(".header__cab_nologin").css("display", "flex");
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
  $(".js-tabs__area").hide();
  $(".tabs__area-mark").show();
  $(".tabs__item").click(function(){
    $(this).addClass("tabs__item--active");
    $(".js-tabs__area").hide();
    $($(this).attr("data-area")).show();

    if ($(window).width() <= 882) {
      var destination = $(this).offset().top;
      $('html, body').animate({ scrollTop: destination }, 200);
    }
  });





  $(".js-tabs-item").click(function(){
    $(this).parents(".js-tabs__area").find(".js-tabs-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".header__search--icon").click(function(){
    $(".header__search--mobile").toggleClass("header__search--mobile--open");
  });

  $(".menu__butter").click(function(){
    $(".menu").toggleClass("menu--open");
  });
  $(".header__phones_numbers_mobile").click(function(){
    $(".header__phones_numbers").toggleClass("header__phones_numbers--open");
  });

  $(".cab--section").hide();
  $(".cab__list").show();
  $(".cab__btn").click(function(){
    $(".cab__btn").removeClass("cab__btn--active");
    $(this).addClass("cab__btn--active");
    $(".cab--section").hide();
    $($(this).attr("data-section")).show();
  });

  $(".cart--section").hide();
  $(".cart__list").show();
  $(".cart__step").click(function(){
    $(".cart__step").removeClass("cart__step--active");
    $(this).addClass("cart__step--active");
    $(".cart--section").hide();
    $($(this).attr("data-section")).show();
  });



  $(".card__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: "<i class='fa fa-long-arrow-left card__slider_btn card__slider_btn--prev'></i>",
    nextArrow: "<i class='fa fa-long-arrow-right card__slider_btn card__slider_btn--next'></i>"
  });

  $(".card__slider").on('afterChange', function(){
    $(".card__slider_img img").attr('src', $('.slick-current.slick-active img').attr('src'));
  });

  $(".category__sort_btns-list").click(function(){
    $(".category__list").removeClass("lines");
    $(this).addClass("category__sort_btns--active");
    $(".category__sort_btns-line").removeClass("category__sort_btns--active");
  });
  $(".category__sort_btns-line").click(function(){
    $(".category__list").addClass("lines");
    $(this).addClass("category__sort_btns--active");
    $(".category__sort_btns-list").removeClass("category__sort_btns--active");
  });
  
  var i = 2;

  $("body").on("click", ".vin-page-block-line-remove", function(){
    $(this).parent(".vin-page-block-line").css("display", "none");
    i--;
  });

  
  $(".vin-page-block-line-add").click(function() {
    $("<div class='vin-page-block-line'>" + i + "<label class='cart__deliv_data_item'><input type='text'></label>Кол-во<label class='cart__deliv_data_item'> <input type='text'></label><div class='vin-page-block-line-remove'><i class='fa fa-times'></i></div></div>").fadeIn('slow').appendTo($(this).parents('.vin-page-block-left').find('.vin-page-block-left-lines'));
    i++;
  });

  $(".filter__block_title").click(function(){
    $(this).parents(".filter__block").find(".filter__block_content").toggleClass("filter__block_content--open");
  });


});








