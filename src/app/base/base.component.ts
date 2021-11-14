import { SubscriptionHandler } from './subscription-handler.mixin';
class SdsBase implements SdsComponent {}
export const BaseComponent = SubscriptionHandler(SdsBase);

// to use any more mixins just wrap them toglether:
// export const BaseComponent = FooMixin(SubscriptionHandler(SdsBase));
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SdsComponent {}
