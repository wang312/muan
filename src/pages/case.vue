<template>
  <div class="g-Cent">
    <div class="g-Mainc">
        <div class="g-ListName">
            精彩案例
        </div>
        <div class="g-content">
            <div class="g-inside">
                <ul id="ginCont">
                    <li v-for='i in gcaseArr'>
                        <a href="javascript:;"  :title="i.title" :name="i.id">
                            <img :src="i.url">
                            <div class="gm">
                                <div>{{i.title}}</div>
                            </div>
                            <i></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>




<script type="text/javascript">
    // ajax 使用官方推荐的 axios
    import axios from 'axios'
    var url='http://localhost:8006/images/';
    export default{
        data () {
            return{
                gcaseArr:[]
            }
        },
        mounted() {
           this.about();
        },
        methods: {
            about:function(){
                console.log("初始化加载数据开始...");
                var _this = this;
                axios.get('http://localhost:8006/g-case/case', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                  console.log(response.data)    
                  console.log("about加载完成");
                  var data=response.data;
                  // var aLi=document.querySelectorAll('.li');

                  data.forEach(function(item,index){
                         _this.gcaseArr.push({"id":item.id,"title":item.title,"url":url+item.url});
                  })
                  
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
                
                
        }
           
    }


</script>











<style>

.g-Mainc .g-ListName{
    width: 246px;
    height: 49px;
    line-height: 49px;
    border: 5px solid #fff;
    border-bottom: 0px;
    background: transparent;
    font-size: 27px;
    color: #fff;
    text-align: center;
}


.g-Mainc .g-content{ background-color: #fff;
    width: 100%;
    overflow: hidden;
}
.g-Mainc .g-inside{
    margin: 9px 0px 0px 19px;
}

.g-Mainc .g-inside ul{
    overflow: hidden;
}
.g-Mainc .g-inside li{
    float: left;
    position: relative;
    max-width: 231px;
    height: 350px;
    overflow: hidden;
    margin: 12px 0px 0px 12px;
}
.g-Mainc .g-inside li a{
    display: block;
}
.g-Mainc .g-inside li img{
    width: 100%;
    height: 100%;
    transition: all .4s ease;
}
.g-Mainc .g-inside li:hover img{
    transition: all .6s ease;
    transform: scale(1.1);
}
.g-Mainc .gm{
    transition: all 0.6s ease;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50px;
    overflow: hidden;
    background-color:rgba(0,0,0,0.5);
    color: #fff;
    font-size: 14px;
    padding: 5px 15px 10px 15px;
    text-align:left;
    max-width: 231px;
}
.g-Mainc .gm div{
    word-wrap: break-word;
}


.g-Mainc .g-inside li i{
    transition: all 0.6s ease;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #ffffff;
}
.g-Mainc .g-inside li:hover i{
    transform: scale(0.96);
}
</style>