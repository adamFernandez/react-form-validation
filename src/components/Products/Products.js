import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { StyledProducts } from "./Products.styled";

import { Button, Page1, Page2, Page3, Page4 } from "./Form/index";

import Product from "./Product/Product";
import Form from './Form/Form';
import { Container } from "../styles/Container.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = ({ data, addToCompare, logged=true, formErrors }) => {
  const [form, setForm] = useState(false);
  const showForm = () => {
    setForm(true);
  }
  return (
    <StyledProducts>
        {data && data.map(product => 
            <Product key={product.id} product={product} addToCompare={addToCompare} />
        )}
        {form 
        ?
        <>
          <Container form>
            <Form header="New Item"/>
            {/* <Routes>
              <Route path="/">
                <Route path="" element={<Form header="New Item"/>}>
                  <Route path="/page1" element={<Page1 header="General" />} />
                  <Route path="/page2" element={<Page2 header="Properties" formErrors={formErrors} />} />
                  <Route path="/page3" element={<Page3 header="Communication" />} />
                  <Route path="/page4" element={<Page4 header="Features" />} />
                </Route>
              </Route>
        </Routes>
        <Outlet /> */}
          </Container>
        </>
        :
        <Container addToList>
          <FontAwesomeIcon onClick={showForm} className="plus" icon="plus-circle" size="8x" />
        </Container>
        }
    </StyledProducts>
  );
};

export default Products;
