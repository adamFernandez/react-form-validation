import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuBar, Products, Listing, Movies } from '../imports/components';
import { Container } from '../components/styles/Container.styled';

const AppRouter = () => {
  <BrowserRouter>
    <Container>
      <MenuBar />

        <Routes>
          <Route path="/" component={<MenuBar />} >
            <Route path="products" component={<Products />} />
            <Route path="listing" component={<Listing />} />
            <Route path="movies" component={<Movies />} />
          </Route>
        </Routes>
    </Container>
  </BrowserRouter>
};

export default AppRouter;