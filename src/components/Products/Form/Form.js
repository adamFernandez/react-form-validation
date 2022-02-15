import InputField from "./InputField/InputField";
import Button from "../../Button/Button";
import SelectField from "./SelectField/SelectField";
import { StyledForm } from "./Form.styled";
import { StyledSection } from "./Section/Section.styled";
import {colours, features, materials, communication, sensors, sim } from '../../data/index';

const Form = ({ header, formValues, handleChange, formErrors, handleSubmit }) => {
  return (
      <>
        <h1>{header}</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSection>
            <h4>General:</h4>
            <InputField type="text" name="item" placeholder="Item" error={formErrors} /> 
            <InputField type="text" name="price" placeholder="Price" error={formErrors} />
            <InputField type="description" name="description" placeholder="Description" error={formErrors} />
            <SelectField name="storage" options={["60", "128", "256", "516"]} error={formErrors} />
            <SelectField name="status" options={["available", "out of stock"]} error={formErrors} />
          </StyledSection>        
          <StyledSection>
            <h4>Properties:</h4>
            <SelectField name="os" options={["iOs", "Android", "Bada", "Blackberry", "Windows", "Symbian", "Tizen"]} error={formErrors} />
            <SelectField name="year" options={["2016","2017","2018","2019", "2020", "2021", "2022"]} error={formErrors} />
            
            <h5>Colors:</h5>
            <StyledSection checkbox>
              {colours.map(color=>              
                <InputField className="checkbox" type="checkbox" name={color}/>
              )}
            </StyledSection>

            <h5>Body:</h5>
            <StyledSection checkbox>
              {materials.map(material=>              
                <InputField type="checkbox" name={material}/>
              )}
            </StyledSection>
          </StyledSection>        
          {/* <section>
            <p>Communication:</p>
            <SelectField name="fiveg" options={["", "Android", "Bada", "Blackberry", "Windows", "Symbian", "Tizen"]} error={formErrors} />
            <SelectField name="year" options={["2016","2017","2018","2019", "2020", "2021", "2022"]} error={formErrors} />
            <SelectField name="color" options={["Gold", "Silver", "Blue", "Steal", "Pink", "Red", "Black", "Yellow"]} error={formErrors} />
            <SelectField name="body" options={["Glass", "Ceramic", "Steel"]} error={formErrors} />
          </section>         */}
               
        </StyledForm>
        <Button text="Submit" type="submit" handleSubmit={handleSubmit} />
      </>
    );
};

export default Form;
