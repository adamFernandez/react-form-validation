import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledMenuBar } from "./MenuBar.styled";

const MenuBar = ({ basketData = 1, show }) => {

  const [currency, setCurrency] = useState('USD');
    
    const switchCurrency = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setCurrency(e.target.value);
    }
    return (
			<>
				<StyledMenuBar>
          <div className="form" onClick={(e) => show(e)}>Form</div>
          <div className="movies" onClick={(e) => show(e)}>Movies</div>
          {/* <div className="movies" onClick={(e) => show(e)}>M.Flex</div> */}
          <div className="card" onClick={(e) => show(e)}>Products</div>
          <div className="card" onClick={(e) => show(e)}>Listing</div>
          <div className="currency_symbols">
            <FontAwesomeIcon className="symbol" value="GBP" icon="pound-sign" size="lg" onClick={(e) => switchCurrency(e)} />
            <FontAwesomeIcon className="symbol" value="USA" icon="dollar-sign" size="lg" onClick={(e) => switchCurrency(e)} />
            <FontAwesomeIcon className="symbol" value="EUR" icon="euro-sign" size="lg" onClick={() => switchCurrency(3)} />
          </div>
            <FontAwesomeIcon className="cart" icon="shopping-bag" size="2x">
              {basketData === 0 && <span className="counter">2</span>}
            </FontAwesomeIcon>
        </StyledMenuBar>

				{/* <div className="sub_menu">
					<span className="sub_menu_item">{onProducts ? 'Products' : 'Your Basket'}</span>
				</div> */}
			</>
    )
}

export default MenuBar
