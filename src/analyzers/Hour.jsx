import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const Hour = ({ data }) => {
  function getHourCounts(data) {
    const hourCounts = {};

    data.forEach((item) => {
      const hour = item.datetime.hour;

      if (!hourCounts[hour]) {
        hourCounts[hour] = 1;
      } else {
        hourCounts[hour]++;
      }
    });

    const result = Object.entries(hourCounts).map(([hour, count]) => ({
      hour,
      count,
    }));

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">
        Hourly Analysis
      </h1>
      <BarChart width={1000} height={250} data={getHourCounts(data)}>
        <XAxis dataKey="hour" />
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

export default Hour;
