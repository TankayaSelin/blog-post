import React from "react";
import LayoutRightComponents from "./LayoutRightComponents";
import cardImage from "../../images/cardImage.jpg";

const LatestPost = (props) => {
  const posts = [
    {
      name: "Lorem ipsum dolor sit amet consect id",
      date: "05 December, 2016",
    },
    { name: "Lorem ipsum dolor sit amet", date: "05 December, 2016" },
    { name: "Lorem ipsum dolor sit amet", date: "05 December, 2016" },
    { name: "Lorem ipsum dolor sit amet", date: "05 December, 2016" },
    { name: "Lorem ipsum dolor sit amet", date: "05 December, 2016" },
  ];
  return (
    <LayoutRightComponents title="latest posts">
      <div className="py-3">
        {posts.map((post) => (
          <div className="row py-2">
            <div className="col-12 col-md-4">
              <img
                className="images"
                src={cardImage}
              />
            </div>
            <div className="col-12 col-md-8">
              <p
                className="lineClamp2 text-capitalize pb-1"
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                {post.name}
              </p>
              <p className="pb-2" style={{ fontSize: "10px", color: "gray" }}>
                {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LayoutRightComponents>
  );
};

export default LatestPost;
