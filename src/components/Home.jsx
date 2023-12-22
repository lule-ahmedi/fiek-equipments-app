import React from "react";
import Layout from './Layout';
import Card from "./Card";
import {IoTAirDevices, IoTSmartphonesDevices, HyjneshaDevices, MLDevices, SecurityDevices, WSsDevices, ArchitectureDevices} from "../devices";
// export {IoTAirDevices, IoTSmartphonesDevices, HyjneshaDevices, MLDevices, SecurityDevices, WSsDevices, ArchitectureDevices, VRDevices, VideoConfDevices};

function createCard(device) {
  return (
      <Card 
          name={device.name}
          img={device.imgURL}
          dsc={device.description}
          qty={device.quantity}
      />
  );
}

const Home = () => {
  return (
    <Layout>
      {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
         <div className="section-card">
            <div className="section-heading">
                <h6>Full list of all devices</h6>
            </div>  
        </div>

        <h2 className="heading">IoT Sensors Lab: Air Quality Monitoring</h2>
        <ul>
            <li>Temperature, humidity and air pressure sensor probes</li>
            <li>Calibrated sensor of carbon monocide (CO)</li>
            <li>Particle matter PM1/PM2.5 and PM10 sensor probes</li>
            <li>SMART node for sensor access</li>
            <li>Gateway node for communication</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{IoTAirDevices.map(createCard)}</div>
        
        <h2 className="heading">IoT Sensors Lab: Smartphones Detection</h2>
        <ul>
            <li>Gateway node for communication, 1 pieces</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{IoTSmartphonesDevices.map(createCard)}</div>

        <h2 className="heading">Cluster "Hyjnesha" Infrastructure</h2>
        <ul>
            <li>Smart UPS, 1 pieces</li>
            <li>Network Switch (copper), 1 pieces</li><li>Cat6A Cables (for server room)</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{HyjneshaDevices.map(createCard)}</div>
        
        <h2 className="heading">User Interaction and Machine Learning</h2>
        <ul>
            <li>Eye Tracker 4C, 2 pieces</li>
            <li>Brain sensing equipment, 1 pieces</li>
            <li>Graphics Drawing Monitor (for handwriting recongnition), 5 pieces</li>
            <li>Mixed Reality Headset, 2 pieces</li>
            <li>Speech Recognition Microphone, 1 pieces</li>
            <li>Chromecast Ultra, 1 pieces</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{MLDevices.map(createCard)}</div>
        
        <h2 className="heading">Internet Security Research</h2>
        <ul>
            <li>Experimental high-speed router, 15 pieces</li>
            <li>Portable network attack tool, 3 pieces</li>
            <li>Burp Suite Professional, 1 pieces</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{SecurityDevices.map(createCard)}</div>
        
        <h2 className="heading">Research Workstations</h2>
        <ul>
            <li>Mobile Workstations, 2 pieces</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{WSsDevices.map(createCard)}</div>

        <h2 className="heading">Computer Architecture Lab Infrastructure</h2>
        <ul>
            <li>FPGA Boards, 2 pieces</li>
        </ul>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">{ArchitectureDevices.map(createCard)}</div>

        {/* <h2 className="heading">Mixed Reality Lab</h2>
        <ul>
            <li>Virtual reality system, 1 pieces</li>
            <li>Brain sensing headband, 1 pieces</li>
            <li>Sound system, 1 pieces</li>
            <li>Projector, 1 pieces</li>
            <li>Camera, 1 pieces</li>
            <li>Software lincenses and books, NA</li>
        </ul>

        <h2 className="heading">Video-Conferencing Setup</h2>
        <ul>
            <li>Cameras, 2 pieces</li>
            <li>Speakerphones, 2 pieces</li>
        </ul> */}
      {/* </div> */}
    </Layout>
  )
};
      
export default Home;