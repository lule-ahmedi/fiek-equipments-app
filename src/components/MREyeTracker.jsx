import React from "react";
import Layout from './Layout';
// import sections from "../sections";
import SectionCard from "./SectionCard";
import VideoPlayer from "./VideoPlayer";
import UList from "./UList";
import { EyeTracker } from "../sections";

function MREyeTracker() {
    return (
        <Layout>
            <div className="d-flex flex-row flex-wrap justify-content-between">

                <SectionCard section={EyeTracker[0]}>
                    <p className="section-narrative">{EyeTracker[0].narrative}</p>
                    <VideoPlayer section={EyeTracker[0]} />
                </SectionCard>

                <SectionCard section={EyeTracker[1]}>
                    <p className="section-narrative">{EyeTracker[1].narrative}</p>
                    <UList section={EyeTracker[1].list} />
                    {/* <img className="section-img" src={EyeTracker[1].img} alt=""/> */}
                    {/* <VideoPlayer EyeTracker={EyeTracker[1]} /> */}
                </SectionCard>

                <SectionCard section={EyeTracker[2]}>
                    <p className="section-narrative">{EyeTracker[2].narrative}</p>
                </SectionCard>

                <SectionCard section={EyeTracker[3]}>
                    <a className="section-narrative" href={EyeTracker[3].narrative}>{EyeTracker[3].narrative}</a>
                </SectionCard>

            </div>
            {/* </div> */}
        </Layout>
    );
}

// const EyeTracker = ({ sections }) => {
//     return (
//       <Layout>
//         <div className="d-flex flex-row flex-wrap justify-content-between">
//           {sections.map((section, index) => (
//             <SectionCard key={index} heading={section.heading}>
//               <p className="section-narrative">{section.narrative}</p>
//               {section.img && <img className="section-img" src={section.img} alt="" />}
//               {section.video && <VideoPlayer className="section-video" video={section.video} />}
//             </SectionCard>
//           ))}
//         </div>
//       </Layout>
//     );
//   };

export default MREyeTracker;
