import React from 'react';
import { Container } from './style';
import { useCard } from '@contexts/CardContext';

export default function index() {
  const { win, setWin, myCard } = useCard();

  const handleClick = (): void => {
    const elements = Object.values(myCard.current);
    elements.map((el) => {
      el?.classList.remove('rotate');
      return null;
    });
    setTimeout(() => {
      setWin(false);
    }, 1000);
  };

  return (
    <>
      {win && (
        <Container>
          <div className='victory'>
            <h2 className='victory__text'>Você ganhou, parabéns!</h2>
            <button className='victory__button' onClick={handleClick}>
              Uhuuu!!
            </button>
          </div>
        </Container>
      )}
    </>
  );
}
