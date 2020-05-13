import Vue from "vue";

const thumbs={
	template: "#slider-thumbs",
	props: ["works", "currentWork"],
};

const btns={
	template: "#slider-btns",
};

const display={
	template: "#slider-display",
	components: {thumbs, btns},
	props: ["currentWork", "works", "currentIndex"],
	computed: {
		reverseWorks(){
			const works = [...this.works];
			return works.reverse();
		}
	}
};

const tags={
	template: "#slider-tags",
	props: ["tags"]
};

const card={
	template: "#slider-card",
	components: {tags},
	props: ["currentWork"],
	computed: {
		tagsArr() {
			return this.currentWork.skills.split(',');
		}
	},
};

new Vue({
	el: "#work__component",
	template: "#slider-work",
	components: {display, card},
	data(){
		return{
			works:[],
			currentIndex: 0,
		}
	},

	computed: {
		currentWork() {
			return this.works[this.currentIndex];
		}
	},

	watch: {
		currentIndex(val) {
			this.makeInfiniteLoopIndex(val);
		},
	},

	methods: {
		makeInfiniteLoopIndex(val){
			const worksLenghtZero = this.works.length - 1;
      if (val > worksLenghtZero) this.currentIndex = 0;
      if (val < 0) this.currentIndex = worksLenghtZero;
			console.log(val);
		},

		handlerSlide(direct){
			switch (direct) {
				case "next":
					this.currentIndex++;
					break;
				case "prev":
					this.currentIndex--;
					break;
			}
		},

		makeArrWithRequireImg(array) {
			return array.map(item=>{
				const requirPic = require(`../images/content/work/${item.photo}`);
				item.photo = requirPic;
				return item; 
			})
		}
	},

	created(){
		const data = require("../data/work.json");
		this.works = this.makeArrWithRequireImg(data);
	}
});