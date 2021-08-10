$(document).ready(function () {
	var ten = [];
	var menu = [];
	ten[0] = 'Menu';
	menu[0] = $('.menu_desktop');
	var htmlmenu = '';
	var icon = '';
	for (i = 0; i < menu.length; i++) {
		var htmltam = '';
		/*
		menu[i].find('ul').children('li').each(function () {
			htmltam = htmltam + '<li>' + $(this).html() + '</li>';
		});
		*/
		htmltam = menu[i].children('ul').html();
		if (i == 0) {
			icon = '<i class="fa fa-bars"></i>';
		}
		if (i == 1) {
			icon = '<i class="fa fa-list-ul"></i>';
		}
		htmlmenu = htmlmenu + '<div class="mobile_' + i + '"><div class="tieude">' + icon + ten[i] + '</div><div class="noidung"><ul>' + htmltam + '</ul></div></div>';
	}
	htmlmenu = '<div class="mobile_menu">' + htmlmenu + '<div class="nentat"></div></div>';
	$('.menu_desktop').after(htmlmenu);
	$('.mobile_menu .nentat').click(function () {
		$('.mnmb').removeClass('mnmb');
		$('.showmenu').removeClass('showmenu');
	});
	$('.mobile_menu .tieude').click(function () {
		$(this).next().addClass('mnmb');
		$('.nentat').addClass('mnmb');
	});
	$('.header2_2 .deeper').children('a').click(function(){
		if( $(this).parent().hasClass('showmenu') ){
			$('.showmenu').removeClass('showmenu');
		}
		else{
			$('.showmenu').removeClass('showmenu');
			$(this).parent().addClass('showmenu');
		}
	});
	//$('.s_anh').first().addClass('active');
	$('.box_thongtin').addClass('showanimation');
	var tid = setTimeout(mycode, 5000);
	function mycode() {
		if ($('.active').is(':last-child')) {
			$('.active').removeClass('active');
			$('.s_anh').first().addClass('active');
		} else {
			$('.active').next().addClass('active');
			$('.active').first().removeClass('active');
		}
		tid = setTimeout(mycode, 5000);
	}
	$('.slideanh').hover(function () {
		clearTimeout(tid);
	}, function () {
		tid = setTimeout(mycode, 5000);
	});
	$('.nutnext').click(function () {
		if ($('.active').is(':last-child')) {
			$('.active').removeClass('active');
			$('.s_anh').first().addClass('active');
		} else {
			$('.active').next().addClass('active');
			$('.active').first().removeClass('active');
		}
	});
	$('.nutprev').click(function () {
		if ($('.active').is(':first-child')) {
			$('.active').removeClass('active');
			$('.s_anh').last().addClass('active');
		} else {
			$('.active').prev().addClass('active');
			$('.active').last().removeClass('active');
		}
	});
	$('.formchecktenmien bim input').click(function () {
		if ($(this).is(':checked')) {
			$('.formchecktenmien thuy input').attr('checked', true);
		} else {
			$('.formchecktenmien thuy input').attr('checked', false);
		}
	});
	$('.skypeblock_tieude').click(function(){
		if($('.skypeblock').hasClass('biclick')){
			$('.skypeblock').removeClass('biclick');
		}
		else{
			$('.skypeblock').addClass('biclick');
		}
	});
	$('.popupKM_close').click(function(){
		$('.popupKM').hide();
	});
	$('.popupKM_nen').click(function(){
		$('.popupKM_close').click();
	});
	/*
	// popup web mẫu
	$('.mauweb a').click(function(){
		if( $(this).attr('href') ){
			
		}
		else{
			$('.popupWeb_noidung').html( "<img src='"+$(this).find('.mauweb_anh img').attr('src').replace('300_','')+"'>" );
			$('.popupWeb').addClass('ShowPopup');
		}
	});
	$('.popupWeb_close').click(function(){
		$('.ShowPopup').removeClass('ShowPopup');
	});
	$('.popupWeb_nen').click(function(){
		$('.popupWeb_close').click();
	});
	*/
	/* Giao diện có sẵn */
	/*
	setTimeout(function(){
		$('.mauthemes').each(function(){
			$(this).find('.mauthemes_anh img').attr('src',$(this).find('.mauthemes_anh img').attr('data-src'));
		});
	},500);
	*/
	$(".mauthemes_anh img").bind('mouseover',function(event){
        loadAnh($(this));
    }).bind('mouseleave',function(){
        $('.popupThemes').hide();
    });
	// Hover mẫu web
	function loadAnh(hinh){
		$('.popupThemes').html('<img src="'+hinh.attr('src').replace('300_','')+'">');
		//$('.popupThemes img').css('width',($(window).width()/2)-200);
		$('.popupThemes').show();
		hinh.mousemove(function( event ) {
			if( event.clientX < $(window).width()/2 ){
				$('.popupThemes').css('left',event.clientX+40);
				$('.popupThemes').css('right','auto');
			}
			else{
				$('.popupThemes').css('right',$(window).width()-event.clientX+40);
				$('.popupThemes').css('left','auto');
			}
			
		});
	}
	setTimeout(function(){
		$(".mauweb_anh img").bind('mouseover',function(event){
			loadAnh($(this));
		}).bind('mouseleave',function(){
			$('.popupThemes').hide();
		});
	},1000);
	$('.boxmauvisao_block h3').click(function(){
		$('.boxmauvisao_show').removeClass('boxmauvisao_show');
		$(this).parent().addClass('boxmauvisao_show');
	});
	
	/*
	// Check cookie để bật POPUP nghỉ lễ
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	function checkCookie() {
		var user=getCookie("amhieu");
		if (user != "") {
			return false;
		}
		else {
			//setCookie("amhieu", 'dabat', 0.5); // Set số ngày, 1 là 1 ngày tức 24h
			return true;
		}
	}
	$('.popupKM .popupKM_close').click(function(){
		setCookie("amhieu", 'dabat', 0.5);
	});
	check = checkCookie();
	if(check){
		$('.popupKM').show();
	}
	else{
		$('.popupKM').hide();
	}
	*/
	// Chọn danh mục giao diện có sẵn
	$('.chonthemes').change(function(){
		window.location.replace( $(this).find('option:selected').attr('data-href') );
	});
});
/*
// Check URL web mẫu
function loadURL(href) {
	var url = href;
	if(url=='khongtontai'){
		return false;
	}
}

loadURL(listurl, 0);
// Click vào ảnh mẫu thì check lại
$('.mauweb a').click(function(){
	if( $(this).attr('href') ){

	}
	else{
		var listurl2 = [];
		listurl2[0] = $(this).attr('data-href');
		loadURL(listurl2, 0);
	}
});
*/
/* Check tên miền */
var listtenmien = [];
function load_ajax(tenmien, dem) {
	$.ajax({
		type: 'POST',
		url: '/apps/checkdomain.html',
		data: {
			tenmien: tenmien,
		},
		dataType: 'html',
		success: function (data) {
			var doituong = '.ketquatenmien_cell[data-tenmien="' + tenmien + '"]';
			$(doituong).html(data);
			dem += 1;
			loadlist(listtenmien, dem);
		},
		error: function () {
			alert('Có lỗi trong quá trình xử lý');
		}
	});
}
function loadlist(listtenmien, dem, flag) {
	if (dem < listtenmien.length) {
		load_ajax(listtenmien[dem], dem);
	} else {
		listtenmien = [];
		$('#clickme').removeAttr('disabled');
	}
}
function checkDoMain() {
	if (!$('.formchecktenmien_cell1 textarea').val()) {
		alert('Vui lòng nhập tên miền !');
		return false;
	}
	if ($('#duoicham thuy input:checked').length < 1) {
		if ($('.formchecktenmien_cell1 textarea').val().indexOf('.') > -1) {}
		else {
			alert('Vui lòng chọn đuôi chấm !');
			return false;
		}
	}
	$('.ketquatenmien_table').html('<div class="ketquatenmien_row"><div class="ketquatenmien_cell">Tên miền</div><div class="ketquatenmien_cell">Chi phí</div><div class="ketquatenmien_cell">Tình trạng</div></div>');
	$('#clickme').attr('disabled', true);
	var dau = $('.formchecktenmien_cell1 textarea').val().split('\n');
	var i = -1;
	function getgia(tg) {
		var idx = tg.indexOf('.');
		var last = tg.substring(idx, tg.length);
		switch (last) {
		case '.vn':
			return '770.000 đ';
		case '.com.vn':
			return '670.000 đ';
		case '.net.vn':
			return '670.000 đ';
		case '.biz.vn':
			return '670.000 đ';
		case '.gov.vn':
			return '490.000 đ';
		case '.org.vn':
			return '490.000 đ';
		case '.edu.vn':
			return '490.000 đ';
		case '.pro.vn':
			return '490.000 đ';
		case '.ac.vn':
			return '490.000 đ';
		case '.info.vn':
			return '490.000 đ';
		case '.health.vn':
			return '490.000 đ';
		case '.name.vn':
			return '82.000 đ';
		case '.net':
			return '320.000 đ';
		case '.com':
			return '280.000 đ';
		case '.info':
			return '370.000 đ';
		case '.org':
			return '340.000 đ';
		case '.us':
			return '270.000 đ';
		case '.biz':
			return '370.000 đ';
		case '.eu':
			return '600.000 đ';
		default:
			return 'Giá liên hệ';
		}
	}
	function getten(ten) {
		ten = $.trim(ten);
		ten = ten.toLowerCase();
		ten = ten.replace(/\ /g, '');
		var gia = getgia(ten);
		$('.ketquatenmien_table').html($('.ketquatenmien_table').html() + "<div class='ketquatenmien_row'><div class='ketquatenmien_cell'>" + ten + "</div><div class='ketquatenmien_cell'>" + gia + "</div><div class='ketquatenmien_cell' data-tenmien='" + ten + "'><img class='cart_spiners' src='/images/load.png'></div></div>");
		i += 1;
		listtenmien[i] = ten;
	}
	$.each(dau, function (index, item) {
		var tendau = item;
		if (tendau.indexOf('.') > -1) {
			var ten = tendau;
			getten(ten);
		} else {
			$('#duoicham thuy input:checked').each(function () {
				var ten = tendau + $(this).val();
				getten(ten);
			});
		}
	});
	loadlist(listtenmien, 0);
}
/* End check tên miền */
/* 
// Lazy load cũ
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    const lazyLoad = function calllazy() {
        if (active === false) {
            active = true;
            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        //lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                        lazyImages = lazyImages.filter(function (image) {
                                return image !== lazyImage;
                            });
                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });
                active = false;
            }, 200);
        }
    };
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
	lazyLoad();
});
*/