import { StyledProduct } from "./Product.styled";
import { ProductContainer } from "./styles/Container.styled";

const Product = ({ product, changeStatus }) => {
  return (
    <>
    <ProductContainer card>
      <div className="status"><div className={`banner ${product.status === "out" ? 'out' : ''}`} onClick={() => changeStatus(product)}>{product.stock} {product.status}</div></div>
      <StyledProduct>
        <div className="image">
          <img src={product.image.src} alt={product.image.alt} width="50%" />
        </div>
        <div className="info">
          <h2 className="title">{product.title}</h2>
          <p className="price">£{product.price}</p>
          <p className="description">{product.description}</p>
          <p className="stock">{product.stock}</p>
        </div>
      </StyledProduct>
    </ProductContainer>
  </>
    );
};

export default Product;