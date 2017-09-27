<template>
<div>
    <div class='w_banner'> 
       <div class="swiper-container">
       <div class="swiper-wrapper" id='aa'>
            <div class="swiper-slide" v-for='i in listArr'><img :src="i" alt=""></div>   
       </div>
       </div>
    </div>
    <div class="w_stars">
           <div class='w_stars_say'>
             <img src="http://localhost:8006/images/assets/w_icon.jpg" alt="">
             <h1>签约艺人 <span>| Stars</span></h1>
             <div class='clear'></div>
           </div>
           <div class='w_stars_show' id='stars' v-for='i in starsArr'>
               <div class="w_stars_stars" :title="i.name" :index="i.id">
                 <div class="w_stars_css">
                    <img src="http://localhost:8006/images/assets/w_black.png" alt="">
                 </div>
                 <img :src="i.img"  alt="">
                 <div class="w_stars_shadow"><b>{{i.name}}</b></div>
               </div>
           </div>
           <div class='clear'></div>
    </div>
     <div class='w_content'> 
            <div class='w_content_news'>
               <div class='w_stars_say'>
                  <img class='w_aimg' src="http://localhost:8006/images/assets/w_icon2.jpg" alt="">
                  <h1>新闻资讯 <span>|  News</span> <b class='w_b'>→</b></h1>
                  <div class='clear'></div>
                </div>
                <div class='w_content_show'>
                    <img :src="showArr[3]" alt="">
                    <div class='w_content_text'>
                         <p>{{showArr[0]}}</p>
                         <p>{{showArr[1]}}</p>
                         <p>{{showArr[2]}}</p>
                    </div>
                    <div class='clear'></div>
                </div>
                <div v-for='i in new_listArr'>
                <p class='w_content_p'> <span></span> {{i.text}} <span>{{i.time}}</span></p>
                </div>
            </div>
            <div class='w_content_case'>
                <div  class='w_stars_say'>
                  <img class='w_aimg' src="http://localhost:8006/images/assets/aw_icon3.jpg" alt="">
                  <h1>精彩案例 <span>| Cases</span> <b>→</b></h1>
                  <div class='clear'></div>
                </div>
                <div class='w_content_lunbo'>
                    <div class="w_focus">
                         <ul class="w_lb" >
                             <li :class="index==0?'w_one':''" v-for='(i,index) in caseArr'><img :src="i.img"><span>{{i.title}}</span> </li>
                           <!--  <li class='w_one'>1</li>
                             <li >1</li>
                             <li >1</li>
                             <li >1</li>
                             <li >1</li> -->

                             <li><img src="http://localhost:8006/images/assets/w_lunbo5.jpg" alt=""></li>
                         </ul>
                         <div class="w_LBtn w_btn">&lt;</div>
                         <div class="w_RBtn w_btn">&gt;</div>
                    </div>

                </div>
            </div>
            <div class='clear'></div>
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
                num:0,
                loading: false,
                listArr: [],
                starsArr:[],
                showArr:[],
                new_listArr:[],
                caseArr:[]
            }
        },
        mounted () {
           this.banner();
           this.stars();
           this.show();
           this.list();
           this.case();
           new Swiper('.swiper-container', {
             pagination: '.swiper-pagination',
             nextButton: '.swiper-button-next',
             prevButton: '.swiper-button-prev',
             paginationClickable: true,
             spaceBetween: 30,
             centeredSlides: true,
             autoplay: 500,
             autoplayDisableOnInteraction: false
           });
           $(function(){
                  $('.w_one').clone(true).appendTo('.w_lb');
                  var li=$('.w_lb li');
                  var width=$('.w_lb li').width();//每张图片的高度
                  var speed=500;//动画时间
                  var delay=2000;//自动切换时间
                  var now=0;   //当前显示图片的索引
                  var max=8;  //图片的最大索引
                  var $imgs=$('.w_lb');//获取对象
                  //复制列表中的第一个图片，追加到列表最后
                  // 设置周期计时器，实现图片自动切换
                  var timer=setInterval(changeAuto,delay);
                  $('.w_RBtn').click(function(){
                       changeAuto();
                  }); 
                  $('.w_LBtn').click(function(){
                      if(!$imgs.is(':animated')){
                          now--;
                          if(now<0){
                               now=max;
                               $('.w_lb').css('left',-width*now).stop().animate({'left':-width*now},200) 
                          }
                      $('.w_lb').stop().animate({'left':-width*now},200);
                      changeNum();
                      }
                  })              
                  $('.w_focus').on({
                      mouseenter:function(){
                          clearInterval(timer)
                      },
                      mouseleave:function(){
                          clearInterval(timer)
                          timer=setInterval(changeAuto,delay);
                      }
                  });
                  function changeAuto(){
                      if(!$imgs.is(':animated')){
                          if(now<max){
                              now+=1;
                              changeNext();
                          }else{
                              now=0;
                              changeFirst();
                          }
                          changeNum();
                      }
                  }
                  function changeNext(){
                      $imgs.animate({
                          'left':-width*now,
                      },speed)
                  }
                  function changeFirst(){
                      $imgs.animate({
                          left:-width*(max+1)
                      },speed,function(){
                          $(this).css('left','0')
                      })
                  }
                  var $lunboNum=$('.w_dot li');
                  $lunboNum.click(function(){
                      now=$(this).index();
                      changeNext();
                      changeNum();
                  })
                  //点亮当前的选择的小圆点或者数字
                  function changeNum(){
                      $lunboNum.eq(now).css('background','#fff').siblings().css('background','#7C8095');
                  }
          });
        },
        methods: {
            banner: function() {
                console.log("初始化加载数据开始...");
                var _this = this;
                _this.loading = true;
                axios.get('http://localhost:8006/banner/banner', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                  //console.log(response.data)
                  console.log("banner加载完成");
                  var data=response.data;
                  var arr=[];
                  data.forEach(function(item,index){
                   //console.log(url+item.img1);
                    arr.push(url+item.img1);
                  })
                  _this.listArr =arr;
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            stars: function(){
                console.log("load more")
                var _this = this;
                _this.loading = true;
                axios.get('http://localhost:8006/stars/stars', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                    //console.log(response.data)
                    console.log("stars加载完成"); 
                    var data=response.data;
                    data.forEach(function(item,index){
                        //console.log(item)
                         _this.starsArr.push({'id':item.id,'img':url+item.img,'name':item.name})
                        
                    })
                    //console.log(_this.starsArr)
                    //console.log(_this.starsArr[0])
                }).catch(function (error) {
                  console.log(error);
                });
            },
            show: function(){
                console.log("load more")
                var _this = this;
                _this.loading = true;
                axios.get('http://localhost:8006/news_show/show', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                    //console.log(response.data[0])
                    var data=response.data[0];
                    console.log("show加载完成"); 
                    _this.showArr.push(data.title,data.time,data.text,url+data.img)
                    //console.log(_this.showArr)
                }).catch(function (error) {
                  console.log(error);
                });
            },
            list: function(){
                console.log("load more")
                var _this = this;
                _this.loading = true;
                axios.get('http://localhost:8006/news_list/list', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                    //console.log(response.data);
                    console.log("list加载完成");
                    var data=response.data;
                     data.forEach(function(item,index){
                        //console.log(item.text,item.time)
                        _this.new_listArr.push({'text':item.text,'time':item.time})
                     })
                     //console.log(_this.new_listArr)
                    //_this.showArr.push(data.title,data.time,data.text,url+data.img)
                    //console.log(_this.showArr)
                }).catch(function (error) {
                  console.log(error);
                });
            },
             case: function(){
                console.log("load more")
                var _this = this;
                _this.loading = true;
                axios.get('http://localhost:8006/news_case/case', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                    //console.log(response.data);
                    console.log("case加载完成");
                    var data=response.data;
                    console.log(data.length)
                    data.forEach(function(item,index){
                       //console.log(item.text,item.time)
                      
                       _this.caseArr.push({'img':url+item.img,'title':item.title})
                    })

                     //console.log(_this.new_listArr)
                    //_this.showArr.push(data.title,data.time,data.text,url+data.img)
                    //console.log(_this.showArr)
                }).catch(function (error) {
                  console.log(error);
                });
            }
        }
    }




   


