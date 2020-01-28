(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


loadGoogleMaps = function() {var mapOptions = {zoom: 13,center: new google.maps.LatLng(35.6894875, 139.6917064),mapTypeId: google.maps.MapTypeId.ROADMAP,styles: [
    {
      featureType: "landscape",
      stylers: [
        { saturation: -100 },
        { lightness: 65 },
        { visibility: "on" }
      ]
    },{
      featureType: "poi",
      stylers: [
        { saturation: -100 },
        { lightness: 51 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road.highway",
      stylers: [
        { saturation: -100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road.arterial",
      stylers: [
        { saturation: -100 },
        { lightness: 30 },
        { visibility: "on" }
      ]
    },{
      featureType: "road.local",
      stylers: [
        { saturation: -100 },
        { lightness: 40 },
        { visibility: "on" }
      ]
    },{
      featureType: "transit",
      stylers: [
        { saturation: -100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "administrative.province",
      stylers: [
        { visibility: "off" }
      ]
  /** /
    },{
      featureType: "administrative.locality",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "administrative.neighborhood",
      stylers: [
        { visibility: "on" }
      ]
  /**/
    },{
      featureType: "water",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { lightness: -25 },
        { saturation: -100 }
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: "#ffff00" },
        { lightness: -25 },
        { saturation: -97 }
      ]
    }
  ]};var map = new google.maps.Map($('.js-26').get(0), mapOptions);};
$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-2 .slide0').hasAttr('src')) { a='src'; } $('.js-2 .slide0').attr(a, (dpi>1) ? 'images/suzhou004-1860.png' : 'images/suzhou004-930.png');
var a='data-src'; if($('.js-2 .slide1').hasAttr('src')) { a='src'; } $('.js-2 .slide1').attr(a, (dpi>1) ? 'images/suzhou005-1860.png' : 'images/suzhou005-930.png');
var a='data-src'; if($('.js-2 .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slide2').attr(a, (dpi>1) ? 'images/suzhou002-1860.png' : 'images/suzhou002-930.png');
var a='data-src'; if($('.js-2 .slide3').hasAttr('src')) { a='src'; } $('.js-2 .slide3').attr(a, (dpi>1) ? 'images/suzhou006-1860.png' : 'images/suzhou006-930.png');
$('.js-3').attr('src', (dpi>1) ? 'images/img_2440-276.jpg' : 'images/img_2440-138.jpg');
$('.js-4').attr('src', (dpi>1) ? 'images/tokyo5-276.jpg' : 'images/tokyo5-138.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/tokyo2-276.jpg' : 'images/tokyo2-138.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/tokyo7-276.jpg' : 'images/tokyo7-138.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/tokyo3-276.jpg' : 'images/tokyo3-138.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/tokyo8-276.jpg' : 'images/tokyo8-138.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/tokyo4-276.jpg' : 'images/tokyo4-138.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/tokyo9-276.jpg' : 'images/tokyo9-138.jpg');
$('.js-11').attr('src', (dpi>1) ? 'images/p5274303-1860.jpg' : 'images/p5274303-930.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/tokyo12-864.jpg' : 'images/tokyo12-432.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/p5274270-400.jpg' : 'images/p5274270-200.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/p5284388-400.jpg' : 'images/p5284388-200.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/tokyo14-400.jpg' : 'images/tokyo14-200.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/p5274321-400.jpg' : 'images/p5274321-200.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/p5274288-1218.jpg' : 'images/p5274288-609.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 2500});$('.js-18').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/img_2440-1600.jpg' : 'images/img_2440-800.jpg', function() { }) });
$('.js-18').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-18-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/img_2440-1600.jpg' : 'images/img_2440-800.jpg'; } } });
$('.js-19').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo5-1600.jpg' : 'images/tokyo5-800.jpg', function() { }) });
$('.js-19').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-19-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo5-1600.jpg' : 'images/tokyo5-800.jpg'; } } });
$('.js-20').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo2-1600.jpg' : 'images/tokyo2-800.jpg', function() { }) });
$('.js-20').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-20-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo2-1600.jpg' : 'images/tokyo2-800.jpg'; } } });
$('.js-21').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo7-1600.jpg' : 'images/tokyo7-800.jpg', function() { }) });
$('.js-21').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-21-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo7-1600.jpg' : 'images/tokyo7-800.jpg'; } } });
$('.js-22').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo3-1600.jpg' : 'images/tokyo3-800.jpg', function() { }) });
$('.js-22').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-22-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo3-1600.jpg' : 'images/tokyo3-800.jpg'; } } });
$('.js-23').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo8-1600.jpg' : 'images/tokyo8-800.jpg', function() { }) });
$('.js-23').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-23-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo8-1600.jpg' : 'images/tokyo8-800.jpg'; } } });
$('.js-24').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo4-1600.jpg' : 'images/tokyo4-800.jpg', function() { }) });
$('.js-24').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-24-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo4-1600.jpg' : 'images/tokyo4-800.jpg'; } } });
$('.js-25').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/tokyo9-1600.jpg' : 'images/tokyo9-800.jpg', function() { }) });
$('.js-25').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-25-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/tokyo9-1600.jpg' : 'images/tokyo9-800.jpg'; } } });
var s=document.createElement('script');s.type='text/javascript';s.src='https://maps.googleapis.com/maps/api/js';s.onload=loadGoogleMaps;document.body.appendChild(s);
});