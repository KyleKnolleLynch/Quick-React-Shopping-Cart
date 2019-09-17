import React, { Component } from 'react';
import Subtotal from './Subtotal/Subtotal';
import PickupSavings from './PickupSavings/PickupSavings';
import TaxFees from './TaxFees/TaxFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import ItemDetails from './ItemDetails/ItemDetails';
import PromoCode from './PromoCode/PromoCode';
import { connect } from 'react-redux';
import { handleChange } from '../actions/promoCodeActions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 489.99,
      pickupSavings: -5.5,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.08
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.taxes + this.state.pickupSavings
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      }, 
      function() {
        this.setState({
          disablePromoButton: true
        })
      }
      )
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center m-4'>
          <span style={{ color: 'var(--primary-color)' }}>NewBiscuit</span>{' '}
          Shopping Cart{' '}
          <span>
            <i className='p fas fa-shopping-cart'></i>
          </span>
        </h1>
        <div className='card text-center box-shadow mb-4'>
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
          <TaxFees taxes={this.state.taxes.toFixed(2)} />
          <hr className='my' />
          <EstimatedTotal
            estimatedTotal={this.state.estimatedTotal.toFixed(2)}
          />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            givePromo={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(Card);
