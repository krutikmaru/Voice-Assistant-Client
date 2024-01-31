import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const Countries = ({ data }) => {
  function getCountryCounts(data) {
    const countryCounts = {};

    data.forEach((item) => {
      const country = item.location.country;

      if (!countryCounts[country]) {
        countryCounts[country] = 1;
      } else {
        countryCounts[country]++;
      }
    });

    const result = Object.entries(countryCounts).map(([country, count]) => ({
      country,
      count,
    }));

    return result;
  }
  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">Category</h1>
      <BarChart width={1000} height={250} data={getCountryCounts(data)}>
        <XAxis dataKey="country" />
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

export default Countries;
