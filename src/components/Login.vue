<template>
	<div class="center_box">
		<div class="content-box">
			<div class="login-form">
				<div class="input-group">
					<input  :class="user_error ? 'error_input' : ''" type="text" name="" v-model="params.username" :placeholder="$t('login.user_name')">
				</div>
				<div class="input-group">
					<input :class="pass_error ? 'error_input': ''" type="password" name="" v-model="params.password" :placeholder="$t('login.password')">
				</div>
				<div class="login-btn" @click="login()">
					<button class="login-btn">{{ $t('login.btnLogin') }}</button>
				</div>
				<div class="login-option">
                    <div>
						<input type="checkbox" v-model="check_id" id="check_id" style="margin-right:5px">
						<label for="check_id">{{ $t('login.remember') }}</label>
                    </div>
					<div class="pwreminder">
						<button onclick='window.location.href="/admin/pwreminder"' class="no-decoration pointer">
							{{ $t('login.btnRegister') }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		mapActions
	} from 'vuex'
	export default {
		name: 'P101Login',
		data() {
			return {
				params: {
					username: '',
					password: '',
					type: 'admin'
				},
				notices: [],
				client_secret: "qB1DFWMsAtx4y9325FOPS5XQ0Awepo0U0nl7vvFW",
				check_id: false,
				pass_error: false,
				user_error: false,
				message_error: "",
				ENV: process.env.MIX_APP_ENV
			}
		},
		mounted() {
	
		},
		methods: {
			...mapActions({
				showPopup: 'popup/show'
			}),
			login() {
				this.$auth.login({
					data: {
						...this.params,
						grant_type: "password",
						client_id: "1",
						client_secret: this.client_secret,
						scope: "scope-general"
					}
				}).then(() => {

				}, (err) => console.error('login error ', err));
			},
		}
	}

</script>
<style scoped>
    .center_box {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
	img {
		width: 100%;
	}
	.logo {
		width: 220px;
		height: 150px;
		border-radius: 25px;
		margin: 0 auto;
		margin-bottom: 30px;
	}
	.content-box {
		width: 80vw;
		max-width: 500px;
	}
	.login-form {
		padding: 80px;
		width: 100%;
	}
	.login-form > *:not(:first-child) {
		margin-top: 15px;
	}
	.login-form .input-group {
		position: relative;
	}
	.login-form .input-group .icon {
		width: 30px;
		height: 30px;
		background: #9e8326;
		border-radius: 3px;
		position: absolute;
		top: 5px;
        left: 5px;
	}
	.login-form .input-group .icon img{
		padding: 7px;
		padding-top: 5px;
	}
	.login-form .input-group input {
		height: 40px;
		width: 100%;
		border: 1px solid #9e8326;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 3px;
	}
	.login-form .input-group input::placeholder {
		color: #b3b3b3;
	}
	.login-form .login-btn {
		font-size: 21px;
		font-weight: bold;
		height: 50px;
		background: #9e8326;
		line-height: 50px;
		border-radius: 3px;
		text-align: center;
		color: #fff;
		cursor: pointer;
	}
	.login-form .login-option {
		font-size: 12px;
		white-space: nowrap;
		justify-content: space-between;
        display: flex;
	}
	.login-form .login-option div:first-child input[type="checkbox"]{
		display: inline-block;
		position: relative;
        top: 2px;
		width: 14px;
		height: 14px;
	}
	.login-form .login-option div:last-child {
		display: inline-block;
		text-align: right;
		width: 50%;
		min-width: 140px;
	}
	a.no-decoration {
		color: #333;
	}
	a.no-decoration:hover {
		color: #333;
		text-decoration: none;
	}
	.login-btn button {
		border: none;
        width: 100%;
	}
	.login-option a {
		line-height: 1.8
	}
	.login-option a:hover {
		text-decoration: underline;
	}
	.error_input {
		border-color: red !important;
	}
	.error_input:focus .error-tooltip {
	}
	.login-option button {
		background: none;
        border: none;
	}
	input[type=checkbox] + label::before {
		width: 14px;
		height: 14px;
		top: 15px;
        left: 1px;
	}
	input[type=checkbox]:checked + label::after {
		margin-top: -8px;
		left: 3px
	}
</style>
