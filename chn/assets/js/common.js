'use strict';

/* 
  퍼블팀 js 파일입니다. 
  
  ※ 퍼블팀 외에 수정금지
  개발에서 필요한 부분은 dev.js 파일에 작업 부탁드리며, 
  common.js에서 삭제 필요한 부분은 퍼블팀에 따로 전달 부탁드립니다.
  
*/


/* 모달팝업 */
var startPop = function() {
  var winW = $(window).width();
  if (winW > 1024) {
    $('.start_pop').draggable({
      handle: '.modal-header',
      containment: 'html'
    });
  }
}

/* loading image */
$(window).on('load', function(){
  $('.loading-image').fadeOut(300);
}); 


/* GNB */
/*
var gnbdrop = {
  init: function () {
    // this.gnbdrop_all(); //모든 2depth+배경 노출
    // this.gnbdrop_box(); //호버한 1depth>link의 2depth 박스형태로 노출
    // this.gnbdrop_line(); //호버한 1depth>link의 2depth + 배경이 노출
  },
  gnbdrop_all: function () {
    //모든 2depth+배경 노출
    var $nav_bg = $('.nav__bg'),
    // $header = $('.header'),
      $nav_link = $('.header .nav .depth-1').children('.link'),
      $nav_drop = $('.header .nav .nav-list--depth2');

      $('.header .nav').each(function () {
        var maxHeight = 0;

        $(this)
        .find('.nav-list--depth2')
        .each(function () {
          if ($(this).outerHeight() > maxHeight) {
            maxHeight = $(this).outerHeight();
          }
        });

        $nav_bg.height(maxHeight);

        $(this)
        .find($nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            // $header.addClass('hover');
            $nav_bg.stop(false,true).fadeIn(200,"linear"); //slideDown(200);
            $nav_drop.stop(false,true).fadeIn(200,"linear"); //slideDown(200);
          });
        });

      $('.header').on('mouseleave', function () {
        // $header.removeClass('hover');
        $nav_drop.stop(false,true).fadeOut(200,"linear"); //slideUp(200);
        $nav_bg.stop(false,true).fadeOut(200,"linear"); //slideUp(200);
        });
      });
  },

  gnbdrop_box: function () {
    //호버한 1depth>link의 2depth 박스형태로 노출
    var $nav_link = $('.header .nav .depth-1').children('.link'),
      $nav_drop = $('.header .nav .nav-list--depth2');
    $('.header .nav').each(function () {
      $(this)
        .find($nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            if ($(this).next().length > 0) {
              $nav_drop.stop(false, true).fadeOut(100);//slideUp();
              $(this).next().stop(false, true).fadeIn(100);//slideDown();
            } else {
              $nav_drop.stop(false, true).fadeOut(100);//slideUp();
            }
          });
        });
      $(this).on('mouseleave', function () {
        $nav_drop.stop(false, true).fadeOut(100);//slideUp();
      });
    });
  },

  gnbdrop_line: function () {
    //호버한 1depth>link의 2depth + 배경이 노출
    var $nav_bg = $('.nav__bg'),
      $nav_link = $('.depth-1').children('.link'),
      $nav_drop = $('.nav-list--depth2');
    $('.header .nav').each(function () {
      var $nav_bg_height = $nav_drop.innerHeight();
      $nav_bg.height($nav_bg_height);
      $(this)
        .find($nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            if ($(this).next().length > 0) {
              $nav_drop.stop(false, true).hide();
              $nav_bg.stop(false, true).show();
              $(this).next().stop(false, true).css('display','flex');//show();
            } else {
              $nav_drop.stop(false, true).hide();
              $nav_bg.stop(false, true).hide();
            }
          });
        });
      $(this).on('mouseleave', function () {
        $nav_drop.stop(false, true).hide();
        $nav_bg.stop(false, true).hide();
      });
    });
  },
};
*/

