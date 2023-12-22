import React from "react";
import Layout from './Layout';
// import sections from "../sections";
import SectionCard from "./SectionCard";
import VideoPlayer from "./VideoPlayer";
import UList from "./UList";
import { Headset } from "../sections";

function MRHeadset() {
    return (
        <Layout>
            <div className="d-flex flex-row flex-wrap justify-content-between">

                <SectionCard section={Headset[0]}>
                    <p className="section-narrative">{Headset[0].narrative}</p>
                    <VideoPlayer section={Headset[0]} />
                </SectionCard>

                <SectionCard section={Headset[1]}>
                    <p className="section-narrative">{Headset[1].narrative}</p>
                    <UList section={Headset[1].list} />
                    {/* <img className="section-img" src={Headset[1].img} alt=""/> */}
                    {/* <VideoPlayer Headset={Headset[1]} /> */}
                </SectionCard>

                {/* <SectionCard section={Headset[2]}>
                    <p className="section-narrative">{Headset[2].narrative}</p>
                </SectionCard> */}

                <SectionCard section={Headset[2]}>
                    <a href={Headset[2].narrative} className="section-narrative">{Headset[2].narrative}</a>
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

export default MRHeadset;
