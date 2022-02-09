import React, { useEffect, useContext, useRef, useState } from 'react';
import { useLevel } from './LevelContext';
import axios from 'axios';

type MyContext = {
  pair: HTMLDivElement[];
  setPair: Function;
  checkPair: () => void;
  buildRef: (card: number) => (node: HTMLDivElement) => void;
  myCard: React.MutableRefObject<CardNumber>;
  checkWin: () => void;
  win: boolean;
  setWin: Function;
  clearPair: () => void;
  imgs: string[];
  setImgs: Function;
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
  const [imgs, setImgs] = useState<string[]>([]);
  const myCard = useRef({} as CardNumber);
  const [win, setWin] = useState<boolean>(false);
  const { level } = useLevel();

  /* pega todas os elementos que são cartas, como referencia e armazena na
   variável myCard */
  function buildRef(card: number) {
    return (node: HTMLDivElement) => (myCard.current[card] = node);
  }

  function clearPair() {
    setPair([]);
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
      clearPair();
    } else {
      setTimeout(() => {
        element1.classList.remove('rotate');
        element2.classList.remove('rotate');
        setPair([]);
      }, 1000);
    }
  }
  function defineWin(level: number) {
    switch (level) {
      case 1:
        return 8;
      case 2:
        return 12;
      case 3:
        return 18;
    }
  }

  function checkWin() {
    const cards = Object.values(myCard.current);
    const matches = cards.filter((e) => {
      if (e) {
        return e.className.includes('rotate');
      }
      return null;
    });
    if (matches.length === defineWin(level)) setWin(true);
  }

  async function getCardsImages(numberOfCards: number) {
    for (let i = 1; i <= numberOfCards; i++) {
      const randId = Math.floor(Math.random() * 300 + 1);
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randId}`)
        .then((res) => {
          const pokemon = res.data;
          const pokemonImage = pokemon.sprites.front_default;
          setImgs((oldImgs) => [...oldImgs, pokemonImage]);
        });
    }
  }

  useEffect(() => {
    switch (level) {
      case 1:
        getCardsImages(4);
        break;
      case 2:
        getCardsImages(6);
        break;
      case 3:
        getCardsImages(9);
        break;
    }
  }, [level]);

  return (
    <cardContext.Provider
      value={{
        pair,
        setPair,
        checkPair,
        buildRef,
        myCard,
        checkWin,
        win,
        setWin,
        clearPair,
        imgs,
        setImgs,
      }}
    >
      {children}
    </cardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(cardContext);

  return context;
}
