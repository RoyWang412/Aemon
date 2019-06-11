import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import PopoverTooltip from '../../../components/consumer/desktop/popover-tooltip';
import { withContainer } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const trigger = (props) => (
  <a onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
    mouse here.
  </a>
);

trigger.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
}

storiesOf('Consumer/Desktop/Modals & Popovers/popover-tooltip', module)
  .addDecorator(withContainer)
  .addDecorator(storyFn => <div className="w-100 h-100 bg-light">{storyFn()}</div>)
  .add('popover-tooltip/default', () => (
    <PopoverTooltip trigger={trigger} content={<span>I am popover content</span>} />
  ))
  .add('popover-tooltip/default/constrained', () => (
    <div className="offset-sm-10 col-sm-2">
      <PopoverTooltip trigger={trigger} content={<span>I am popover content</span>} />
    </div>
  ));
