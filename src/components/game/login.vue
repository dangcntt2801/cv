<template>
	<div class="login">
        <div class="login-left">
            <img src="/img/logo.svg" alt="" class="login-icon">
            <div v-show="mode =='sign_in'">
                <h2>Sign in</h2>
                <p>Don't have an account? <a href="#" @click="mode = 'sign_up'">Sign up</a></p>
                <div class="form">
                  <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input v-model="state_login.email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="state_login.password" type="password" class="form-control"  placeholder="Password">
                  </div>
                  <p style="color:red" v-show="error != ''">{{error}}</p>
                  <div class="form-group form-check" style="display:flex;align-items:center;justify-content:space-between">
                    <span >
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </span>
                    <a href="">Forgot password?</a>
                  </div>
                  <button @click="login()" class="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
            <div v-show="mode =='sign_up'">
                <h2>Sign up</h2>
                <p>Already have an account? <a href="#" @click="mode = 'sign_in'">Sign in</a></p>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <input v-model="state_register.phone" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Full Name">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input v-model="state_register.email" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="state_register.password" type="password" class="form-control"  placeholder="Password">
                  </div>
                  <div class="form-group form-check" style="display:flex;align-items:center;justify-content:space-between">
                    <span >
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">I agree to theTerms of Service andPrivacy Policy</label>
                    </span>
                  </div>
                  <button type="button" @click="register()" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            
        </div>
        <div class="login-right">   
            <h1>Welcome to<br>our community</h1>
            <p>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
            <div class="login-right-img">
                <span>
                    <img src="/img/avatar.jpeg" alt="">
                    <img src="/img/avatar.jpeg" alt="">
                    <img src="/img/avatar.jpeg" alt="">
                    <img src="/img/avatar.jpeg" alt="">
                </span>
                <p>More than 17k people joined us, it's your turn</p>
            </div>
        </div>
	</div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs'
    // import axios from "axios";
    // import axiosInstanct from "../../store/interceptors";
    import { reactive , ref} from 'vue';
    // import {onMounted} from 'vue';
    // import {useStore } from 'vuex';
    // import {useRouter} from 'vue-router';
    import { useAuth } from '../../v3.js';
    import { mapState, mapMutations, mapActions} from 'vuex'
    import { useToast } from "vue-toastification";
	export default {
		name: 'P101Login',
        setup() {
            const error       = ref('')
            const auth        = useAuth();
            // Get toast interface
            const toast = useToast();
            const state_login = reactive({
                email : '',
                password : ''
            })
            const state_register = reactive({
                phone: '',
                email : '',
                password : ''
            })
            // const store    = useStore();
            // const router   = useRouter();
            // const authComp = useAuthComp();
     
            var mode = 'sign_in'  
            const state = reactive({
                form: {
                    remember: false,
                    fetchUser: true,
                    staySignedIn: false,
                    errors: {}
                }
            });

            function errors(res) {
                state.form.errors = Object.fromEntries(res.data.errors.map(item => [item.field, item.msg]));
            }
            
            async function login() {
                 
                auth.login({
                    data: qs.stringify({
                        msisdn: state_login.email,
                        password: state_login.password,
                    }),
                    remember: state.form.remember ? '{"name": "Default"}' : null,
                    fetchUser: state.form.fetchUser,
                    staySignedIn: state.form.staySignedIn,
                    redirect: '/admin/about'
                })
                .then(null, (res) => {
                    error.value = "Sai tên đăng nhập hoặc mật khẩu";
                });
            }
                  
            async function register() {
               let rs = await axios.post('https://api.hdnft.online?url=user/signup-api',qs.stringify({
                            msisdn: state_register.email,
                            password: state_register.password,
                            phone:state_register.phone
                        })).catch(res=>{
                            console.log(res)
                        })
                if(rs.data.status == 1){
                    mode = 'sign_in';  
                    toast.success("Đăng kí thành công", {
                        timeout: 2000
                    }); 
                }else{
                    toast.error(rs.data.message[0], {
                        timeout: 2000
                    });
                }
            }
           
                return {
                    state_login,
                    state_register,
                    mode,
                    login,
                    register,
                    error,
                    toast
                }
           

        },
		mounted() {
	
		},
		methods: {

		}
	}

</script>
<style scoped>
    .login{
        display: flex;
    }
    .login-left, .login-right {
        width:50%;
        height: 100vh;
    }
    .login-left {
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #000;
    }
    .login-left h2 {
        font-weight: 700;
    }
    .login-left img {
        width: 50px;
        height: 50px;
        margin-bottom: 50px;
    }
    .login-left .form {
        margin-top: 20px;
    }
    .login-right {
        padding: 50px;
        background-image: url("/img/login-background.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size:cover;
         display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
    }
    .login-right h1 {
        font-weight: 700;
    }
    .login-right-img {
        margin-top: 20px    ;
        display: flex;
        align-items: center;
    }
    .login-right-img img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .login-right-img p {
        margin-left: 10px;
    }
</style>