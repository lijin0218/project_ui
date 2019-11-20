<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
       <div class="projectnamecss">系统架构测试</div>
        <div>
          <!-- 导航菜单 -->
          <el-menu default-active="/user"
                   class="el-menu-vertical-demo"
                   :collapse="isCollapse" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
              </template>       
                <el-menu-item index="/user" >用户管理</el-menu-item>
                <el-menu-item index="/role" >角色管理</el-menu-item>
                 <el-menu-item index="/menu" >菜单管理</el-menu-item>      
            </el-submenu>  
              <el-submenu index="">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
              </template>       
                <el-menu-item index="/user" >用户管理</el-menu-item>
                <el-menu-item index="/role" >角色管理</el-menu-item>
                 <el-menu-item index="/menu" >菜单管理</el-menu-item>      
            </el-submenu>    
                  
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="app-header" style="background-color: rgb(20, 136, 154);">
         <div ></div>
        </el-header>
        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.projectnamecss{
color:white;font-size:20px;
line-height: 60px;
background-color: rgb(20, 136, 154);
text-align: center
}
.el-main{
  padding: 0px;
}
</style>
<script>
export default {
  name: 'Home',
  data() {
    return {
      username: '',
      isCollapse: false
    }
  },
  methods: {
    
  },
  mounted: function () {
   
  },
}
</script>