import React from 'react';
import { Color } from '../../theme';

interface CardProps {
  bg?: Color;
  borderColor?: Color;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant: 'outlined' | 'normal';
}

export function Card(props: CardProps): JSX.Element;
