import React from "react";
import LayoutRightComponents from "./LayoutRightComponents";

const Tags = (props) => {
  
  const tags = [
    //Reduxtan cekilecek!!
    { name: "creative" },
    { name: "lifestyle" },
    { name: "music" },
    { name: "fashion" },
    { name: "life" },
    { name: "typography" },
    { name: "design" },
    { name: "travel" },
    { name: "image" },
  ];
  return (
    <LayoutRightComponents title="tags cloud">
      <div className="row py-3 px-3">
        {tags.map((tag) => (
          <div className="col p-0 m-1" style={{border: '1px solid lightgrey'}}>
              <p className={tag.name==='fashion' ? 'py-1 px-3 text-center text-uppercase changeColor' :'py-1 px-3 text-center text-uppercase'}>{tag.name}</p>
          </div>
        ))}
      </div>
    </LayoutRightComponents>
  );
};



export default Tags;
