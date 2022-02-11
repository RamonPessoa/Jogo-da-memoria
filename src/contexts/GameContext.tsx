import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLevel } from '@contexts/LevelContext';

type MyContext = {
  buildRef: (index: number) => (node: HTMLDivElement) => void;
  imgs: Array<string>;
  cardsRef: React.MutableRefObject<CardsRef>;
  shuffleBoard: () => Array<string>;
  unturnAllCards: Function;
  trys: number;
  setTrys: Function;
  pair: Array<HTMLDivElement>;
  setPair: Function;
  win: boolean;
  setWin: Function;
};

const boardContext = React.createContext({} as MyContext);

type MyProps = {
  children: React.ReactNode;
};

type CardsRef = {
  [key: number]: HTMLDivElement;
};

type Levels = {
  [key: number]: Function;
};

export default function BoardGame({ children }: MyProps) {
  const cardsRef = useRef({} as CardsRef);
  const [DB, setDB] = useState<Array<string>>([]);
  const [imgs, setImgs] = useState<Array<string>>([]);
  const [trys, setTrys] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);
  const [pair, setPair] = useState<Array<HTMLDivElement>>([]);
  const { level } = useLevel();

  const buildRef = (index: number) => {
    return (node: HTMLDivElement) => (cardsRef.current[index] = node);
  };

  function defineBoardCards(qtd: number) {
    setImgs([...DB.slice(0, qtd), ...DB.slice(0, qtd)]);
    // if (imgs.length === qtd * 2) shuffleBoard();
  }

  function getLevelCards(level: number) {
    const levels: Levels = {
      1: () => defineBoardCards(4),
      2: () => defineBoardCards(6),
      3: () => defineBoardCards(9),
    };

    return levels[level]();
  }

  function shuffleBoard() {
    const shuffled = imgs;
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randCard = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randCard]] = [shuffled[randCard], shuffled[i]];
    }

    return shuffled;
  }
  function unturnAllCards() {
    const allCards = Object.values(cardsRef.current).filter(
      (el) => el !== null
    );
    allCards.forEach((el) => {
      el.classList.add('no-transition');
      el.classList.remove('rotate');
      setTimeout(() => {
        el.classList.remove('no-transition');
      }, 1);
    });
  }

  useEffect(() => {
    for (let i = 9; i > 0; i--) {
      const randPokemon = Math.floor(Math.random() * (300 + 1));
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randPokemon}`)
        .then((res) =>
          setDB((oldDB) => [...oldDB, res.data.sprites.front_default])
        );
    }
  }, []);

  useEffect(() => {
    getLevelCards(level);
  }, [DB, level]);

  return (
    <boardContext.Provider
      value={{
        buildRef,
        imgs,
        cardsRef,
        shuffleBoard,
        unturnAllCards,
        trys,
        setTrys,
        pair,
        setPair,
        win,
        setWin,
      }}
    >
      {children}
    </boardContext.Provider>
  );
}

export function useBoard() {
  const context = useContext(boardContext);

  return context;
}
