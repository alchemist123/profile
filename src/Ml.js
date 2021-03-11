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
            <div className="LoginBox">
              <video
                ref={videoRef}
                style={{ transform: "scale(-1, 1)" }}
                width="250"
                height="120" /><br/>
                {loaded && (
                <button className="btn" onClick={() => toggle()}>
                <span>{start ? "Stop" : "Start"}</span>
                
                </button>
                )}
                {result.length > 0 && (
          <div>
            <DataChart data={result[0]}/>
          </div>
        )}
                
              </div>
            </Container>

        </div>
        
    )
}
export default Ml;