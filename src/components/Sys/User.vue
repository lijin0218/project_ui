 
 <template>
 <div>
 <div class="toolbar" style="float:left; padding:18px;">
        <el-form :inline="true"  size="small">
            <el-form-item>
                <el-input  placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="add" type="primary" >新增</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="UserName"
        label="账号"
        >
      </el-table-column>
      <el-table-column
        prop="RealName"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="Address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="E_Mail"
        label="邮箱">
      </el-table-column>
      <el-table-column label="操作"  align="center">
        <template slot-scope="scope">   
            <el-button type="primary" @click="edit(scope.row)" size="small" >修改
            </el-button>
            <el-button type="danger" @click="dialogFormVisible = false" size="small"  >删除
            </el-button>
        </template>
</el-table-column>
    </el-table>
<el-dialog :title="operation?'新增':'编辑'" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="账号" :label-width="formLabelWidth">
      <el-input v-model="form.UserName" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.RealName" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.Address" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.E_Mail" auto-complete="off"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </div>
</el-dialog>
    
 </div>
  </template>

  <script>
    export default {
      data() {
        return {
          dialogFormVisible: false,
          form: {
          UserName: '',
          RealName: '',
          Address: '',
          E_Mail: ''
        },
        formLabelWidth: '120px',
          tableData: [{
            UserName: 'admin',
            RealName: '王小虎',
            Address: '上海市普陀区金沙江路 1518 弄',
            E_Mail:'422929383@qq.com'
          }, {
            UserName: 'admin',
            RealName: '王小虎',
            Address: '上海市普陀区金沙江路 1518 弄',
            E_Mail:'422929383@qq.com'
          }, {
             UserName: 'admin',
            RealName: '王小虎',
            Address: '上海市普陀区金沙江路 1518 弄',
            E_Mail:'422929383@qq.com'
          }, {
              UserName: 'admin',
            RealName: '王小虎',
            Address: '上海市普陀区金沙江路 1518 弄',
            E_Mail:'422929383@qq.com'
          }]
        }
      },
      methods: {
        add: function () {
			this.dialogFormVisible = true
			this.operation = true
			this.form = {
			  UserName: '',
          RealName: '',
          Address: '',
          E_Mail: ''
			}
    },
    edit:function(row){
    	this.dialogFormVisible = true
			this.operation = false
			this.form = {
			  UserName: row.UserName,
          RealName: row.RealName,
          Address: row.Address,
          E_Mail: row.E_Mail
			}
    },
    save:function(){
      if(this.operation)
      this.tableData.push(this.form);
        this.dialogFormVisible = false;
       
    }
      }
    }
  </script>