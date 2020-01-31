import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => {
  throw new Error('foo');
};

ToStorybook.story = {
  name: 'to Storybook',
};
