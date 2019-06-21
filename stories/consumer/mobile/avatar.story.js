import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import Avatar from '../../../components/consumer/mobile/avatar';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=551%3A451';

storiesOf('Consumer/Mobile/Atomic Components/Avatar', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Default size', () => <Avatar src="http://i.pravatar.cc/300" />)
  .add('Custom size', () => (
    <div className="flex middle">
      <Avatar className="mr-2" size={100} src="http://i.pravatar.cc/300" />
      <Avatar className="mr-2" size={150} src="http://i.pravatar.cc/300" />
      <Avatar className="mr-2" size={200} src="http://i.pravatar.cc/300" />
    </div>
  ))
  .add('Default fallback', () => <Avatar size={50} src="brokenlink.broken" />)
  .add('Fallbacks generated by userId', () => (
    <div className="flex middle">
      <Avatar className="mr-2" size={50} src="brokenlink.broken" userId="12345678" />
      <Avatar className="mr-2" size={50} src="brokenlink.broken" userId="234567890" />
      <Avatar className="mr-2" size={50} src="brokenlink.broken" userId="34567890" />
      <Avatar className="mr-2" size={50} src="brokenlink.broken" userId="4567890123" />
      <Avatar className="mr-2" size={50} src="brokenlink.broken" userId="56789012" />

      <Avatar className="mr-2" size={15} src="brokenlink.broken" userId="56789012" />
    </div>
  ));
