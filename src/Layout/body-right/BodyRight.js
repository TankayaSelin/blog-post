import React from "react";
import SearchBlog from "./search-blog/SearchBlog";
import Categories from "./Categories";
import NewsLetter from "./NewsLetter";
import LatestPost from "./LatestPost";
import RecentComments from "./RecentComments";
import Archieves from './Archieves'
import Tags from './Tags';
import BannerAds from "./BannerAds";

const BodyRigth = () => {
  return (
    <div className='px-2'>
      <SearchBlog />
      <Categories/>
      <NewsLetter/>
      <LatestPost/>
      <RecentComments/>
      <Archieves/>
      <Tags/>
      <BannerAds/>
    </div>
  );
};

export default BodyRigth;
