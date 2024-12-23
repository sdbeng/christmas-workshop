import {initializeDevCycle} from '@devcycle/js-client-sdk';

const user = {isAnonymous: true}
const devcycleOptions = { enableStreaming: true, eventFlushIntervalMS: 1000 }

export const devCycleClient = initializeDevCycle(
  process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY!,
  user,
  devcycleOptions,
)