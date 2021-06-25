import React, { useState, useEffect } from "react";

const BodyLeft = (props) => {

  return (
    <div className="row">
      {props.children}
    </div>
  );
};

export default BodyLeft;
