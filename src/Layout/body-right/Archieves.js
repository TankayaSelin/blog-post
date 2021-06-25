import React from "react";
import LayoutRightComponents from "./LayoutRightComponents";

const Archieves = (props) => {
  const categories = [
    //Reduxtan cekilecek!!
    { name: "december, 2016", advs: 39 },
    { name: "november, 2016", advs: 48 },
    { name: "october, 2016", advs: 26 },
    { name: "september, 2016", advs: 24 },
    { name: "august", advs: 32 },
  ];
  return (
    <LayoutRightComponents title='archieves'>
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

export default Archieves;
