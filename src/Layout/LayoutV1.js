import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import BodyRigth from "./body-right/BodyRight";
import Footer from "../components/footer/Footer";

const LayoutV1 = (props) => {
  return (
    <div className="col-12">
      <Header />
      <Banner />
      <div className="py-4 mb-2" style={{ background: "#f9f8fa" }}>
        <div className="container body-container alignments">
          <div className="row">
          <div className="col-12 col-md-8">
            {props.children}
          </div>
          <div className="col-12 col-md-4">
            <BodyRigth />
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LayoutV1;
