import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';
import Avatar from '../avatar';

export const URL_PREFIX = 'https://assets.paybygroup.com/images/activity-icons/';

export const PURCHASE_UPDATED = 'purchase_updated';
export const PURCHASE_CLAIMED = 'purchase_claimed';
export const MEMBER_INVITED = 'member_invited';
export const MEMBER_JOINED = 'member_joined';
export const MEMBER_WITHDREW = 'member_withdrew';
export const PURCHASE_TIPPED = 'purchase_tipped';
export const PURCHASE_UNTIPPED = 'purchase_untipped';
export const PAYMENT_AUTHORIZED = 'payment_authorized';
export const PAYMENT_CAPTURED = 'payment_captured';
export const PURCHASE_COMPLETED = 'purchase_completed';
export const PURCHASE_COMMENT_CREATED = 'purchase_comment_created'
export const DEFAULT_ICON_URL = `${URL_PREFIX}${MEMBER_WITHDREW}`;

import './style.css';

class ActivityThumbnail extends React.PureComponent {
  static DEFAULT_SIZE = 35

  static propTypes = {
    size: PropTypes.number.isRequired,
    userId: PropTypes.string,
    src: PropTypes.string,
    type(props, propName) {
      if (!includes(Object.keys(ActivityThumbnail.types), props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    },
  }

  static defaultProps = {
    size: ActivityThumbnail.DEFAULT_SIZE,
    type: null,
    userId: null,
    src: null,
  }

  static icons = {
    [PURCHASE_UPDATED]: `${URL_PREFIX}${PURCHASE_UPDATED}.svg`,
    [PURCHASE_CLAIMED]: `${URL_PREFIX}${PURCHASE_CLAIMED}.svg`,
    [MEMBER_INVITED]: `${URL_PREFIX}${MEMBER_INVITED}.svg`,
    [MEMBER_JOINED]: `${URL_PREFIX}${MEMBER_JOINED}.svg`,
    [MEMBER_WITHDREW]: `${URL_PREFIX}${MEMBER_WITHDREW}.svg`,
    [PURCHASE_TIPPED]: `${URL_PREFIX}${PURCHASE_TIPPED}.svg`,
    [PURCHASE_UNTIPPED]: `${URL_PREFIX}${PURCHASE_UNTIPPED}.svg`,
    [PAYMENT_AUTHORIZED]: `${URL_PREFIX}${PAYMENT_AUTHORIZED}.svg`,
    [PAYMENT_CAPTURED]: `${URL_PREFIX}${PAYMENT_CAPTURED}.svg`,
    [PURCHASE_COMPLETED]: `${URL_PREFIX}${PURCHASE_COMPLETED}.svg`,
    [PURCHASE_COMMENT_CREATED]: false,
  }

  renderDefaultIcon() {
    return (
      <div className="activity-thumbnail">
        <img src={DEFAULT_ICON_URL} width={this.props.size} />
      </div>
    );
  }

  renderAvatarWithSource() {
    return (
      <div className="activity-thumbnail">
        <Avatar size={this.props.size} src={this.props.src} />
      </div>
    );
  }

  renderAvatarWithUserID() {
    return (
      <div className="activity-thumbnail">
        <Avatar size={this.props.size} userId={this.props.userId} />
      </div>
    );
  }

  render() {
    let url = ActivityThumbnail.icons[this.props.type];

    if (!url && this.props.src) {
      return this.renderAvatarWithSource();
    }

    if (!url && this.props.userId) {
      return this.renderAvatarWithUserID();
    }

    return (
      <div className="activity-thumbnail">
        <img src={url} width={this.props.size} height={this.props.size} />
      </div>
    );
  }
}

export default ActivityThumbnail