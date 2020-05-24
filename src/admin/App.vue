<template lang="pug">
	.wrapper
		Login
		header.header
			.container-admin
				.header__content
					.header__user
						.avatar
							img(src="../images/content/user.jpg").avatar__img
						.user__name Стерлин Дмитрий
					.header__container 
						.header__title Панель администратора
						button(type='button').header__btn Выйти
		nav.nav
			.container-admin
				ul.nav__list
					li.nav__item(v-for="i in ['Обо мне', 'Работы', 'Отзывы']")
						a.nav__link(href='#' v-text="i")
		About
		Works
		Reviews
</template>

<script>
	import Login from "./components/pages/login"
	import About from "./components/pages/about"
	import Works from "./components/pages/works"
	import Reviews from "./components/pages/reviews"

	export default {
  	components: {
	  	Login,
	  	About,
	  	Works,
	  	Reviews,
	  }
	}
</script>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
	@import "normalize.css";
	@import "../styles/mixins.pcss";
	@import "../styles/layout/base.pcss";
	
/* body and section */
	body {
		background-color: #f8f9fe;
	}

	button[type="button"] {
	  background-color: inherit;
	}
	.container-admin {
		width: 100%;
		max-width: 1140Px;
		height: 100%;
		margin: 0 auto;
		padding: 0 20px;
		position: relative;
		display: flex;
		&_column {
			flex-direction: column;
		}
		@include phones {
			padding: 0;
		}
	}
	.section-title {
		font-size: 21px;
		font-weight: 700;
		&_middle{
			font-size: 18px;
			font-weight: 600;
		}
	}
	.section__title-wrap {
		display: flex;
		padding: 30Px 0;
		@include phones {
			flex-direction: column;
			align-items: start;
			margin-left: 20px;
		} 
	}
/* header */
	.header {
		color: #fff;
		background: linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
		
		width: 100%;
		height: 80Px;
		&__content {
			width: 100%;
			display: flex;
			align-items: center;
		}
		&__user {
			display: flex;
			align-items: center;
			margin-right: 20px;
			@include phones {
				margin-left: 15px;
			}

			.user__name {
				color: #fff;
				line-height: 1.42;
				font-size: 18px;
				white-space: nowrap;
			}
		}
		&__container {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			@include phones {
				flex-direction: column;
				flex: 0;
				align-items: start;
			}
		}
		
		&__title {
			font-size: 14Px;
			color: rgba(255, 255, 255, 0.502);
			margin-right: 20px;
			text-align: left;
			flex: 1;
			@include phones {
				display: none;
			}
		}
		&__btn {
			font-size: 16Px;
			color: rgba(255, 255, 255, 0.702);
			text-decoration: underline;
			line-height: 1.5;
			&:hover {
				
			}
		}
	}
	.avatar {
		margin-right: 20px;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		width: 50px;
		height: 50px;

		&__img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
		}
	}
/*  nav  */
	.nav {
		background-color: #fff;
		font-weight: 600;
		font-size: 16Px;
		height: auto;
		&__list {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: nowrap;
		}
		&__item {
			padding: 25Px 15Px;
			border-bottom: 3Px solid transparent;
			&:hover {
				color: $main;
				border-bottom: 3Px solid $main;
			}
		}
		&__link {
			white-space: nowrap;
		}
	}
/* кнопки */
	.edit-btn {
		background: svg-load('pencil.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
		width: 15px;
		height: 15px;
		opacity: .5;
		&:hover {
			opacity: 1;
		}
	}
	.delete-btn {
		background: svg-load('trash.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
		width: 15px;
		height: 15px;
		opacity: .5;
		&:hover {
			opacity: 1;
		}
	}
	.btn-true {
		background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%) center center no-repeat;
		display: block;
		width: 15px;
		height: 15px;
	}
	.btn-false {
		display: block;
		position: relative;
		width: 14px;
		height: 14px;
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 15px;
			height: 3px;
			background-color: #bf2929;
		}
		&::before {
			transform: translate(-50%, -50%) rotate(45deg);
		}
		&::after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}
</style>
</template>