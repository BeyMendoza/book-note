import _ from 'lodash';
import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from '../../utils/withTheme';

export const Text = withTheme(({ children, variant = 'h5', theme, ...props }) => {
  const Typography = TextVariants[variant];
  const color = _.get(theme.palette, _.get(props, 'color', 'text.primary'), theme.palette.text.primary);
  return (
    <TypographyContainer color={color}>
      <Typography {...props}>{children}</Typography>
    </TypographyContainer>
  );
});

// ===========================================
// ALL TEXT VARIANTS HERE
// We used Google Material Docs for define this components
// https://material.io/design/typography/the-type-system.html#type-scale
// ===========================================

const TypographyContainer = styled.div`
  color: ${props => props.color};
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 10px 0px;
  }
`;

const H1 = styled.h1`
  font-weight: lighter;
  font-size: 96px;
  letter-spacing: -1.5px;
`;

const H2 = styled.h2`
  font-weight: lighter;
  font-size: 60px;
  letter-spacing: -0.5px;
`;

const H3 = styled.h3`
  font-weight: normal;
  font-size: 48px;
  letter-spacing: 0px;
`;

const H4 = styled.h4`
  font-weight: lighter;
  font-size: 34px;
  letter-spacing: 0.25px;
`;

const H5 = styled.h5`
  font-size: 24px;
  font-weight: inherit;
  letter-spacing: 0px;
`;

const H6 = styled.h6`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
`;

const Subtitle1 = styled.p`
  font-size: 16px;
  font-weight: inherit;
  letter-spacing: 0.15px;
`;

const Subtitle2 = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1px;
`;

const Body1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const Body2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
`;

const Button = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const Caption = styled.p`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.4px;
`;

const Overline = styled.p`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const TextVariants = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  subtitle1: Subtitle1,
  subtitle2: Subtitle2,
  body1: Body1,
  body2: Body2,
  button: Button,
  caption: Caption,
  overline: Overline,
};
