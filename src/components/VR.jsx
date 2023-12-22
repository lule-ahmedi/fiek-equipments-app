import React from "react";
import Layout from './Layout';
import Card from "./Card";
import devices from "../devices";

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

const VR = () => {
    return (
        <Layout>
            {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
            <div className="section-card">
                <div className="section-heading">
                    <h6>Mixed Reality Lab</h6>
                </div>  
            </div> 

            <ul>
                <li>Virtual reality system, 1 pieces</li>
                <li>Brain sensing headband, 1 pieces</li>
                <li>Sound system, 1 pieces</li>
                <li>Projector, 1 pieces</li>
                <li>Camera, 1 pieces</li>
                <li>Software lincenses and books, NA</li>
            </ul>
            
            <div className="d-flex flex-row flex-wrap justify-content-evenly">{devices.map(createCard)}</div>
            {/* </div> */}
      </Layout>
    )
};

  
export default VR;