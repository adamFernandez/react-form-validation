import { useEffect, useState } from 'react';

import { Container } from './components/styles/Container.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import { GlobalStyles } from './components/styles/Global';

import Form from "./components/Form/Form";

function App() {
  const defaultValues = { username: '', email: '', password: ''};
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object(formErrors).length === 0 && isSubmit) {  
      console.log(formValues);
    }
  }, [formErrors]);

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
      <Container>        
        <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
      </Container>
      <h1 className="title">Movies</h1>
      <Wrapper auto>
        
        <Container movie>
          <img src="http://placekitten.com/300/150" alt="" />
          <div className="info"> 
            <h1>Title</h1>
            <p>Description</p>
          </div>
          <div className="hiddenCard">
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
          </div>                  
        </Container>             
        <Container movie>
          <img src="http://placekitten.com/300/150" alt="" />
          <div className="info"> 
            <h1>Title</h1>
            <p>Description</p>
          </div>
          <div className="hiddenCard">
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
          </div>                  
        </Container>             
        <Container movie>
          <img src="http://placekitten.com/300/150" alt="" />
          <div className="info"> 
            <h1>Title</h1>
            <p>Description</p>
          </div>
          <div className="hiddenCard">
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
          </div>                  
        </Container>             
        <Container movie>
          <img src="http://placekitten.com/300/150" alt="" />
          <div className="info"> 
            <h1>Title</h1>
            <p>Description</p>
          </div>
          <div className="hiddenCard">
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
            <h1>PLAY</h1>
          </div>                  
        </Container>             
      </Wrapper>
      <h1 className="title">Cards</h1>
      <Wrapper auto>
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>     
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>
        <Container card>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>        
      </Wrapper>      
            
    </Wrapper>
  );
}

export default App;
