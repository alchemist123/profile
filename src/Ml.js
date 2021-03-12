import React,{useEffect,useState,useRef} from 'react'
import ml5 from 'ml5'
import useInterval from '@use-it/interval';

import { Container } from 'react-bootstrap';
import DataChart from './DataChart';
let classifier;
function Ml() {
    const videoRef = useRef();
    const [start, setStart] = useState(false);
    const [result, setResult] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        classifier = ml5.imageClassifier("./model/model.json", () => {
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
              setLoaded(true);
            });
        });
      }, []);

      useInterval(() => {
        if (classifier && start) {
          classifier.classify(videoRef.current, (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            setResult(results);
          });
        }
      }, 500);
      const toggle = () => {
        setStart(!start);
        setResult([]);
      }
    
    return (
        <div className="App-header">
          <Container><br/><br/>
            <div className="LoginBox"><br/>
            <div className="refont">Real-time emotion detection</div>
              <video
                ref={videoRef}
                style={{ transform: "scale(-1, 1)",borderRadius:"8%" }}
                width="260"
                height="120" 
                /><br/>
                {loaded && (
                <button className="btn" onClick={() => toggle()}>
                <span>{start ? "Stop" : "Start"}</span>
                
                </button>
                )}
                {result.length > 0 && (
                <div>
                  <DataChart data={result[0]}/>
                </div>
                )}<br/>
                <p><b><u>Real-time emotion detection</u><br/>
                Emotions are a fundamental component of being human
                . Recognising emotions has extensive applications in the 
                area of human-computer interaction (HCI) such as affective 
                computing, interactive video games, human-robot interaction,
                and medical diagnosis. Emotions can be expressed 
                through unimodal social behaviours, such as speech, facial 
                expressions, and gestures, or bimodal behaviour such as 
                speech and facial expressions, or they can be expressed 
                through multimodal parameters such as audio, video and 
                physiological signals.<br/>
                The main part of the message is the facial expression, 
                which constitutes 55% of the overall impression. 
                Therefore facial expressions are the key mechanism for
                understanding emotions 
                </b></p><br/>
                <p>
                  <b><u>About Model</u>About Model<br/><br/>The above model is just a sample, not a well trained model just trained using a samll amount of data from 
                    Fer2013 dataset for emotion Recogniction.
                  </b>
                </p><br/>
                <a href='/' style={{fontSize:"15px", color:"black"}}>Back to Profile...</a>
                
                
              </div>
            </Container>

        </div>
        
    )
}
export default Ml;