import {Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import pro from './me.jpg'
import ln from './linkedin.png'
import gh from './git.png'
import insta from './insta.gif'
import './App.css';
function App() {
  return (

    <div className="App-header">

    <br/>
      <img src={pro} style={{borderRadius:"50%", width:"10%",height:"10%", opacity:"90%"}}/>
      AMAL V S<br/>
      <table>
        <tr>
          <a href="https://www.linkedin.com/in/amal-v-s-948079200/"><th><img src={ln} style={{width:"35px",height:"35px"}}/></th></a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/alchemist123"><th><img src={gh} style={{width:"35px",height:"35px"}}/></th></a>&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/_____alchemist______/"><th><img src={insta} style={{width:"35px",height:"35px"}}/></th></a>
        </tr>
      </table>
      <Container>
      <div className="LoginBox">
      <br/>
      <p><b>
      Technology is changing every day. Every day, there are new enhancements, every day there is a new invention.
      We have to keep our self very active and updated otherwise we will be left behind in the race. 
      We have to learn the new thing every day. We should learn to adapt with new things.
      Standing rigid with the old things will make us lose the competition.</b>
      </p><br/>
              <div className="row">
                <div className="column">
                  <div className="card">
                    <h6 className="carfont">project</h6>
                    <p>
                    <ul style={{textAlign:"left"}}>
                        <li>Doc Online</li>
                        <li>Inji - film review</li>
                        <li>heya-chat app</li>
                        <li>covid-19 tacking </li>
                      </ul>
                      </p>
                  </div>
                 
                </div>
                <div className="column">
                <div className="card">
                    <h6 className="carfont">Research</h6>
                    <p>
                    Real-time humen emotion detection using CNN and fer2013 dataset.
                       (Artificial Intelligence)
                      </p>
                  </div>
                </div>

                <div className="column">
                <div className="card">
                    <h6 className="carfont">Qualification</h6>
                    <p>
                    MCA from Amirta School of arts and sciences kochi.
                      [Interset and passion is more then a Degree..]
                      </p>
                  </div>
                </div>
                <div className="column">
                <div className="card">
                    <h6 className="carfont">walk of life</h6>
                    <p>
                    <ul>
                         <li>Mechine Learning </li>
                         <li>Web developing</li>
                         <li>Art works</li>
                         <li>spread love</li>
                       </ul>
                      </p>
                  </div>
                
                </div>
                </div>
              
      </div>
      </Container>
    </div>
  );
}

export default App;
