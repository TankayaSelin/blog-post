import React from "react";
import "./post.css";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShareIcon from "@material-ui/icons/Share";

const PostFooter = (props) => {
  return (
    <div className="post-footer-container pt-2">
      <div className="d-flex align-items-center py-1">
        <LocalOfferIcon style={{ color: "green", fontSize: "14px" }} />
        <p style={{ fontWeight: "600" }}>Tags:</p>
        <p>Lifestyle,Travel,Trip,Tour</p>
      </div>
      <div className="d-flex align-items-center py-1">
        <ShareIcon style={{ color: "green", fontSize: "14px" }} />
        <p style={{ fontWeight: "600" }}>Tags:</p>
        <p>Facebook,Twitter,Google+</p>
      </div>
    </div>
  );
};

export default PostFooter;
