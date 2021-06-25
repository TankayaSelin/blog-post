import React from "react";
import bannerImage from "../images/banner.jpg";


const Banner = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="banner-container" style={{backgroundImage: `url(${bannerImage})`}}>
          <div className="banner-contents container alignments">
            <div className='row'>
            <div className="col-12 px-0 py-3">
              <span
                className="text-capitalize text-white"
                style={{ fontSize: "20px" }}
              >
                blog
              </span>
            </div>
            <div className="col-12 px-0">
              <span
                className="text-capitalize text-white"
                style={{ fontSize: "14px" }}
              >
                {" " + "home" + " / "}
              </span>
              <span
                className="text-capitalize text-white"
                style={{ fontSize: "14px" }}
              >
                {" " + "blog" + " / "}
              </span>
              <span
                className="text-capitalize text-success"
                style={{ fontSize: "14px" }}
              >
                {" " + "blog two column with right sidebar" + " / "}
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
