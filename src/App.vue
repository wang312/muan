<!-- 首页内容渲染 -->
<template>
  <div>

    <!--顶部 菜单-->
    <HeaderCompontent class='wrap'></HeaderCompontent>

    <!-- 渲染出口 -->
    <div class='box'><router-view></router-view></div>

    <!--底部 -->
    <FootComponent  class='wrap'></FootComponent>
     
  </div>
</template>
<script>
    import HeaderCompontent from './components/header.vue'
    import FootComponent from './components/footer.vue'
    export default{
        data(){
            return{
                msg:'Hello vue',
            }
        },
        components:{
            HeaderCompontent,
            FootComponent
        }
    }


   
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
}
body{
    background: #181818 url(assets/bg.jpg) no-repeat fixed left top;
    background-size: cover;
}
.wrap{
  width:100%;
  background:#181818; 
}
.box{
    width:1024px;
    margin:0 auto;
}
.clear{
  clear:both;
}

.left{
  float:left;
}
.right{
  float:right;
}
.header{
    height:80px;
}
.nav{
        color:#877A59;
        float:right;
       
}
.nav a{
         font-size:15px;
         display:inline-block;
         padding:27px 0;
         margin:0 15px;
         border-top:5px solid #181818;
         font-weight:bolder;
         cursor:pointer;
         color:#877A59;
         text-decoration:none;   
}
.nav a:hover{
                border-top:5px solid #cfb674;
                color:#cfb674;
}
.nav .active{
      border-top:5px solid #cfb674;
      color:#cfb674;
}
.logo{
        width:350px;
        padding:15px 0;
        float:left;
        box-sizing:border-box;
        color: #D0B775;
        vertical-align: middle;
}
.logo img{
            width:48px;
            height:50px;
            display:block;
            float:left;
        }
.logo h1{
            font-size:24px;
            margin-left: 20px;
            float:left;
            padding-top:4px;
        }
.logo h3{
            font-size: 16px;
            margin-left: 20px;
            float:left;
}
.footer{
    height:74px;
    color:#ccc;
    line-height:74px;
    text-align:center;
    font-size:16px;
    font-weight:bolder;
}

</style>
