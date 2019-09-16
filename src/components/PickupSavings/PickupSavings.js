import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';

const styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
};

const PickupSavings = props => {
  const tooltip = (
    <div id='tooltip' className='badge badge-dark'>
      <p>
        Pick up your order in your local store location for additional savings.
      </p>
    </div>
  );

  return (
    <div className='grid-2'>
      <div>
        <OverlayTrigger placement='bottom' overlay={tooltip}>
          <div style={styles.pickupSavings}>
            <p>Pickup Savings</p>
          </div>
        </OverlayTrigger>
      </div>
      <div style={styles.totalSavings}>{`$${props.price}`}</div>
    </div>
  );
};

export default PickupSavings;
