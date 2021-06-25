import React from "react";
import authorImage from "../../images/cardImage.jpg";
import LayoutRightComponents from "../../Layout/body-right/LayoutRightComponents";

const AboutAuthor = () => {
  return (
    <div className='mt-5' style={{background: '#fff'}}>
      <div className="row py-3">
        <div className="col-12 col-md-3">
          <img src={authorImage} className="images"/>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12">
              <div className="category-title mb-1">
                <h6
                  className="text-uppercase m-0 pb-2"
                  style={{fontSize: '14px'}}
                >
                  about author
                </h6>
              </div>
              <div>
                  <p className='lineClamp3 py-2' style={{fontSize: '12px', color: 'gray'}}>He loves to solve programming problems in most efficient ways. Apart from GeeksforGeeks, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
