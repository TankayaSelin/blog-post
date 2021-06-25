import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cardImage from "../../../images/cardImage.jpg";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import './card.css'

const Card = (props) => {
  const [id, setId] = useState(-1);
  useEffect(() => {
    setId(props.post.id);
  }, [props.post.id]);

  return (
    <div className="col-12 col-md-6">
      <Link
        to={`/post/${id}`}
      >
        <div class="small">
          <article class="recipe">
            <div class="card-box">
              <img src={cardImage} width="1500" height="1368" alt="" />
            </div>
            <div class="recipe-content">
              <div className="pb-2">
                <div class="recipe-title">
                  <p>{props.post.title}</p>
                </div>
              </div>
              <div className="row pb-1">
                <div className="col-12 col-md-6 card-author-container">
                  <div className="d-flex align-items-center">
                    <PersonIcon className="card-icons" />
                    <p className="card-author m-0 textOverflow" style={{ fontSize: "10px" }}>
                      Posted by NinjaTeam
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 card-date-container pb-2">
                  <div className="d-flex align-items-center">
                    <DateRangeIcon className="card-icons" />
                    <p className="card-date m-0 textOverflow" style={{ fontSize: "10px" }}>
                      21 Nov, 2016
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="recipe-desc m-0">{props.post.body}</p>
              </div>
            </div>
          </article>
        </div>
      </Link>
    </div>
  );
};


export default connect()(Card);
