jQuery(document).on('ready',function(){jQuery('#myTab a').click(function(e){e.preventDefault()
jQuery(this).tab('show');jQuery("#logo-carousel").slick('slickPrev');jQuery("#ads-carousel").slick('slickPrev');});jQuery(window).on("scroll",function(){var fromTop=jQuery(document).scrollTop();jQuery("masthead").toggleClass("down",(fromTop>500));});jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>0){jQuery('.totop').fadeIn();}else{jQuery('.totop').fadeOut();}});jQuery('.totop').click(function(){jQuery('body,html').animate({scrollTop:0},400);return false;});jQuery(function(){jQuery('#dg-container').gallery({autoplay:true,interval:3000});});jQuery(function(){jQuery('#dg-container2').gallery();});jQuery(function(){jQuery('#dg-container3').gallery();});jQuery(function(){jQuery('#dg-container4').gallery({autoplay:true,interval:4500});});jQuery('.slider-for').slick({slidesToShow:1,slidesToScroll:1,arrows:false,fade:true,asNavFor:'.slider-nav'});jQuery('.slider-nav').slick({slidesToShow:4,slidesToScroll:1,asNavFor:'.slider-for',dots:true,centerMode:true,focusOnSelect:true,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}}]});jQuery('.related-projects').slick({slidesToShow:4,slidesToScroll:1,arrows:true,responsive:[{breakpoint:1025,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]});var $grid=jQuery('.grid').isotope({itemSelector:'.portfolio',layoutMode:'fitRows',});var filterFns={numberGreaterThan50:function(){var number=jQuery(this).find('.number').text();return parseInt(number,10)>50;},ium:function(){var name=jQuery(this).find('.name').text();return name.match(/ium$/);}};jQuery('#filters').on('click','button',function(){var filterValue=jQuery(this).attr('data-filter');filterValue=filterFns[filterValue]||filterValue;$grid.isotope({filter:filterValue});});jQuery('.button-group').each(function(i,buttonGroup){var $buttonGroup=jQuery(buttonGroup);$buttonGroup.on('click','button',function(){$buttonGroup.find('.is-checked').removeClass('is-checked');jQuery(this).addClass('is-checked');});});});