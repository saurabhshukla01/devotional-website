/* Menu Js */
(function($) { "use strict";
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
//Menu On Hover		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});
})(jQuery); 


// gallery js

! function($) {
    "use strict";
    var a = {
        accordionOn: ["xs"]
    };
    $.fn.responsiveTabs = function(e) {
        var t = $.extend({}, a, e),
            s = "";
        return $.each(t.accordionOn, function(a, e) {
            s += " accordion-" + e
        }), this.each(function() {
            var a = $(this),
                e = a.find("> li > a"),
                t = $(e.first().attr("href")).parent(".tab-content"),
                i = t.children(".tab-pane");
            a.add(t).wrapAll('<div class="responsive-tabs-container" />');
            var n = a.parent(".responsive-tabs-container");
            n.addClass(s), e.each(function(a) {
                var t = $(this),
                    s = t.attr("href"),
                    i = "",
                    n = "",
                    r = "";
                t.parent("li").hasClass("active") && (i = " active"), 0 === a && (n = " first"), a === e.length - 1 && (r = " last"), t.clone(!1).addClass("accordion-link" + i + n + r).insertBefore(s)
            });
            var r = t.children(".accordion-link");
            e.on("click", function(a) {
                a.preventDefault();
                var e = $(this),
                    s = e.parent("li"),
                    n = s.siblings("li"),
                    c = e.attr("href"),
                    l = t.children('a[href="' + c + '"]');
                s.hasClass("active") || (s.addClass("active"), n.removeClass("active"), i.removeClass("active"), $(c).addClass("active"), r.removeClass("active"), l.addClass("active"))
            }), r.on("click", function(t) {
                t.preventDefault();
                var s = $(this),
                    n = s.attr("href"),
                    c = a.find('li > a[href="' + n + '"]').parent("li");
                s.hasClass("active") || (r.removeClass("active"), s.addClass("active"), i.removeClass("active"), $(n).addClass("active"), e.parent("li").removeClass("active"), c.addClass("active"))
            })
        })
    }
}(jQuery);


$('.responsive-tabs').responsiveTabs({
    								     accordionOn: ['xs', 'sm']
									});
 

                                    



                                    // News js


                                    jQuery.fn.liScroll = function(settings) {
                                        settings = jQuery.extend({
                                            travelocity: 0.03
                                            }, settings);		
                                            return this.each(function(){
                                                    var $strip = jQuery(this);
                                                    $strip.addClass("newsticker")
                                                    var stripHeight = 1;
                                                    $strip.find("li").each(function(i){
                                                        stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
                                                    });
                                                    var $mask = $strip.wrap("<div class='mask'></div>");
                                                    var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
                                                    var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
                                                    $strip.height(stripHeight);			
                                                    var totalTravel = stripHeight;
                                                    var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
                                                    function scrollnews(spazio, tempo){
                                                    $strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
                                                    }
                                                    scrollnews(totalTravel, defTiming);				
                                                    $strip.hover(function(){
                                                    jQuery(this).stop();
                                                    },
                                                    function(){
                                                    var offset = jQuery(this).offset();
                                                    var residualSpace = offset.top + stripHeight;
                                                    var residualTime = residualSpace/settings.travelocity;
                                                    scrollnews(residualSpace, residualTime);
                                                    });			
                                            });	
                                    };
                                    
                                    $(function(){
                                        $("ul.ticker01").liScroll();
                                    });






                                    function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}