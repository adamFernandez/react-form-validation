import { SelectField, InputField } from "../index";
import { StyledSection } from "../Section/Section.styled";
import { colours, materials } from "../../../data/index";

const Page2 = ({ header, formErrors }) => {
  return (
    <StyledSection>
      <h4>{header}:</h4>
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
  )
}

export default Page2