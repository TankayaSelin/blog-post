import React from "react";

const BannerAds = (props) => {
  return (
    <div className="row">
      <div
        className="col-12 d-flex justify-content-center align-items-center"
        style={bannerContainer}
      >
        <div>
          <p className="text-uppercase">Banner Ads</p>
          <p className='text-center'>300X250</p>
        </div>
      </div>
    </div>
  );
};

const bannerContainer = {
  border: "5px solid green",
  width: "100%",
  height: "200px",
};

export default BannerAds;
