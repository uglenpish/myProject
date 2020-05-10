let parallax = (function () {
	
	let pt1 = document.querySelector('.parallax-mount__layer--1');
			pt2 = document.querySelector('.parallax-mount__layer--2');
			pt3 = document.querySelector('.parallax-mount__layer--3');
			pt4 = document.querySelector('.parallax-mount__layer--4');
			pt5 = document.querySelector('.parallax-mount__layer--5');
			pt6 = document.querySelector('.parallax-mount__layer--6');
			pt7 = document.querySelector('.parallax-mount__layer--7');

	return {
		move: function(block, windowScroll, stafeAmount, axis){
			let stafe = windowScroll / -stafeAmount +"%";
			let style = block.style;

			let transformString = (axis == 'y') ? "translate3d(0, "+stafe+", 0)" : "translate3d("+stafe+", 0, 0)"

			style.top=stafe;
			style.webkitTransform = transformString;
		},

		init: function (wScroll) {
			let welcomeOffset = getOffsets('welcome').top;

			if (welcomeOffset>0){
				this.move(pt1, wScroll, 400, 'y' );
				this.move(pt2, wScroll, 200, 'y' );
				this.move(pt3, wScroll, 100, 'y' );
				this.move(pt4, wScroll, 60, 'y' );
				this.move(pt5, wScroll, 250, 'y' );
				this.move(pt6, wScroll, 250, 'y' );
				this.move(pt7, wScroll, 300, 'y' );
			}
		}
	}
}());

function getOffsets (block) {
	let element = document.querySelector('.'+block);
	let rect = element.getBoundingClientRect();
	return rect;
}

window.onscroll = function() {
	let wScroll = window.pageYOffset;
	parallax.init(wScroll);
}