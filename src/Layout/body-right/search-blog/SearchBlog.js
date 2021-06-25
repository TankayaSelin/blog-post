import React from "react";
import SearchIcon from '@material-ui/icons/Search';


const SearchBlog = (props) => {
  return (
    <div className="row mb-4">
      <div className="col-12 py-2" style={{background: '#fff'}}>
        <div class="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search for blog"
            class="search-input"
          />
          <a href="#" class="search-btn">
            <SearchIcon style={{color: '#000'}}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBlog;
