<template>
   <div>
     <div class="box header">
         <div class="logo">
            <img src="../assets/logo.png" alt="">
            <h1>模板-有家经纪公司</h1>
            <h3>YoJia Internatioonal Stars</h3>
         </div>
         <div class='nav'>
            <router-link  to="/index" active-class='active'>首页</router-link>
            <router-link  to="/about"  active-class='active'>关于我们</router-link>
            <router-link  to="/stars" active-class='active'>明星档案</router-link>
            <router-link  to="/case" active-class='active'>精彩案例</router-link>
            <router-link  to="/news" active-class='active'>新闻资讯</router-link>
            <router-link  to="/concat" active-class='active'>联系我们</router-link>
         </div>
         <div class="clear"></div>
     </div>
         
      
   </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:0,
                arr:['首页','关于我们','明星档案','精彩案例','新闻资讯','联系我们']
            }
        },
        methods:{
            active:function(){
                this.className='active';
            }
        }
    }
   
</script>
<script type="text/javascript">
    
</script>
<style  lang="scss">
@mixin left{
  float:left;
}
@mixin  right{
  float:right;
}
.header{
    height:80px;
    .logo{
        width:350px;
        padding:15px 0;
        @include left;
        box-sizing:border-box;
        color: #D0B775;
        vertical-align: middle;
        img{
            width:48px;
            height:50px;
            display:block;
            @include left;
        }
        h1{
            font-size:24px;
            margin-left: 20px;
            @include left;
        }
        h3{
            font-size: 16px;
            margin-left: 20px;
            @include left;
        }
    }
    .nav{
        color:#877A59;
        @include right;
        a{
            font-size:15px;
            display:inline-block;
            padding:27px 0;
            margin:0 18px;
            border-top:5px solid #181818;
            font-weight:bolder;
            cursor:pointer;
            color:#877A59;
            &:hover{
                border-top:5px solid #cfb674;
                color:#cfb674;
            }
        }
        .active{
                border-top:5px solid #cfb674;
                color:#cfb674;
        }
    }
    
}

</style>
