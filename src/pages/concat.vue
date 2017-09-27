<template>

 <div class='w_concat'>
             <div class='w_concat_title'>联系我们</div>
             <div class='w_concats'>
                  <div class='w_concats_left'>
                  	  <p>地址：<span>江苏省苏州金阊区阊门外留园路338号</span></p>
                  	  <p>电话：<span>123-456-7890</span></p>
                  	  <p>邮箱：<span>youjian@gmail.com</span></p>
                  	  <p>传真：<span>123-456-7809</span></p>
                  	  <div class='w_concats_left_map'>
                  	  	 <div id="container"></div>
                         <div id="option"></div>
                  	  </div>
                  </div>
                  <div class='w_concats_right'>
                  	  <p>联系我们</p>
                  	  <div class='w_concats_right_input'>
                  	  	 <input type="text" name="" value="" id='name' placeholder='姓名'>
                  	  	 <span class='span'>这是必填项！！！</span>
                  	  	 <input type="email" name="" id='email' value="" placeholder='邮箱'>
                  	  	 <span class='span'>这是必填项！！！</span>
                  	  	 <input type="text" name="" value="" id='tele' placeholder='联系电话'>
                  	  	 <span class='span'>这是必填项！！！</span>
                  	  	 <textarea></textarea>
                  	  	 <div class='w_file'>
                  	  	     文件上传	
                  	  	 	 <input type="file" name="" value="">
                  	  	 </div>
                  	  	 <button @click='email'>发送</button>
                  	  </div>
                  </div>
                  <div class='clear'></div>
             </div>
  </div>
 
</template>

<script type="text/javascript">


  // ajax 使用官方推荐的 axios
    import axios from 'axios'
    import BMap from 'BMap'
    var url='http://localhost:8006/images/';
    export default{
        data () {
            return{
                
            }
        },
        mounted() {
            var map = new BMap.Map("container");          // 创建地图实例  
                  var point = new BMap.Point(116.404155,39.914772);  // 创建点坐标  
                  map.centerAndZoom(point, 15);                 
                  // 初始化地图，设置中心点坐标和地图级别  15代表放大级别，数字越大，放大级别越大
                  map.enableScrollWheelZoom();//开启鼠标滚动进行自行缩放
                  var marker = new BMap.Marker(point);
                  map.addOverlay(marker);
                  map.addControl(new BMap.NavigationControl());//开启地图平移缩放控件
                  map.addControl(new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,offset:new BMap.Size              (20,20)}));
                  //加入缩略图控件
                  map.addControl(new BMap.ScaleControl());//开启比例尺控件
              
                  map.addControl(new BMap.MapTypeControl({type:BMAP_MAPTYPE_CONTROL_DROPDOWN}));
                  //地图类型控件
              
                  map.addControl(new BMap.CopyrightControl());
                  //版权控件
              
                  map.addControl(new BMap.GeolocationControl());
                  //定位控件
              
                  map.addControl(new BMap.PanoramaControl());
                  //全景控件
              
                  map.addEventListener("click",function(event){
                      console.log(event.point)
              
                  })
              
              
                  var localSearchOptions={
                      renderOptions:{
                      map:map,//结果自动添加到地图上
                      panel:option,//结果列表展示在html容器中
                      selectFirstResult:true,//是否选择第一个结果
                      autoViewport:true//是否结束后自动调整地图视野
                      },
                      pageCapacity:3,
                      onMarkersSet:function(){//标注添加完成后的回调函数。
                         // alert("onMarkersSet")
                      },
                      onInfoHtmlSet:function(){//标注气泡内容创建后的回调函数
                         // alert("onInfoHtmlSet")
                      },
                      onResulsHtmlSet:function(){//结果列表添加完成后的回调函数
                          //alert("onResuilsHtmlSet")
                      },
                      onSearchComplete:function(result){//检索完成后的回调函数
                          //console.log(result)
                      }
              
                  };
                  var localSearch=new BMap.LocalSearch(map,localSearchOptions);
        },
        methods: {
        	email:function(){
                var emailValue=document. getElementById("email").value;
                var name=document. getElementById("name").value;
                var tele=document. getElementById("tele").value;
                var span=document.querySelectorAll('.span');
                if(emailValue==""||name==""||tele==""){
                    if(name==""){
                       span[0].style.display='block';   
                    }
                    if(emailValue==""){
                        span[1].style.display='block';   
                    }
                    if(tele==""){
                        span[2].style.display='block';   
                    }
                    if(name==""&&emailValue==""){
                       span[1].style.display='block';
                       span[0].style.display='block';   
                    }
                    if(name==""&&tele==""){
                       span[2].style.display='block';
                       span[0].style.display='block';   
                    }
                    if(emailValue==""&&tele==""){
                       span[2].style.display='block';
                       span[1].style.display='block';   
                    }
                    if(emailValue==""&&tele==""&&name==""){
                       span[1].style.display='block'; 
                       span[2].style.display='block';
                       span[0].style.display='block';     
                    }
                }else{
                	checkEmail();
                	checkPhone();
                }
                setTimeout(function(){
                       span[1].style.display='none'; 
                       span[2].style.display='none';
                       span[0].style.display='none';  
                       span[1].innerHTML='这是必填项！！！';
                       span[2].innerHTML='这是必填项！！！';
                       span[0].innerHTML='这是必填项！！！';
                    },1000);
        		function checkEmail(){
                     var emailValue=document. getElementById("email").value;
                     if (!isEmail(emailValue))
                     {
                       span[1].style.display='block'; 	
                      span[1].innerHTML="您输入的邮箱有误,请重新核对后再输入!";
                      document. getElementById("email").focus();
                      return false;
                     }
                     return true;
                } 
                function isEmail(str){
                          var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
                          return reg.test(str);
                }
                function checkPhone(){ 
                   if(!(/^1[34578]\d{9}$/.test(tele))){ 
                   	 span[2].style.display='block'; 	
                       span[2].innerHTML="手机号码有误，请重填";  
                       document. getElementById("tele").focus();
                       return false; 
                   } 
                }
        	}
        }
           
    }




