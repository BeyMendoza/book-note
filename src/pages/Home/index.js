import { withSuspense } from '../../lib/core/middlewares/withSuspense';
export default withSuspense({})(() => import('./Home'));
