<template>
    <div class="g-Main">
        <div class="g-ListName">
            关于我们
        </div>
        <div class="g-content">
            <div class="g-inside clear">
                <div class="g-inNav left">
                    <ul>
                        <li style="border-top:transparent" class="g-active li"><a href="javascript:">公司简介</a></li>
                        <li class='li'><a href="javascript:">企业文化</a></li>
                        <li class='li'><a href="javascript:">企业荣誉</a></li>
                        <li class='li'><a href="javascript:">公司业务</a></li>
                    </ul>
                </div>
                <div class="g-inCont left">
                    <ul id="ginCont" v-for='i in imgArr'>
                       <li><img :src="i.url" alt=""></li>
                       <li><p>{{i.title1}}</p></li>
                       <li><p>{{i.title2}}</p></li>
                       <li><p>{{i.title3}}</p></li>
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
                imgArr:[],
                title1Arr:[],
                title2Arr:[],
                title3Arr:[]
            }
        },
        mounted() {
           this.about();
        },
        methods: {
        	about:function(){
        		console.log("初始化加载数据开始...");
                var _this = this;
        		axios.get('http://localhost:8006/g-about/about', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                  console.log("about加载完成");
                  var data=response.data;
                  var aLi=document.querySelectorAll('.li');

                  _this.imgArr.push({"url":url+data[0].url,"title1":data[0].title1,"title2":data[0].title2,"title3":data[0].title3})
                  for(let i=0;i<aLi.length;i++){
                  	aLi[i].onclick=function(){
                  		_this.imgArr=[];
                        _this.imgArr.push({"url":url+data[i].url,"title1":data[i].title1,"title2":data[i].title2,"title3":data[i].title3})
                        for(var j=0;j<aLi.length;j++){
                           aLi[j].className='';
                  	    }
                        aLi[i].className='g-active';
                  	}
                  	
                  }
                  
                })
                .catch(function (error) {
                  console.log(error);
                });
        	}
        	    
                
        }
           
    }



</script>

<style>
.g-Main{
    width: 1024px;
    margin-top:70px;
    margin-bottom:50px;
}
.g-ListName{
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


.g-content{ background-color: #fff;
    width: 100%;
    overflow: hidden;
    padding-bottom:50px;
}
.g-inside{
    margin: 20px 0px 40px 0px;
}
.g-inNav{
    width: 256px;
}
.g-inNav li{
    width: 236px;
    height: 48px;
    border-top: 1px solid #f4f4f4;
    line-height: 1em;
    vertical-align: middle;
}
.g-inNav li a{
    display: block;
    color: #333333;
    text-align: center;
    line-height: 48px;
}
.g-inNav li:hover a{
    color:#cfb674
}
.g-active a{
    color:#cfb674 !important;
}

.g-inCont{
    width: 768px;
}
.g-inCont ul{
    width: 728px;
    margin: 0 auto;
}
.g-inCont ul li p{
    color: #333333;
    word-wrap: break-word;
    margin-top: 24px;
    font-size: 14px;
}
.g-inCont ul li img{
    width: 100%;
}
</style>
