import React, { useEffect, useState } from 'react';
import { Container } from './style';
import { useBoard } from '@contexts/GameContext';
import Card from '@components/Card';
import { useLevel } from '@contexts/LevelContext';

export default function index() {
  const {
    buildRef,
    imgs,
    cardsRef,
    shuffleBoard,
    setTrys,
    pair,
    setPair,
    setWin,
  } = useBoard();
  const [myBoard, setMyBoard] = useState<Array<string>>([]);
  const { level } = useLevel();

  function turnCard(index: number) {
    const card = cardsRef.current[index];
    if (card.className.includes('rotate') || pair.length > 1) return;
    card.classList.add('rotate');
    setPair((oldPair: Array<HTMLDivElement>) => [...oldPair, card]);
  }

  function checkPair(pair: Array<HTMLDivElement>) {
    if (pair.length < 2) return;
    const card1 = pair[0];
    const card2 = pair[1];
    setTrys((trys: number) => trys + 1);

    if (
      card1.getAttribute('data-pokemon') !== card2.getAttribute('data-pokemon')
    ) {
      setTimeout(() => {
        card1.classList.remove('rotate');
        card2.classList.remove('rotate');
        setPair([]);
      }, 1000);
    } else {
      setPair([]);
    }
  }

  function checkWin() {
    if (imgs.length === 0) return;
    const cards = Object.values(cardsRef.current).filter((e) => e !== null);
    let quantidy: number = 0;
    cards.forEach((el) => {
      // eslint-disable-next-line no-unused-expressions
      el.className.includes('rotate') ? (quantidy = quantidy + 1) : null;
    });
    quantidy === imgs.length ? setWin(true) : setWin(false);
  }

  useEffect(() => {
    setMyBoard(shuffleBoard());
    setWin(false);
  }, [imgs, level]);

  useEffect(() => {
    checkPair(pair);
    checkWin();
  }, [pair]);
  return (
    <Container>
      {myBoard.map((el, index) => {
        return (
          <Card
            card={el}
            key={index}
            ref={buildRef(index)}
            onClick={() => {
              turnCard(index);
            }}
          ></Card>
        );
      })}
    </Container>
  );
}
