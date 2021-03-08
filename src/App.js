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
      <img src={pro} style={{borderRadius:"50%", width:"10%",height:"10%", opacity:"90%"}}/><br/>
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
        <tr>
          <td>
                  <Card style={{ width: '13rem'}}>
                    <Card.Body>
                    <Card.Title className="carfont">PROJECT</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card></td>
                <td>
                  <Card style={{ width: '13rem' }}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card></td>
        </tr>
      </table>



      </div>
      </Container>
    </div>
  );
}

export default App;
