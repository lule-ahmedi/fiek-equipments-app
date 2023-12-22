const devices = [
  {
    name: "SMART node with a sensor probes kit",
    imgURL: require("./AirSensorsNode.jpg"),
    description: "Contains sensors for measuring air temperature, humidity, pressure, carbon monocide (CO), and particle matter PM1/PM2.5 and PM10.", 
    quantity: "1 sensor per parameter."
  },
  {
    name: "Gateway node for communication",
    imgURL: require("./GatewayNode.jpg"),
    description: "The gateway node serves as a hub for communication between the sensors and the central server node",
    quantity: "1"
  },
  {
    name: "Gateway node for communication",
    imgURL: require("./SmartphoneSensorsNode.jpg"),
    description: "The gateway node serves as a hub for communication between the sensors and the central server node",
    quantity: "1"
  },
  {
    name: "Smart UPS",
    imgURL: require("./SmartUPSBackgroundView.jpg"),
    description: "Smart UPS keeps the Hyjnesha cluster work in case of power outage.",
    quantity: "1"
  },
  {
    name: "Network Switch (copper)",
    imgURL: require("./NetworkSwitchCopper.jpg"),
    description: "Network Switch used for broadband connections between the nodes of the Hyjnesha cluster.",
    quantity: "1"
  },
  {
    name: "Cat6A Cables (for server room)",
    imgURL: require("./Cat6ACablesForServerRoom.jpg"),
    description: "Cat6A cables used for broadband connections between the nodes of the Hyjnesha cluster.",
    quantity: "NA"
  },
  {
    name: "Eye Tracker 4C",
    imgURL: require("./EyeTracker.jpg"),
    description: "Is used for tracking the movement of eyes when looking onto a monitor ..",
    quantity: "2"
  },
  {
    name: "Brain Sensing",
    imgURL: require("./BrainSensing.jpg"),
    description: "Can sense the brain to track the activities of a person for good (e.g. health monitoring purposes).",
    quantity: "1"
  },
  {
    name: "Graphics Drawing Monitor",
    imgURL: require("./Monitor.jpg"),
    description: "Graphics Drawing Monitor for handwriting recongnition",
    quantity: "5"
  },
  {
    name: "Mixed Reality Headset",
    imgURL: require("./Headset.jpg"),
    description: "Serves as a virtual reality headset to capture a virtual envoronment.",
    quantity: "2"
  },
  {
    name: "Speech Recognition Microphone",
    imgURL: require("./Microphone.jpg"),
    description: "Is used for registering the speech as to build speech recognition patterns.",
    quantity: "1"
  },
  {
    name: "Chromecast Ultra",
    imgURL: require("./Chromecast.jpg"),
    description: "Is used for projecting for instance from a smartphone into a presentation monitor",
    quantity: "1"
  },
  {
    name: "Experimental high-speed routers",
    imgURL: require("./HighSpeedRouter.jpg"),
    description: "Basis infracture for fast Internet access to staff & students, of profound impact for a reliable research",
    quantity: "15"
  },
  {
    name: "Research workstations",
    imgURL: require("./ResearchWSs.jpg"),
    description: "Smart UPS, network switch (copper), Cat6A Cables (for server room)",
    quantity: "2"
  },
  {
    name: "FPGA Boards",
    imgURL: require("./FPGABoards.jpg"),
    description: "Used for the design of simple logic circuits",
    quantity: "2"
  }
];

var IoTAirDevices = devices.slice(0, 2);
var IoTSmartphonesDevices = devices.slice(2, 3);
var HyjneshaDevices = devices.slice(3, 6);
var MLDevices = devices.slice(6, 12);
var SecurityDevices = devices.slice(12, 13);
var WSsDevices = devices.slice(13, 14);
var ArchitectureDevices = devices.slice(14, 15);
// var VRDevices = devices.slice(0, 1);
// var VideoConfDevices = devices.slice(0, 1);

export default devices;
export {IoTAirDevices, IoTSmartphonesDevices, HyjneshaDevices, MLDevices, SecurityDevices, WSsDevices, ArchitectureDevices};
// export {IoTAirDevices, IoTSmartphonesDevices, HyjneshaDevices, MLDevices, SecurityDevices, WSsDevices, ArchitectureDevices, VRDevices, VideoConfDevices};