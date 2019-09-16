import React, { Component } from 'react';
import Subtotal from './Subtotal/Subtotal';
import PickupSavings from './PickupSavings/PickupSavings';
import TaxFees from './TaxFees/TaxFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import ItemDetails from './ItemDetails/ItemDetails';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -5.5,
      taxes: 0,
      estimatedTotal: 0
    };
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center large text-primary m-1'>NewBiscuit Shopping Cart</h1>
        <div className='card text-center box-shadow p-1 my-3'>
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
          <TaxFees taxes={this.state.taxes.toFixed(2)} />
          <hr className='my' />
          <EstimatedTotal estimatedTotal={this.state.estimatedTotal} />
          <ItemDetails />
        </div>
      </div>
    );
  }
}

export default Card;
