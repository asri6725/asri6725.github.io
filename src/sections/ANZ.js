import anz from './files/anzapp.png';
import './project.css';
import figma from './files/figma.png';
function ANZ(){
    return(
        <div className="Wrap">
            <div className="SubHeading">
                Australia New Zeland Bank
            </div>
            <div className="image">
            <div className="imgs">
                <img src={anz} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}}/>
            </div>
            </div>
            <div className="Description">
                <p className="text">
                During this time, I proposed an open banking application for ANZ and delivered a feasibility study conducting sound theoretical research, developing proptotypes, proof of concept design and design justifications for UI and UX.     
                </p>
                <div className="">
                    <img src={figma} alt="react logo" className="logo"/>
                    
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://www.figma.com/proto/0kvXqs5lC28YAX3rm1skhf/ANZ-Project?scaling=scale-down&node-id=3%3A2" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> Prototype </a>
                </div>
            </div>
        </div>
    );
}

export default ANZ;