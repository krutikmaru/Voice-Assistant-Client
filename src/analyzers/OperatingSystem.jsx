import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const OperatingSystem = ({ data }) => {
  function getOperatingSystemCounts(data) {
    const operatingSystemCounts = {};

    data.forEach((item) => {
      const operatingSystem = item.deviceInfo.operatingSystem;

      if (!operatingSystemCounts[operatingSystem]) {
        operatingSystemCounts[operatingSystem] = 1;
      } else {
        operatingSystemCounts[operatingSystem]++;
      }
    });

    const result = Object.entries(operatingSystemCounts).map(
      ([operatingSystem, count]) => ({
        operatingSystem,
        count,
      })
    );

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">
        Operating System
      </h1>
      <BarChart width={1000} height={250} data={getOperatingSystemCounts(data)}>
        <XAxis dataKey="operatingSystem" />
        <YAxis />
        <Tooltip
          contentStyle={{
            background: "#363636",
            border: "none",
            borderRadius: 10,
            color: "black",
          }}
          itemStyle={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
          labelStyle={{ color: "#deff10" }}
        />
        <Legend />
        <Bar dataKey="count" fill="#deff10" />
      </BarChart>
    </div>
  );
};

export default OperatingSystem;
