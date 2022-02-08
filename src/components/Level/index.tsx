import React from 'react';
import { Select } from './style';

export default function index() {
  return (
    <Select className='levels' name='levels'>
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
