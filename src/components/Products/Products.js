import { StyledProducts } from "./Products.styled";

import Product from "./Product/Product";

const Products = ({ data, addToCompare }) => {
  return (
    <StyledProducts>
        {data && data.map(product => 
            <Product key={product.id} product={product} addToCompare={addToCompare} />
        )}
    </StyledProducts>
  );
};

export default Products;
