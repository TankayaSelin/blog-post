import React from "react";
import LayoutRightComponents from "./LayoutRightComponents";

const Categories = (props) => {
  const categories = [
    //Reduxtan cekilecek!!
    { name: "Advertising", advs: 39 },
    { name: "Creative", advs: 48 },
    { name: "Inspiration", advs: 26 },
    { name: "LifeStyle", advs: 24 },
    { name: "Music", advs: 32 },
    { name: "Photography", advs: 69 },
    { name: "Fashion", advs: 78 },
    { name: "Travel", advs: 49 },
  ];
  return (
    <LayoutRightComponents title='categories'>
      <div className="py-3">
      {categories.map((category) => (
        <div
          className="d-flex justify-content-between py-2"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <p className="category-name category-info">{category.name}</p>
          <p className="category-number category-info">{category.advs}</p>
        </div>
      ))}
      </div>
    </LayoutRightComponents>
  );
};

export default Categories;
