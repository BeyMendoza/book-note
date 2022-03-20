import React, { ReactNode } from 'react';
import { ClassThemeCallback, Color, StyleThemeCallback } from '../../theme';

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
  variant: TextVariant;
  children?: ReactNode;
  className?: string | ClassThemeCallback;
  style?: React.CSSProperties | StyleThemeCallback;
}

export function Text(props: TextProps): JSX.Element;
