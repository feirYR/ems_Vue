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
						update Emp info:
					</h1>
<!--					<form action="emplist.html" method="post">-->
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id
								</td>
								<td valign="middle" align="left">
									{{$route.params.id}}
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="name"/>
<!--									<input type="text" class="inputgri" name="name" :value="this.emp['name']" />-->
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">

                                    <img :src="this.photo" style="height: 60px;">
                                    <input type="file" name="photo" ref="photo"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
<!--									<input type="text" class="inputgri" name="salary" :value="this.emp['salary']"/>-->
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
<!--									<input type="text" class="inputgri" name="age" :value="this.emp['age']"/>-->
									<input type="text" class="inputgri" name="age" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
							<input type="button" class="button" value="Confirm" @click="updata_emp" />
						</p>
<!--					</form>-->
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
        name: "updataEmp",
        data:function(){
           return{
               id:this.$route.params.id,
               emp:{},
               name:'',
               photo:'',
               salary:'',
               age:''
           }
        },
        methods:{
           updata_emp(){
               console.log('获取图片',this.$refs.photo.files[0])
               let formData = new FormData
               let photo = this.$refs.photo.files[0]
               formData.append('name',this.name)
               if(photo){
                   formData.append('photo',this.$refs.photo.files[0])
               }
               formData.append('salary',this.salary)
               formData.append('age',this.age)
               this.$axios({
                   url:'http://127.0.0.1:8000/api/emp/'+`${this.id}`,
                   method:'patch',
                   data:formData,
                   headers:{
                       "content-type":"multipart/form-data"
                   },
               }).then(re=>{
                   console.log(re.data['results']);
                   this.$router.push('/home')
               }).catch(error=>{
                   alert('更新失败')
               })
           }
        },
        created() {
            this.$axios.get('http://127.0.0.1:8000/api/emp/'+`${this.id}`,).then(re=>{
                console.log(re.data['results'])
                let emp = re.data['results']
                this.name = emp['name']
                console.log(emp['photo'])
                this.photo = emp['photo']
                this.salary = emp['salary']
                this.age = emp['age']

            }).catch(error=>{alert('获取失败')})
        }
    }
</script>

<style scoped>

</style>
