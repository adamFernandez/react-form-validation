import { InputField } from "../index";
import { StyledSection } from "../Section/Section.styled";

const Page4 = ({ header, features, sensors, formErrors  }) => {
  return (
    <StyledSection>
      <h4>{header}:</h4>
      <h5>Features</h5>
      <StyledSection checkbox list>
        {features.map((feature) => <InputField type="checkbox" name={feature} />)}
      </StyledSection>
      <h5>Sensors</h5>
      <StyledSection checkbox list>
        {sensors.map((sensor) => <InputField type="checkbox" name={sensor} />)}
      </StyledSection>
    </StyledSection>
  )
}

export default Page4