import React from 'react';
import { Color } from '../../theme';

export type JustifyContentType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-evenly'
  | 'space-between';

export type AlignItemsType = 'center' | 'stretch' | 'baseline' | 'flex-end' | 'flex-start';

export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexDireaction =
  | 'row'
  | 'unset'
  | 'revert'
  | 'column'
  | 'inherit'
  | 'initial'
  | 'column-reverse'
  | 'row-reverse';

export type BootstrapSpacingSystem = {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
};

interface FlexboxProps extends BootstrapSpacingSystem {
  bg?: Color;
  direction?: FlexDireaction;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  flexWrap?: FlexWrapType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  noSpacing?: boolean;
  gap?: number;
}

export function Flexbox(props: FlexboxProps): JSX.Element;