</script>

<style>
 .w_concat{
  margin-top:70px;
  margin-bottom:50px;
 }	
 .w_concat_title{
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
.w_concats{
 	width:1024px;
    height:auto;
 	background:#ffffff;
 	padding-top:18px;
    padding-bottom:40px;
    padding-left:20px;
    padding-right:20px;
	box-sizing:border-box;
 }	
 .w_concats_left{
 	width:492px;
 	
 	float:left;
 	padding:20px;
 	box-sizing:border-box;
 }
 .w_concats_right{
 	width:492px;
 	
 	float:left;
 	padding:20px;
 	box-sizing:border-box;
 }
 .w_concats_left p{
 	line-height:28px;
 }
 .w_concats_left_map{
 	width:100%;
 	height:280px;
 	padding:5px;
 	box-sizing:border-box;
 	margin-top:20px;
 }
 .w_concats_right p{
 	width:100%;
 	padding-bottom:15px;
 	box-sizing:border-box;
 	border-bottom:1px solid #CFB674;
 	font-size:30px;
 	font-weight:bolder;
 	text-align:center;
 }
  .w_concats_right_input{
  	margin-top:15px;
  	width:100%;
  }
 .w_concats_right_input input{
    width:100%;
    height:26px;
    border: 1px solid rgb(243, 243, 243);
    border-radius:5px;
    padding:3px;
    box-sizing:border-box;
    margin:8px 0;
    font-size:14px;
 }
  .w_concats_right_input textarea{
  	border: 1px solid rgb(243, 243, 243);
    color: rgb(28, 28, 28);
    font-size: 14px;
    margin: 8px 0px  ;
    height: 92px;
    width: 100%;
  }
 .w_file input{
 	width:180px;
 	height:28px;
 	outline:none;
 	margin-left:20px;
 }
  .w_concats_right_input button{
  	width:70px;
  	height:28px;
  	background:#CFB774;
  	color:#FFFFFF;
  	margin:20px auto;
  	outline:none;
  	display:block;
  	border:none;

  }
  .w_concats_right_input span{
  	color:red;
  	display:none;
  }
  #container{width:100%;height:100%;}
</style>