/* 모바일 네비게이션 */
var navMobile = {
  init: function () {
    this.nav_mobile_btn(); // 모바일네비 토글
    this.nav_mobile_active(); //활성화된 메뉴 열어두기
    this.nav_mobile_down(); //하위메뉴가 있는 항목 찾아서 addClass
    this.nav_mobile_action(); // 아코디언 메뉴
  },
  nav_mobile_btn: function () {
    var $navBtn = $('.nav-mobile__btn'),
      $navBg = $('.nav-mobile__bg'),
      $nav = $('.nav-mobile');
    var toggleNav = function () {
      $navBg.fadeToggle(200,"linear");
      $nav.toggleClass('active');
    };
    $navBtn.on('click', function () {
      toggleNav();
    });
    $navBg.on('click', function () {
      toggleNav();
    });
  },
  nav_mobile_active: function () {
    //활성화된 메뉴 열어두기(1depth)
    // $('.nav-mobile .depth-1 > .link.on').next('.nav-list--depth2').show();
    // $('.nav-mobile .depth-1 > .link.on').addClass('active');
    $('.nav-mobile .depth-1 > .link.on,.nav-mobile .depth-2 > .link.on').addClass('active').next().show();
  },
  nav_mobile_down: function () {
    // 하위메뉴가있는 메뉴에 드롭다운 표시를 위한 클래스 붙이기
    $('.nav-mobile .depth-1, .nav-mobile .depth-2').each(function () {
      if ($(this).children('').next().length > 0) {
        $(this).addClass('_down');
      } else {
        $(this).removeClass('_down');
      }
    });
  },
  nav_mobile_action: function () {
    var $depth1 = $('.nav-mobile .depth-1'),
      $depth2 = $('.nav-mobile .depth-2'),
      $depth2_list = $('.nav-mobile .nav-list--depth2'),
      // $depth3 = $('.nav-mobile .depth-3'),
      $depth3_list = $('.nav-mobile .nav-list--depth3');

    $depth1.children('.link').click(function () {
      if ($(this).next().length > 0) {
        if ($(this).next().css('display') === 'none') {
          $depth2.find('.link').removeClass('active');
          $depth1.children('.link').removeClass('active');
          $(this).addClass('active');
          $depth3_list.hide();
          $depth2.find('.link').removeClass('active');
          $depth2_list.slideUp(300);
          $(this).next().stop(false, true).slideDown(300);
        } else {
          $depth2.find('.link').removeClass('active');
          $(this).next().slideUp(200);
          $depth1.children('.link').removeClass('active');
        }
        return false;
      } else {
      }
    });

    $depth2.children('.link').click(function () {
      if ($(this).next().length > 0) {
        if ($(this).next().css('display') === 'none') {
          $depth3_list.find('.link').removeClass('active');
          $depth3_list.stop(false, true).slideUp(300);
          $(this).addClass('active');
          $(this).next().stop(false, true).slideDown(300);
        } else {
          $depth3_list.find('.link').removeClass('active');
          $(this).removeClass('active');
          $(this).next().stop(false, true).slideUp(300);
        }
        return false;
      } else {
      }
    });
  },
};

