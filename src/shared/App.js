import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from '../pages/PostList';
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Header from "../components/Header";
import {Grid} from "../elements";

function App() {
  return (
    <React.Fragment>
      {/* <Router>
        <Routes>
          <Route path='/' element={<PostList/>} />
        </Routes>
      </Router> */}
      <Grid>
        <Header></Header>
        <Router>
          <Routes>
          <Route path="/" element={<PostList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          </Routes>  
        </Router>
      </Grid>
    </React.Fragment>
  );
};


export default App;
