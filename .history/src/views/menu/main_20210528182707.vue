<template>
	<div class="main-page">
		
		<router-view></router-view>
		<div class="mainBotMenu">
			<div class="mainBotMenuIt" v-for="(item,index) in ">
				<img src="" alt="" class="mainBotMenuIt_img">
				<div class="mainBotMenuItTxt"></div>
			</div>
		</div>
	</div>
</template>

<script src="@/assets/js/menu/main.js"></script>

<style scoped lang="scss" src="@/assets/css/menu/main.scss"></style>
