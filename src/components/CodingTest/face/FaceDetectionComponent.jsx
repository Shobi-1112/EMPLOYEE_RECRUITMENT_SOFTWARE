import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import '@tensorflow/tfjs-backend-webgl';
import * as blazeface from '@tensorflow-models/blazeface';

function CameraDeduction() {
  const webcamRef = useRef(null);
  const returnTensors = false;
  const [deductionCount, setDeductionCount] = useState(0);
  const [hasAlerted, setHasAlerted] = useState(false);

  useEffect(() => {
    const detect = async (model) => {
      if (webcamRef.current) {
        const video = webcamRef.current.video;
        video.oncontextmenu = (e) => {
          e.preventDefault();
        };
        video.controls = false;

        const videoWidth = 1200;
        const videoHeight = 1000;

        const prediction = await model.estimateFaces(video, returnTensors);

        setHasAlerted(false);

        if (prediction.length === 0) {
          alert("Face is not Detected");
          incrementDeductionCount();
        } else if (prediction.length > 1) {
          alert("Malpractice Activity will be Detected");
          incrementDeductionCount();
        } else {
          const [face] = prediction;
          if (face.landmarks[0][1] < videoHeight / 2 && face.landmarks[1][0] > videoWidth / 4 && face.landmarks[1][0] < videoHeight / 2 && face.landmarks[0][1] > videoWidth / 4) {
            alert("Face is not in the Desired position");
            incrementDeductionCount();
          }

          // Check if the face is turned away
          const angleThreshold = 100; // Adjust the threshold as needed
          const angle = calculateAngle(face.landmarks[0], face.landmarks[1], face.landmarks[2]);
          console.log(angle)
          if (angle > angleThreshold) {
            alert("Warning: Face turned away!");
            incrementDeductionCount();
          }
        }
      }
    };

    const incrementDeductionCount = () => {
      if (!hasAlerted) {
        setDeductionCount((prevCount) => prevCount + 1);
        setHasAlerted(true);
      }
    };

    const calculateAngle = (point1, point2, point3) => {
      const vector1 = [point1[0] - point2[0], point1[1] - point2[1]];
      const vector2 = [point3[0] - point2[0], point3[1] - point2[1]];
      const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];
      const magnitude1 = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2);
      const magnitude2 = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2);
      const cosTheta = dotProduct / (magnitude1 * magnitude2);
      return Math.acos(cosTheta) * (180 / Math.PI);
    };

    const runFaceDetection = async () => {
      const model = await blazeface.load();

      const intervalId = setInterval(() => {
        detect(model);
      }, 1000);

      return () => clearInterval(intervalId);
    };
    runFaceDetection();
  }, []);

  useEffect(() => {
    if (deductionCount >= 5) {
      window.location.href = 'https://www.w3schools.com/';
    }
  }, [deductionCount]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef} className="video-controls" />
        <div>Total Deductions: {deductionCount}</div>
      </header>
    </div>
  );
}

export default CameraDeduction;
