import React from 'react';
import { Container } from './style';
import { useLevel } from '@contexts/LevelContext';
import { useBoard } from '@contexts/GameContext';

export default function index() {
  const { setLevel, level } = useLevel();
  const { trys, win, setTrys, unturnAllCards } = useBoard();

  const handleClick = (): void => {
    unturnAllCards();
    setTrys(0);
    if (level !== 3) {
      setLevel((oldLevel) => oldLevel + 1);
    } else {
      setLevel(1);
    }
  };

  return (
    <>
      {win && (
        <Container>
          <div className='victory'>
            <h2 className='victory__text'>
              Você ganhou em {trys} tentativas, parabéns!
            </h2>
            <button className='victory__button' onClick={handleClick}>
              Próximo Nível
            </button>
          </div>
        </Container>
      )}
    </>
  );
}
