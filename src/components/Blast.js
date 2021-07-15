import React from "react";

const Blast = ({ string, color }) => {
  let res = string.split("");
  return (
    <div style={{ marginLeft: "15px", color: `${color}` }}>
      {res.map((item, key) => {
        if (item === " ") {
          return <span key={key}> </span>;
        } else {
          return (
            <span key={key} className="blast animate__animated">
              {item}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Blast;
