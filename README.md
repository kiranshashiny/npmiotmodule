# npmiotmodule


Module which subscribes to events from devices( like an Raspberry Pi/Arduino) connected to the IBM Bluemix Broker.

This repository has both the Publish code in sketch form to be uploaded to Arduino ( the publish.ino ) and the
Subscribe code in Node.js

The Node app (also called as the application ) receives events from the Watson IoT Platform ( the MQTT Broker ) by subscribing to events, published by devices.

Needs the IBM's NPM iotf package to be installed, and uses the Bluemix credentials for complete functionality.

https://www.npmjs.com/package/ibmiotf

The subscribe code is in pubsub_bluemix.js and user has to run it as "$node pubsub_bluemix.js"

To see the events - one has to configure the device on the IBM's Bluemix IOT Platform by
creating an account, device, and configure it to receive events from the device at the other end.

In my case, I have an Arduino sending ( publishing ) temperature data to the IoT Platform, and this
code receives it and displays it.

<b> Device: </b>

Snapshot of the Serial Monitor on the Arduino Sketch, which displays the temperature being published

<img width="527" alt="screen shot 2017-01-17 at 3 01 28 pm" src="https://cloud.githubusercontent.com/assets/14288989/22014919/e2d6d7de-dcc5-11e6-94c6-685731bb823f.png">


<b> Application </b>

<img width="809" alt="screen shot 2017-01-17 at 3 01 11 pm" src="https://cloud.githubusercontent.com/assets/14288989/22014920/e3203bb8-dcc5-11e6-87a3-6e0d558f874c.png">

<b> Snapshot of the Arduino Sketch </b>

<img width="794" alt="screen shot 2017-01-17 at 3 09 52 pm" src="https://cloud.githubusercontent.com/assets/14288989/22015202/1056ff76-dcc7-11e6-93b3-5b069a023d2a.png">

