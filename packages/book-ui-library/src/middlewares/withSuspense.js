import { lazy } from 'react';
import { Suspense } from '../Components/Suspense';

export const withSuspense = configs => lazyImport => props => {
  const Page = lazy(lazyImport);
  return <Suspense loader={<p>Loading...</p>} component={<Page {...props} />} />;
};
