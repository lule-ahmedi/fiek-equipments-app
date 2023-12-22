// import React from 'react';
import React, { Children } from "react";
import SectionHeading from './SectionHeading';


const SectionCard = ( {section, children }) => {
  return (
    <div className="section-card">
      <SectionHeading heading={section.heading} />
      <div>{children}</div>
      {/* <div className="content">{children}</div> */}
    </div>
  );
};

export default SectionCard;