import React, { useEffect } from "react";
import { connect } from "react-redux";
import { recentTwoPosts } from "../../actions/index";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Card from "./Card/Card";

const YouMayLike = (props) => {
  useEffect(() => {
    props.recentTwoPosts();
  }, []);
  return (
    <div className="mt-5" style={{ background: "#fff" }}>
      <div className="py-3">
        <div className="col-12">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="category-title mb-1">
                <h6
                  className="text-uppercase m-0 pb-2"
                  style={{ fontSize: "14px" }}
                >
                  you may also like
                </h6>
              </div>
              <div className="d-flex">
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "0px 6px 0 10px",
                  }}
                  className="justify-content-center mx-2"
                >
                  <ArrowBackIosIcon style={{ fontSize: "10px" }} />
                </div>
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "0px 6px 0 10px",
                  }}
                  className="justify-content-center"
                >
                  <ArrowForwardIosIcon style={{ fontSize: "10px" }} />
                </div>
              </div>
            </div>
            <div>
              <div className="row pt-3">
                {props.recentPosts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recentPosts: state.recentPosts,
  };
};

export default connect(mapStateToProps, { recentTwoPosts })(YouMayLike);
