import React from "react";
import Layout from './Layout';
import Card from "./Card";
// import devices from "../devices";
import {IoTSmartphonesDevices} from "../devices";

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

const IoTSmartphones = () => {
    return (
    <Layout>
      {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
      <div className="section-card">
        <div className="section-heading">
          <h6>IoT Sensors Lab: Smartphones Detection</h6>
        </div>  
      </div> 

      <ul>
          <li>Gateway node for communication, 1 pieces</li>
      </ul>
      
      <div className="d-flex flex-row flex-wrap justify-content-evenly">{IoTSmartphonesDevices.map(createCard)}</div>
      {/* </div> */}
    </Layout>
  )
};
  
export default IoTSmartphones;