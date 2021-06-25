import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import LayoutV1 from "../../../Layout/LayoutV1";
import postImage from "../../../images/cardImage.jpg";
import AboutAuthor from "../AboutAuthor";
import YouMayLike from "../YouMayLike";
import Comments from "../comments/Comments";
import LeaveComment from "../leaveComment/LeaveComment";
import PostFooter from "./PostFooter";
import './post.css'

const Post = (props) => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const params = props.match.params;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <LayoutV1>
      <div className="row px-2">
        <div className="p-0" style={{ background: "#fff" }}>
          <div className="post-image-container">
            <img className="images" src={postImage} alt="post-image" />
          </div>
          <div className="post-content-container py-3 px-3">
            <div className="post-header-container borderBottom pb-3">
              <div>
                <h6 className="text-capitalize lineClamp2">{post.title}</h6>
              </div>
              <div className="post-details-container">
                <div>
                  <p className="post-details">
                    Posted by <span style={{ color: "green" }}>NinjaTeam</span>
                  </p>
                </div>
                <div>
                  <p className="post-details">21 November, 2016</p>
                </div>
                <div>
                  <p className="post-details">03 Comments</p>
                </div>
                <div>
                  <p className="post-details">49 Views</p>
                </div>
              </div>
            </div>
            <div className="post-content-body pt-4">
              <div class="square">
                <div>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20190808143838/logsm.png"
                    alt="Longtail boat in Thailand"
                    style={{ float: "left", margin: "5px" }}
                  />
                </div>

                <p className='borderBottom pb-4' style={{ textAlign: "justify" }}>
                  How many times were you frustrated while looking out for a
                  good collection of programming/algorithm /interview questions?
                  What did you expect and what did you get? This portal has been
                  created to provide well written, well thought and well
                  explained solutions for selected questions. An IIT Roorkee
                  alumnus and founder of GeeksforGeeks. He loves to solve
                  programming problems in most efficient ways. Apart from
                  GeeksforGeeks, he has worked with DE Shaw and Co. as a
                  software developer and JIIT Noida as an assistant professor.
                  It is a good platform to learn programming. It is an
                  educational website. Prepare for the Recruitment drive of
                  product based companies like Microsoft, Amazon, Adobe etc with
                  a free online placement preparation course.
                </p>
              </div>
            </div>
            <PostFooter/>
          </div>
        </div>
        <AboutAuthor />
        <YouMayLike />
        <Comments params={params}/>
        <LeaveComment params={params}/>
      </div>
    </LayoutV1>
  );
};

const mapStateToProps = (state) => {
  return {
    current_Id: state.current_Id,
  };
};

export default connect(mapStateToProps)(Post);
