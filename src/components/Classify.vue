<template>
  <el-container>
    <el-header style="text-align: center; font-size: 12px">
      <span class="spanStyle">AIMovie 艾慕尾
      </span>
      <el-input
        placeholder="搜索你想要..."
        prefix-icon="el-icon-search"
        v-model="searchString"
        style="width: 400px;float: left;left: 240px"
        @keyup.enter.native="search">
      </el-input>
      <div class="message"><el-button type="info" size="small" @click="toMessage">影讯</el-button></div>
      <div class="ranking"><el-button type="info" size="small" @click="toList">榜单</el-button></div>
      <div class="classify"><el-button type="info" size="small" @click="toType">分类</el-button></div>
      <div class="review"><el-button type="info" size="small" @click="toReview">影评</el-button></div>
      <span class="login" @click="toLogin"><el-button style="background-color: transparent">登录/注册
        <i class="el-icon-user"></i></el-button></span>
    </el-header>
    <!--  <el-header>正 在 热 映</el-header>
      <el-main>Main</el-main>-->
  </el-container>
</template>
<style>
  .img_index {
    width: auto;
    height: 400px;
  }
  .img_list{
    width:auto;
    height:200px;
  }
  .el-header {
    position: fixed;
    top:0px;
    left:0;
    right: 0;
    background-color: #FFCC00;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    position: fixed;
    bottom: auto;
    left:0;
    right: 0;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: transparent;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: transparent;
  }
  .cover {
    width: 200px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
    vertical-align: middle;
    display: table-cell;
    text-align: center;
  }
  /* .cover {
     width: 160px;
     height: auto;
     margin-bottom: 7px;
     overflow: hidden;
     cursor: pointer;
   }*/

  .spanStyle{
    position: fixed;
    left:20px;
    font-size: 30px;
  }
  .message{
    vertical-align: center;
    position: fixed;
    left:760px;
    font-size: 15px;
  }
  .ranking{
    vertical-align: center;
    position: fixed;
    left:860px;
    font-size: 15px;
  }
  .classify{
    vertical-align: center;
    position: fixed;
    left:960px;
    font-size: 15px;
  }
  .review{
    vertical-align: center;
    position: fixed;
    left:1060px;
    font-size: 15px;
  }
  .login{
    position: fixed;
    right:50px;
    font-size: 15px;
  }
  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .name{
    font-size: 14px;
    text-align: left;
  }

  .score {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .description {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>
<script>
  export default {
    name: 'Classify',
    data(){
      return{
        searchString: null,
        films: [],
        value:0,
        image: [{
          name: '1',
          path: ('../../static/pictures/乔乔的异想世界.JPG')
        }, {
          name: '2',
          path: ('../../static/pictures/1917.JPG')
        }, {
          name: '3',
          path: ('../../static/pictures/小妇人.JPG')
        }, {
          name: '4',
          path: ('../../static/pictures/婚姻故事.JPG')
        }, {
          name: '5',
          path: ('../../static/pictures/活着.JPG')
        },
          {
            name: '6',
            path: ('../../static/pictures/初恋这首情歌.JPG')
          }]
      }
    },
    methods:{
      test(){
        alert("测试")
      },
      getScore(score){
        this.value = score;
      },
      empty () {
        this.searchString = ''
      },
      /*  search () {
          const t = this
          this.newPath = 'http://localhost:8888/film/search/' + this.searchString
          this.$axios
            .post('http://localhost:8888/film/search/' + t.searchString + '/1/10')
            .then(function (resp) {
              t.commodities = resp.data.content
            })
          this.$axios
            .post('http://localhost:8888/film/getNumSearch/' + t.searchString)
            .then(function (resp) {
              t.count = resp.data
            })
          this.empty()
        },*/
      toMessage(){
        this.$router.replace('/message')
      },
      toList(){
        this.$router.replace('/list')
      },
      toReview(){
        this.$router.replace('/review')
      },
      toType(){
        this.$router.replace('/classify')
      },
      toLogin(){
        this.$router.replace('/login')
      },
      search(){
        this.$router.replace('/search')
        // alert(this.searchString)
        /*  this.$router.push({
            name:'search',
            params: {
              value:1111111
            }
          })*/
        this.empty()
      }
    }
  }
</script>

<style scoped>

</style>
