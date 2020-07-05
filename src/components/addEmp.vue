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
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						add Emp info:
					</h1>
						<table cellpadding="0" cellspacing="0" border="0" class="form_table" >
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="name"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="photo"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="Confirm" @click="add_emp" />
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
        name: "addEmp",
        data:function () {
                return{
                    name:'',
                    photo:'',
                    salary:'',
                    age:'',
                }
        },
        methods:{
            add_emp(){
                let formData = new FormData
                formData.append ('name',this.name)
                formData.append ('photo',this.$refs.photo.files[0])
                formData.append ('salary',this.salary)
                formData.append ('age',this.age)
                this.$axios({
                    url:'http://127.0.0.1:8000/api/emp/',
                    method:'post',
                    data:formData,
                    headers:{
                        "content-type":"multipart/form-data"
                    },
                }).then(re=>{
                    console.log(re.data['results'])
                    this.$router.push('/home')
                }).catch(error=>{alert('新增员工失败')})
            }
        }
    }
</script>

<style scoped>

</style>
