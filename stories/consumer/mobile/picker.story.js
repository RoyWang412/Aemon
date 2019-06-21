import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { Picker } from '../../../components/consumer/mobile/form-fields';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Choose one', value: null },
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
];
const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=7%3A8';

storiesOf('Consumer/Mobile/Form Fields/Picker', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
    />
  ))
  .add('Valid/Required', () => (
    <Picker name="picker" label="Label" onChange={action('onChange')} required options={options} />
  ))
  .add('Invalid', () => (
    <Picker
      name="picker"
      label="Label"
      hint="Select one awesome value"
      error="You selection is terrible"
      onChange={action('onChange')}
      options={options}
    />
  ));
