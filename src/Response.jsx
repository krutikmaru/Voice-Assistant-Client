import React from "react";

const Response = ({ response }) => {
  return (
    <div className="border-[1px] border-green-primary mt-5 text-white rounded-md py-3 px-5">
      <span className="border-2 border-green-primary p-1 rounded-md mr-3">
        🤖
      </span>
      {response}
    </div>
  );
};

export default Response;
