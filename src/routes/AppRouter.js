import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MenuBar, Products, Listing, Movies } from '../imports/components';
import { Container } from '../components/styles/Container.styled';

const AppRouter = () => {
  <BrowserRouter>
    <Container>
      <MenuBar />
        <Switch>
          <Route path="products" component={<Products />} />
          <Route path="listing" component={<Listing />} />
          <Route path="movies" component={<Movies />} />
        </Switch>
    </Container>
  </BrowserRouter>
};

export default AppRouter;