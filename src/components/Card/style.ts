import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  height: 160px;
  width: 160px;
  perspective: 400px;
  .rotate {
    transform: rotateY(180deg);
  }
  .card {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme.colors.font_orange};
    background: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    transition: 1s;
    transform-style: preserve-3d;
    .card__front {
      img {
        max-width: 80%;
      }
    }

    .card__front,
    .card__back {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
    }
    .card__front {
      transform: rotateY(180deg);
    }
  }
`;
