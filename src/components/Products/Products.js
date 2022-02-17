import { useState } from 'react';
import { StyledProducts } from "./Products.styled";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Product from "./Product/Product";
import Form from './Form/Form';
import { Container } from "../styles/Container.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = ({ data, addToCompare, logged=true }) => {
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
            <Form header="New Product"/>
          </Container>
        </>
        :
        <Container addToList>
          <FontAwesomeIcon onClick={showForm} className="plus" icon="plus-circle" size="8x" />
        </Container>
        }
        <Container form>
          
            <Routes>
              <Route path="/">
                <Route path="/" element={<Form header="New Product"/>} />
                <Route path="/" element={<Form header="New Product"/>} />
                <Route path="/" element={<Form header="New Product"/>} />
              </Route>
            </Routes>
          
        </Container>
    </StyledProducts>
  );
};

export default Products;
