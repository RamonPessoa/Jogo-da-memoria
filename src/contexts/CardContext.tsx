import React, { useContext, useRef, useState } from 'react';

type MyContext = {
  pair: HTMLDivElement[];
  setPair: Function;
  checkPair: () => void;
  buildRef: (card: number) => (node: HTMLDivElement) => void;
  myCard: React.MutableRefObject<CardNumber>;
  checkWin: () => void;
};

const cardContext = React.createContext<MyContext>({} as MyContext);

type MyProps = {
  children: React.ReactNode;
};

type CardNumber = {
  [key: number]: HTMLDivElement;
};

export default function CardContext({ children }: MyProps) {
  const [pair, setPair] = useState<HTMLDivElement[]>([]);
  const myCard = useRef({} as CardNumber);

  // pega todas os elementos que são cartas, como referencia e armazena na variável myCard
  function buildRef(card: number) {
    return (node: HTMLDivElement) => (myCard.current[card] = node);
  }

  // Verifica se as cartas que estão viradas, são iguais
  function checkPair() {
    if (pair.length < 2) return;
    const element1 = pair[0];
    const element2 = pair[1];

    if (
      element1.getAttribute('data-pokemon') ===
      element2.getAttribute('data-pokemon')
    ) {
      setPair([]);
    } else {
      setTimeout(() => {
        element1.classList.remove('rotate');
        element2.classList.remove('rotate');
      }, 1000);
      setPair([]);
    }
  }
  function checkWin() {
    const cards = Object.values(myCard.current);
    const matches = cards.filter((e) => e.className.includes('rotate'));

    if (matches.length === 12) return console.log('you win');
  }

  return (
    <cardContext.Provider
      value={{ pair, setPair, checkPair, buildRef, myCard, checkWin }}
    >
      {children}
    </cardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(cardContext);

  return context;
}
