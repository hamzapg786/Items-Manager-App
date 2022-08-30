import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = ` chats(${myNum}) `;
  });

  const myStyle = {
    color: "red",
    textAlign: "center",
    margin: "auto",
    fontSize: "40px",
  };

  const buttonStyle1 = {
    fontSize: "20px",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <p>{myNum}</p>

        <button style={buttonStyle1} onClick={() => setMyNum(myNum + 1)}>
          INC
        </button>
      </div>
    </>
  );
};

export default UseEffect;
