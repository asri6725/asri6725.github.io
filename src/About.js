import profile from './files/profile.png';
import './About.css';
function About(){
    return(
        <div className="AboutWrap">
            <div>
                    <p className="AboutHeading"> About </p>
                 </div>
        
            <div className="Graphic">
                <div className="AboutImage">
                    <img src={profile} alt="profile" />
                </div>

                
            </div>

            <div className="AboutText">
                
                <div>
                    <p className="text">
                        I am a graduate from The University of Sydney studying Bachelors of Compputer Science and IT (CS major).
                        <br />
                        <br />
                        I generally like everything related to programming, but have put a lot of more work in web design
                        and development. Where I specialise in using React on the frontend and Python on the backend.
                    </p>
                </div>
                <div className="Button">
                <div className="AboutButton" style={{"float":"right"}}>
                    <a className="SecondaryButton" href="https://github.com/asri6725/" rel="noopener noreferrer" target="_blank">
                         GitHub 
                    </a>
                </div>
                
                <div className="AboutButton"><a className="SecondaryButton"> Resume </a></div> 
                </div>
            </div>
        </div>
    )
};
export default About;