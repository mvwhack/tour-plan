$(document).ready(function () {
  
  // Слайдер в ТОПе сайта
    var hotelSlider = new Swiper('.hotel-slider', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,        
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
      },
      
      keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
  });

  // Слайдер с отзывами
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });

  // Функции открытия и закрытия модального окна + блокировка прокрутки фона
  // при открытом модальном окне
  var menuButton = $(".menu-button");
  menuButton.on('click', function() {
    $(".navbar-bottom").toggleClass('navbar-bottom__visible');
    $("body").toggleClass("scroll-hidden");
  });
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var body = $("body");

    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    body.addClass("scroll-hidden");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var body = $("body");

    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    body.removeClass("scroll-hidden");
  }

  // Закртие модального окна по нажатию на клавиатуре кнопки ESC
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
    closeModal(event);
  });

  // Клик по фону, но не по окну.
	$('.modal__overlay').click(function(e) {
		closeModal(event);
	});

  //Добавление маски форме телефона
  $('.phone_us').mask('+7(999) 999-99-99');

  //Обработка форм
  $(".footer__form").validate({
      errorLabelContainer: ".footer__span",
      errorClass: "invalid animate__animated animate__shakeX",
      messages: {
        name: {
          required: "Please specify your name. ",
          minlength: "The name must be at least 2 letters long. "
        },
        phone: {
          required: "Please specify your phone number. ",
          minlength: "Enter your phone number in the format (999) 999-99-99. "
        }
      }
  });

  $(".modal__form").validate({
    errorLabelContainer: ".modal__span",
    errorClass: "invalid animate__animated animate__shakeX",
    messages: {
      name: {
        required: "Please specify your name. ",
        minlength: "The name must be at least 2 letters long. "
      },
      phone: {
        required: "Please specify your phone number. ",
        minlength: "Enter your phone number in the format (999) 999-99-99. "
      },
      email: {
        required: "We need your email address to contact you. ",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
  
  $('#reset').val('');

  // Разрешаем ввод в поле name только буквы
  $('[name=name]').bind("change keyup input click", function() {
    if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
    this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, '');
    }
  });
  
  // Подключаем анимацию к сайту
  AOS.init();

  //Отключаем анимацию на экранах меньше 992px
  if (window.innerWidth < 992) {

    document.querySelectorAll('.delete-animations').forEach((elem) => {
      elem.removeAttribute("data-aos");

    });
  
  }
  

});
