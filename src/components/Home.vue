<template>
  <div>
    <el-container class="home_container">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img src="../assets/logo.png"
               alt="">
          <span>后台电商管理项目</span>
        </div>
        <el-button type="info">后退</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 页面左侧区域 -->
        <el-aside width="201px">
          <el-menu background-color="#373D41"
                   text-color="#fff"
                   active-text-color="#409eff"
                   unique-opened
                   router>
            <!-- index用来保存唯一得值,点击展开对应子菜单 -->
            <el-submenu :index="item.id+''"
                        v-for="item in menuList"
                        :key="item.id">
              <template slot="title">
                <i :class="iconsObj[item.id]"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="'/'+subItem.path"
                              v-for="subItem in item.children"
                              :key="subItem.id">
                  <i class="el-icon-menu"></i>
                  {{subItem.authName}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 页面右侧区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menuList: [],
      iconsObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      }
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    async getMenuList () {
      // 通过key来解构,用async就要用data接收
      const { data: res } = await this.$axios.get('menus')
      // 判断一下,如果不等于200,就让他显示data里面得提示信息
      if (res.meta.status !== 200) return this.$message.erro(res.meta.msg)
      // 如果等于200,就保存到data中
      this.menuList = res.data
    }
  }
}
</script>

<style lang="less" scope>
.home_container {
  width: 100%;
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between; // 两端对齐
    color: white;
    font-size: 20px;
    align-items: center; // 上下垂直居中
    > div {
      display: flex;
      align-items: center;
      img {
        width: 50px;
      }
    }
  }
}
</style>
