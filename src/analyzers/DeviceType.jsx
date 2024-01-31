import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const DeviceType = ({ data }) => {
  function getDeviceTypeCounts(data) {
    const deviceTypeCounts = {};

    data.forEach((item) => {
      const deviceType = item.deviceInfo.deviceType;

      if (!deviceTypeCounts[deviceType]) {
        deviceTypeCounts[deviceType] = 1;
      } else {
        deviceTypeCounts[deviceType]++;
      }
    });

    const result = Object.entries(deviceTypeCounts).map(
      ([deviceType, count]) => ({
        deviceType,
        count,
      })
    );

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">
        Device Type
      </h1>
      <BarChart width={1000} height={250} data={getDeviceTypeCounts(data)}>
        <XAxis dataKey="deviceType" />
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

export default DeviceType;
