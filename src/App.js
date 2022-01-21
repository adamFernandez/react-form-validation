import { useEffect, useState } from 'react';

import { Container } from './components/styles/Container.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import { Button } from './components/styles/Button.styled';
import { GlobalStyles } from './components/styles/Global';

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
      <Container border='none' mg='0' pd='.1em'>
        {Object.keys(formErrors).length === 0 && isSubmit 
          ? <p>Signed in Successfully</p>
          : <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        }
      </Container>

      
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className='field'>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder='Username'
              value={formValues.username} 
              onChange={handleChange}
            />  
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder='youremail@email.com'
              value={formValues.email}
              onChange={handleChange} 
            />
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder='password'
              value={formValues.password} 
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
        </form>
        
      </Container>      
    </Wrapper>
  );
}

export default App;
