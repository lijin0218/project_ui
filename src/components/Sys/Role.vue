 <template>
 <div>
   <div class="toolbar" style="float:left; padding:5px;">
        <el-form :inline="true"  size="small">
            <el-form-item>
                <el-input  placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" >查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-plus">新增</el-button>
            </el-form-item>
        </el-form>
    </div>
<el-table stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="RoleName"
        label="账号"
       ></el-table-column>
         <el-table-column label="操作"  align="center">
    <template >    
        <el-button type="primary" size="small" icon="el-icon-edit">修改
        </el-button>
        <el-button type="danger" size="small"  icon="el-icon-delete">删除
        </el-button>
    </template>
      </el-table-column> 
    </el-table>
     <el-pagination style=" padding-top:5px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="30">
    </el-pagination>
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