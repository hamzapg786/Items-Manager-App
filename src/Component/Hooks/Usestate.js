import React, { useState } from "react";

const Usestate = () => {
  const [myNum, setMyNum] = useState(0);

  const myStyle = {
    color: "red",
    textAlign: "center",
    margin: "auto",
    fontSize: "40px",
  };

  const buttonStyle1 = {
    fontSize: "20px",
    marginRight: "10px",
  };

  const buttonStyle2 = {
    fontSize: "20px",
    marginLeft: "10px",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <p>{myNum}</p>

        <button style={buttonStyle1} onClick={() => setMyNum(myNum + 1)}>
          INC
        </button>
        <span></span>

        <button
          style={buttonStyle2}
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
          DEC
        </button>
      </div>
    </>
  );
};

export default Usestate;
