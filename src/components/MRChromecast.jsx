import React from "react";
import Layout from './Layout';
// import sections from "../sections";
import SectionCard from "./SectionCard";
import VideoPlayer from "./VideoPlayer";
import UList from "./UList";
import { Chromecast } from "../sections";

function MRChromecast() {
    return (
        <Layout>
            <div className="d-flex flex-row flex-wrap justify-content-between">

                <SectionCard section={Chromecast[0]}>
                    <p className="section-narrative">{Chromecast[0].narrative}</p>
                    <VideoPlayer section={Chromecast[0]} />
                </SectionCard>

                <SectionCard section={Chromecast[1]}>
                    <p className="section-narrative">{Chromecast[1].narrative}</p>
                    <UList section={Chromecast[1].list} />
                    {/* <img className="section-img" src={Chromecast[1].img} alt=""/> */}
                    {/* <VideoPlayer Chromecast={Chromecast[1]} /> */}
                </SectionCard>

                {/* <SectionCard section={Chromecast[2]}>
                    <p className="section-narrative">{Chromecast[2].narrative}</p>
                </SectionCard> */}

                <SectionCard section={Chromecast[2]}>
                    <a href={Chromecast[2].narrative} className="section-narrative">{Chromecast[2].narrative}</a>
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

export default MRChromecast;
