# com.kit.cordova.amapnavigation

使用高德地图sdk进行导航

## 安装
`cordova plugin add https://github.com/yanxiaojun617/com.kit.cordova.amapnavigation --save `

## 配置
更多详情请看http://www.jianshu.com/p/85aceaee3b35
### Android

*  修改 plugin.xml(:23) 文件中的高德地图android key

`<preference name="amapapikey" value="这里填您申请的高德地图ios key"/>`

### IOS

*  修改 plugin.xml(:65) 文件中的高德地图ios key

`<meta-data android:name="com.amap.api.v2.apikey" android:value="这里填您申请的高德地图android key"/>`

### ionic1调用方法

```js
var successCallback = function(message){
  //do something
};

var errorCallback = function(message){
    console.log(message);
};

cordova.plugins.AMapNavigation.navigation({
   lng: 起始地的经度,
   lat: 起始地的纬度
}, {
    lng: 终点的经度,
    lat: 终点的纬度
}, NavType //导航类型，0为实时，1为模拟
,successCallback, errorCallback);

```

### ionic2调用方法

```
import {Injectable} from '@angular/core';
declare var AMapNavigation;

@Injectable()
export class NativeService {
  constructor() { }
  /**
   * 地图导航
   * @param startPoint 开始坐标
   * @param endPoint 结束坐标
   * @param type 0实时导航,1模拟导航,默认为模拟导航
   * @return {Promise<string>}
   */
  navigation(startPoint, endPoint, type = 1): Promise<string> {
    return new Promise((resolve) => {
      AMapNavigation.navigation({
        lng: startPoint.lng,
        lat: startPoint.lat
      }, {
        lng: endPoint.lng,
        lat: endPoint.lat
      }, type, function (message) {
        resolve(message);
      }, function (err) {
        alert('导航失败:' + err);
      });
    });
  }
}

```