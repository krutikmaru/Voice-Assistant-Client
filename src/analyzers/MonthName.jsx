import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const MonthName = ({ data }) => {
  function getMonthNameCounts(data) {
    const monthNameCounts = {};

    data.forEach((item) => {
      const monthName = item.datetime.monthName;

      if (!monthNameCounts[monthName]) {
        monthNameCounts[monthName] = 1;
      } else {
        monthNameCounts[monthName]++;
      }
    });

    const result = Object.entries(monthNameCounts).map(
      ([monthName, count]) => ({
        monthName,
        count,
      })
    );

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">
        Month Name Analysis
      </h1>
      <BarChart width={1000} height={250} data={getMonthNameCounts(data)}>
        <XAxis dataKey="monthName" />
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

export default MonthName;
