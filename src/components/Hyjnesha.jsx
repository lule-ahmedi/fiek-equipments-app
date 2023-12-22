import React from "react";
import Layout from './Layout';
import Card from "./Card";
// import devices from "../devices";
import {HyjneshaDevices} from "../devices";

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

const Hyjnesha = () => {
    return (
        <Layout>
            {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
            <div className="section-card">
                <div className="section-heading">
                    <h6>Cluster "Hyjnesha" Infrastructure</h6>
                </div>  
            </div> 

            <ul>
                <li>Smart UPS, 1 pieces</li>
                <li>Network Switch (copper), 1 pieces</li><li>Cat6A Cables (for server room)</li>
            </ul>

            <div className="d-flex flex-row flex-wrap justify-content-evenly">{HyjneshaDevices.map(createCard)}</div>
            {/* </div> */}
      </Layout>
    )
};

  
export default Hyjnesha;