import { ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
  component: Button,
  title: 'ButtonExample',
};

export const ButtonExample: ComponentStory<typeof Button> = () => (
  <Button
    title="테스트"
    onClick={() => {
      console.log('hello, storybook!');
    }}
  />
);
