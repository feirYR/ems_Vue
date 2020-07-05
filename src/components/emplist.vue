<template>
		<div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br />
<!--                            <router-link to="/login">安全退出</router-link>-->
                            <a href="javascript:;" style="text-decoration: none" @click="logout">安全退出</a>

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
						Welcome! <span style="color: #5494F3">{{uname}}</span>
					</h1>
					<table class="table">
						<tr class="table_header" >
							<td>
								ID
							</td>
							<td>
								Name
							</td>
							<td>
								Photo
							</td>
							<td>
								Salary
							</td>
							<td>
								Age
							</td>
							<td>
								Operation
							</td>
						</tr>
						<tr class="row1" v-for="(emp, index) in emps" :key="emp.id" :class="index%2==0?'row1':'row2'">
							<td>
								{{emp.id}}
							</td>
							<td>
								{{emp.name}}
							</td>
							<td>
								<img :src="emp.photo" style="height: 60px;">
<!--								{{emp.photo}}-->
							</td>
							<td>
								{{emp.salary}}
							</td>
							<td>
								{{emp.age}}
							</td>
							<td>
								<a href="javascript: ;" @click="del_emp(emp.id)">delete emp</a>&nbsp;
                                <router-link :to="'/updataEmp/'+emp.id">update emp</router-link>
							</td>
						</tr>

					</table>
					<p>
						<input type="button" class="button" value="Add Employee" @click="go_add"/>
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
        name: "emplist",
        data:function(){
          return{
              uname:'',
              emps:[],
              id:''

          }
        },
        methods:{
            query_emps(){
                this.$axios({
                    url:'http://127.0.0.1:8000/api/emp/',
                    method:'get',
                }).then(re=>{
                    // this.emps = re.data['results']
                    this.emps = re.data.results
                    console.log(re.data['results']);
                    console.log(re.data);
                }).catch(error=>{alert('查询失败')})
            },
            go_add(){
                this.$router.push('/addEmp')
            },
            del_emp(id){
                console.log(id);
                // this.id=id
                // this.$axios({
                //     // url:'http://127.0.0.1:8000/api/emp/'+`$(id)`,
                //     url:'http://127.0.0.1:8000/api/emp/?id='+id,
                //     // url:'http://127.0.0.1:8000/api/emp/',
                //     method:'delete',
                //     // params:{id:id,}
                // }).then(re=>{
                //     this.query_emps()
                // }).catch(error=>{alert('删除失败')})
                this.$axios.delete("http://127.0.0.1:8000/api/emp/"+`${id}`).then(re=>{
                    this.query_emps()
                }).catch(error=>{alert('删除员工失败')})
            },
            logout(){
                this.$axios.delete("http://127.0.0.1:8000/api/user/"+`${this.uname}`).then(re=>{
                    this.$router.push('/login')
                }).catch(error=>{alert('删除用户失败')})
            }

        },
        created() {
            let uname = sessionStorage.uname


            if(uname){
                this.uname = uname
                console.log(this.uname);
                this.query_emps()}
            else {this.$router.push('/login')}

        }

      }
</script>

<style scoped>

</style>