/* 서브 네비게이션 */
var subNav = {
  init: function () {
    this.depth_clone();
    this.drop_down();
    this.drop_up();
  },
  depth_clone: function () {
    var $depth1Active = $('.nav').find('.depth-1 > .link'); // 1dp 가져오기
    var $depth2Active = $('.nav').find('.depth-1 > .link.on').next().find('.depth-2 > .link'); //활성화된 2depth
    var $depth3Active = $('.nav').find('.depth-2 > .link.on').next().find('.depth-3 > .link'); //활성화된 3depth

    // console.log(depth2Active);
    var $depth1List = $('.sub-nav-clone--depth1'); //depth1Active를 복사해 넣을 컨테이너
    var $depth2List = $('.sub-nav-clone--depth2'); //depth2Active를 복사해 넣을 컨테이너
    var $depth3List = $('.sub-nav-clone--depth3'); //depth3Active를 복사해 넣을 컨테이너

    //1뎁스 클론
    var $depth1Clone = $depth1Active.clone();
    //1뎁스 클론에 루프 하여 li생성후 넣기
    $.each($depth1Clone, function (index, ele) {
      var $li = $('<li class="item"></li>');
      var li = $li.appendTo($depth1List);
      $(ele).appendTo(li);
    });

    //2뎁스 클론
    var $depth2Clone = $depth2Active.clone();
    //2뎁스 내용 넣기
    $.each($depth2Clone, function (index, ele) {
      var $li = $('<li class="item"></li>');
      var li = $li.appendTo($depth2List);
      $(ele).appendTo(li);
    });

    //3뎁스 클론
    var $depth3Clone = $depth3Active.clone();
    //3뎁스 내용 넣기
    $.each($depth3Clone, function (index, ele) {
      var $li = $('<li class="item"></li>');
      var li = $li.appendTo($depth3List);
      $(ele).appendTo(li);
    });
  },

  drop_down: function () {
    var $dropDown = $('.sub-nav--dropdown .sub-nav__item'),
      $dropDownBtn = $('.sub-nav__button'),
      $dropDownList = $('.sub-nav__drawer');

    $dropDown.each(function () {
      $(this)
        .find($dropDownBtn)
        .click(function () {
          if ($(this).hasClass('on') == true) {
            $(this).removeClass('on');
            $(this).next().stop(false, true).slideUp(200);
          } else {
            $dropDownList.stop(false, true).hide();
            $dropDownBtn.removeClass('on');
            $(this).next().stop(false, true).slideDown(100);
            $(this).addClass('on');
          }
          return false;
        });
    });
  },

  drop_up: function () {
    $(document).click(function (e){
      var $dropDown = $('.sub-nav--dropdown .sub-nav__item'),
      $dropDownBtn = $('.sub-nav__button'),
      $dropDownList = $('.sub-nav__drawer');
    
      if( e.tartget  !== $dropDown ){
        $dropDownList.stop(false, true).slideUp(200);
        $dropDownBtn.removeClass('on');
      }
    });
  }

};



/* 서브네비게이션 스크롤 형태 */
var subNavScroll = {
  init: function () {
    this.sticky_nav();
  },

  sticky_nav: function () {
    var $subNav = $('.sub-nav--sticky'),
      $subNavWrap = $('.sub-nav--sticky .sub-nav__wrap');
    if ($subNav.length > 0) {
      var subNavOffset = $subNav.offset(),
        // subNavTop = subNavOffset.top;
        subNavTop = subNavOffset.top - $('.header').outerHeight(); // #헤더 고정형일때

      if ($(window).outerWidth() > 1024) {
        if ($(window).scrollTop() > subNavTop) {
          $subNav.addClass('fix');
          $subNavWrap.css('top', $('.header').outerHeight()); //#헤더 고정형일때
        } else {
          $subNav.removeClass('fix');
          $subNavWrap.css('top', 0); //#헤더 고정형일때
        }
      } else {
        if ($(window).scrollTop() > subNavTop) {
          $subNav.addClass('fix');
        } else {
          $subNav.removeClass('fix');
        }
      }
    }
  },
};

/* Magnific 팝업 */
var magnificPop = {
  init: function () {
    this.ajax(); //ajax 팝업
  },
  ajax: function () {
    $('.popup-link').magnificPopup({
      type: 'ajax',
      closeOnBgClick: false,
      mainClass: 'mfp-fade',
      callbacks: {
        ajaxContentAdded: function () {
          var $content = $(this.content[0]);
          var $pop = $content.find('.popup-in-popup');
          var aURL = '';

          if ($pop.length > 0) {
            aURL = $pop.attr('href');

            $pop.on('click', function (e) {
              e.preventDefault();

              $.ajax({
                url: aURL,
                dataType: 'html',
                success: function (data) {
                  var item = '<div class="pop-in-pop">';
                  item += data;
                  item += '</div>';

                  /* HTML append */
                  $content.append(item);

                  /* 닫기 버튼 append */
                  $('.pop-in-pop').children().append('<div class="pop-in-close"><i class="xi-close"></i></div>');

                  /* 닫기 버튼 */
                  $('.pop-in-close').on('click', function(){
                    $('.pop-in-pop').remove();
                  });
                }
              });
            });
          }
        }
      }
    }, 500);
  },
};

