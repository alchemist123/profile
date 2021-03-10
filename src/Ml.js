import React,{useEffect,useState,useRef} from 'react'
import ml5 from 'ml5'
import useInterval from '@use-it/interval';
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
            console.log(results)
          });
        }
      }, 500);
      const toggle = () => {
        setStart(!start);
        setResult([]);
      }
    
    return (
        <div>
            <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="200"
            height="150" />
            {loaded && (
            <button onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
          )}

            
        </div>
    )
}
export default Ml;