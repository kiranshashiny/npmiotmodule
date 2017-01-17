# npmiotmodule

Module to demo - Publish and Subscribe of events from devices connected to the IBM Bluemix Broker.

The module receives events from the Watson IoT Platform ( the MQTT Broker ) by subscribing to events.

Needs the iotf package to be installed, and uses the Bluemix credentials for complete functionality.

https://www.npmjs.com/package/ibmiotf

The subscribe code is in pubsub_bluemix.js and user has to run it as "$node pubsub_bluemix.js"


To see the events - one has to configure the device on the IBM's Bluemix IOT Platform by
creating an account, device, and configure it to receive events from the device at the other end.

In my case, I have an Arduino sending ( publishing ) temperature data to the IoT Platform, and this
code receives it and displays it.





