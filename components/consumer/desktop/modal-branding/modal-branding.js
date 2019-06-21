import React from 'react';
import PropTypes from 'prop-types';

import powerByLogo from '../img/pbg-powered-by-logo.svg';
import Divider from '../divider';

import './style.scss';

class ModalBranding extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-branding';

  static propTypes = {
    logo: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  renderFooter() {
    return (
      <div className="pbg-modal-branding-footer">
        <Divider />
        <div className="pbg-modal-branding-footer-content">
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={this.baseClass}>
        <div className="pbg-modal-branding-header">
          <div className="pbg-modal-branding-merchant-logo">
            <img src={this.props.logo} />
          </div>
          <div className="pbg-modal-branding-powered-by-logo">
            <span>powered by</span>
            <img src={powerByLogo} />
          </div>
        </div>
        {this.props.children ? this.renderFooter() : ''}
      </div>
    );
  }
}

export default ModalBranding;
