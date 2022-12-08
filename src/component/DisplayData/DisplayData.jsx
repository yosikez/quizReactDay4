import React from "react";
import "./DisplayData.style.css";

const DisplayData = ({ data }) => {
  return (
    <div className="dataList">
      <div className="dataItem">
        <p>Name </p>
        <p>{data.name}</p>
      </div>
      <div className="dataItem">
        <p>Age </p>
        <p>{data.age}</p>
      </div>
      <div className="dataItem">
        <p>Email </p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default DisplayData;
