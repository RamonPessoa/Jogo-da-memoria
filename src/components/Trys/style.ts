import styled from 'styled-components';
import Section from '@components/Section';

export const Container = styled(Section)`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  button {
    border-radius: 5px;
    padding: 10px;
    background: ${(props) => props.theme.colors.element_background};
    color: ${(props) => props.theme.colors.font_orange};
    border-color: ${(props) => props.theme.colors.font_orange};
    font-size: 1.8rem;
  }
`;
