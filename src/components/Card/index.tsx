import React from 'react';
import { Card } from './style';
type MyProps = {
  card: string;
  onClick: React.MouseEventHandler;
};

const index = React.forwardRef(
  ({ card, onClick }: MyProps, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <Card>
        <div className='card' data-pokemon={card} ref={ref} onClick={onClick}>
          <div className='card__back'></div>
          <div className='card__front'>
            <img src={card} />
          </div>
        </div>
      </Card>
    );
  }
);

index.displayName = 'index';

export default index;
