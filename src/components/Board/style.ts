import styled from 'styled-components';
import Section from '@components/Section';

export const Container = styled(Section)`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 160px));
  gap: 30px;
  justify-content: center;
`;
