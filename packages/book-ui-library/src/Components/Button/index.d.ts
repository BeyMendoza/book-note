import { ReactNode } from 'react';
import { ClassThemeCallback, Color, StyleThemeCallback } from '../../theme';

interface ButtonProps {
  color?: Color;
  children?: ReactNode;
  className?: string | ClassThemeCallback;
  variant?: 'text' | 'contained' | 'outlined';
  style?: React.CSSProperties | StyleThemeCallback;
}

export function Button(props: ButtonProps): JSX.Element;
