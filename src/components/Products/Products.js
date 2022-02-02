import { Wrapper } from "../styles/Wrapper.styled";
import { StyledProducts } from "./Products.styled";

import Product from "./Product/Product";


const Products = ({ data }) => {
  return (
    <StyledProducts>
        {data && data.map(product => 
          <Product key={data.id} product={product} />
        )}
    </StyledProducts>
  );
};

export default Products;
