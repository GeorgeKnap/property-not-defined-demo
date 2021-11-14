/* eslint-disable @typescript-eslint/no-explicit-any */
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Constructor } from './constructor.type';

export function SubscriptionHandler<T extends Constructor<any>>(Base: T) {
  return class extends Base implements OnDestroy {
    subscriptionHandler$: Subject<any>;

    constructor(...args: any[]) {
      super(...args);
      this.subscriptionHandler$ = new Subject();
    }

    ngOnDestroy() {
      this.subscriptionHandler$.next(undefined);
      this.subscriptionHandler$.complete();
    }
  };
}
