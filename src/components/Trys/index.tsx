import React from 'react';
import { useBoard } from '@contexts/GameContext';
import { Container } from './style';

export default function Trys() {
  const { trys, setTrys, shuffleBoard, unturnAllCards, setPair } = useBoard();
  const handleClick = () => {
    setTrys(0);
    unturnAllCards();
    shuffleBoard();
    setPair([]);
  };

  return (
    <Container>
      <h2>Tentativas: {trys}</h2>
      <button onClick={handleClick}>Reiniciar</button>
    </Container>
  );
}
