import React, { useState } from "react";
import { connect } from "react-redux";
import { currentPost } from "../actions/index";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Header = (props) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
    props.currentPost(event.target.value);
  };
  return (
    <div className="row">
      <div className="col-12 header-container d-flex justify-content-center align-items-center pt-4 pb-4">
        <div className="logo-container">
          <div className="logo text-center">
            <span id="read">read</span>
            <span id="blog">blog.</span>
          </div>
          <div className="text-center">
            <span id="logo-text">we love creativity minimal blog</span>
          </div>
        </div>
      </div>
      <div
        className="col-12 d-flex justify-content-center py-2"
        style={{ position: "relative" }}
      >
        <div className="px-2 py-1">
          <NavLink to="" className="navbar-links text-uppercase">
            home
          </NavLink>
        </div>
        <div className="px-2 py-1">
          <NavLink to="" className="navbar-links text-uppercase">
            feature
          </NavLink>
        </div>
        <div className="px-2 py-1">
          <NavLink to="" className="navbar-links text-uppercase">
            single post
          </NavLink>
        </div>
        <div className="px-2 py-1">
          <NavLink to="" className="navbar-links text-uppercase">
            categories
          </NavLink>
        </div>
        <div className="px-2 py-1">
          <NavLink to="" className="navbar-links text-uppercase">
            about
          </NavLink>
        </div>
        <div className="px-2 py-1">
          <NavLink to="" className="navbar-links text-uppercase">
            contact
          </NavLink>
        </div>
        <div className="search-box">
          <form id='searchForm' action="">
             <input
             id='searchInput'
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Type to Search..."
            />
            <SearchIcon/>
          </form>
        </div>
      </div>
    </div>
  );
};

// <input
//               type="text"
//               value={value}
//               onChange={onChange}
//               placeholder="Type to Search..."
//             />

const mapStateToProps = (state) => {
  return {
    filterPosts: state.filterPosts,
  };
};

export default connect(mapStateToProps, { currentPost })(Header);
