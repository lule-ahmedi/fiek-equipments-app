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

const Contact = () => {
    return (
        <Layout>
            {/* <div className="p-2 justify-content-evenly bd-highlight mx-3 mt-4"> */}
            <div className="section-card">
                <div className="section-heading">
                    <h6>Contact</h6>
                </div>  
            </div> 

            <p className="ps-2">In case you are a student or staff at FIEK and interested in borrowing these devices for use, 
              please send an <strong>email</strong> to :&nbsp;<a href="mailto:fiek@uni-pr.edu">fiek@uni-pr.edu</a>
            </p>

            {/* <div>{devices.map(createCard)}</div> */}
            {/* </div> */}
      </Layout>
    )
};

  
export default Contact;