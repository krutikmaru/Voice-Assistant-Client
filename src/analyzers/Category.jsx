import React from "react";
import { BarChart, YAxis, XAxis, Tooltip, Legend, Bar } from "recharts";

const Category = ({ data }) => {
  function getCategoryCounts(data) {
    const categoryCounts = {};

    data.forEach((item) => {
      const category = item.category;

      if (!categoryCounts[category]) {
        categoryCounts[category] = 1;
      } else {
        categoryCounts[category]++;
      }
    });

    const result = Object.entries(categoryCounts).map(([category, count]) => ({
      category,
      count,
    }));

    return result;
  }
  return (
    <div>
      <h1 className="text-green-primary ml-6 mt-10 mb-4 text-2xl">Category</h1>
      <BarChart width={1000} height={250} data={getCategoryCounts(data)}>
        <XAxis dataKey="category" />
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

export default Category;
