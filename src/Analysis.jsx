import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./analyzers/Category";
import Countries from "./analyzers/Country";
import City from "./analyzers/City";
import DeviceType from "./analyzers/DeviceType";
import OperatingSystem from "./analyzers/OperatingSystem";
import Browser from "./analyzers/Browser";
import Hour from "./analyzers/Hour";
import DayName from "./analyzers/DayName";
import MonthName from "./analyzers/MonthName";
const Analysis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/getAllDocuments");
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center py-10 font-lexend px-20">
      <div className="w-full">
        <h1 className="text-green-primary text-3xl">Analysis Reports 📄</h1>
      </div>
      <div>
        <Category data={data} />
        <Countries data={data} />
        <City data={data} />
        <DeviceType data={data} />
        <OperatingSystem data={data} />
        <Browser data={data} />
        <Hour data={data} />
        <DayName data={data} />
        <MonthName data={data} />
      </div>
    </div>
  );
};

export default Analysis;
