
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
      <img src={pro} alt="DP" style={{borderRadius:"50%", width:"10%",height:"10%", opacity:"90%"}}/>
      AMAL V S<br/>
      <table>
        <tr>
          <a href="https://www.linkedin.com/in/amal-v-s-948079200/"><th><img src={ln} alt="linkedin" style={{width:"35px",height:"35px"}}/></th></a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/alchemist123"><th><img src={gh} alt="gitHub" style={{width:"35px",height:"35px"}}/></th></a>&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/_____alchemist______/"><th><img src={insta} alt="instagram" style={{width:"35px",height:"35px"}}/></th></a>
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
      </p>
              <div className="row">
                <div className="column">
                  <div className="card">
                    <div className="carfont">project</div>
                    <p>
                    <ul style={{textAlign:"left"}}>
                        <li>Doc Online</li>
                        <li>Inji </li>
                        <li>heya-chat app</li>
                        <li>covid-19 tacking </li>
                      </ul>
                      <a href="https://github.com/alchemist123?tab=repositories" style={{fontSize:"15px", color:"yellow"}}>Source code...</a>
                      </p>
                  </div>
                 
                </div>
                <div className="column">
                <div className="card">
                    <div className="carfont">Research</div>
                    <p>
                    Real-time humen emotion detection using CNN and fer2013 dataset.(Artificial Intelligence)
                       <br/>
                       <a href='/Ml' style={{fontSize:"15px", color:"yellow"}}>Test real-time...</a>
                      </p>
                  </div>
                </div>

                <div className="column">
                <div className="card">
                    <div className="carfont">Qualification</div>
                    <p>
                    MCA from Amirta School of arts and sciences kochi.
                      [Interset and passion is more then a Degree..]
                      <a href='#' style={{fontSize:"15px", color:"yellow"}}>Loading...</a>
                      </p>
                  </div>
                </div>
                <div className="column">
                <div className="card">
                    <div className="carfont">walk of life</div>
                    <p>
                    <ul>
                         <li>Mechine Learning </li>
                         <li>Web developing</li>
                         <li>Art works</li>
                         <li>spread love</li>
                       </ul>
                       <a href='#' style={{fontSize:"15px", color:"yellow"}}>ReLoading...</a>
                      </p>
                  </div>
                
                </div>
                </div>
               <p>Artificial intelligence is impacting the future of virtually every industry and every human being.
                  Artificial intelligence has acted as the main driver of emerging technologies like big data,
                  robotics and IoT, and it will continue to act as a technological innovator for the foreseeable future.
                  <br/><b><a href='/Ml' style={{fontSize:"15px", color:"black"}}>Experience the future....</a></b></p> <br/>
                  <p><b>send feedback to rjamaltdt123@gmail.com</b></p>
              
      </div>
      </Container>
    </div>
  );
}

export default App;
