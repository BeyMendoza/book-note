import _ from 'lodash';
import { Card } from '../core';
import { ThemeProvider } from '../core/theme';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    variant: {
      options: ['outlined'],
      control: { type: 'select' },
    },
    borderColor: {
      options: ['primary.main', 'error.main', 'divider', 'success.main', 'warning.main', 'info.main'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ theme = false, variant = 'normal', ...args }) => {
  console.log();
  return (
    <ThemeProvider mode={theme ? 'dark' : 'light'}>
      <Card style={{ padding: '2rem' }} bg="background.default">
        <Card {...args} variant={variant} style={{ padding: '4rem' }} />
      </Card>
    </ThemeProvider>
  );
};
export const Normal = Template.bind({});

Normal.args = {
  variant: undefined,
  borderColor: undefined,
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: 'outlined',
  borderColor: 'divider',
};

export const NormalDark = Template.bind({});

NormalDark.args = {
  theme: true,
};

export const NormalDarkOutlined = Template.bind({});

NormalDarkOutlined.args = {
  theme: true,
  variant: 'outlined',
  borderColor: 'divider',
};
