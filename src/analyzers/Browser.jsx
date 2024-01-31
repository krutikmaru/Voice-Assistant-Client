import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const Browser = ({ data }) => {
  function getBrowserCounts(data) {
    const browserCounts = {};

    data.forEach((item) => {
      const browser = item.deviceInfo.browser;

      if (!browserCounts[browser]) {
        browserCounts[browser] = 1;
      } else {
        browserCounts[browser]++;
      }
    });

    const result = Object.entries(browserCounts).map(([browser, count]) => ({
      browser,
      count,
    }));

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">Browser</h1>
      <BarChart width={1000} height={250} data={getBrowserCounts(data)}>
        <XAxis dataKey="browser" />
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

export default Browser;
