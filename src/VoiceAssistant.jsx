import React, { useState } from "react";
import SpeechToTextConverter from "./SpeechToTextConverter";

const VoiceAssistant = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedText, setCapturedText] = useState("");
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-lexend">
      <SpeechToTextConverter
        {...{ isCapturing, setIsCapturing, capturedText, setCapturedText }}
      />
    </div>
  );
};

export default VoiceAssistant;
