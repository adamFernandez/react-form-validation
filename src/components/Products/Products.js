import { StyledProducts } from "./Products.styled";

import Product from "./Product/Product";

const Products = ({ data }) => {
  return (
    <StyledProducts>
        {data && data.map(product => 
            <Product key={product.id} product={product} />
        )}
    </StyledProducts>
  );
};

export default Products;
