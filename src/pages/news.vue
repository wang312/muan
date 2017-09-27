<template>
  <div class='w_new'>
             <div class='w_new_title'>新闻资讯</div>
             <div class='w_news'>
                  <div class='w_news_left'>
                      <p class='w_news_left_p_first' id='w_news_left_p_first' @click='news' >企业新闻</p>
                      <p class='w_news_left_p_second' id='w_news_left_p_second' @click='c_news'>行业资讯</p>
                  </div>
                  <div class='w_news_right' id='w_news_right'>
                    
                  </div>
                 <div class="clear"></div>
                 <div class='w_news_button' id='w_news_button'> 
                   <span id='shou'>首页</span>
                   <span id='pre'>上一页</span>
                   <div id='div3'></div>
                   <span id='next'>下一页</span>
                   <span id='wei'>尾页</span>
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
               index:0,
            }
        },
        mounted () {
            this.news();
          
        },
        methods: {
            news: function() {
                console.log("load more")
                var _this = this;
                _this.loading = true;
                axios.get('http://localhost:8006/new_list/news', {
                  params: {
                    i:_this.index
                  }
                })
                .then(function (response) {

                    //console.log(response.data);
                    console.log("news加载完成");
                    var data=response.data;                 
                    var aaaa=data[1][0];
                    console.log(aaaa)
                    var num=Math.ceil(aaaa/4)
                    div3.innerHTML='';
                    for(var i=0;i<num;i++){
                       div3.innerHTML+='<span>'+(i+1)+'</span>' 
                    }
                    var button=div3.querySelectorAll('span');
                    button[0].className='w_news_active';
                    for(let i=0;i<button.length;i++){
                        button[i].onclick=function(){
                           _this.index=i;
                
axios.get('http://localhost:8006/new_list/news', {
  params: {
    i:i
  }
})
.then(function (response) {
   // console.log(response.data);
    console.log("ajax2加载完成");
    var data_button=response.data;
    w_news_right.innerHTML='';
   data_button[0].forEach(function(item,index){
          w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
    })
    
}).catch(function (error) {
  console.log(error);
});
                    for(var j=0;j<button.length;j++){
                               button[j].className='';
                           }
                           this.className='w_news_active';
                        }
                    }
                    shou.onclick=function(){
                              _this.index=0;
axios.get('http://localhost:8006/new_list/news', {
  params: {
    i:_this.index
  }
})
.then(function (response) {
    //console.log(response.data);
    console.log("ajax2加载完成");
    var data=response.data;
    w_news_right.innerHTML='';
   data[0].forEach(function(item,index){
          w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
    })
    
}).catch(function (error) {
  console.log(error);
});
                              for(var j=0;j<button.length;j++){
                                  button[j].className='';
                              }
                              button[_this.index].className='w_news_active';
                    }
                    wei.onclick=function(){
                             _this.index=1;
axios.get('http://localhost:8006/new_list/news', {
  params: {
    i:_this.index
  }
})
.then(function (response) {
    //console.log(response.data);
    console.log("ajax2加载完成");
    var data=response.data;
    w_news_right.innerHTML='';
   data[0].forEach(function(item,index){
          w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
    })
    
}).catch(function (error) {
  console.log(error);
});
                              for(var j=0;j<button.length;j++){
                                  button[j].className='';
                              }
                              button[_this.index].className='w_news_active';
                    }
                     pre.onclick=function(){
                              _this.index--;
                              if(_this.index==-1){
                                   _this.index=1;
                              }
axios.get('http://localhost:8006/new_list/news', {
  params: {
    i:_this.index
  }
})
.then(function (response) {
    //console.log(response.data);
    console.log("ajax2加载完成");
    var data=response.data;
    w_news_right.innerHTML='';
   data[0].forEach(function(item,index){
          w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
    })
    
}).catch(function (error) {
  console.log(error);
});
                              for(var j=0;j<button.length;j++){
                                  button[j].className='';
                              }
                              button[_this.index].className='w_news_active';
                      }
                      next.onclick=function(){
                              _this.index++;
                              if(_this.index==2){
                                   _this.index=0;
                              }
axios.get('http://localhost:8006/new_list/news', {
  params: {
    i:_this.index
  }
})
.then(function (response) {
    //console.log(response.data);
    console.log("ajax2加载完成");
    var data=response.data;
    w_news_right.innerHTML='';
   data[0].forEach(function(item,index){
          w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
    })
    
}).catch(function (error) {
  console.log(error);
});
       
                              for(var j=0;j<button.length;j++){
                                  button[j].className='';
                              }
                              button[_this.index].className='w_news_active';
                      }



                    w_news_right.innerHTML='';
                    data[0].forEach(function(item,index){
                          w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
                     })  
                    w_news_button.style.display='block'; 
                    w_news_left_p_second.style.color='';
                    w_news_left_p_first.style.color='#CFB674';
                    return false;
                }).catch(function (error) {
                  console.log(error);
                });
            },
            c_news:function(){
              axios.get('http://localhost:8006/news/new', {
                   params: {
                   
                   }
             })
                   .then(function (response) {
                       //console.log(response.data);
                       console.log("c_news加载完成");
                       var data=response.data;
                       w_news_right.innerHTML='';
                       data.forEach(function(item,index){
                           w_news_right.innerHTML+='<div class="w_news_right_list"><img src='+url+item.img+' alt=""><div class="w_news_right_text"><p>'+item.title+'</p><p>'+item.content+'</p></div><span>'+item.span+'</span><div class="clear"></div></div>';
                        })
                       w_news_button.style.display='none';
                       w_news_left_p_second.style.color='#CFB674';
                       w_news_left_p_first.style.color='';
                   }).catch(function (error) {
                     console.log(error);
                   });
            }
            
        }
    }




   


