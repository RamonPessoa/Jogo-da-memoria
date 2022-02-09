import React, { useRef } from 'react';
import { Select } from './style';
import { useLevel } from '@contexts/LevelContext';
import { useCard } from '@contexts/CardContext';

export default function index() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { myCard, clearPair } = useCard();
  const { setLevel } = useLevel();

  const handleChange = () => {
    const currentLevel = selectRef.current?.value;
    const elements = Object.values(myCard.current);
    let isTurned = false;
    elements.map((el) => {
      el?.className.includes('rotate') ? (isTurned = true) : (isTurned = false);

      el?.classList.remove('rotate');
      return null;
    });
    if (isTurned) {
      setTimeout(() => {
        setLevel(Number(currentLevel));
      }, 1000);
    } else setLevel(Number(currentLevel));

    clearPair();
  };

  return (
    <Select
      onChange={handleChange}
      className='levels'
      ref={selectRef}
      name='levels'
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
