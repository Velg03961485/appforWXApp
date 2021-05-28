<template>
	<div class="login-page">
		<!-- 手机端样式 -->
		<div class="I_login">
			<div class="I_loginTit">绑定慧营销</div>
		</div>

		<!-- pc端样式 -->
		<div class="P_login">
				<div class="P_loginTop">
					<div class="P_loginTopL">绑定慧营销</div>
					<img src="@/assets/img/close.png" alt="" class="P_loginTopR">
				</div>
				<div class="P_loginTit">输入企蜂云绑定的手机号及密码，即可绑定慧营销</div>
				<a-form-model :model="form" :layout="layout" labelAlign="right" style="margin-left:61px">
					<a-form-model-item label="常用电话：" style="margin-top:29px">
						<a-input v-model="form.name" class="inputWidth" />
					</a-form-model-item>
					<a-form-model-item label="备用电话：" style="margin-top:17px">
						<a-input v-model="form.name" class="inputWidth" />
					</a-form-model-item>
				</a-form-model>
				<div class="P_loginBot">
					<img src="@/assets/img/botton.png" alt="" class="P_loginBotSure">
				</div>
		</div>
	</div>
</template>

<script src="@/assets/js/login/login.js"></script>

<style scoped lang="scss" src="@/assets/css/login/login.scss"></style>
