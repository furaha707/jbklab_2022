var navFun={init:function(){this.navAction();this.navAction2();},navAction:function(){var gnb_link=$('.pc_gnb_wrap .depth01').children('a');var gnb_link_depth02=$('.sub_menu_list li a');var gnb_link_depth03=$('.sub_tab  li a');var url=window.location.href;var src=url.split('/')[url.split('/').length-1].split('.')[0];src01=src.split('?')[0].split('-')[0].split('_')[0];src02=src.split('?')[0].split('-')[0].slice(0,-3);src03=src.split('?')[0].split('-')[0];gnb_link.each(function(){var this_href=$(this).attr('href');var href=this_href.split('/')[this_href.split('/').length-1].split('.')[0].split('_')[0];if(href==src01){$(this).addClass('active');}else{$(this).removeClass('active')}});gnb_link_depth02.each(function(){var this_href=$(this).attr('href');var href=this_href.split('/')[this_href.split('/').length-1].split('.')[0].split('-')[0].slice(0,-3);console.log("두번쨰 "+href);if(href==src02){$(this).addClass('on');}else{$(this).removeClass('on')}});gnb_link_depth03.each(function(){var this_href=$(this).attr('href');var href=this_href.split('/')[this_href.split('/').length-1].split('.')[0].split('-')[0];console.log("세번째 "+href);if(href==src03){$(this).addClass('on');}else{$(this).removeClass('on')}});},navAction2:function(){var gnb_link=$('.gnb_wrap .depth01').children('a');var all_a=$('.gnb_wrap .gnb-box .all-link');var depth_02=$('.gnb_wrap .depth01 .depth02');var depth_03=$('.gnb_wrap .depth01 .depth03');var depth_02_a=$('.gnb_wrap .depth01 .depth02 > ul > li > a');var gnb_wrap=$('.gnb_wrap')
gnb_link.on('mouseover focus',onOn);$(gnb_wrap).on('mouseleave',function(){$(gnb_link).removeClass('active');$(depth_02).stop().slideUp(100);$(this).removeClass('active');});function onOn(){var next=$(this).next();$(gnb_link).removeClass('active')
$(this).addClass('active');$(depth_02).stop().slideUp(100);$(next).stop().slideDown(100);}}};var navMobile={init:function(){this.moAction();},moAction:function(){var depth_1=$('.gnb_mobile .depth01');var depth_2=$('.gnb_mobile .depth02');var depth_3=$('.gnb_mobile .depth03');var depth_1_down=$('.gnb_mobile .depth01_down');var depth_2_down=$('.gnb_mobile .depth02_down');var nav_bg=$('.nav_bg');$(depth_2).hide();$(depth_3).hide();$(nav_bg).hide();$(depth_1_down).children('a').click(function(){if($(this).next('div').css('display')==='none'){$(depth_1).children('a').removeClass('selected1');$(this).addClass('selected1');$(depth_3).hide();$(depth_2_down).children('a').removeClass('selected2');$(depth_2).slideUp(300);$(this).next().stop().slideDown(300);}else{$(this).next('div').slideUp(200);$(depth_1).children('a').removeClass('selected1');}return false;});$(depth_2_down).children('a').click(function(){if($(this).next('div').css('display')==='none'){$(depth_2_down).children('a').removeClass('selected2');$(this).addClass('selected2');$(depth_3).slideUp(300);$(this).next().stop().slideDown(300);}else{$(this).next('div').slideUp(200);$(depth_2_down).children('a').removeClass('selected2');}return false;});$('.nav_btn').on('click',function(){$('.gnb_mobile').stop().animate({'left':'0'},300,function(){$('.gnb_mobile').show();$(nav_bg).show();$(nav_bg).css({'opacity':'0.5'});$(nav_bg).fadeIn(300);$('.gnb_mobile').css('position','fixed');$('.home').addClass('fixed');$(nav_bg).click(function(){$('.gnb_mobile').stop().animate({'left':'-100%'},500,function(){$('.gnb_mobile').hide();$(nav_bg).fadeOut(100);$(depth_2).hide();$(depth_3).hide();$(depth_1).children('a').removeClass('selected1');$(depth_2_down).children('a').removeClass('selected2');$('.gnb_mobile').css('position','relative');$('.home').removeClass('fixed');})});})})
$('.nav_btn_off').on('click',function(){$('.gnb_mobile').stop().animate({'left':'-100%'},500,function(){$('.gnb_mobile').hide();$(nav_bg).fadeOut(100);$(depth_2).hide();$(depth_3).hide();$(depth_1).children('a').removeClass('selected1');$(depth_2_down).children('a').removeClass('selected2');$('.gnb_mobile').css('position','relative');$('.home').removeClass('fixed');})})}};var mainSlider={init:function(){this.slider_01();},slider_01:function(){$('#main_slide').bxSlider({mode:'horizontal',captions:true,auto:true,autoControls:false,controls:false,startText:'재생하기',stopText:'멈추기',autoHover:false,touchEnabled:true,autoControlsCombine:true,pager:true,speed:700,pause:7000,onSliderLoad:function(){$('#main_slide li').addClass('active-slide');},onSlideAfter:function($slideElement,oldIndex,newIndex){$('#main_slide li').removeClass('active-slide');$($slideElement).addClass('active-slide');},onSlideBefore:function(){$('#main_slide li').removeClass('active-slide');}});}};function btnPosition(){var HomeW=$("#home").width();if(HomeW>1700){$(".bx-pager").css({"position":"fixed"});}else{$(".bx-pager").css({"position":"absolute"});}}btnPosition();$(window).resize(function(){btnPosition();})
var Tab1={init:function(){this.mainTab();},mainTab:function(){var tabBtn=$('.my_info_wrap.pc_var .tab_area li.tab > a');var tab1st=$('.my_info_wrap.pc_var .tab_area li.tab').eq(0).find('a');var conAll=$('.my_info_wrap.pc_var .tab_con');var con1st=$('.my_info_wrap.pc_var .tab_con').eq(0);$(tab1st).addClass('on');$(conAll).hide();$(con1st).show();$(tabBtn).click(function(){$(conAll).hide();tabHref=$(this).attr('href');$(tabHref).show();$(tabBtn).removeClass('on');$(this).addClass('on');return false;});}};$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#top_btn').fadeIn();}else{$('#top_btn').fadeOut();}});$('#top_btn a').click(function(){$('body,html').animate({scrollTop:0},800);return false;});});var conShow={init:function(){this.hover_1();},hover_1:function(){var btn=$('.btn_my_info');var con=$('.my_info_wrap.pc_var');btn.on('mouseover focus',onOn);$(con).on('mouseleave',function(){$(con).removeClass("on");});function onOn(){$(con).addClass("on");}}};var qnaFun={init:function(){this.q();},q:function(){var qna=$('.qna'),header=qna.find('.qna-header'),header_a=qna.find('.qna-header a'),body=qna.find('.qna-body'),faq_chk='';body.hide();header.on('click',function(event){event.preventDefault();header.removeClass('select');header_a.removeClass('select');body.hide();if(faq_chk!=$(this).text()){faq_chk=$(this).text();$(this).addClass('select');$(this).children('a').addClass('select');$(this).next('.qna-body').show();}else{faq_chk='';}});}};var imgResize={init:function(){this.Resize01();this.Resize02();},Resize01:function(){$('.bx-controls-direction .bx-prev').html('&lt;');$('.bx-controls-direction .bx-next').html('&gt;');var winW=$(window).width();if(winW<640){$(".about_03 .about_img_01 img").attr("src","../images/about/about_01_2.png");$(".invest_guide_con .con_box_05 .img_box img").attr("src","../images/invest/invest_09_m.png");}else{$(".about_03 .about_img_01 img").attr("src","../images/about/about_01.png");$(".invest_guide_con .con_box_05 .img_box img").attr("src","../images/invest/invest_09.png");}},Resize02:function(){var winW=$(window).width();var resize_img=$('.img_resize img');$(resize_img).each(function(){var img1=$(this).attr("src").replace("_m.jpg",".jpg");$(this).attr("src",img1);});if(winW<780){$(resize_img).each(function(){var img2=$(this).attr("src").replace(".jpg","_m.jpg");$(this).attr("src",img2);});}else{$(resize_img).each(function(){var img3=$(this).attr("src").replace("_m.jpg",".jpg");$(this).attr("src",img3);});}}};var slick={init:function(){this.slick_01();this.slick_02();this.slick_03();},slick_01:function(){$('#product_slider').slick({dots:true,infinite:true,slidesToShow:3,arrows:false,centerMode:false,autoplay:false,speed:800,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToScroll:1,slidesToShow:2,}},{breakpoint:767,settings:{slidesToScroll:1,slidesToShow:1,}}]});},slick_02:function(){$('#media_slider').slick({dots:true,infinite:true,slidesToShow:4,arrows:true,centerMode:false,autoplay:true,speed:1000,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToScroll:1,slidesToShow:2,}},{breakpoint:767,settings:{slidesToScroll:1,slidesToShow:2,}}]});},slick_03:function(){$('#sns_slider').slick({dots:true,infinite:true,slidesToShow:8,arrows:true,centerMode:false,autoplay:true,speed:1000,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToScroll:1,slidesToShow:6,}},{breakpoint:767,settings:{slidesToScroll:1,slidesToShow:4,}}]});}};var scrollMagic={init:function(){this.scene();},scene:function(){var controller=new ScrollMagic.Controller();var sec01=new TimelineMax().from('.top_visual_wrap  .menu_img',0.5,{delay:1,opacoty:0,scale:0,ease:Expo.easeOut}).staggerFrom('.top_visual_wrap .sourse_img',0.5,{scale:0,opacity:0,ease:Back.easeOut},0.3).staggerFrom('.left_txt p span',0.2,{opacity:0,y:50,ease:Back.easeOut},0.2).staggerFrom('.right_txt p span',0.2,{opacity:0,y:50,ease:Back.easeOut},0.2)
var sceneHome=new ScrollMagic.Scene({triggerElement:".top_visual_wrap",triggerHook:'onLeave'}).setTween(sec01).addTo(controller);var sec02=new TimelineMax().from('.sec02_top_tit  i',0.3,{delay:0.5,opacity:0,y:-30}).from('.sec02_top_tit  .tit',0.3,{opacity:0,y:30}).staggerFrom('#product_slider .slick_li',0.2,{opacity:0,y:20},0.1).staggerFrom('.sec02_bot_txt p',0.3,{opacity:0,y:30},0.2)
var sceneHome=new ScrollMagic.Scene({triggerElement:".section_02",triggerHook:'onLeave'}).setTween(sec02).addTo(controller);var sec03=new TimelineMax().to('#line_svg #line',20,{strokeDashoffset:0,ease:Linear.easeNone})
var svg_h=$('#line_svg').height()-150;var sceneHome03=new ScrollMagic.Scene({triggerElement:".section_03",duration:svg_h,triggerHook:'0.1'}).setTween(sec03).addTo(controller);var sec0302=new TimelineMax().add(TweenMax.staggerFromTo('.sec03_top_tit  .txt,.sec03_top_tit  i',0.3,{y:50,opacity:0},{y:0,opacity:1},0.2));var blurbScene=new ScrollMagic.Scene({triggerElement:'.sec03_top_tit  .txt',offset:-200}).setTween(sec0302).addTo(controller);var sec05=new TimelineMax().staggerFromTo('.section_05  .store_pc_box,.section_05 .mall_pc_box',5,{y:0,},{y:-200},1)
var sceneHome6=new ScrollMagic.Scene({triggerElement:'.section_05',duration:1500,offset:100,triggerHook:'0.9'}).setTween(sec05).addTo(controller);var sub01=new TimelineMax().from('.sub_visual_wrap .tit',0.4,{delay:0.5,opacity:0,y:50,ease:Expo.easeOut},0.2).staggerFrom('#side_quick li',0.3,{delay:0.5,opacity:0,x:50},0.2)
var sceneHome=new ScrollMagic.Scene({triggerElement:"#sub",triggerHook:'onLeave'}).setTween(sub01).addTo(controller);}};var Path=(function($){var scope,$linesvg,init=function(){$linesvg=$("#line_svg");initLayout();initEvent();};function initLayout(){$linesvg.find('path').each(function(){pathPrepare($(this));});}function initEvent(){}function pathPrepare($el){var lineLength=$el[0].getTotalLength();$el.css("stroke-dasharray",lineLength);$el.css("stroke-dashoffset",lineLength);}return{init:function(){scope=this;init();}};}(jQuery));$(document).ready(function(){navFun.init();navMobile.init();mainSlider.init();Tab1.init();conShow.init();qnaFun.init();imgResize.init();slick.init();scrollMagic.init();Path.init();$(window).resize(function(){imgResize.init();})
function file_upload(){var tmp=$(this).val();$(this).siblings('p').text(tmp);};$('.file_box > input').change(file_upload);$("#top_btn").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#top_btn').fadeIn();}else{$('#top_btn').fadeOut();}});$('#top_btn a').click(function(){$('body,html').animate({scrollTop:0},800);return false;});});(function(){'use strict';$('.popup-link').magnificPopup({type:'ajax',overflowY:'scroll'});})();$('.btn_grade').click(function(){$('#modal_grade').modal('show');return false;});$('.popup_gallery').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',}});});$(function(){if($('.full_scroll').hasClass('on')==true){$('#header').show();}else{$('#header').hide();}});$(function(){$(window).scroll(function(){if($(this).scrollTop()>10){$('.full_scroll').addClass('on');$('#header').addClass('on');setTimeout(function(){$('#header').show();},500)}else{$('#header').removeClass('on');}});});