import {
  createSearchClient,
  createMultiSearchResponse,
  createSingleSearchResponse,
} from '@instantsearch/mocks';
import { wait } from '@instantsearch/testutils';

import type { SharedSetup } from '.';
import type { TestOptions } from '../../common';
import type { MockSearchClient } from '@instantsearch/mocks';
import type { SearchClient } from 'instantsearch.js';

declare const window: Window &
  typeof globalThis & {
    aa: jest.Mock;
  };

export function createInsightsTests(
  setup: SharedSetup,
  { act }: Required<TestOptions>
) {
  describe('insights', () => {
    describe('agents and algolia source', () => {
      test('automatic insights', async () => {
        const delay = 100;
        const margin = 10;
        const attribute = 'one';
        const hierarchicalAttribute = 'hierarchicalCategories.lvl0';

        window.aa = Object.assign(jest.fn(), { version: '2.17.2' });

        const options = {
          instantSearchOptions: {
            indexName: 'indexName',
            searchClient: createSearchClient({
              search: jest.fn(async (requests) => {
                await wait(delay);
                return createMultiSearchResponse(
                  ...requests.map(
                    ({
                      params,
                    }: Parameters<SearchClient['search']>[0][number]) =>
                      createSingleSearchResponse({
                        // @ts-ignore this key doesn't exist in v3, v4 types
                        _automaticInsights: true,
                        hits: [{ objectID: '1' }],
                        facets: {
                          [attribute]: {
                            Samsung: 100,
                            Apple: 200,
                          },
                        },
                        page: params.page,
                        nbPages: 20,
                      })
                  )
                );
              }) as MockSearchClient['search'],
            }),
          },
          widgetParams: {
            menu: {
              attribute,
            },
            hits: {},
            pagination: {},
            hierarchicalMenu: { attributes: [hierarchicalAttribute] },
          },
        };

        await setup(options);

        expect(window.aa).toHaveBeenCalledTimes(0);

        // Wait for initial results to populate widgets with data
        await act(async () => {
          await wait(margin + delay);
          await wait(0);
        });

        // initial calls because the middleware is attached
        expect(window.aa).toHaveBeenCalledTimes(5);
        expect(window.aa).toHaveBeenCalledWith(
          'addAlgoliaAgent',
          'insights-middleware'
        );
        expect(window.aa).toHaveBeenCalledWith(
          'viewedObjectIDs',
          {
            algoliaSource: [
              // event is sent with middleware
              'instantsearch',
              // when _automaticInsights is true
              'instantsearch-automatic',
              // event is sent by InstantSearch code
              'instantsearch-internal',
            ],
            eventName: 'Hits Viewed',
            index: 'indexName',
            objectIDs: ['1'],
          },
          {
            headers: {
              'X-Algolia-API-Key': 'apiKey',
              'X-Algolia-Application-Id': 'appId',
            },
          }
        );
      });

      test('manual insights', async () => {
        const delay = 100;
        const margin = 10;
        const attribute = 'one';
        const hierarchicalAttribute = 'hierarchicalCategories.lvl0';

        window.aa = Object.assign(jest.fn(), { version: '2.17.2' });

        const options = {
          instantSearchOptions: {
            insights: true,
            indexName: 'indexName',
            searchClient: createSearchClient({
              search: jest.fn(async (requests) => {
                await wait(delay);
                return createMultiSearchResponse(
                  ...requests.map(
                    ({
                      params,
                    }: Parameters<SearchClient['search']>[0][number]) =>
                      createSingleSearchResponse({
                        hits: [{ objectID: '1' }],
                        facets: {
                          [attribute]: {
                            Samsung: 100,
                            Apple: 200,
                          },
                        },
                        page: params.page,
                        nbPages: 20,
                      })
                  )
                );
              }) as MockSearchClient['search'],
            }),
          },
          widgetParams: {
            menu: {
              attribute,
            },
            hits: {},
            pagination: {},
            hierarchicalMenu: { attributes: [hierarchicalAttribute] },
          },
        };

        await setup(options);

        // initial calls because the middleware is attached
        expect(window.aa).toHaveBeenCalledTimes(4);
        expect(window.aa).toHaveBeenCalledWith(
          'addAlgoliaAgent',
          'insights-middleware'
        );

        // Wait for initial results to populate widgets with data
        await act(async () => {
          await wait(margin + delay);
          await wait(0);
        });

        // Once result is available
        expect(window.aa).toHaveBeenCalledTimes(5);
        expect(window.aa).toHaveBeenCalledWith(
          'viewedObjectIDs',
          {
            algoliaSource: [
              // event is sent with middleware
              'instantsearch',
              // event is sent by InstantSearch code
              'instantsearch-internal',
            ],
            eventName: 'Hits Viewed',
            index: 'indexName',
            objectIDs: ['1'],
          },
          {
            headers: {
              'X-Algolia-API-Key': 'apiKey',
              'X-Algolia-Application-Id': 'appId',
            },
          }
        );
      });
    });
  });
}
