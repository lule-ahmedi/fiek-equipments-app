import React from "react";
import Layout from './Layout';
import Card from "./Card";
// import devices from "../devices";
import {IoTAirDevices} from "../devices";

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

const IoTAir = () => {
    return (
    <Layout>
      {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
      <div className="section-card">
        <div className="section-heading">
          <h6>IoT Sensors Lab: Air Quality Monitoring</h6>
        </div>  
      </div> 
      
      <ul>
          <li>Temperature, humidity and air pressure sensor probes</li>
          <li>Calibrated sensor of carbon monocide (CO)</li>
          <li>Particle matter PM1/PM2.5 and PM10 sensor probes</li>
          <li>SMART node for sensor access</li>
          <li>Gateway node for communication</li>
      </ul>

      {/* <div className="d-flex flex-row bd-highlight mb-3"> */}
      <div className="d-flex flex-row flex-wrap justify-content-evenly">{IoTAirDevices.map(createCard)}</div>
      {/* </div> */}
    </Layout>
    )
  };
  
export default IoTAir;