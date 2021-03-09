import {Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import pro from './me.jpg'
import ln from './linkedin.png'
import gh from './git.png'
import insta from './insta.gif'
import './App.css';
function App() {
  return (
    <div className="App-header"><br/>
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
      <table>
        <tr>&nbsp;
          <td>
                  <Card style={{ width: '13rem',backgroundColor:"grey",borderRadius:"10%"}}>
                    <Card.Body><br/>
                    <Card.Title className="carfont">Projects</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Doc Online</li>
                        <li>Inji - film review</li>
                        <li>heya-chat app</li>
                        <li>covid-19 tacking </li>
                      </ul>
                       
                </Card.Text>
                <Card.Link href="https://github.com/alchemist123?tab=repositories" style={{fontSize:"17px", color:"white"}}>source code...</Card.Link>
                </Card.Body>
                </Card></td>
                <td>
                <Card style={{ width: '13rem',backgroundColor:"grey",borderRadius:"10%"}}>
                    <Card.Body><br/>
                    <Card.Title className="carfont">Research</Card.Title>
                    <Card.Text>
                       Real-time humen emotion detection using CNN and fer2013 dataset.
                       (Artificial Intelligence)
                </Card.Text>
                <Card.Link href="https://github.com/alchemist123" style={{fontSize:"17px", color:"white"}}>Test real-time...</Card.Link>
                </Card.Body>
                </Card></td>
        </tr>
        <tr>&nbsp;
          <td>
                  <Card style={{ width: '13rem',backgroundColor:"grey",borderRadius:"10%"}}>
                    <Card.Body><br/>
                    <Card.Title className="carfont">Qualification</Card.Title>
                    <Card.Text>
                      MCA from Amirta School of arts and sciences kochi.
                      [Interset and passion is more then a Degree..]
                       
                </Card.Text>
                <Card.Link href="https://github.com/alchemist123?tab=repositories" style={{fontSize:"17px", color:"white"}}>source code...</Card.Link>
                </Card.Body>
                </Card></td>
                <td>
                <Card style={{ width: '13rem',backgroundColor:"grey",borderRadius:"10%"}}>
                    <Card.Body><br/>
                    <Card.Title className="carfont">walk of life</Card.Title>
                    <Card.Text>
                       <ul>
                         <li>Mechine Learning </li>
                         <li>Web developing</li>
                         <li>Art works</li>
                         <li>spread love</li>
                       </ul>
                </Card.Text>
                <Card.Link href="https://github.com/alchemist123" style={{fontSize:"17px", color:"white"}}>Test implemention ...</Card.Link>
                </Card.Body>
                </Card></td>
        </tr>
      </table>



      </div>
      </Container>
      send feedback rjamaltdt@gmail.com
    </div>
  );
}

export default App;
