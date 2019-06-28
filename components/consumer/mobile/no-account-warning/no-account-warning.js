import React from 'react';
import { H3 } from '../heading';
import { SmallButton } from '../button';

import './style.scss';

export const NoAccountWarning = ({ title, text, onClick, ctaText, type, className }) => (
  <div className={buildClassName({ type, className })}>
    <div className="d-flex">
      <img src="https://assets.paybygroup.com/images/icons/warning.svg" />
      <div className="flex-grow-1">
        <H3>{title}</H3>
      </div>
    </div>
    <p>{text}</p>
    <div>
      <SmallButton onClick={onClick}>{ctaText}</SmallButton>
    </div>
  </div>
);

const buildClassName = ({ type, className }) => {
  let base = 'pbg-consumer-mobile pbg-no-account-warning';
  if (className) {
    base += ` ${className}`;
  }

  if (type && classNames[type]) return `${base} ${classNames[type]}`;

  return base;
};

export default NoAccountWarning;