function closePopup() {
  $.magnificPopup.close();
}

$(window).on('scroll', function () {
  subNavScroll.init();
});

$(window).on('resize', function () {
  subNavScroll.init();
});

$(document).on('mouseover', function () {
  magnificPop.init();
});

$(document).ready(function () {
  /* Navigation Active */
  $('.nav, .nav-mobile').navActive({
    depth1: '.depth-1',
    depth2: '.depth-2',
    depth3: '.depth-3',
    activeClass: 'on',
    callback: function () {
      $('.nav, .nav-mobile').find('.dev-on').removeClass('on');
    },
  });

  /* HEADER GNB Drop */
  $('.header').navDrop({
    type: 'all', // 기본값 udnefiend, 선언하지 않거나 없는 값을 선언할 경우 콘솔창에 경고문구 출력
    background: true, // 기본값 true, 배경 엘리먼트가 없을 경우 콘솔창에 경고문구 출력
    backgroundClass: '.nav__bg', // 기본값 .nav__bg
    backgroundAutoColor: false, // 기본값 false, depth2의 배경색을 자동으로 적용
    effect: 'fade', // 기본값 fade, 옵션값은 fade, slide
    delay: 200, // 출력시 delay
    callback: function () {}, // 콜백 함수
  });

  /* 
    이미지맵 제작 추천 : https://www.image-map.net/
    이미지맵 반응형 작업 시 선언
    $('img[usemap]').rwdImageMaps();
  */

  /* 
  $('[data-track]').scrollTrack({
    threshold: 0, // // 임계치 ( * 상단 고정영역 높이 )
    activeClass: 'active', // 활성 클래스 네이밍 (기본값 : active)
  });
  */

    /**
 * qna
 * 아코디언
 */
 var qnaFun = {
  init: function () {
    this.q();
  },
  q: function () {
    var qna = $(".qna"),
      header = qna.find(".qna-header"),
      header_a = qna.find(".qna-header a"),
      body = qna.find(".qna-body"),
      faq_chk = "";
    body.hide();

    header.on("click", function (event) {
      event.preventDefault();

      if ($(this).hasClass("select") == true) {
        $(this).removeClass("select");
        $(this).next().stop().hide();
      } else {
        $(body).stop().hide();
        $(header).removeClass("select");
        $(this).next().stop().show();
        $(this).addClass("select");
      }
    });
  },
};

  
  $(window).scrollTrack({
    threshold: 0, 
    activeClass: 'active',
  });
 

  //gnbdrop.init();
  navMobile.init();
  subNav.init();
  subNavScroll.init();
  startPop();
  qnaFun.init(); //qna

  var wowJS = new WOW().init(); 

  /* Bullet List */
  $('.bullet-list').each(function () {
    if ($(this).hasClass('bullet-list--decimal')) {
      $(this).children('.item').each(function (index) {
        $(this).prepend('<span class="decimal-number">' + (index + 1) + '</span>');
      });
    }

    $(this).addClass('bullet-type--js');
  });
  
  /*
  min-width지정 rowscroll
  */
  $('.row-scrollwrap').each(function () {
    var $rowScrollTxtWidth = $(this).data('show'),
      $rowScrollTxt = $(this).find('.row-scrollwrap__txt');
    $(this).find('.row-scrollwrap__content').css('min-width', $rowScrollTxtWidth);
    // 가로스크롤 영역 min-width지정
    var $gutter = 40; // $container-gutter-width (_var.scss)
    if ($(window).width() < $rowScrollTxtWidth + $gutter) { 
      $rowScrollTxt.show();
      // 지정된 rowScrollTxtWidth + (gutter) 해상도에서 안내문구 노출
    }
  });

  /* scrollbar js */
  $('.scrollbar-inner').scrollbar();
  // $('.scrollbar-outer').scrollbar();
  // $('.scrollbar-light').scrollbar();

  /* Resizing Check */
  var resizing = resizingCheck({
    breakpoints: {
      414: function () {
        // console.log('414 < width < 768');
      },
      768: function () {
        // console.log('768 < width < 1024');
      },
      1024: function () {
        // console.log('1024 < width < 1200');
      },
      1200: function () {
        // console.log('1200 < width');
      },
    },
  });
});



