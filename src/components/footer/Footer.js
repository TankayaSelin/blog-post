import { green } from "@material-ui/core/colors";
import React from "react";

const Footer = (props) => {
  return (
    <div className="row pb-4">
      <div className='col-12 col-md-8'>
          <p className='text-capitalize' style={{fontSize: '14px'}}>
        copyright @ 2016 <span style={style}>readblog</span>. all rights reserved designed by <span style={style}>anthony</span>
        </p>
      </div>
      <div className='col-12 col-md-4'>
          icons
      </div>
    </div>
  );
};

const style={
    color: 'green'
}


export default Footer;
