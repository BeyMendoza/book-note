import React from 'react';
import { ClassThemeCallback, Color, StyleThemeCallback } from '../../theme';

interface CardProps {
  bg?: Color;
  borderColor?: Color;
  children?: React.ReactNode;
  variant: 'outlined' | 'normal';
  className?: string | ClassThemeCallback;
  style?: React.CSSProperties | StyleThemeCallback;
}

export function Card(props: CardProps): JSX.Element;
