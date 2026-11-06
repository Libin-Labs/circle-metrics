import * as api from '@lp-labs/circle-metrics';
import { circleMetrics } from '@lp-labs/circle-metrics';
console.log(circleMetrics(2));
// @ts-expect-error invalid argument must be rejected by declarations
api.circleMetrics('one');
