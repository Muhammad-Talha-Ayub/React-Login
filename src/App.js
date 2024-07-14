import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<PrivateRoute />}>
          <Route path="" element={<ArticlePage />}>
            <Route index element={<ArticleList />} />
            <Route path=":id" element={<ArticleDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
