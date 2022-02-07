import styled from 'styled-components';

export const Select = styled.select`
  width: 200px;
  background: ${(props) => props.theme.colors.element_background};
  color: ${(props) => props.theme.colors.font_orange};
  outline: none;
  border-color: orange;
  margin-top: 50px;
  padding: 7px;
  border-radius: 10px;
`;
