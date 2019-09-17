import React from 'react';

const EstimatedTotal = props => {
  return (
    <div className='grid-2 my-3'>
      <div>
        <h3>Est. Total</h3>
      </div>
      <div>
        <h3>{`$${props.estimatedTotal}`}</h3>
      </div>
    </div>
  );
};

export default EstimatedTotal;
