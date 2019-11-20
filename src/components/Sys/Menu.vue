<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="MneuName"
      label="菜单名称"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="MenuUrl"
      label="URL地址"
      sortable
   >
    </el-table-column>
    <el-table-column
      prop="Icon"
      label="图标"
      sortable
   >
    </el-table-column>
  </el-table>
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          MneuName: '系统设置',
          MenuUrl: ''
        
        }, {
          id: 2,
         MneuName: '系统设置',
          MenuUrl: ''
        }, {
          id: 3,
         MneuName: '系统设置',
          MenuUrl: '',
          children: [{
              id: 31,
             MneuName: '人员管理',
              MenuUrl: '/user'
            },
             {
              id: 32,
              MneuName: '角色管理',
              MenuUrl: '/role'
          },
             {
              id: 33,
              MneuName: '菜单管理',
              MenuUrl: '/menu'
          }]
        }, {
          id: 4,
          MneuName: '系统设置',
          MenuUrl: ''
        }],
       
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
</script>