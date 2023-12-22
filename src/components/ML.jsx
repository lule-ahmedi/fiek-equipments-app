import React from "react";
import Layout from './Layout';
import Card from "./Card";
import devices from "../devices";
import { MLDevices } from "../devices";
// import sections from "../sections";
// import SectionHeading from "./SectionHeading";

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

// function createSection(section) {
//     return (
//         <SectionHeading 
//             heading={section.heading}
//             narrative={section.narrative}
//             img={section.img}
//         />
//     );
// }

const ML = () => {
    return (
        <Layout>
            {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
            <div className="section-card">
                <div className="section-heading">
                    <h6>User Interaction and Machine Learning</h6>
                </div>  
            </div> 
            
            <ul>
                <li>Eye Tracker 4C, 2 pieces</li>
                <li>Brain sensing equipment, 1 pieces</li>
                <li>Graphics Drawing Monitor (for handwriting recongnition), 5 pieces</li>
                <li>Mixed Reality Headset, 2 pieces</li>
                <li>Speech Recognition Microphone, 1 pieces</li>
                <li>Chromecast Ultra, 1 pieces</li>
            </ul>
            
            <div className="d-flex flex-row flex-wrap justify-content-evenly">{MLDevices.map(createCard)}</div>
            {/* <div className="d-flex flex-row flex-wrap justify-content-between">{sections.map(createSection)}</div>             */}
            {/* </div> */}
      </Layout>
    )
};

  
export default ML;