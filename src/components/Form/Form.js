import Field from "./Field/Field";
import Button from "../../components/Button/Button";


const Form = ({ header, formValues, handleChange, formErrors, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
          <h1>{header}</h1>
          <Field 
            label="Username"
            type="text" 
            name="username"
            placeholder="Username"
            value={formValues.username}
            handleChange={handleChange} 
          /> 
          <p>{formErrors.username}</p>
          <Field
            label="Email" 
            type="email" 
            name="email" 
            placeholder="youremail@email.com"
            value={formValues.email}
            handleChange={handleChange} 
            />
          <p>{formErrors.email}</p>
          <Field
            label="Password" 
            type="password" 
            name="password" 
            placeholder="Password"
            value={formValues.password} 
            handleChange={handleChange}
          />
          <p>{formErrors.password}</p>
          <Button text="Submit" type="submit" handleSubmit={handleSubmit} />
        </form>
    );
};

export default Form;
