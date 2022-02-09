import React, { useRef } from 'react';
import { Select } from './style';
import { useLevel } from '@contexts/LevelContext';
import { useCard } from '@contexts/CardContext';

export default function index() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { clearPair, setImgs } = useCard();
  const { setLevel, level } = useLevel();

  const handleChange = () => {
    const currentLevel = selectRef.current?.value;
    setLevel(Number(currentLevel));
    clearPair();
    setImgs([]);
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
