import React, { useEffect, useState } from 'react';
import { Container } from './style';
import Card from '@components/Card';
import { lvl1, lvl2, lvl3 } from '../../Db/cards';
import { useCard } from '../../contexts/CardContext';
import { useLevel } from '@contexts/LevelContext';

export default function index() {
  const [cardList, setCardList] = useState<string[]>([]);
  const { pair, setPair, checkPair, buildRef, myCard, checkWin, win } =
    useCard();
  const { level } = useLevel();

  function shuffleCards(cards: string[]) {
    for (let lastItem = cards.length - 1; lastItem > 0; lastItem--) {
      const randomPosition = Math.floor(Math.random() * (lastItem + 1));
      [cards[lastItem], cards[randomPosition]] = [
        cards[randomPosition],
        cards[lastItem],
      ];
    }

    return cards;
  }

  const handleClick = (index: number) => {
    /*
      Caso o Elemento já esteja virado, é impossível, colocalo na pilha,
      evitando que as cartas se mantenham viradas, caso clique em mais de
      uma carta
    */
    if (!myCard.current[index].className.includes('rotate')) {
      if (pair.length < 2) {
        myCard.current[index].classList.add('rotate');
        setPair((oldPair: HTMLDivElement[]) => [
          ...oldPair,
          myCard.current[index],
        ]);
      }
    }
  };

  // const renderCards = () => {
  //   if (win === true) return;
  //   return
  // };

  useEffect(() => {
    checkPair();
    if (Object.values(myCard.current).length !== 0) checkWin();
  }, [pair]);

  useEffect(() => {
    switch (level) {
      case 1:
        setCardList([...shuffleCards(lvl1), ...shuffleCards(lvl1)]);
        break;
      case 2:
        setCardList([...shuffleCards(lvl2), ...shuffleCards(lvl2)]);
        break;
      case 3:
        setCardList([...shuffleCards(lvl3), ...shuffleCards(lvl3)]);
        break;
    }
    setCardList((oldList) => [...shuffleCards(oldList)]);
  }, [win, level]);

  return (
    <Container>
      {cardList.map((el, index) => {
        return (
          <Card
            onClick={() => handleClick(index)}
            card={el}
            key={index}
            ref={buildRef(index)}
          />
        );
      })}
    </Container>
  );
}
