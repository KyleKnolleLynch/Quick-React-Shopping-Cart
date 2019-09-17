import React from 'react';

const Subtotal = props => {
  return (
    <div className='grid-2 mt-3'>
      <div>
        <p>Subtotal</p>
      </div>
      <div>{`$${props.price}`}</div>
    </div>
  );
};

export default Subtotal;
