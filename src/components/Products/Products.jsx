import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledProducts } from './Products.styled';
import { Overlay } from '../styles/Overlay.styled';
import Product from './Product/Product';
import Form from './Form/Form';
import AddItem from './AddItem/AddItem';
import { Container } from '../styles/Container.styled';

function Products({
  data, addToCompare, logged = true, formErrors,
}) {
  const [form, setForm] = useState(false);
  const [fade, setFade] = useState(false);

  const hideOverlay = (e) => {
    setFade(!fade);
    console.log(fade, e.target.className);
    setTimeout(() => {
      setForm(!form);
    }, 2000);
  };

  const showForm = () => {
    setForm(!form);
    setFade(true);
  };

  return (
    <StyledProducts>
      {data && data.map((product) => <Product key={product.id} product={product} addToCompare={addToCompare} />)}
      {form
        ? (
          <>
            <Overlay zindex="500" onClick={hideOverlay} className={fade ? 'fadein' : 'fadeout'} />
            <Container form className={!fade && 'slideout'}>
              <Form header="New Item" />
            </Container>
          </>
        )
        : (
          <AddItem onClick={showForm} />
        )}
    </StyledProducts>
  );
}

export default Products;
