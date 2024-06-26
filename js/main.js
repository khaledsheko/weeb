var swiper = new Swiper(".dessertSwiper", {
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".coursesSwiper", {
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".ratesSwiper", {
  spaceBetween: 30,
  freeMode: true,
  slidesPerView: "auto",
  grabCursor: true,
});
var swiper = new Swiper(".blogsSwiper", {
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".chefsSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".maylikeSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
});

$(document).ready(function() {
  $('.courses .item, .coursesSwiper .item').hover(
    function() {
      $(this).find('img').css('transform', 'scale(1.1)');
      $(this).find('.buy').css('opacity', '1');
    },
    function() {
      $(this).find('img').css('transform', '');
      $(this).find('.buy').css('opacity', '');
    },
  );
  $('.course-buy .maylikeSwiper .item').hover(
    function() {
      $(this).find('img').css('transform', 'scale(1.1)');
      $(this).find('.buy').css('opacity', '1');
    },
    function() {
      $(this).find('img').css('transform', '');
      $(this).find('.buy').css('opacity', '');
    },
  );
  $('.course-subscribe .latest-course .item-course').hover(
    function() {
      $(this).find('img').css('transform', 'scale(1.1)');
    },
    function() {
      $(this).find('img').css('transform', '');
    },
  );
});

// rates using chatgpt
$(document).ready(function() {
  // Click event to set the rating
  $('.course-subscribe .tab-content .add-review .star-rating .star').click(function() {
    var clickedStar = $(this);

    // Remove 'active' class from all stars
    $('.course-subscribe .tab-content .add-review .star-rating .star').removeClass('active');
    
    // Add 'active' class to clicked star and its previous siblings
    clickedStar.prevAll().addBack().addClass('active');
  });
});

// 
$(document).ready(function () {
  let myElemen = $('.video-page .comment-main .comment-item').length;
  let myElement = $('.video-page .comment-main .title')
  myElement.text('Comments (' + myElemen + '):')
});

// product-buy-form quantity
$(document).ready(function() {
  $(".product-buy-form #decreaseBtn").click(function() {
    decreaseQuantity();
  });
  
  $(".product-buy-form #increaseBtn").click(function() {
    increaseQuantity();
  });

  function decreaseQuantity() {
    var quantityInput = $(".product-buy-form #quantity");
    var currentValue = parseInt(quantityInput.val());
    var minValue = parseInt(quantityInput.attr("min"));
    if (currentValue > minValue) {
      quantityInput.val(currentValue - 1);
    }
  }

  function increaseQuantity() {
    var quantityInput = $(".product-buy-form #quantity");
    var currentValue = parseInt(quantityInput.val());
    var maxValue = parseInt(quantityInput.attr("max"));
    if (currentValue < maxValue) {
      quantityInput.val(currentValue + 1);
    }
  }
});

// product-buy thumbnail
$(document).ready(function() {
  $(".product-buy .side-img .thumbnail .img-item").click(function() {
    // Remove "active" class from all thumbnails
    if($(this).hasClass('active'))
      return false;
    $(".product-buy .side-img .thumbnail .img-item").removeClass("active");
    // Add "active" class to the clicked thumbnail
    $(this).addClass("active");
    // Get the image source from the clicked thumbnail
    var imageUrl = $(this).find("img").attr("src");
    var mainImage = $(".product-buy .side-img .img-show img");
    // Fade out the main image, update its source, and fade it back in
    mainImage.fadeOut(150, function() {
      mainImage.attr("src", imageUrl).fadeIn(150);
    });
  });
});

// slide cart
$(document).ready(function(){
  // close side cart
  $('.main-cart-shop .back, .main-cart-shop .close-cart').click(function() {
    $('.main-cart-shop').fadeOut();
    $('.main-cart-shop .section').css('margin-right', '-400px');
  });
  // open side cart
  $('.navbar .icons .cart svg').click(function() {
    $('.main-cart-shop').fadeIn();
    $('.main-cart-shop .section').css('margin-right', '0px');
  });
  // // Add click event listener to elements with class "del-item"
  // $(".del-item").click(function() {
  //   // Get the closest parent element with class "cart-item" and remove it
  //   $(this).closest(".cart-item").fadeOut(150);
  // });
});

$(document).ready(function() {
  $('.products-page .product-section .item, .also-like .swiper-slide .item, .dessert .item').hover(
    function() {
      $(this).find('.img img').css('transform', 'scale(1.05)');
    },
    function() {
      $(this).find('.img img').css('transform', 'scale(1)');
    }
  );
});





$(document).ready(function() {
  // Card Number validation
  $('.card-payment').on('input', function() {
    $(this).val(function(i, val) {
      return val.replace(/\D/g, '').slice(0, 14);
    });
  });

  // Expiration Date validation
  $('.date-payment').on('input', function() {
    $(this).val(function(i, val) {
      return val.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 7);
    });
  });

  // CVV validation
  $('.cvv-payment').on('input', function() {
    $(this).val(function(i, val) {
      return val.replace(/\D/g, '').slice(0, 3);
    });
  });
});




$(document).ready(function() {
  $('.payment-page .accordion-header').click(function() {
      $(this).find('.accordion-input').prop('checked', true);
  });
});
