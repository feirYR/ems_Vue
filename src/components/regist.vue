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
					<h1>
						注册
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									用户名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="username" v-model="username" @blur="check_uname"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									真实姓名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="real_name" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="password" @blur="check_pwd"/>
								</td>
							</tr>
                            <tr>
								<td valign="middle" align="right">
									确认密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="confirm_pwd" @blur="check_cpwd"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									性别:
								</td>
								<td valign="middle" align="left">
									男
									<input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="sex=0"/>
									女
									<input type="radio" class="inputgri" name="sex" value="f" @click="sex=1"/>
								</td>
							</tr>

						</table>
						<p>
							<input type="button" class="button" value="Submit &raquo;" @click="register" />
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
        name: "regist",
        data:function () {
            return{
                username:'',
                real_name:'',
                password:'',
                confirm_pwd:'',
                sex:0,
            }
        },
        methods:{
            register(){
                this.$axios({
                    url:'http://127.0.0.1:8000/api/user/',
                    method:'post',
                    data:{
                        username: this.username,
                        password: this.password,
                        real_name: this.real_name,
                        sex:this.sex
                    }
                }).then(re=>{
                    console.log(re.data['message']);
                    console.log('注册成功')
                    this.$router.push('/login')
                }).catch(error=>{alert('注册信息有误')})
            },
            check_pwd(){
                if (this.password.length < 6){
                    alert('用户名至少六位')
                }
            },
            check_cpwd(){
                if(this.password != this.confirm_pwd){
                    alert('两次密码不一致')
                }
            },
            check_uname(){
                console.log(this.username)
                if (this.username.length < 3){
                    alert('用户名至少三位')
                }
                this.$axios({
                    url:'http://127.0.0.1:8000/api/regist/',
                    method:'get',
                    params:{
                        username: this.username,
                    }
                }).then(re=>{
                    // console.log(re.data['message']);
                    // console.log('用户符合标准')
                    if(re.data['message']){}
                    // else {alert('用户已存在')}
                    else {alert('用户已存在')}
                }).catch(error=>{alert('用户信息有误')})
            }
        }
    }
</script>

<style scoped>

</style>
