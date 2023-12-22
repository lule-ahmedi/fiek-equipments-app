// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // If you're using React Router

const Sidebar = () => {
  return (
    <div className="sidebar d-lg-block bg-white">
      <ul className="list-group list-unstyled p-1">
        <li>
          <NavLink to="/" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Full list of all devices
          </NavLink>
        </li>
        <li> 
          <NavLink to="/IoTAir" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            IoT Sensors Lab: Air Quality Monitoring
          </NavLink>
        </li>
        <li>
          <NavLink to="/IoTSmartphones" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            IoT Sensors Lab: Smartphones Detection
          </NavLink>
        </li>
        <li>
          <NavLink to="/Hyjnesha" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Cluster "Hyjnesha" Infrastructure
          </NavLink>
        </li>
        <li>
          <NavLink to="/ML" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            User Interaction and Machine Learning
          </NavLink>
        </li>
        <ul className="list-unstyled ms-3">
          <li>
            <NavLink to="/ML/MREyeTracker" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
              Eye Tracker
            </NavLink>
          </li>
          <li>
            <NavLink to="/ML/MRHeadset" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
              Mixed Reality Headset
            </NavLink>
          </li>
          <li>
            <NavLink to="/ML/MRChromecast" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
              Google Chromecast
            </NavLink>
          </li>
        </ul>
        <li>
          <NavLink to="/Security" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Internet Security Research
          </NavLink>
        </li>
        <li>
          <NavLink to="/WSs"
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}             
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Research Workstations
          </NavLink>
        </li>
        <li>
          <NavLink to="/Architecture" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}  
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Computer Architecture Lab Infrastructure
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="/VR" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Mixed Reality Lab
          </NavLink> */}
          {/* <ul>
            <li>Virtual reality system, 1 pieces</li>
            <li>Brain sensing headband, 1 pieces</li>
            <li>Sound system, 1 pieces</li>
            <li>Projector, 1 pieces</li>
            <li>Camera, 1 pieces</li>
            <li>Software lincenses and books, NA</li>
          </ul> */}
        </li>
        <li>
          {/* <NavLink to="/VideoConf" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Video-Conferencing Setup
          </NavLink> */}
          {/* <ul>
            <li>Cameras, 2 pieces</li>
            <li>Speakerphones, 2 pieces</li>
          </ul> */}
        </li>
        <li>
          <NavLink to="/About" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" 
            style={({ isActive }) => { return { backgroundColor: isActive ? "#C70202" : "" }; }}   
            className="list-group-item list-group-item-action border-0 border-bottom rounded rounded py-1">
            Contact
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
