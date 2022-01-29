import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="status">Active</div>
      <div className="image">
        <img src="https://picsum.photos/400/250" alt="Beautiful and helpful description please" />
      </div>
      <div className="info">
        <h2>Guide Price</h2>
        <p className="price">425000</p>
        <div className="rooms-info">
          <div className="bedrooms">1 bedroom</div>
          <div className="bathrooms">1 bathroom</div>
          <div className="livingroom">1 living room</div>
        </div>
        <div className="description">1 bed flat for sale</div>
        <div className="address">Mansford Streed, London E2</div>
      </div>
      
    </div>  
  ) 
  
};

export default Card;
