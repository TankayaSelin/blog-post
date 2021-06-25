import React, { useState } from "react";
import { connect } from "react-redux";
import { useQueryParam, NumberParam } from "use-query-params";
import ReactPaginate from "react-paginate";
import LayoutV1 from "../Layout/LayoutV1";
import BodyLeft from "../Layout/body-left/BodyLeft";
import Card from "./post/Card/Card";

const Home = (props) => {
  const [query, setQuery] = useQueryParam("page", NumberParam);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(props.posts.length / usersPerPage);

  const displayCards = props.posts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((card) => {
      return <Card post={card} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setQuery(selected + 1);
  };

  return (
    <div>
      <LayoutV1>
        <BodyLeft>
          <div className="row">{displayCards}</div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </BodyLeft>
      </LayoutV1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
