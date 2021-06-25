import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import axios from "axios";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './comments.css'

const Comments = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          props.params.id
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.params.id]);
  return (
    <div className="mt-5" style={{ background: "#fff" }}>
      <div className="py-3">
        <div className="col-12">
          <div class="">
            <div class="comment-card">
              <div class="row">
                <div class="col-md-12">
                  <div className="category-title mb-1">
                    <h6
                      className="text-uppercase m-0 pb-2"
                      style={{ fontSize: "14px" }}
                    >
                      comments
                    </h6>
                  </div>
                  {data.map((d) => (
                    <Comment key={d.id} data={d} />
                  ))}
                </div>
                <div className='d-flex justify-content-center align-items-center pt-2'>
                  <p className='text-capitalize' style={{fontSize: '14px'}}>view all Comments</p>
                  <span><ExpandMoreIcon/></span>
                </div>
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
    current_Id: state.current_Id,
  };
};

export default connect(mapStateToProps)(Comments);
