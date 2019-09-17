import React, { Component, Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  }

  render() {
    return (
      <Fragment>
        <button
          className='btn btn-link text-success mb-4'
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? 'Apply ' : 'Hide '}
          Promo Code
          {this.state.open === false ? ' +' : ' -'}
        </button>
        <Collapse in={this.state.open}>
          <div style={{ margin: 'auto' }}>
            <Form className='box-shadow bg-light p-2 grid-4'>
              <Form.Group
                controlId='formBasicName'
                style={{ gridColumn: '2 / 4' }}
              >
                <Form.Label><strong>Promo Code</strong></Form.Label>
                <Form.Control
                  type='name'
                  size='sm'
                  placeholder='Enter Promo Code'
                  value={this.props.promoCode}
                  onChange={this.handleChange}
                />
                <button
                  className='btn btn-sm btn-success'
                  disabled={this.props.isDisabled}
                  onClick={this.props.givePromo}
                  style={{ gridColumn: '2 / 4' }}
                >
                  Submit
                </button>
              </Form.Group>
            </Form>
          </div>
        </Collapse>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCode);
