import React from 'react';
import last from 'lodash/last';
import jQuery from 'jquery';
import ModalAlert from '../modal-alert';

import './style.scss';

class ModalAlertStack extends React.PureComponent {
  stackElementRef = React.createRef();

  get alerts() {
    const { alerts } = this.props;
    return alerts || [];
  }

  componentDidUpdate(prevProps) {
    const { alerts } = this.props;
    if (prevProps.alerts.length < alerts.length) {
      this.reposition(this.onAlertAdded(last(alerts)));
    }
  }

  onAlertAdded = alert => {
    return () => {
      const { onHideAlert } = this.props;
      setTimeout(() => onHideAlert(alert), 8000);
    };
  };

  reposition(callback) {
    const elem = jQuery(this.stackElementRef.current);
    if (elem) {
      elem.animate(
        { top: `-${elem.height()}px` },
        {
          duration: 500,
          complete: callback,
        }
      );
    }
  }

  renderAlert = (alert, index) => {
    return (
      <ModalAlert
        key={`alert-${index}`}
        error={alert.type === 'error'}
        warning={alert.type === 'warning'}
        success={alert.type === 'success'}
        hideAfter="8000"
        {...alert}
      />
    );
  };

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-modal-alert-stack" ref={this.stackElementRef}>
        {this.alerts.map(this.renderAlert)}
      </div>
    );
  }
}

export default ModalAlertStack;
