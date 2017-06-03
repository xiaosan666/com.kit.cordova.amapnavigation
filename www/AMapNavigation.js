var cordova = require('cordova');

function AMapNavigation() {
}

AMapNavigation.prototype.navigation = function (startPoint, endPoint, NavType, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AMapNavigation", 'navigation', [startPoint.lng, startPoint.lat, endPoint.lng, endPoint.lat, NavType.toString()]);
};

module.exports = new AMapNavigation();
