import _ from 'lodash';

import json2mq from 'json2mq';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useContext } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const BreakPointsContext = createContext();

const BreakPoints = {
  xs: json2mq({
    maxWidth: 575.98,
  }),
  sm: json2mq({
    minWidth: 576,
    maxWidth: 767.98,
  }),
  md: json2mq({
    minWidth: 768,
    maxWidth: 991.98,
  }),
  lg: json2mq({
    minWidth: 992,
    maxWidth: 1199.98,
  }),
  xl: json2mq({
    minWidth: 1200,
  }),
};
export const BreakPointsProvider = ({ children, ...props }) => {
  const [screen, setScreen] = useState(null);
  const [mediaQueries, setMediaQueries] = useState([]);
  const match = useMediaQuery();

  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  useEffect(() => {
    setMediaQueries(_.keys(BreakPoints).map(key => `@media ${BreakPoints[key]}`));
  }, []);

  useEffect(() => {
    if (match(BreakPoints.xs)) setScreen('xs');
    if (match(BreakPoints.sm)) setScreen('sm');
    if (match(BreakPoints.md)) setScreen('md');
    if (match(BreakPoints.lg)) setScreen('lg');
    if (match(BreakPoints.xl)) setScreen('xl');
  }, [bounds]);

  const values = useMemo(() => {
    return {
      mediaQueries,
      screen,
    };
  }, [mediaQueries, screen]);

  return (
    <div ref={ref}>
      <BreakPointsContext.Provider value={values}>{children}</BreakPointsContext.Provider>
    </div>
  );
};
