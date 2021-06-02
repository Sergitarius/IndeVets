// $(function () {
// 	// $('.burger').on('click', function () {
// 	// 	$('.nav__list').slideToggle();
	
// 	// })
// // const burger = document.querySelector('.burger');
// // burger.addEventListener('click', () => {
// // 	burger.classList.toggle('burger__active')

// // })

// 	});
let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})