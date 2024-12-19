import { useState } from "react";
import axios from 'axios';

/* we can make use of these className in css to make styling to enhance the frontend.
adding states - uploading a file, fetching the result in text (transcription)
handleFileChange - once the user has uploaded(hitting the backend API) the file we need to change the file status from null to not null -- in order to hit the backend we need to use axios. 
Sometimes axios will not import then we have to head over to package.json - if you don't find then go to terminal and type "npm install axios"
*/

const AudioUploader = () => {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");

    const handleFileChange = (e) =>
    {
        setFile(e.target.files[0]);


    };

    const handleUploader = async () => {
        const formData = new FormData();
        formData.append('file',file);

        try {
            const response = await axios.post('http://localhost:9096/api/transcibe', formData, {
                headers:{
                    'Content-Type':'multipart/form-data',
                }

            });

            setTranscription(response.data);

        } catch (error) {
            console.error("error in transcribing audio", error);
            
        }

    };

    return(
        <div className="container">
            <h1>
                Audio to Text transcriber
            </h1>
            <div className="file-input">
                <input type="file" accept="audio/*" onChange={handleFileChange}></input>
            </div>
            <button className="upload-button" onClick={handleUploader}>transcribe</button>
            <div className="transcription-result">
                <h2>Transcription Result</h2>
                <p>{transcription}</p>
            </div>
        </div>
    );
}

export default AudioUploader;

