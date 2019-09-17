import React from 'react';

const TaxFees = props => {
  return (
    <div className='grid-2'>
      <div>
        <p>Est. Taxes & Fees</p>
        <p style={{ marginTop: '-1rem' }}>(based on 78727)</p>
      </div>
      <div>{`$${props.taxes}`}</div>
    </div>
  );
};

export default TaxFees;
