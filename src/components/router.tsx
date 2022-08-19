import React, { Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutWrap } from './layout';
import { Home } from './home/home'; 
import { News } from './news/news'; 

class RootRouter extends Component {

  render(): ReactNode {
    return (
      <BrowserRouter>
        <LayoutWrap>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </LayoutWrap>
      </BrowserRouter>
    );
  }
}

export default RootRouter;
