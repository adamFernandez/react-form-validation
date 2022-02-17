import InputField from './InputField/InputField';
import Button from '../../Button/Button';
import SelectField from './SelectField/SelectField';
import { StyledForm } from './Form.styled';
import { StyledSection } from './Section/Section.styled';
import {
  colours, features, materials, communication, sensors, sims, wifis,
} from '../../data/index';

function Form({
  header, formValues, handleChange, formErrors, handleSubmit,
}) {
  return (
    <>
      <h1>{header}</h1>
      <StyledForm onSubmit={handleSubmit}>

        <StyledSection>
          <h4>General:</h4>
          <StyledSection input>
            <InputField type="text" name="item" placeholder="Item" error={formErrors} />
            <InputField type="text" name="price" placeholder="Price" error={formErrors} />
            <InputField type="description" name="description" placeholder="Description" error={formErrors} />
            <SelectField name="storage" options={['60', '128', '256', '516']} error={formErrors} />
            <SelectField name="status" options={['available', 'out of stock']} error={formErrors} />
          </StyledSection>
        </StyledSection>

        <StyledSection>
          <h4>Properties:</h4>
          <SelectField name="os" options={['iOs', 'Android', 'Bada', 'Blackberry', 'Windows', 'Symbian', 'Tizen']} error={formErrors} />
          <SelectField name="year" options={['2016', '2017', '2018', '2019', '2020', '2021', '2022']} error={formErrors} />

          <h5>Colors:</h5>
          <StyledSection checkbox>
            {colours.map((color) => <InputField className="checkbox" type="checkbox" name={color} />)}
          </StyledSection>

          <h5>Body:</h5>
          <StyledSection checkbox>
            {materials.map((material) => <InputField type="checkbox" name={material} />)}
          </StyledSection>
        </StyledSection>

        <StyledSection>
          <h4>Communication:</h4>
          <StyledSection checkbox>
            <InputField type="checkbox" name="5G" />
            <InputField type="checkbox" name="sub-6" />
            <InputField type="checkbox" name="4G" />
            {wifis.map((wifi) => <InputField type="checkbox" name={wifi} />)}
            <InputField type="checkbox" name="bluetooth" />
            <InputField type="checkbox" name="nfc" />
          </StyledSection>
          <h5>Sim Cards</h5>
          <StyledSection checkbox>
            {sims.map((sim) => <InputField type="checkbox" name={sim} />)}
          </StyledSection>
        </StyledSection>
        <StyledSection>
          <h4>Features</h4>
          <h5>Features</h5>
          <StyledSection checkbox list>
            {features.map((feature) => <InputField type="checkbox" name={feature} />)}
          </StyledSection>
          <h5>Sensors</h5>
          <StyledSection checkbox list>
            {sensors.map((sensor) => <InputField type="checkbox" name={sensor} />)}
          </StyledSection>
        </StyledSection>

      </StyledForm>
      <Button text="Next" type="button" handleSubmit={handleSubmit} />
      <Button text="Submit" type="submit" handleSubmit={handleSubmit} />
    </>
  );
}

export default Form;
