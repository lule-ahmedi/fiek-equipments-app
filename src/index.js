import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <div>
    <div className="d-flex border-bottom col-xs-3 flex-wrap">
      <a href="https://fiek.uni-pr.edu" class="navbar-brand active up-brand d-flex col-xs-3">
        <img src={require("./Logo-UP-small.png")} alt="UP FIEK" class="logo col-xs-3" />
        <div className="font-serif d-block logo-text">Universiteti i <br/>Prishtinës<br/>
          <span className="text-blue">Fakulteti i Inxhinierisë <br/>Elektrike dhe <br/>Kompjuterike</span>
        </div>
      </a>
      <h1 className="title col-xs-3">List of devices in FIEK</h1>
    </div>
    <App />
    <div className="d-flex justify-content-between border-top mt-4 p-2 col-xs-3 flex-wrap">
        <img src={require("./Logo-Erasmus.jpg")} alt="EU Erasmus Logo" height="70px" className="align-self-center me-0 pe-0 col-xs-3"/>
        <div className="fs-8 align-self-center mx-auto flex-wrap col-xs-3">
        © Copyright 2023 Universiteti i Prishtinës, FIEK. All Rights Reserved.
        </div>
        <img src={require("./Logo-PhDICTKES.png")} height="70px" className="pe-2 align-self-center col-xs-3" alt="PhDICTKES Project Logo" />
    </div>
  </div>
  , document.getElementById('root'));


