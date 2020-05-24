<template lang="pug">
	section.section.about
		.container-admin.container-admin_column
			.section__title-wrap
				h2.section-title Блок «Обо мне»
				button(type="button" name="group-add-btn-new").about__btn Добавить группу
					.about__btn-wrap
						.btn-plus 
			.about__content
				.group(v-for="group in ['Frontend','Backend']")
					.group__title
						input(placeholder="Название новой группы" :value="group" name="group-name").group__input.group__name-group
						.group__btns-wrap
							button(type="button" name="group-edit-btn").btn-true
							button(type="button" name="group-delete-btn").btn-false
					.group__skills
						.skill(v-for="skill in [['Git', '30%'],['JavaScript', '20%'],['HTML5', '60%']]")
							input(:disabled="false" :value="skill[0]" name="prof-name").skill__prof.skill__input
							input(:disabled="false" :value="skill[1]" name="percent").skill__perc.skill__input
							.group__btns-wrap
								button(type="button" name="group-edit-btn").edit-btn
								button(type="button" name="group-delete-btn").delete-btn
					.group__skill-add
						input(placeholder="Новый навык" name="add-prof").group__skill-name.group__input
						input(placeholder="100 %" name="add-percent").group__skill-percent.group__input
						button(type="button" name="group-add").group__btn
							.group__btn-wrap
								.btn-plus
</template>

<script>
	
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
@import "../../../styles/layout/base.pcss";
/* about */
	.about {
			
		&__btn {
			display: flex;
			flex-flow: row-reverse;
			margin-left: 60px;
			color: $links-color;
			font-weight: 700;
			@include phones {
				font-size: 14Px;
				margin: 20px 0 0 0;
			}
			&:hover .btn-plus {
				background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
			}
			&-wrap {
				width: 20px;
				height: 20px;
				margin-right: 15px;
			}
		}
		&__content {
			display: flex;
			justify-content: space-between;
			margin-left: -30px;
			@include tablets {
				flex-direction: column;
				align-items: center;
				margin-left: 0 auto;
			}
		}
	}
/*  about group  */
	.group {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20Px;
		max-width: 530Px;
		min-height: 390Px;
		background-color: #fff;
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-left: 30px;
		margin-bottom: 30px;
		&__title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid rgba($text-color, .3);
			padding: 0 10px 20px;
		}
		&__btns-wrap {
			margin-left: 10px;
			min-width: 50px;
			justify-content: space-between;
			display: flex;
			align-items: center;
		}
		
		&__input {
			position: relative;
			display: block;
			border: none;
			outline: none;
			background: transparent;
			border-bottom: 1px solid transparent;
			color: inherit;
			font-weight: 600;
			line-height: inherit;
			font-size: 18px;
			&::placeholder {
				font-size: 16px;
				color: rgba($text-color, .3);
			}
			&:focus::placeholder {
				color: transparent;
			}
			&:focus {
				border-bottom: 1px solid $text-color;
			}
		}
		&__name-group { 
			width: 62%;
		}
		&__skill-name {
			width: 40%;
			border-bottom: 1px solid $text-color;
		}
		&__skill-percent {
			width: 17%;
			margin-left: 10px;
			text-align: center;
			border-bottom: 1px solid $text-color;
		}
		&__skills {
			flex: 1;
			height: 100%;
			padding: 10px;
		}
		&__skill-add {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 10px;
		}
		&__btn {
			margin-left: 20px;
			&-wrap {
				width: 40px;
				height: 40px;
			}
		}
	}
/* skill */
	.skill {
		display: flex;
		justify-content: space-between;
		/* width: 100%; */
		margin-top: 10px;
		&:first-child {
			margin-top: 0;
		}
		&__prof {
			width: 60%;
		}
		&__perc {
			width: 75px;
			text-align: center;
		}
		&__input {
			display: block;
			border: none;
			outline: none;
			background: transparent;
			color: inherit;
			font-weight: 600;
			line-height: inherit;
			border-bottom: 1px solid transparent;
			font-size: 16px;
			&:focus {
				border-bottom: 1px solid $text-color;
			}
		}
	}
/* blue button plus  */
	.btn-plus {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		&:hover {
			background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
		&::before,
		&::after {
			content: '';
			display: block;
			position: absolute;
			width: 40%;
			height: 7%;
			background: #fff;
		}
		
		&::after {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&::before {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}
</style>