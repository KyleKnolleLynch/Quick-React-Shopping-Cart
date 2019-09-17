import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const PickupSavings = props => {
  const tooltip = (
    <Tooltip id='tooltip' className='badge-dark'>
      <p>
        Pick up your order at your local store location for additional savings.
      </p>
    </Tooltip>
  );

  return (
    <div className='grid-2'>
      <div>
        <OverlayTrigger placement='bottom' overlay={tooltip}>
          <div style={{ textDecoration: 'underline' }}>
            <p>Pickup Savings</p>
          </div>
        </OverlayTrigger>
      </div>
      <div style={{ color: 'red', fontWeight: 800 }}>{`$${props.price}`}</div>
    </div>
  );
};

export default PickupSavings;
