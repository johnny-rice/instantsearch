import { safelyRunOnBrowser } from 'instantsearch.js/es/lib/utils';
import React, { useEffect, useRef } from 'react';
import {
  InstantSearch,
  InstantSearchRSCContext,
  InstantSearchSSRProvider,
} from 'react-instantsearch-core';

import { InitializePromise } from './InitializePromise';
import { TriggerSearch } from './TriggerSearch';
import { useInstantSearchRouting } from './useInstantSearchRouting';
import { useNextHeaders } from './useNextHeaders';
import { warn } from './warn';

import type { InitialResults, StateMapping, UiState } from 'instantsearch.js';
import type { BrowserHistoryArgs } from 'instantsearch.js/es/lib/routers/history';
import type {
  InstantSearchProps,
  PromiseWithState,
} from 'react-instantsearch-core';

const InstantSearchInitialResults = Symbol.for('InstantSearchInitialResults');
declare global {
  interface Window {
    [InstantSearchInitialResults]?: InitialResults;
  }
}

export type InstantSearchNextRouting<TUiState, TRouteState> = {
  router?: Partial<BrowserHistoryArgs<TRouteState>>;
  stateMapping?: StateMapping<TUiState, TRouteState>;
};

export type InstantSearchNextProps<
  TUiState extends UiState = UiState,
  TRouteState = TUiState
> = Omit<InstantSearchProps<TUiState, TRouteState>, 'routing'> & {
  routing?: InstantSearchNextRouting<TUiState, TRouteState> | boolean;
};

export function InstantSearchNext<
  TUiState extends UiState = UiState,
  TRouteState = TUiState
>({
  children,
  routing: passedRouting,
  ...instantSearchProps
}: InstantSearchNextProps<TUiState, TRouteState>) {
  const isMounting = useRef(true);
  const isServer = typeof window === 'undefined';

  useEffect(() => {
    isMounting.current = false;
    return () => {
      // This is to make sure that they're not reused if mounting again on a different route
      delete window[InstantSearchInitialResults];
    };
  }, []);

  const headers = useNextHeaders();

  const nonce = safelyRunOnBrowser(() => undefined, {
    fallback: () => headers?.get('x-nonce') || undefined,
  });

  const routing = useInstantSearchRouting(passedRouting, isMounting);

  warn(
    false,
    `InstantSearchNext relies on experimental APIs and may break in the future.
This message will only be displayed in development mode.`
  );

  return (
    <ServerOrHydrationProvider isServer={isServer}>
      <InstantSearch {...instantSearchProps} routing={routing!}>
        {isServer && <InitializePromise nonce={nonce} />}
        {children}
        {isServer && <TriggerSearch nonce={nonce} />}
      </InstantSearch>
    </ServerOrHydrationProvider>
  );
}

function ServerOrHydrationProvider({
  isServer,
  children,
}: {
  isServer: boolean;
  children: React.ReactNode;
}) {
  const promiseRef = useRef<PromiseWithState<void> | null>(null);
  const initialResults = safelyRunOnBrowser(
    () => window[InstantSearchInitialResults]
  );

  // If we're not on the server and we don't need to hydrate, we don't need SSR context
  if (!isServer && !initialResults) {
    return children;
  }

  return (
    <InstantSearchRSCContext.Provider value={promiseRef}>
      <InstantSearchSSRProvider initialResults={initialResults}>
        {children}
      </InstantSearchSSRProvider>
    </InstantSearchRSCContext.Provider>
  );
}
