import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledMenuBar } from "./MenuBar.styled";

const MenuBar = ({ compareData, basketData, show, toComparison }) => {

  const [currency, setCurrency] = useState('USD');
    
    const switchCurrency = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setCurrency(e.target.value);
    }
    return (
			<>
				<StyledMenuBar>          
          <Link to='/form' className="form">Form</Link>
          <Link to='/movies' className="form">Movies</Link>
          <Link to='/products' className="products">Products</Link>
          <Link to='/listing' className="listing">Listing</Link>
          {/* <div className="form" onClick={(e) => show(e)}>Form</div>
          <div className="movies" onClick={(e) => show(e)}>Movies</div>
          <div className="card" onClick={(e) => show(e)}>Products</div>
          <div className="card" onClick={(e) => show(e)}>Listing</div> */}
          <div className="cart" >
            <div className="currency">
              <FontAwesomeIcon className="symbol" value="GBP" icon="pound-sign" size="lg" onClick={(e) => switchCurrency(e)} />
              <FontAwesomeIcon className="symbol" value="USA" icon="dollar-sign" size="lg" onClick={(e) => switchCurrency(e)} />
              <FontAwesomeIcon className="symbol" value="EUR" icon="euro-sign" size="lg" onClick={() => switchCurrency(3)} />
            </div>
            <Link to='/comparison'>
              <div className="basket">
                <div className="overlay" onClick={(e) => show(e)}></div>
                <FontAwesomeIcon icon="shopping-bag" size="2x"  onClick={(e) => show(e)}/>
                {compareData.length > 0 && <span className="counter"  onClick={(e) => show(e)}>{compareData.length}</span>}
              </div>
            </Link>
          </div>
          
        </StyledMenuBar>
        <Outlet />
				{/* <div className="sub_menu">
					<span className="sub_menu_item">{onProducts ? 'Products' : 'Your Basket'}</span>
				</div> */}
			</>
    )
}

export default MenuBar
