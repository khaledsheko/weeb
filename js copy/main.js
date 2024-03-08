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
});

let courseItem = document.querySelector('.courses .row')

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
            </div>`;

function divLoop(getDiv,myDiv,numb) {
  for (let i = 0; i < numb; i++) {
      
  // carsItem.insertAdjacentHTML("beforeend",itemC)
  getDiv.insertAdjacentHTML("beforeend",myDiv)
      
  }
}
divLoop(courseItem,itemC,8)
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
