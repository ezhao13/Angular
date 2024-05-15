//$(function () {
//    $('#currentDate').datetimepicker();
//});
$(function () {
	$('[data-toggle="popover"]').popover()
})
// $(".file").fileinput();

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function() {
	$(window).scroll(function () {
	   if ($(document).scrollTop() > 50) {
		$('nav.navbar > .container-fluid').addClass('hide');
		$('nav').addClass('shrink');
		   $('#back-to-top').fadeIn();
	   } else {
		$('nav.navbar > .container-fluid').removeClass('hide');
		$('nav').removeClass('shrink');
		   $('#back-to-top').fadeOut();
	   }
   });
   // scroll body to 0px on click
   $('#back-to-top').click(function () {
	   $('#back-to-top').tooltip('hide');
	   $('body,html').animate({
		   scrollTop: 0
	   }, 800);
	   return false;
   });
   $('#back-to-top').tooltip('show');
});

var orgLocation = location.href;
var maincontent = '#maincontent';
if (orgLocation.indexOf(maincontent) > -1) {
    location.href = orgLocation.substring(0, orgLocation.indexOf(maincontent));
}
function goMainContent() {
    location.href = orgLocation + maincontent;
}
