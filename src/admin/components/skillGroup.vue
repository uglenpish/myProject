<template lang="pug">
	.skill-group.card
		.group.group__new
			.group__title
				.droup__title-heder
					.heder__category {{}}
					.heder__btn
						button(type="button")
						button(type="button")
				form.group__title-form
					input(
						placeholder="Название новой группы" 
						:value="''" 
						name="group-name"
						).group__input.group__name-group
					.group__btns-wrap
						button(type="button" name="group-edit-btn").btn-true.btn-true_active
						button(type="button" name="group-delete-btn").btn-false.btn-false_active
			.group__skills
				.skill.skill_new
					input(:disabled="false" :value="''" name="prof-name").skill__prof.skill__input
					input(:disabled="false" :value="''" name="percent" type="number" min="0" max="100").skill__perc.skill__input
					.group__btns-wrap
						button(type="button" name="group-edit-btn").btn-true
						button(type="button" name="group-delete-btn").btn-false
			.group__skill-add
				input(placeholder="Новый навык" name="add-prof").group__skill-name.group__input
				input(placeholder="100%" name="add-percent" type="number" min="0" max="100").group__skill-percent.group__input
				button(type="button" name="group-add" disabled="true").group__btn
					.group__btn-wrap
						.btn-plus
		//- .group(v-for="group in ['Frontend','Backend']")
		//- 	.group__title
		//- 		input(placeholder="Название новой группы" :value="group" name="group-name").group__input.group__name-group
		//- 		.group__btns-wrap
		//- 			button(type="button" name="group-edit-btn").btn-true
		//- 			button(type="button" name="group-delete-btn").btn-false
		//- 	.group__skills
		//- 		.skill(v-for="skill in [['Git', '30%'],['JavaScript', '20%'],['HTML5', '60%']]")
		//- 			input(:disabled="false" :value="skill[0]" name="prof-name").skill__prof.skill__input
		//- 			input(:disabled="false" :value="skill[1]" name="percent").skill__perc.skill__input
		//- 			.group__btns-wrap
		//- 				button(type="button" name="group-edit-btn").edit-btn
		//- 				button(type="button" name="group-delete-btn").delete-btn
		//- 	.group__skill-add
		//- 		input(placeholder="Новый навык" name="add-prof").group__skill-name.group__input
		//- 		input(placeholder="100 %" name="add-percent").group__skill-percent.group__input
		//- 		button(type="button" name="group-add").group__btn
		//- 			.group__btn-wrap
		//- 				.btn-plus
</template>

<style lang="postcss" scoped>
	@import "../../styles/mixins.pcss";
	.skill-group{
		margin-left: -30px;
		display: flex;
		flex-wrap: wrap;
	}

	.group {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20Px;
		width: calc(100% / 2 - 30px);
		min-width: 300Px;
		min-height: 390Px;
		background-color: #fff;
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-left: 30px;
		margin-bottom: 30px;

		@include tablets {
			max-width: 530Px;
			width: 100%;
		}
		@include phones {
			max-width: 100%;
			padding: 20Px 0;
		}
	
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
</style>

<script>
	
</script>