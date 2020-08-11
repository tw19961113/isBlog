<template>
	<el-container>
	  <el-header>
		  <el-row>
		    <el-col :span="8">
				<div class="grid-content bg-purple-dark">
					<img src="../static/img/logo.jpg" width="50px" height="50px" style="margin-left: 300px;"/>
					<a href="#" style="font-size: large;color: gray;text-decoration: none;margin-left: 10px;">Blog+</a>
				</div>
			</el-col>
			<el-col :span="8">
				<el-input v-model="input" placeholder="请输入内容" style="margin-top: 15px;" @focus="serachColorChange" @blur="blurColor">
					<el-button slot="append" icon="el-icon-search" :style="serachColor"></el-button>
				</el-input>
				 
			</el-col>
		  </el-row>
	  </el-header>
	  <el-main>
		 <div align="center">
			 <el-carousel indicator-position="" style="width: 50%;">
			 	  <el-carousel-item v-for="item in 4" :key="item">
			 		<h3>{{ item }}</h3>
			 	  </el-carousel-item>
			 </el-carousel>
		 </div>
		 <div align="center" style="margin-left: -25px;">
			 <ul id="ul-class" style="width: 932px;"  @mouseover="mouseover" @mouseleave="mouseleave" >
				 <el-row>
				   <el-col :span="20"><div class="grid-content bg-purple-light">
						<span><p style="text-align: left;font-size: large;font-weight: bold;" :style="active">特朗普于1968年获得宾夕法尼亚大学沃顿商学院经济学学士学位	</p>
												
						</span>
						<span>
							<p style="text-align: left;">作者+详细说明</p>
						</span>
				   </div></el-col>
				   <el-col :span="4"><div class="grid-content bg-purple">
				   				 <el-button type="warning" icon="el-icon-star-off" circle style="margin-top: 30px;"></el-button>
				   </div></el-col>
				 </el-row>
				
				 <el-divider content-position="left"></el-divider>
			 </ul>
		 </div>
	  </el-main>
	</el-container>
</template>

<script>
	export default {
		data(){
			return{
				serach:'',
				inputStyle:'',
				isCollapse: false,
				items:[1,2],
				index:null,
				input:'',
				serachColor:'',
				active:''
		    }
		},
		mounted: function() {
			this.indexInit()
		},
		methods:{
			indexInit(){
				//初始化页面的操作
				
			},
			inputClick(){
				this.inputStyle = 'input-color'
			},
			handleOpen(key, keyPath) {
			        console.log(key, keyPath);
			      },
			handleClose(key, keyPath) {
			console.log(key, keyPath);
		   },
		   tableRowClassName({row, rowIndex}) {
		           if (rowIndex === 1) {
		             return 'warning-row';
		           } else if (rowIndex === 3) {
		             return 'success-row';
		           }
		           return '';
		   },
		   mouseover(){
			   this.active = "color:red";
		   },
		   mouseleave(){
			   this.active='';
		   },
		   serachColorChange(){
			   this.serachColor="background-color:red;color:white"
		   },
		   blurColor(){
			   this.serachColor=""
		   }
		}
	}
</script>

<style>
  .el-header{
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 20px;
	margin-top: -70px;
  }
  
  .el-main {
    background-color: whitesmoke;
    color: #333;
    text-align: center;
	}
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-input {
      width: 300px;
    }
  .el-input-group__prepend {
      background-color: #fff;
    }
 .input-color{
	 background-color: red;
 }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
     width: 200px;
     min-height: 400px;
   }
  /* 轮播图*/
    .el-carousel__item h3 {
      color: wheat;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
</style>
