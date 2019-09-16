import React, { Component, Fragment } from 'react';
import { Collapse, Media } from 'react-bootstrap';

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <Fragment>
        <button
          className='btn btn-link'
          style={{ color: 'var(--primary-color)' }}
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? 'Show' : 'Hide'} Item Details
          {this.state.open === false ? '+' : '-'}
        </button>
        <Collapse in={this.state.open}>
          <div className='box-shadow p-2'>
            <Media className='m'>
            <img
                alt='gpu-item'
                style={{ width: '120px', marginTop: '5rem' }}
                src='https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/14-137-364-V02.jpg'
              />
              <Media.Body className="all-center">
                <h5>
                  MSI GeForce RTX 2070 DirectX 12 RTX 2070 GAMING Z 8G 8GB
                  256-Bit GDDR6 PCI Express 3.0 x16 HDCP Ready Video Card
                </h5>
                <ul className='text-left'>
                  <li>HardOCP Gold Award</li>
                  <li>8GB 256-Bit GDDR6</li>
                  <li>Boost Clock 1830 MHz</li>
                  <li>1 x HDMI 2.0b 3 x DisplayPort 1.4</li>
                  <li>2304 CUDA Cores</li>
                  <li>PCI Express 3.0 x16</li>
                </ul>
                <p>
                  The much anticipated return of MSI’s iconic dual fan GAMING
                  series. Combining a mix of black and gunmetal grey with a
                  classy brushed metal backplate, this masterpiece provides you
                  premium design with magnificent and smooth RGB light effects
                  on the outside. The new MSI GAMING card is designed to amaze
                  you!
                </p>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </Fragment>
    );
  }
}

export default ItemDetails;
