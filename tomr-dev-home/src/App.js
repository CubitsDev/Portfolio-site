import YoutubeBackground from 'react-youtube-background'
import Typed from "react-typed";
import './App.css';
import {useState} from "react";

function App() {

  var [play, setPlay] = useState(false);
  var [mute, setMute] = useState(0);



  const userEntered = (e) => {
    e.preventDefault();
    setPlay(true);
  }

  const userMute = (e) => {
    e.preventDefault();
    setMute(1);
  }

  if (play) {
    return (
      <>
        <YoutubeBackground videoId={'HgotWCaXdWI'} nocookie={true} id={'video-bg'} playerOptions={{mute: mute}} >
        <header className="App-header">
          <div className={'info'}>
          <center>
              <code>Tom Roman</code>
              <br />
                <span className={'myself'} id={'me'}><Typed
                strings={[
                    'Software Engineer @ Sky / Comcast',
                    'Professional Meme Maker',
                    'Javascript Fan',
                    'Likes computers',
                    'Likes Typescript']}
                    typeSpeed={60}
                    backSpeed={50}
                    backDelay={200}
                    shuffle={true}
                    loop >
                </Typed></span>
              </center>
          </div>
        </header>
        <div class="footer">
          <p>Check out some of the links:</p>
          <p><span class="footer-span"><a href="https://github.com/CubitsDev">Github</a></span><span class="footer-span"><a href="https://cloud.tomroman.co.uk">Cloud</a></span><span class="footer-span"><a href="https://tomr.dev/projects">Projects/Prior Work</a></span><span class="footer-span"><a href="https://steamcommunity.com/id/54632/">Steam</a></span><span class="footer-span"><a href="mailto:tom@tomroman.co.uk">Email</a></span></p>
        </div>
        </YoutubeBackground>
      </>
    );
  } else {
    return(
      <>
      <div className={'enter'}>
      <header className="App-header">
      <h2><Typed
            strings={[
            'Howdy^1000',
            'So, ^1000uh, click the button'
            ]}
            typeSpeed={60}
            backSpeed={50}
            backDelay={100}
            loop >
                </Typed></h2>
      <button onClick={userEntered} className={'pulse'}>Enter Here..</button>
      <small>This site has some background music. If you wanna mute it click below:</small>
      <small>
        {mute === 0 ?
          <button onClick={userMute}>Mute Site</button>
        :
          <><br/><span>Site has been Muted</span></>
        }
        </small>
      </header>
      </div>
      </>
    )
  }
  
}

export default App;
