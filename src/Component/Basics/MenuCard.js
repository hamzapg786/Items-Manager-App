import React from "react";

const MenuCard = ({ menuData }) => {
  const myStyle = { color: "red" };
  return (
    <>
      <section className="main-card--container">
        {menuData.map((currElm, index) => {
          const { id, name, category, image, description } = currElm;
          return (
            <>
              <div className="card-container" key={index}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle" style={myStyle}>
                      {category}
                    </span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
