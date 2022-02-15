import Field from "./Field/Field";
import Button from "../../Button/Button";
import SelectField from "./SelectField/SelectField";

import { StyledForm } from "./Form.styled";


const Form = ({ header, formValues, handleChange, formErrors, handleSubmit }) => {
  return (
      <>
        <h1>{header}</h1>
        <StyledForm onSubmit={handleSubmit}>        
          <Field 
            label="Item"
            type="text" 
            name="item"
            placeholder="Item"
            error={formErrors}
          /> 
          <Field
            label="Price" 
            type="text" 
            name="price" 
            placeholder="Price"
            error={formErrors}
            />
          <Field
            label="Description" 
            type="description" 
            name="description" 
            placeholder="Description"
            error={formErrors}
          />
          <SelectField
            name="storage"
            options={["60", "128", "256", "516"]}
            error={formErrors}
          />
          <SelectField
            name="status"
            options={["available", "out of stock"]}
            error={formErrors}
          />
            <SelectField
              name="os"
              options={["iOs", "Android", "Bada", "Blackberry", "Windows", "Symbian", "Tizen"]}
              error={formErrors}
              />
            <SelectField
              name="year"
              options={["2016","2017","2018","2019", "2020", "2021", "2022"]}
              error={formErrors}
              />
          
        </StyledForm>
        <Button text="Submit" type="submit" handleSubmit={handleSubmit} />
      </>
    );
};

export default Form;
