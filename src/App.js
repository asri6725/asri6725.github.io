import './App.css';
import Projects from './projects';
import Images from './Images';
import profile from './files/Ellipse 1.png';
import resume from './files/Resume.pdf';
import React, { Component, createRef } from "react";

export default class App extends Component {
  scrollDiv = createRef();

  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollTop = createRef();
  scrollTopHandler = () => {
    this.scrollTop.current.scrollIntoView({ behavior: "smooth" });
  };

  render(){
    return (
      <div className="Wrapper">
          <div className="GeneralInfo" ref={this.scrollTop} style={{"display":"inline-block"}}>
            <img src={profile} alt="" style={{"height" : "10%", "width" : "10%", "overflow":"hidden"}}></img>
            <div style={{"float":"right", "width":"85%"}}>
              <p style={{"fontSize":"200%", "height":"auto"}}> Abhinandan Srinivas </p>
              <p style={{"fontSize":"150%", "height":"50%", "marginBottom":"2%"}}> Software Developer </p>
              <a href={resume} download className="SubHeadingButton" style={{"fontSize":"120%", "padding":"1% 7%"}}> Resume </a>
            </div>
          </div> 
        <div className="Frameworks">
          <p className="SubHeading">Can use</p>
          <Images />
        </div>
        <div ref={this.scrollDiv} style={{"height":"5000px"}} className="Projects">
          <button className="SubHeadingButton" onClick={this.scrollSmoothHandler}> Some of my projects </button>
          <Projects />
        </div>
        {/* <div className="Top" onClick={this.scrollTopHandler}><img src={top} alt="back to top"></img></div> */}
      </div>
    );
  }
}