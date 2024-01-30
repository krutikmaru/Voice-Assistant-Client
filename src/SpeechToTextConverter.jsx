import React, { useState } from "react";

const SpeechToTextConverter = ({
  isCapturing,
  setIsCapturing,
  capturedText,
  setCapturedText,
}) => {
  const [interimResults, setInterimResults] = useState("");
  const [speechRecognizer, setSpeechRecognizer] = useState(null);

  const startConverting = () => {
    setIsCapturing(true);

    if ("webkitSpeechRecognition" in window) {
      setCapturedText("");
      const speech = new window.webkitSpeechRecognition();
      speech.continuous = true;
      speech.interimResults = true;
      speech.lang = "en-IN";
      speech.start();
      setSpeechRecognizer(speech);

      let finalTranscripts = "";

      speech.onresult = (event) => {
        let interimTranscripts = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          transcript.replace("\n", "<br>");
          if (event.results[i].isFinal) {
            finalTranscripts += transcript;
            setCapturedText(finalTranscripts);
            setInterimResults("");
          } else {
            interimTranscripts += transcript;
            setInterimResults(interimTranscripts);
          }
        }
      };

      speech.onerror = (event) => {
        alert("Error: " + event);
      };

      speech.onspeechend = (event) => {
        setCapturedText(finalTranscripts);
        setInterimResults("");
      };
    } else {
      alert(
        "Your browser is not supported. Please download Google Chrome or update your Google Chrome!"
      );
    }
  };

  const stopConverting = () => {
    setIsCapturing(false);
    if (speechRecognizer) {
      speechRecognizer.stop();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div>
        <span className="text-gray-500">{interimResults}</span>
        <span className="text-white">{capturedText}</span>
      </div>
      <div className="flex space-x-4">
        {!isCapturing ? (
          <button
            onClick={startConverting}
            className="w-24 py-1 px-4 rounded-md bg-green-primary text-black-main text-sm font-semibold"
          >
            Capture
          </button>
        ) : (
          <button
            onClick={stopConverting}
            className="w-24 py-1 px-4 rounded-md bg-green-primary text-black-main text-sm font-semibold"
          >
            Stop
          </button>
        )}
        {!isCapturing && capturedText && (
          <button
            onClick={stopConverting}
            className="w-24 py-1 px-4 rounded-md bg-green-primary text-black-main text-sm font-semibold"
          >
            Send
          </button>
        )}
      </div>
    </div>
  );
};

export default SpeechToTextConverter;
