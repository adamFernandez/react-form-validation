import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { StyledProducts } from "./Products.styled";
import { Overlay } from '../styles/Overlay.styled';

import { Button, Page1, Page2, Page3, Page4 } from "./Form/index";

import Product from "./Product/Product";
import Form from './Form/Form';
import { Container } from "../styles/Container.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = ({ data, addToCompare, logged=true, formErrors }) => {
  const [form, setForm] = useState(false);
  const [hide, setHide] = useState(true);
  
  const hideOverlay = () => {
    setHide(!hide);
    console.log(hide);
  }

  const showForm = () => {
    setForm(!form);
  }
  return (
    <StyledProducts>
        {data && data.map(product => 
            <Product key={product.id} product={product} addToCompare={addToCompare} />
        )}
        {form 
        ?
        <>
          <Overlay zindex="500" onClick={hideOverlay} animation={hide && '${fadeOut} 5s' } />
          <Container form>
            <Form header="New Item"/>
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
