import React, { ReactNode } from 'react';
import { Color } from '../../theme';

export type TextVariant =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';

interface TextProps {
  color: Color;
  className?: string;
  variant: TextVariant;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export function Text(props: TextProps): JSX.Element;
