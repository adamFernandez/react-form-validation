import { StyledProduct } from "./Product.styled";
import { Container } from "../../styles/Container.styled";

const Product = ({ product, addToCompare }) => {
  return (
    <>
    <Container product onClick={() => addToCompare(product)} className="tooltip">
      <span className="tooltiptext">Click to add to compare</span>
      <div className="status"><div className={`banner ${product.stock === 0 ? 'out' : ''}`} >{product.stock === 0 ? 'out of stock' : product.status}</div></div>
      <StyledProduct>
        <div className="image">
          <img src={product.image.src} alt={product.image.alt} width="50%" />
        </div>
        <div className="info">
          <h2 className="title">{product.title}</h2>
          <p className="price">£{product.price}</p>
          <p className="description">{product.description}</p>
          <p className="stock">{product.stock} left</p>
        </div>
      </StyledProduct>
    </Container>
  </>
    );
};

export default Product;