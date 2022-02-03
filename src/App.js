import { useEffect, useState } from 'react';

import { Container } from './components/styles/Container.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import { GlobalStyles } from './components/styles/Global';

import "./FontAwesomeIcons";
import logo from "./img/netflix_2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Products from "./components/Products/Products";
import Form from "./components/Form/Form";
import MenuBar from "./components/MenuBar/MenuBar";
import Listing  from "./components/Listing/Listing"

function App() {
  const defaultValues = { username: '', email: '', password: ''};
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState("");
  const [listing, setListing] = useState("");
  const [page, setPage] = useState("form");

  // UseEffect to fetch from db_products.json files or any API
  useEffect(() => {
    const url = "http://localhost:3005/products";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  },[]);
  
  useEffect(() => {
    const url = "http://localhost:3010/properties";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setListing(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const changeStatus = (item) => {
    const currentItem = listing.find(i => i.id === item.id);
    const newStatus = item.status === 'active' ? 'expired' : 'active';
    setListing(
      listing.map(i => i.id === item.id
        ? {...currentItem, status: newStatus } 
        : i
      )
    )
  }

  // show a component depending on menu clicked 
  const show = (e) => {
    setPage(e.target.innerText.toLowerCase());
  }

  useEffect(() => {
    if (Object(formErrors).length === 0 && isSubmit) {  
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i; // valid email
    
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be longer than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password must be shorter than 10 characters!";
    }
    
    return errors;
  }

  return (
    <Wrapper>
      
      <GlobalStyles />
      {/* Container showing success on 0 errors or the input values */}
      {/* <Container border='none' mg='0' pd='.1em'>
        {Object.keys(formErrors).length === 0 && isSubmit 
          ? <p>Signed in Successfully</p>
          : <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        }
      </Container> */}      
      <MenuBar show={show}/>
      {page === 'form' &&
        <Container>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>}
      {page === 'movies' &&
      <>
        <h1 className="title">Movies</h1>
      <Wrapper auto>
          <Container movie>
            <div className="movie">
              <div className="trade">
                <img src={logo} width="25px" alt="" />
                <div className="top10">TOP <span className="number">10</span></div>   
              </div>
              <div className="front">
                <img src="http://placekitten.com/300/150" alt="" />
                <div className="info"> 
                  <h3>Movie Title</h3>
                </div>
              </div>
              <div className="back">
                <div className="options">
                  <p className="play"><FontAwesomeIcon icon="play" size="xs" /></p>
                  <p className="add"><FontAwesomeIcon icon="plus" size="xs" /></p>
                  <p className="up"><FontAwesomeIcon icon="thumbs-up" size="xs" /></p>
                  <p className="down"><FontAwesomeIcon icon="thumbs-down" size="xs" /></p>
                  <p className="sub_menu"><FontAwesomeIcon icon="angle-down" size="sm" /></p>
                </div>
                <div className="info">
                  <p className="age">15</p>
                  <p className="duration">2 temporadas</p>
                </div>
                <p className="tags">Sarcastic-Exciting-Superheroes</p>
              </div>              
            </div>                            
          </Container>             
          <Container movie>
            <div className="movie">
              <div className="trade">
                <img src={logo} width="25px" alt="" />
                <div className="top10">TOP <span className="number">10</span></div>   
              </div>
              <div className="front">
                <img src="http://placekitten.com/300/150" alt="" />
                <div className="info"> 
                  <h3>Movie Title</h3>
                </div>
              </div>
              <div className="back">
                <div className="options">
                  <p className="play"><FontAwesomeIcon icon="play" size="xs" /></p>
                  <p className="add"><FontAwesomeIcon icon="plus" size="xs" /></p>
                  <p className="up"><FontAwesomeIcon icon="thumbs-up" size="xs" /></p>
                  <p className="down"><FontAwesomeIcon icon="thumbs-down" size="xs" /></p>
                  <p className="sub_menu"><FontAwesomeIcon icon="angle-down" size="sm" /></p>
                </div>
                <div className="info">
                  <p className="age">15</p>
                  <p className="duration">2 temporadas</p>
                </div>
                <p className="tags">Sarcastic-Exciting-Superheroes</p>
              </div>              
            </div>                            
          </Container>
      </Wrapper>
      </>
      }
      { page === 'products' &&
      <>
        <h1 className="title">Products</h1>
        <Wrapper auto>
          <Products data={data} changeStatus={changeStatus} />
        </Wrapper>           
      </>
      }
      {
        page === 'listing' &&
        <>
          <h1 className='title'>Listing</h1>
          <Wrapper>
            <Listing data={listing} changeStatus={changeStatus} />
          </Wrapper>
        </>
      }
      <Wrapper>
          <Container movie>
            <div className="movie">
              <div className="trade">
                <img src={logo} width="25px" alt="" />
                <div className="top10">TOP <span className="number">10</span></div>   
              </div>
              <div className="front">
                <img src="http://placekitten.com/300/150" alt="" />
                <div className="info"> 
                  <h3>Movie Title</h3>
                </div>
              </div>
              <div className="back">
                <div className="options">
                  <p className="play"><FontAwesomeIcon icon="play" size="xs" /></p>
                  <p className="add"><FontAwesomeIcon icon="plus" size="xs" /></p>
                  <p className="up"><FontAwesomeIcon icon="thumbs-up" size="xs" /></p>
                  <p className="down"><FontAwesomeIcon icon="thumbs-down" size="xs" /></p>
                  <p className="sub_menu"><FontAwesomeIcon icon="angle-down" size="sm" /></p>
                </div>
                <div className="info">
                  <p className="age">15</p>
                  <p className="duration">2 temporadas</p>
                </div>
                <p className="tags">Sarcastic-Exciting-Superheroes</p>
              </div>              
            </div>                            
          </Container>             
      </Wrapper>
    </Wrapper>
  );
}

export default App;
