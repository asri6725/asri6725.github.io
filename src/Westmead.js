import westmeadimg from './files/westmeadapp.png';
import './project.css';
import react from './files/react.png';
import python from './files/python.png';
import pg from './files/PGLogo.png';

function Westmead(){
    return(
        <div className="Wrap">
            <div className="SubHeading">
                <p> Western Sydney Local Health Services </p>
            </div>
            <div className="image">
            <div className="imgs">
                <img src={westmeadimg} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}}/>
            </div>
            </div>
            <div className="Description">
                <p className="text">
                During this time, I completed a Mobile Application Development Internship at Western Sydney Local Health Service via Westmead Hospital. In a team of 5, we developed a new mobile application to allow emergency department services to monitor logistical data. With end-to-end project delivery and collaboration, I was responsible for React & Python coding, front/back-end testing and quality control.    
                </p>
                <div className="">
                    <img src={react} alt="react logo" className="logo"/>
                    <img src={python} alt="react logo" className="logo"/>
                    <img src={pg} alt="react logo" className="logo"/>
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://github.com/abhinandan-srinivas/soft3888" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> GitHub </a>
                </div>
            </div>
        </div>
    );
}

export default Westmead;