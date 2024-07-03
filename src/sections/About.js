import profile from './files/profile.jpg';
import './About.css';
import Resume from './files/Abhinandan Srivinas Resume.pdf';
function About(){
    return(
        <div className="AboutWrap">
            <div>
                    <p className="AboutHeading"> About </p>
                </div>
        
            <div className="Graphic">
                <img src={profile} alt="profile" className="AboutImage" />

                <br />
                <br />
                <br />
                <div className="buttonpos">
                    <a className="SecondaryButton" href="https://github.com/asri6725/" rel="noopener noreferrer" target="_blank"> GitHub </a>
                    <a className="SecondaryButton" href={Resume} rel="noopener noreferrer" target="_blank" download> Resume </a>
                </div>    
            </div>

            <div className="AboutText">
                

                <div>
                    <p className="text">
                    I am a Computer Science and IT Graduate with experience developing front end software and applications, collaborating with design, back-end and product teams, utilising Python, React, HTML, CSS, JavaScript, SQL, and more in the health, SaaS and education sectors. I have developed and designed a billing service interface for a client at Saemushi, working with AngularJS, ensuring high-quality UI and UX outcomes. 
<br /><br />
I am passionate about collaborating with multi-disciplinary teams to deliver high-quality and innovative value-add solutions. I am looking for an opportunity to utilise my skills in a new Developer role.

                    </p>
                </div>
                
            </div>
        </div>
    )
};
export default About;