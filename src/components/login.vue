<template>
<div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>login</h1>&nbsp&nbsp&nbsp&nbsp <span style="color: red;font-weight: bold;font-size: 15px">{{msg}}</span>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									username:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="uname" v-model="username" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									password:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="password" />
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="Submit &raquo;" @click="login()" />
							&nbsp;&nbsp;
<!--							<a href="">注册</a>-->
                            <router-link to="/regist">注册</router-link>
						</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
					ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
      name: "login",
      data:function () {
          return{
            username:'',
            password:'',
            msg:''
          }
      },
      methods:{
        login(){
          this.$axios({
            url:'http://127.0.0.1:8000/api/user/',
            method:'get',
            params:{
              username: this.username,
              password: this.password
            }
          }).then(re=>{
            if(re.data['message']){
              sessionStorage['uname']=this.username
              this.$router.push('/home')
            }
            else {this.msg = '用户名或密码错误！'}
          }).catch(error=>{

            console.log('登陆失败');
          })
        }
      }
    }
</script>

<style scoped>

</style>
