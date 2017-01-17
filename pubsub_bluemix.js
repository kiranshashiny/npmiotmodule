/* Code to Publish and Subscribe to device events from the Bluemix Watson IoT Platform

    Download the ibmiotf npm package to use this module.
    Prerequisites :
        Create an IBM Bluemix account.
        Create the IBM IoTF Starter Service
        Create the device and generate the API keys, key and the token
        
        Start sending events from the device ( in this case I have an arduino )
        Start this program and start receiving the events.


*/
var Client = require("ibmiotf");

var appClientConfig = {
    "org" : "8ubmht",
    "id"  : "00FFBBCCDE02",
    "domain": "internetofthings.ibmcloud.com",
    "auth-key" : 'a-8ubmht-hytdbcflir',
    "auth-token" : 'Hk6Kkc_2vcLRq6pXgP'
}
 
var appClient = new Client.IotfApplication(appClientConfig);

appClient.connect();
 
appClient.on("connect", function () {
    console.log (" connected" );
    appClient.subscribeToDeviceEvents();
});

appClient.on("error", function (err) {
    console.log("Error : "+err);
});

appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
        console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);
});
