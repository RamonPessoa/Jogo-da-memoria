import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  .victory {
    background: ${(props) => props.theme.colors.background};
    border: ${(props) => props.theme.colors.element_border};
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .victory__button {
      background: ${(props) => props.theme.colors.element_background};
      color: ${(props) => props.theme.colors.font_orange};
      padding: 10px;
      font-size: 2rem;
      border: 1px solid ${(props) => props.theme.colors.font_orange};
      border-radius: 10px;
    }
  }
`;
