<template>
	<el-container>
	  
	  <el-container>
	    <el-header>Header</el-header>
	    <el-main>
			<el-row  type="flex" class="row-bg" justify="center">
			  <el-col :span="8">
					<div class="grid-content bg-purple-light">
						<el-input
						  placeholder="请输入账号"
						  v-model="loginUser.loginName"
						  clearable>
						</el-input>
					</div>
					<div class="grid-content bg-purple-light">
						<el-input
						  placeholder="请输入密码"
						  v-model="loginUser.password"
						 show-password>
						</el-input>
					</div>
					<div align="left">
						<el-button type="success" style="width: 200px;" @click='doLogin'>登录</el-button>	
					</div>
					
			  </el-col>
			</el-row>
		</el-main>
	   
	  </el-container>
	</el-container>
	
	
</template>
<script>
import {Login} from '../api/login/login.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
	  return{
		  loginUser:{
			  loginName:'',
			  password:''
		  }
	  }
  },
  methods:{
	  doLogin(){
		  //路由跳转
		  Login.doLogin(this.loginUser).then(res=>{
			  this.$message("欢迎"+res.data+"登录")
			  this.$router.push({name:'Hello'})
		  })
		 
	  }
  }
}
</script>

