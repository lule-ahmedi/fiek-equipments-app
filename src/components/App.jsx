import Home from "./Home";
import IoTAir from "./IoTAir";
import IoTSmartphones from "./IoTSmartphones";
import Hyjnesha from "./Hyjnesha";
import ML from "./ML";
import MREyeTracker from "./MREyeTracker";
import MRHeadset from "./MRHeadset";
import MRChromecast from "./MRChromecast";
import Security from "./Security";
import WSs from "./WSs";
import Architecture from "./Architecture";
import VR from "./VR";
import VideoConf from "./VideoConf";
import About from "./About";
import Contact from "./Contact";

// Sidebar nav
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        // <div className="d-flex flex-row bd-highlight mb-3">

            <div className="p-1 bd-highlight mx-3 mt-4">
                <Router basename={process.env.PUBLIC_URL || ''}>
                    <Routes>
                        <Route path="/" exact element={<Home/>} />
                        <Route path="/IoTair" element={<IoTAir/>} />
                        <Route path="/IoTSmartphones" element={<IoTSmartphones/>} />
                        <Route path="/Hyjnesha" element={<Hyjnesha/>} />

                        <Route path="/ML/*">                   
                            <Route index element={<ML />} />     
                            <Route path="MREyeTracker" element={<MREyeTracker />} /> 
                            <Route path="MRHeadset" element={<MRHeadset />} /> 
                            <Route path="MRChromecast" element={<MRChromecast />} /> 
                        </Route>

                        <Route path="/Security" element={<Security/>} />
                        <Route path="/WSs" element={<WSs/>} />
                        <Route path="/Architecture" element={<Architecture/>} />
                        <Route path="/VR" element={<VR/>} />
                        <Route path="/VideoConf" element={<VideoConf/>} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/Contact" element={<Contact/>} />
                    </Routes>
                </Router>
            </div>
            
        // </div>
    );
}

export default App;
