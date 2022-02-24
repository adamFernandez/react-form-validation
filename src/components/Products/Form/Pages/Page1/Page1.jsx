import { InputField, SelectField } from '../../index';
import { StyledSection } from '../../Section/Section.styled';

const Page1 = ({ header, formErrors }) => {
  return (
    <StyledSection>
      <h4>{header}:</h4>
      <StyledSection input>
        <InputField type="text" name="item" placeholder="Item" error={formErrors} />
        <InputField type="text" name="price" placeholder="Price" error={formErrors} />
        <InputField type="description" name="description" placeholder="Description" error={formErrors} />
        <SelectField name="storage" options={['60', '128', '256', '516']} error={formErrors} />
        <SelectField name="status" options={['available', 'out of stock']} error={formErrors} />
      </StyledSection>
    </StyledSection>
  )
}

export default Page1;