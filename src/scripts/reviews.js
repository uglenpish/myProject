import Vue from "vue";
import Flickity from 'vue-flickity';

const row = {
	template: "#reviews-row",
};

const slide = {
	template: "#reviews-slide",
};

const sliders = {
	template: "#reviews-sliders",
	components: {slide, Flickity},

	data() {
		return {
			feedbackList: [],
			flickityOptions: {
				initialIndex: 0,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: false,
				groupCells: true,
				freeScroll: false,
				contain: true,
			},
		}
	},
};

new Vue({
	el: "#reviews-component",
	template: "#reviews-content",
	components: {row, sliders},

	methods: {
		next() {
		  this.$refs.flickity.next();
		  this.checkActiv()
		},
		previous() {
		  this.$refs.flickity.previous();
		  this.checkActiv()
		},
	
		checkActiv() {
			if (this.$refs.flickity.selectedIndex() == 0) {
				this.$el.querySelector('.slider__arrow-btn--prev').disabled = true;
			} else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
				this.$el.querySelector('.slider__arrow-btn--next').disabled = true;
			} else {
				this.$el.querySelector('.slider__arrow-btn--prev').disabled = false;
				this.$el.querySelector('.slider__arrow-btn--next').disabled = false;
			}
		}
	},
});