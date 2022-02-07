import React from 'react';
import Titulo from '@components/Titulo';
import Level from '@components/Level';
import Board from '@components/Board';
import { Container } from './style';

export default function index() {
  return (
    <Container>
      <Titulo />
      <Level />
      <Board />
    </Container>
  );
}
