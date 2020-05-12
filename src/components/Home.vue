<template>
  <div>
    <el-container class="home_container">
      <el-header>
        <div>
          <img src="../assets/logo.png"
               alt="">
          <span>后台电商管理项目</span>
        </div>
        <el-button type="info">后退</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
    > div{
      display: flex;
      align-items: center;
      img{
        width: 50px;
      }
    }
  }
}
</style>
