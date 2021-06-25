import React from "react";
import LayoutRightComponents from "./LayoutRightComponents";

const NewsLetter = (props) => {
  return (
    <LayoutRightComponents title='NewsLetter'>
      <div className='pt-3 pb-1'>
        <input placeholder="Full Name" />
      </div>
      <div className='py-2'>
        <input placeholder="Email Address" />
      </div>
      <div className='py-1'>
          <button className='btn btn-success text-uppercase'>Submit</button>
      </div>
    </LayoutRightComponents>
  );
};

export default NewsLetter;
