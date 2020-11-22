import ReactTypingEffect from 'react-typing-effect';
import user from './files/user.svg';
import "./Home.css";
function Home(){
    return(
        <div className="HomeWrap">
          <div className="HomeLogo">
            <img src={user} alt="logo" />
          </div>
          <div className="HomeText">
            <div>
              <ReactTypingEffect text="Hello," />
            </div>
            <div>
              I am <span className="HomeTextColor">Abhi</span>nandan.
            </div>
          </div>
        </div>
    )
};

export default Home;