</script>

<style>
  .w_new{
 	margin-top:70px;
  margin-bottom:50px;
 }	
 .w_new_title{
 	width:256px;
 	height:54px;
 	border:5px solid #FFFFFF;
 	box-sizing:border-box;
 	color: #FFFFFF;
 	text-align:center;
 	line-height:44px;
 	font-size:28px;
 	font-weight:bolder;
 }
.w_news{
 	width:1024px;
  height:auto;
 	background:#ffffff;
 	padding-top:18px;
  padding-bottom:40px;
	box-sizing:border-box;
 }	
 .w_news_left{
 	float:left;
 	width:256px;
 	font-size: 16px;
 	text-align:center;
 	color: #333333;
 }
 .w_news_left p{
    line-height:48px;
 }
  .w_news_left p:nth-child(1){
  	border-bottom:1px solid  #f2f2f2;
  }
 .w_news_left p:hover{
 	color:#CFB674;
 }
 .w_news_right{
 	float:right;
 	width:768px;
 	padding:5px 15px;
 	box-sizing:border-box;
 }
.w_news_right_list{
  padding-bottom:12px;
}
 .w_news_right_list img{
 	float:left;
 	width:300px;
 	height:200px;
  cursor:pointer;
 }
 .w_news_right_text{
 	float:left;
 	width:411px;
    margin-left:10px;
    box-sizing:border-box;
 }
 .w_news_right_list:hover p:nth-child(1){
 	color: #333333;
 	transition:0.5s;
 }
 .w_news_right_text p:nth-child(1){
 	  font-weight: normal;
    color: #cfb674;
    line-height: 16px;
    vertical-align: top;
    margin-bottom:15px;
     padding-top:5px;
 }
  .w_news_right_text p:nth-child(2){
 	  color: #333333;
    font-size: 14px;
    line-height: 18px;
 }
  .w_news_right_list span{
    width:100%;
  	color: #6b330d;
    font-size: 16px;
    float:right;
    padding-right:25px;
    margin-top:20px;
    text-align:right;
    box-sizing:border-box;
    cursor:pointer;
  }
  .w_news_button{
    padding-left:270px;
    box-sizing:border-box;
  }
  .w_news_button span{
    padding:2px 5px;
  }
  .w_news_button div{
    display:inline;
  }
  .w_news_active{
    color:red;
  }
</style>
