import React from 'react';

export const Suspense = ({ loader, component }) => {
  return <React.Suspense fallback={loader}>{component}</React.Suspense>;
};
