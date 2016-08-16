function ajax(method,url,data,success){
				var xhr = null;
				try{
					xhr = new XMLHttpRequest();
				}catch(e){
					xhr = new  ActiveXObject('Microsoft.XMLHTTP');
				}
				//改变要调用的接口
				// xhr.open('get','9.4getNews.php',true);
				//url是可变的，在get post方式的时候===处理一下
				if(method=='get'&&data){
					url=url+'?'+data;//如果是get方式，则要把参数拼到url后面
				}
				xhr.open(method,url,true);
				//send也要处理一下，如果方式为get，则是空的；如果是post，则有参数放进header里面了
				if(method=='get'){
					xhr.send();
				}else{
					xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');//设置头部
					xhr.send(data);
				}
				
				xhr.onreadystatechange = function(){
					if(xhr.readyState==4){
						if(xhr.status==200){
							// alert(typeof xhr.responseText);//string
							//在这里写接口返回的数据的处理
							//可以把字符串转换成对应对象
							success&&success(xhr.responseText);
							
						}else{
							alert("出错了");
						}
						
					}
				}
}