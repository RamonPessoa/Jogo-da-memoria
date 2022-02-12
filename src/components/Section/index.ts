import styled from 'styled-components';

const Section = styled.section`
  max-width: 90%;
  background-color: ${(props) => props.theme.colors.element_background};
  border: ${(props) => props.theme.colors.element_border};
  border-radius: 10px;
  margin-top: 50px;
  min-width: 200px;
`;

export default Section;
