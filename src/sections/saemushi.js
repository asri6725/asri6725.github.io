import saemushi from './files/saemushi.png';
import angular from './files/angular.png';
function Saemushi(){
    return(
        <div>
            <div className="SubHeading">
                <p> Saemushi </p>
            </div>
            <div className="image">
            <div className="imgs">
                <img src={saemushi} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}} />
            </div>
            </div>
            <div className="Description">
                <p className="text">
               
Saemushi are a digital product studio who create seamless digital solutions. I am completing an Angular Development Internship delivering front-end agile development solutions via Angular utilising effective HTML/CSS coding practices.

                </p>
                <div className="">
                    <img src={angular} alt="react logo" className="logo"/>
                    
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://saemushi.com/" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> Company Site </a>
                </div>
            </div>
        </div>
    );
}

export default Saemushi;