 <template>
 <div>
   <div class="toolbar" style="float:left; padding:18px;">
        <el-form :inline="true"  size="small">
            <el-form-item>
                <el-input  placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >新增</el-button>
            </el-form-item>
        </el-form>
    </div>
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="RoleName"
        label="账号"
       ></el-table-column>
         <el-table-column label="操作"  align="center">
    <template >    
        <el-button type="primary" size="small" >修改
        </el-button>
        <el-button type="danger" size="small"  >删除
        </el-button>
    </template>
      </el-table-column> 
    </el-table>
 </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            RoleName: '超级管理员'
          }, {
             RoleName: '超级管理员'
          }, {
             RoleName: '超级管理员'
          }, {
              RoleName: '超级管理员'
          }]
        }
      }
    }
  </script>