import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../divider';
import Modal from '../modal';

import './style.css';

class PrimaryModal extends React.PureComponent {
  static propTypes = {
    mainContent: PropTypes.node,
    sidebarContent: PropTypes.node,
    footerContent: PropTypes.node,
    onClose: PropTypes.func,
    onHideAlert: PropTypes.func,
    alerts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    mainContent: null,
    sidebarContent: null,
    footerContent: null,
    onClose: null,
    onHideAlert: null,
    alerts: [],
  };

  render() {
    return (
      <Modal
        className="pbg-primary-modal"
        onClose={this.props.onClose}
        alerts={this.props.alerts}
        onHideAlert={this.props.onHideAlert}
      >
        <div className="pbg-primary-modal-content">
          <div className="pbg-primary-modal-col">
            <div className="pbg-primary-modal-main-content">{this.props.mainContent}</div>
            <Divider />
            <div className="pbg-primary-modal-footer-content">{this.props.footerContent}</div>
          </div>
          <div className="pbg-primary-modal-sidebar-content pbg-primary-modal-col">{this.props.sidebarContent}</div>
        </div>
      </Modal>
    );
  }
}

export default PrimaryModal;
