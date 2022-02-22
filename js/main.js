const brg = document.querySelector('.header_brg');
const menu = document.querySelector('.header_nav');	
const width = document.body.clientWidth;


brg.addEventListener('click', () => {
	brg.classList.toggle('active');
	menu.classList.toggle('visible');
	if (brg.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
		document.querySelector('.finance_body').style.opacity = '0';
		document.querySelector('.finance_body').style.pointerEvents = 'none';
	} else {
		document.body.style.overflow = '';
		document.querySelector('.finance_body').style.opacity = '1'
		document.querySelector('.finance_body').style.pointerEvents = 'all';
	}
});
/* ================================== */
const footList = document.querySelectorAll('.foot-list')

if (width < 620) {
	for (let item of footList) {
		item.classList.add('none-vis')
	}
};
/* ================================= */
const footL1 = document.getElementById('l-1');
const footL2 = document.getElementById('l-2');
const footL3 = document.getElementById('l-3');
const footL4 = document.getElementById('l-4');
const footL5 = document.getElementById('l-5');

const footM1 = document.getElementById('m-1');
const footM2 = document.getElementById('m-2');
const footM3 = document.getElementById('m-3');
const footM4 = document.getElementById('m-4');
const footM5 = document.getElementById('m-5');

footL1.addEventListener('click', function (e) {
	footM1.classList.toggle('activ-vis')
});
footL2.addEventListener('click', function (e) {
	footM2.classList.toggle('activ-vis')
});
footL3.addEventListener('click', function (e) {
	footM3.classList.toggle('activ-vis')
});
footL4.addEventListener('click', function (e) {
	footM4.classList.toggle('activ-vis')
});
footL5.addEventListener('click', function (e) {
	footM5.classList.toggle('activ-vis')
});
