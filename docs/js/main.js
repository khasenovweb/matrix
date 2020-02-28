$(document).ready(function(){
	$('.works__galery').owlCarousel({
		items: 1.5,
		center: true,
		margin: 38,
		loop: true,
		nav: true,
		navText: ["<img src=\"img/owl-nav__prev.png\">","<img src=\"img/owl-nav__next.png\" >"],
		responsive: {
			0: {
				margin: 10,
			},
			700: {
				margin: 38,
			}
		}
	});
	$("a[data-role='scroll']").mPageScroll2id();
	$("[data-input-phone]").mask("+7 999 999-9999");
});
