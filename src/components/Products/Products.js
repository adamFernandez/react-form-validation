import { useState } from 'react';
import { StyledProducts } from "./Products.styled";

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
    </StyledProducts>
  );
};

export default Products;
