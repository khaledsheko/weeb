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
  $('.courses .item').hover(
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

let courseItem = $('.courses .row');
let itemC = `<!-- item -->
            <div class="col-lg-4 col-md-6 col-sm-12 item mb-5">
              <div class="img">
                <a href="#"><img src="img/course/1.jpg" alt=""></a>
                <div class="buy">
                  <a href="#">More Details</a>
                </div>
              </div>
              <div class="description">
                <div class="prices">
                  <div class="price">30 $</div>
                  <div class="price">1500 LE</div>
                </div>
                <div class="category"><span><a href="#">Business</a></span></div>
                <div class="title"><h5><a href="#">Starting SEO as your Home Based Business</a></h5></div>
                <div class="rate"><span>
                <div class="star-rating">
                  <span class="star" data-rating="1">&#9733;</span>
                  <span class="star" data-rating="2">&#9733;</span>
                  <span class="star" data-rating="3">&#9733;</span>
                  <span class="star" data-rating="4">&#9733;</span>
                  <span class="star" data-rating="5">&#9733;</span>
                </div> 
                </span></div>
                <div class="desc">Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor</div>
                <div class="groups d-flex">
                  <div class="lessons me-4">
                    <span class="icon me-1"><i class="fa-solid fa-book"></i></span>
                    <span class="num">11</span>
                    <span class="text">Lessons</span>
                  </div>
                  <div class="students">
                    <span class="icon me-1"><i class="fa-solid fa-user"></i></span>
                    <span class="num">229</span>
                    <span class="text">Students</span>
                  </div>
                </div>
              </div>
            </div>`

function divLoop(getDiv,myDiv,numb) {
  for (let i = 0; i < numb; i++) {
      getDiv.append(myDiv)
  }
}
divLoop(courseItem,itemC,5)

// rates using chatgpt
$(document).ready(function() {
  // Click event to set the rating
  $('.star-rating .star').click(function() {
    var clickedStar = $(this);

    // Remove 'active' class from all stars
    $('.star-rating .star').removeClass('active');
    
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

// product-buy-form
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
  // Add click event listener to elements with class "del-item"
  $(".del-item").click(function() {
    // Get the closest parent element with class "cart-item" and remove it
    $(this).closest(".cart-item").fadeOut(150);
  });
});

