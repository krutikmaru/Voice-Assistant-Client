import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const City = ({ data }) => {
  function getCityCounts(data) {
    const cityCounts = {};

    data.forEach((item) => {
      const city = item.location.city;

      if (!cityCounts[city]) {
        cityCounts[city] = 1;
      } else {
        cityCounts[city]++;
      }
    });

    const result = Object.entries(cityCounts).map(([city, count]) => ({
      city,
      count,
    }));

    return result;
  }

  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">City</h1>
      <BarChart width={1000} height={250} data={getCityCounts(data)}>
        <XAxis dataKey="city" />
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

export default City;
