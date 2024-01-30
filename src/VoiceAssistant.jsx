import React, { useEffect, useState } from "react";
import SpeechToTextConverter from "./SpeechToTextConverter";
import Response from "./Response";
import { categories, responses } from "./utils/data";
import { getCityAndCountry } from "./utils/getCityAndCountry";
import { getDeviceType } from "./utils/getDeviceType";
import { getOperatingSystem } from "./utils/getOperatingSystem";
import { getBrowser } from "./utils/getBrowser";
import { getCurrentDatetime } from "./utils/getDateTime";

const VoiceAssistant = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedText, setCapturedText] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [response, setResponse] = useState("");
  const [location, setLocation] = useState({
    city: "",
    country: "",
    coords: { latitude: 0, longitude: 0 },
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          let loc = await getCityAndCountry(latitude, longitude);
          setLocation(loc);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const sendPrompt = async () => {
    setIsRequesting(true);
    let randomIndex = Math.round(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    const randomResponse =
      responses[randomIndex][Math.round(Math.random() * 2)];
    const deviceInfo = {
      deviceType: getDeviceType(),
      operatingSystem: getOperatingSystem(),
      browser: getBrowser(),
    };
    const res = {
      prompt: capturedText,
      response: randomResponse,
      category: randomCategory,
      timestamp: new Date(),
      location,
      deviceInfo,
      datetime: getCurrentDatetime(),
    };
    console.log(res);
    setResponse(res.response);
    setIsRequesting(false);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-lexend">
      <SpeechToTextConverter
        {...{
          isCapturing,
          setIsCapturing,
          capturedText,
          setCapturedText,
          isRequesting,
          sendPrompt,
        }}
      />
      {response && <Response response={response} />}
    </div>
  );
};

export default VoiceAssistant;
