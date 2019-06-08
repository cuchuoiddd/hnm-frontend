( function() {
	// do something
	
	jQuery(document).ready(function(){
		var windowwidth = jQuery(window).width();
		var hmenu = jQuery('#bannertop').height();
		//var fixmenu = hmenu;
		var iScrollPos = 0;
		jQuery(window).scroll(function(){
				$top=jQuery(window).scrollTop();
				if(windowwidth <768){
				if($top > hmenu){
					jQuery('.header-bottom').css({
						'position':'fixed',
						'top':0,
						'left':0,
						'width':'100%',
						'z-index':'99999',
						'background':'#293857'
					});
				}			
				else{
					jQuery('.header-bottom').css({
						'position':'static',
						'top':0,
						'left':0,
						'width':'auto',
						'border':'none'
					});
				}
				}
			});
		jQuery('.menu-main li').click(function(){
			jQuery('.menu-main li').removeClass('active');
			jQuery(this).addClass('active');
			var datatabs = jQuery(this).attr('data_tab');
			var slkt = datatabs.replace(/\#/g, "");
			jQuery("html, body").animate({ scrollTop: jQuery('#'+slkt).offset().top-hmenu }, 2000);
		});
			tallfeatured = 0;
			jQuery(".quaheight").each(function() {
				thisHeight = jQuery(this).height();
				if(thisHeight > tallfeatured) {
					tallfeatured = thisHeight;
				}
			});
			jQuery(".quaheight").height(tallfeatured);
			
		$('.tinnoibat').hover(function(){
			$(this).find('.ndtinnoibat').animate({'bottom':0},300);
			return false;
		},function(){
			$(this).find('.ndtinnoibat').animate({'bottom':'-55%'},300);
			return false;
		});
	});
}) ();