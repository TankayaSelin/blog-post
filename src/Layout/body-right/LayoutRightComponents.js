import React from "react";


const LayoutRightComponents = (props) => {
  return (
    <div className="row mb-4">
      <div className="col-12 p-2" style={{background: '#fff'}}>
        <div className='py-2 category-title'>
            <h6 className='text-uppercase m-0' style={{fontSize: props.fontSize}}>{props.title}</h6>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default LayoutRightComponents;
