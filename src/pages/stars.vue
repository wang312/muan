<template>
    <div class="g-Cent">
         <div class="g-Mains">
             <div class="g-ListName">
                 明星档案
             </div>
             <div class="g-content">
                 <div class="g-inside">
                     <ul id="ginCont">
                         <li v-for='i in starsArr'>
                             <a href="javascript:"  :title="i.title" :name="i.id">
                                 <img :src="i.url">
                                 <div class="gm">{{i.title}}</div>
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
                starsArr:[]
            }
        },
        mounted() {
           this.about();
        },
        methods: {
        	about:function(){
        		console.log("初始化加载数据开始...");
                var _this = this;
        		axios.get('http://localhost:8006/g-stars/gstars', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                  //console.log(response.data) 	
                  console.log("about加载完成");
                  var data=response.data;
                  // var aLi=document.querySelectorAll('.li');

                  data.forEach(function(item,index){
                         _this.starsArr.push({"id":item.id,"title":item.title,"url":url+item.url});
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
.g-Mains{
    width: 1024px;
    margin: 0 auto;
}


.g-Mains .g-ListName{
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


.g-Mains .g-content{ background-color: #fff;
    width: 100%;
    overflow: hidden;
}
.g-Mains .g-inside{
    margin: 10px 0px 50px 20px;
}

.g-Mains .g-inside ul{
    overflow: hidden;
}
.g-Mains .g-inside li{
    float: left;
    position: relative;
    transition: all 0.6s ease;
    max-width: 184.41px;
    height: 197px;
    overflow: hidden;
    margin: 10px 0px 0px 10px;
}
.g-Mains .g-inside li a{
    display: block;
}
.g-Mains .g-inside li img{
    transition: all 0.6s ease;
    width: 100%;
    height: 100%;
}
.g-Mains .g-inside li:hover img{
    transform: scale(1.1);
}
.g-Mains .gm{
    transition: all 0.6s ease;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    text-align: center;
    font-size: 24px;
    line-height: 197px;
    opacity: 0;
}
.g-Mains .g-inside li:hover .gm{
    opacity: 1;
}

.g-Mains .g-inside li i{
    transition: all 0.6s ease;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #ffffff;
}
.g-Mains .g-inside li:hover i{
    transform: scale(0.9);
}
</style>