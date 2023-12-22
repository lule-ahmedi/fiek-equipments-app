import React from "react";
import Layout from './Layout';
// import Card from "./Card";
// import devices from "../devices";

// function createCard(device) {
//   return (
//       <Card 
//           name={device.name}
//           img={device.imgURL}
//           dsc={device.description}
//           qty={device.quantity}
//       />
//   );
// }

const About = () => {
    return (
        <Layout>
            {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
            <div className="section-card">
                <div className="section-heading">
                    <h6>About</h6>
                </div>  
            </div> 

            <p className="ps-2">These devices are donation of the <a href="https://phdictkes.eu/">PhDICTKES</a> project funded by the Erasmus+ EU grant to UP</p>
            
            {/* <div>{devices.map(createCard)}</div> */}
            {/* </div> */}
      </Layout>
    )
};

  
export default About;