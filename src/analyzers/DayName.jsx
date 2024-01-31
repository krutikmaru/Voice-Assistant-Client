import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const DayName = ({ data }) => {
  function getDayNameCounts(data) {
    const dayNameCounts = {};

    data.forEach((item) => {
      const dayName = item.datetime.dayName;

      if (!dayNameCounts[dayName]) {
        dayNameCounts[dayName] = 1;
      } else {
        dayNameCounts[dayName]++;
      }
    });

    const result = Object.entries(dayNameCounts).map(([dayName, count]) => ({
      dayName,
      count,
    }));

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">
        Day Name Analysis
      </h1>
      <BarChart width={1000} height={250} data={getDayNameCounts(data)}>
        <XAxis dataKey="dayName" />
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

export default DayName;
