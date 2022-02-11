import React, { useRef } from 'react';
import { Select } from './style';
import { useLevel } from '@contexts/LevelContext';
import { useBoard } from '@contexts/GameContext';

export default function index() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { setLevel, level } = useLevel();
  const { unturnAllCards } = useBoard();

  const handleChange = () => {
    unturnAllCards();
    const currentLevel = selectRef.current?.value;
    setLevel(Number(currentLevel));
  };

  return (
    <Select
      onChange={handleChange}
      className='levels'
      ref={selectRef}
      name='levels'
      value={level}
    >
      <option className='levels__option' value='1'>
        {' '}
        Nível 1
      </option>
      <option className='levels__option' value='2'>
        {' '}
        Nível 2
      </option>
      <option className='levels__option' value='3'>
        {' '}
        Nível 3
      </option>
    </Select>
  );
}
