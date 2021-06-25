import React from "react";
import LayoutRightComponents from "./LayoutRightComponents";


const RecentComments = (props) => {
    const comments=[
        {description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
    ]
  return (
    <LayoutRightComponents title='recent comments'>
      <div className="py-3">
    {comments.map(comment => (
         <div
         className="d-flex py-2"
         style={{ borderBottom: "1px solid lightgrey" }}
       >
         <p className="category-name category-info lineClamp2">{comment.description}</p>
       </div>
    ))}
    </div>
  </LayoutRightComponents>
  );
};

export default RecentComments;
