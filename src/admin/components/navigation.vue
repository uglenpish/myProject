<template lang="pug">
	nav.nav
		.container-admin
			ul.nav__list
				li.nav__item(v-for="i in ['Обо мне', 'Работы', 'Отзывы']")
					a.nav__link(href='#' v-text="i")
</template>

<script>
	
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

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
</style>