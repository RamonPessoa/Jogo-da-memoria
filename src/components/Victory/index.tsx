import React from 'react';
import { Container } from './style';
import { useCard } from '@contexts/CardContext';
import { useLevel } from '@contexts/LevelContext';

export default function index() {
  const { win, setWin, myCard } = useCard();
  const { setLevel, level } = useLevel();

  const handleClick = (): void => {
    const elements = Object.values(myCard.current);
    elements.map((el) => {
      el?.classList.remove('rotate');
      return null;
    });
    setTimeout(() => {
      setWin(false);
      if (level !== 3) {
        setLevel((oldLevel) => oldLevel + 1);
      }
    }, 1000);
  };

  return (
    <>
      {win && (
        <Container>
          <div className='victory'>
            <h2 className='victory__text'>Você ganhou, parabéns!</h2>
            <button className='victory__button' onClick={handleClick}>
              Próximo Nível
            </button>
          </div>
        </Container>
      )}
    </>
  );
}
