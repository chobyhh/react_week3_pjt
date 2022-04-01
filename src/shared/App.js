import './App.css';
import React from 'react';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PostList from '../pages/PostList';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<PostList />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
