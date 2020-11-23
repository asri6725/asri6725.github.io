import profile from './files/profile.png';
import './About.css';
import Resume from './files/Abhinandan Resume.pdf';
function About(){
    return(
        <div className="AboutWrap">
            
        
            <div className="Graphic">
                <img src={profile} alt="profile" className="AboutImage" />

                <br />
                <br />
                <div className="buttonpos">
                    <a className="SecondaryButton" href="https://github.com/asri6725/" rel="noopener noreferrer" target="_blank"> GitHub </a>
                    <a className="SecondaryButton" href={Resume} rel="noopener noreferrer" target="_blank"> Resume </a>
                </div>    
            </div>

            <div className="AboutText">
                <div>
                    <p className="AboutHeading"> About </p>
                </div>

                <div>
                    <p className="text">
                    I am a recent graduate who is looking to break into development.
                    I am good with the full stack of web development, primarily working with React, Python and an SQL database.
                    <br /><br />
                    I hold a Bachelors of Computer Science and IT (Comp Sci major) from the University of Sydney and well, thats about all about me.
                    </p>
                </div>
                
            </div>
        </div>
    )
};
export default About;