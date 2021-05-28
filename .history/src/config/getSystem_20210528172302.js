


export default{
  install(Vue, options){
    Vue.prototype.getSystem = function(){
        //判断数组中是否包含某字符串  
      Array.prototype.contains = function(needle) {  
        for (i in this) {  
            if (this[i].indexOf(needle) > 0)  
                return i;  
        }  
        return -1;  
      }  
      var deviceType = navigator.userAgent;//获取userAgent信息  
      console.log(deviceType);//打印到页面  
      var md = new MobileDetect(deviceType);//初始化mobile-detect  
      var os = md.os();//获取系统  
      var version = "";//系统的版本号   
      var model = "";  //设备型号
      if (os == "iOS") {//ios系统的处理  
          version =  md.version("iPhone");
          os = md.os();  
          model = md.mobile();  
      } else if (os == "AndroidOS") {//Android系统的处理  
          os = md.os();  
          version = md.version("Android");
          var sss = deviceType.split(";");  
          var i = sss.contains("Build/");  
          if (i > -1) {  
              model = sss[i].substring(0, sss[i].indexOf("Build/"));  
          }  
      }  
      //组装信息
      var info = {
        os:os,//系统类型
        version:version,//系统版本号
        model:model, //设备型号
        system:system,
      };
      return info;
    }
  }
}

