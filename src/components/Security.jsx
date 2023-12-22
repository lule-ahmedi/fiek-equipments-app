import React from "react";
import Layout from './Layout';
import Card from "./Card";
import { SecurityDevices } from "../devices";

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

const Security = () => {
    return (
        <Layout>
            {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
            <div className="section-card">
                <div className="section-heading">
                    <h6>Internet Security Research</h6>
                </div>  
            </div> 
            <ul>
                <li>Experimental high-speed router, 15 pieces</li>
                <li>Portable network attack tool, 3 pieces</li>
                <li>Burp Suite Professional, 1 pieces</li>
            </ul>
            
            <div className="d-flex flex-row flex-wrap justify-content-evenly">{SecurityDevices.map(createCard)}</div>
            {/* </div> */}
      </Layout>
    )
};

  
export default Security;