/* File Upload */
$(document).on('change', '.file-box input[type="file"]', function () {
  var tmp = $(this).val().replace(/^.*\\/, "");
  $(this).parents('.file-box').find('.file-box__text').text(tmp);
  $(this).parents('.file-box').find('.file-box__text').addClass('on');
});

/* File Upload - 구버전 */
$(document).on('change', '.file_box input[type="file"]', function () {
  var tmp = $(this).val().replace(/^.*\\/, "");
  $(this).siblings("p").text(tmp);
});

//suv-nav 스크롤
function subNavScroll_front() {
  var $subNav = $('.sub-nav__wrap');
  var subNavLinkLeft = $('.sub-nav__wrap .link.on').offset().left;
  var subNavWidth = $('.sub-nav__wrap');
  var totalWidth = 0;

  for (var i = 0; i < subNavWidth.length; i++) {
    totalWidth += subNavWidth[i].offsetWidth;
  }

  $subNav.animate({ scrollLeft: subNavLinkLeft - 100 }, 1);
}


$(document).ready(function () {
  if ($('.sub-nav__wrap').length > 0) {
    if ($(window).innerWidth() < 1201) {
      subNavScroll_front();
    }
  }
});
$(window).resize(function () {
  if ($('.sub-nav__wrap').length > 0) {
    if ($(window).innerWidth() < 1201) {
      subNavScroll_front();
    }
  }
});

// wowrap
var wowrap = $('.wowrap');
$(wowrap).each(function () {
  $(this)
    .find('.wow')
    .each(function (index) {
      var eq = index / 8 + 's';
      $(this).attr('data-wow-delay', eq);
    });
  $(this)
    .find('.animated')
    .each(function (index) {
      var eq = index * 250;
      $(this).attr('data-id', 'delay-' + eq);
    });
});

// 서브페이지 헤더

$(window).scroll(function (event) {
  let lastScrollTop = 0;
  let scrT = $(window).scrollTop();
  // if($('body').hasClass('sub-body')){
    if (scrT > lastScrollTop) {
      $('.header').removeClass('fix');
	  $('.header').removeClass('first');
    } else {
      $('.header').addClass('fix');
	  $('.header').addClass('first');
    }
  // }

      lastScrollTop = scrT;

});

// sns 메뉴 버튼
$(document).ready(function () {
$('.quick-menu .total-menu').on('click', function () {
  if( $('.menu-item').hasClass('add')){
    $('.menu-item').removeClass('add');
  }else{
    $('.menu-item').addClass('add');
  }
});


$('.btn__store').click(function () {
  $('.store-select').slideToggle(300);
  $(this).toggleClass('on');
});
$('.store-select').mouseout(function () {
  $(this).slideUp(300);
  $('.btn__store').removeClass('on');
});
});

$(document).ready(function () {
  $('.btn__lang').click(function () {
    $('.lang-select').slideToggle(300);
  });
  $('.lang-select').find('a').click(function () {
    $('.lang-select').slideUp(300);
  });
  // $('.btn__lang').mouseout(function () {
  //   $('.lang-select').slideUp(300);
  // });
});

$(document).ready(function () {
  $(".footer-familysite__btn").click(function () {
    $('.footer-familysite__list').slideToggle(300);
  });
  $(".footer-familysite__list .link").click(function () {
    $('.footer-familysite__list').slideUp(300);
  });
});




