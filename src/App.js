import React, {useEffect} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from './actions';
import Home from './components/Home';
import Post from './components/post/post/Post'

const App = props =>{
  useEffect(() =>{
    props.getPosts();
  },[]);
  return(
     <div className='container'>

      <Route path={"/"} exact component={Home} {...props}/>
      <Route path={"/post/:id"} component={Post} {...props}/>
     </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps,{getPosts})(App);
