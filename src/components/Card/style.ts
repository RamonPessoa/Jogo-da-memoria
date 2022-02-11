import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  height: 160px;
  width: 160px;
  perspective: 400px;
  .rotate {
    transform: rotateY(180deg);
  }
  .no-transition {
    transition: none !important;
  }
  .card {
    position: relative;
    display: flex;
    width: 160px;
    height: 160px;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme.colors.font_orange};
    background: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    transition: 1s;
    transform-style: preserve-3d;
    .card__front {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 400%;
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
