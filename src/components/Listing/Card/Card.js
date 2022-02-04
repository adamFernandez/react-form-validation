import { StyledCard } from "./Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListingContainer } from "./styles/Container.styled";

const Card = ({ item, changeStatus }) => {
  
  return (
    <ListingContainer>
      <div className="status"><div className={`banner ${item.status === "expired" ? 'expired' : ''}`} onClick={() => changeStatus(item)}>{item.status}</div></div>
      <StyledCard>
        <div className="image">
          <img src={item.image.src} alt={item.image.alt} width="50%" />
        </div>
        <div className="info">
          <h2 className="title">{item.title}</h2>
          <p className="price">£{item.price}</p>
          <div className="rooms">
            <div className="bedrooms">{item.rooms.bedrooms} <FontAwesomeIcon icon="bed" /></div>
            <div className="bathrooms">{item.rooms.bathrooms} <FontAwesomeIcon icon="bath" /></div>
            <div className="livingroom">{item.rooms.livingrooms}<FontAwesomeIcon icon="couch" /></div>
          </div>
          <p className="description">{item.description}</p>
          <p className="address">{item.address}, London, {item.postcode}</p>
        </div>
      </StyledCard>
      <p className="message">Click on the card status banner to toggle between active or expired</p>
    </ListingContainer>
  );
};

export default Card;