</script>


<style>
 .w_banner{
    width:1024px;
    height:500px;
    background:#ffffff;
    margin-top:20px;
 }  
.swiper-container {
    width:1004px;
    height:488px;
    display:block;
    padding-top:20px;
    box-sizing:border-box;
        
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img{
    width:1012px;
    height:488px;
    display:block;
}
 .w_stars{
    width:1024px;
    height:500px;
    background:#ffffff;
    margin-top:20px;
    padding-top:18px;
    box-sizing:border-box;
 }  
 .w_stars_say{
    padding:0 35px;
    box-sizing:border-box;
 }
 .w_stars_say img{
    width:29px;
    height:29px;
    display:block;
    float:left;
 }
 .w_stars_say  h1{
    font-size:25px;
    float:left;
    line-height: 32px;
    margin-left:8px;
 }
 .w_stars_say span{
    color: #A9A9A9;
 }
 .w_stars_stars{
    width:184px;
    height:197px;
    position:relative;
    float:left;
    margin:5px 5px;
 }
 .w_stars_stars img{
    width:100%;
    height:100%;
 }
 .w_stars_shadow{
    position:absolute;
    width:100%;
    height:50px;
    background:rgba(0,0,0,.3);
    bottom:0;
    padding:15px;
    box-sizing:border-box;
    color:#fff;
 }
 .w_stars_show{
    padding:0 27px;
    box-sizing:border-box;
    margin-top:13px;
 }
  .w_stars_stars:hover .w_stars_css{
    opacity:1;
  }
  .w_stars_stars:hover .w_stars_css img{
     margin-top:84px;
  }
  .w_stars_css{
     width:100%;
     height:100%;
     position:absolute;
     top:0;
     background:rgba(174,174,174,.5);
     z-index:10;
     text-align:center;
     overflow:hidden;
     transition:.4s ease;
     opacity:0;
  }
  .w_stars_css img{
     width:30px;
     height:30px;
     margin-top:0px;
     transition:.6s;
  }
   .w_content{
    width:1024px;
    height:540px;
    background:#ffffff;
    margin-top:20px;
    padding-top:18px;
    box-sizing:border-box;
    margin-bottom:40px;
 }
 .w_content_news{
    float:left;
    width:492px;
 }
  .w_content_case{
    float:right;
    width:492px;
    
 } 
 .w_content .w_stars_say{
    position:relative;
 }
 .w_content .w_stars_say .w_aimg{
    width:43px;
    height:31px;
 }
 .w_content .w_stars_say b{
    font-size:33px;
    position:absolute;
    right:5px;
    top:0px;
    line-height:36px;
    color:#CFCFCF;
  cursor:pointer;
 }
 .w_content_case .w_stars_say b{
    right:33px;
 }
 .w_content_show{
    padding-top:20px;
    margin-left:36px;
    box-sizing:border-box;
    padding-bottom:20px;
    border-bottom:1px solid #e5e5e5;
 }
  .w_content_show img{
    float:left;
    width:200px;
    height:220px;
  }
 .w_content_text{
    float:right;
    width:236px;
 }
  .w_content_text p:nth-child(1){
    font-weight: normal;
    color: #a29060;
    line-height: 20x;
    vertical-align: top;
  }
   .w_content_text p:nth-child(2){
    color: #686868;
    font-size: 12px;
    line-height: 25px;
  }
   .w_content_text p:nth-child(3){
    color: #494e56;
    font-size: 13px;
    line-height:18px;
  }
  .w_content_p{
    padding-top:8px;
    padding-bottom:8px;
    margin-left:36px;
    box-sizing:border-box;
    border-bottom:1px solid #e5e5e5;
    font-weight: normal;
    color: #a29060;
    line-height: 15px;
    vertical-align: top;
    position:relative;
    text-indent:23px;
  } 
  .w_content_p:hover span:nth-child(1){
     border-bottom-color: #6B330D;
  }
  .w_content_p span:nth-child(1){
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #CFB674;
    position:absolute;
    top:7px;
    left:5px;
    transform:rotate(90deg);
  }
  .w_content_p span:nth-child(2){
    color: #686868;
    font-size: 12px;
    float: right;
    margin-right: 10px;
  }
.w_focus{
    height:450px;
    width:432px;
    position:relative; 
    overflow:hidden;
}
.w_focus .w_lb{
    height:450px; 
    width:4320px;
    overflow:hidden;
    position:relative;
}
.w_focus .w_lb li{
    height:450px;
    width:432px;
    overflow:hidden;
    float:left; 
}
.w_focus img{
    height:450px;
    width:432px;
}
.w_focus .w_btn{ 
    width:30px;
    height:30px;
    /*background:rgba(0,0,0,0.65); */
    font:bold 20px/30px 'SimSun'; 
    text-align:center;
    color:black;
    position:absolute;
    top:48%; 
    margin-top:0px; 
    -webkit-user-select:none; 
    cursor:pointer;
    transition:.2s;
    background:rgba(175,175,175,.5);
}
.w_focus .w_btn:hover{
    color:#fff;
}
.w_focus .w_LBtn{ 
    left:0px;
}
.w_focus .w_RBtn{ 
    right:0px;
}
.w_focus .w_dot{ 
    width:70px; 
    position:absolute; 
    height:10px; 
    bottom:20px; 
    left:50%; 
    margin-left:-35px;
}
.w_focus .w_dot li{ 
    width:10px;
    height:10px; 
    border-radius:10px; 
    background:#7C8095; 
    float:left; 
    margin:0 2px;
    /*text-shadow: 0 -1px 1px rgba(0,0,0,0.25);*/
    position:relative;
}
.w_focus .w_lb li span{
    position:absolute;
     width:432px;
    bottom:0;
    background:red;
    display:block;
    overflow: hidden;
    background-color: rgba(0,0,0,0.2);
    height: 60px;
    color: #fff;
    padding: 20px 10px 10px 10px;
    text-align: left;
    font-size:16px;
    box-sizing:border-box;

}
.w_focus .w_dot li:first-child{ 
    background:#fff;
    /*box-shadow: 2px 2px 2px #ccc,1px 1px 1px #ccc,2px 2px 2px #ccc,1px 1px 1px #ccc;*/
}

.w_content_lunbo{
    width:432px;
    margin-left:25px;
    margin-top:17px;
}


</style>