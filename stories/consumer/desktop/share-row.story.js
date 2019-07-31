import React from 'react';
import { storiesOf } from '@storybook/react';

import ShareRow from '../../../components/consumer/desktop/share-row';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import { colorTypes } from '../../../components/consumer/shared/color-types';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('share-row/default', () => (
    <FieldStateProvider
      component={ShareRow}
      name="shareRow"
      label="Heading"
      hint="Hint text."
      amount="$00.00"
      color={colorTypes.BLUE_60}
    />
  ));
