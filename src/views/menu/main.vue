<template>
	<div class="main-page">
		
		<router-view></router-view>
		<div class="mainBotMenu">
			<div class="mainBotMenuIt" v-for="(item,index) in menuData" :key="index" @click="goMenuBtn(item.url)">
				<img src="" alt="" class="mainBotMenuIt_img">
				<div class="mainBotMenuItTxt">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script src="@/assets/js/menu/main.js"></script>

<style scoped lang="scss" src="@/assets/css/menu/main.scss"></style>
