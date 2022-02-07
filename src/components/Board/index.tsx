import React, { useEffect, useState } from 'react';
import { Container } from './style';
import Card from '@components/Card';
import card1 from '@cards/1.png';
import card2 from '@cards/2.png';
import card3 from '@cards/3.png';
import card4 from '@cards/4.png';
import card5 from '@cards/5.png';
import card6 from '@cards/6.png';
import { useCard } from '../../contexts/CardContext';

export default function index() {
  const cardsDB = [card1, card2, card3, card4, card5, card6];

  const [cardList, setCardList] = useState<string[]>([]);
  const { pair, setPair, checkPair, buildRef, myCard, checkWin } = useCard();

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
    myCard.current[index].classList.add('rotate');

    setPair((oldPair: HTMLDivElement[]) => [...oldPair, myCard.current[index]]);
  };

  useEffect(() => {
    checkPair();
    checkWin();
  }, [pair]);

  useEffect(() => {
    setCardList([...shuffleCards(cardsDB), ...shuffleCards(cardsDB)]);
  }, []);

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
