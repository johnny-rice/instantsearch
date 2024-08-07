'use strict';

var requestBuilder = require('../../src/requestBuilder');
var SearchParameters = require('../../src/SearchParameters');
var getQueries = requestBuilder._getQueries;

test('The request builder should set analytics to subsequent queries', function () {
  var testData = require('../datasets/SearchParameters/search.dataset')();
  var searchParams = testData.searchParams;

  searchParams.analytics = true;

  var queries = getQueries(searchParams.index, searchParams);
  expect(queries.length).toBe(2);
  expect(queries[0].params.analytics).toBe(true);
  expect(queries[1].params.analytics).toBe(false);
});

test('The request builder should set clickAnalytics to subsequent queries', function () {
  var testData = require('../datasets/SearchParameters/search.dataset')();
  var searchParams = testData.searchParams;

  searchParams.clickAnalytics = true;

  var queries = getQueries(searchParams.index, searchParams);
  expect(queries.length).toBe(2);
  expect(queries[0].params.clickAnalytics).toBe(true);
  expect(queries[1].params.clickAnalytics).toBe(false);
});

test('The request builder should should force analytics to false on subsequent queries if not specified', function () {
  var testData = require('../datasets/SearchParameters/search.dataset')();
  var searchParams = testData.searchParams;

  var queries = getQueries(searchParams.index, searchParams);
  expect(queries.length).toBe(2);
  expect(queries[0].params.analytics).toBe(undefined);
  expect(queries[1].params.analytics).toBe(false);
});

test('The request builder should should force clickAnalytics to false on subsequent queries if not specified', function () {
  var testData = require('../datasets/SearchParameters/search.dataset')();
  var searchParams = testData.searchParams;

  var queries = getQueries(searchParams.index, searchParams);
  expect(queries.length).toBe(2);
  expect(queries[0].params.clickAnalytics).toBe(undefined);
  expect(queries[1].params.clickAnalytics).toBe(false);
});

test('does only a single query if refinements are empty', function () {
  var searchParams = new SearchParameters({
    disjunctiveFacets: ['test_disjunctive', 'test_numeric'],
    hierarchicalFacets: [
      { name: 'test_hierarchical', attributes: ['whatever'] },
    ],
    disjunctiveFacetsRefinements: {
      test_disjunctive: [],
    },
    numericRefinements: {
      test_numeric: {},
    },
    hierarchicalFacetsRefinements: {
      test_hierarchical: [],
    },
  });

  var queries = getQueries(searchParams.index, searchParams);
  expect(queries).toHaveLength(1);
});

describe('hierarchical facets', function () {
  var searchParams = new SearchParameters({
    hierarchicalFacets: [
      {
        name: 'categories.lvl0',
        attributes: ['categories.lvl0', 'categories.lvl1', 'categories.lvl2'],
      },
    ],
    hierarchicalFacetsRefinements: {
      'categories.lvl0': ['beers > IPA > Flying dog'],
    },
  });

  test('retrieve facet values of parent levels with multiple queries', function () {
    var queries = getQueries(searchParams.index, searchParams);

    expect(queries).toHaveLength(4);

    // Root
    expect(queries[2].params.facets).toEqual(['categories.lvl0']);
    expect(queries[2].params.facetsFilters).toBeUndefined();

    // Level 1
    expect(queries[3].params.facets).toEqual('categories.lvl1');
    expect(queries[3].params.facetFilters).toEqual(['categories.lvl0:beers']);
  });

  test('take other facet filters into account', function () {
    var newSearchParams = searchParams
      .addDisjunctiveFacet('brand')
      .addDisjunctiveFacetRefinement('brand', 'Incipio');
    var queries = getQueries(newSearchParams.index, newSearchParams);

    expect(queries).toHaveLength(5);

    // Root
    expect(queries[3].params.facets).toEqual(['categories.lvl0']);
    expect(queries[3].params.facetFilters).toEqual([['brand:Incipio']]);

    // Level 1
    expect(queries[4].params.facets).toEqual('categories.lvl1');
    expect(queries[4].params.facetFilters).toEqual([
      ['brand:Incipio'],
      'categories.lvl0:beers',
    ]);
  });
});

test('orders parameters alphabetically in every query', function () {
  var searchParams = new SearchParameters({
    facets: ['test'],
    disjunctiveFacets: ['test_disjunctive', 'test_numeric'],
    disjunctiveFacetsRefinements: {
      test_disjunctive: ['test_disjunctive_value'],
    },
    numericRefinements: {
      test_numeric: {
        '>=': [10],
      },
    },
    hierarchicalFacets: [
      { name: 'test_hierarchical', attributes: ['whatever'] },
    ],
    hierarchicalFacetsRefinements: {
      test_hierarchical: ['item'],
    },
    attributesToRetrieve: ['this is last in parameters, but first in queries'],
  });

  var queries = getQueries(searchParams.index, searchParams);

  expect(queries.length).toBe(4);
  expect(JSON.stringify(queries[0].params)).toBe(
    JSON.stringify({
      attributesToRetrieve: [
        'this is last in parameters, but first in queries',
      ],
      facetFilters: [
        ['test_disjunctive:test_disjunctive_value'],
        ['whatever:item'],
      ],
      facets: ['test', 'test_disjunctive', 'test_numeric', 'whatever'],
      numericFilters: ['test_numeric>=10'],
    })
  );
  expect(JSON.stringify(queries[1].params)).toBe(
    JSON.stringify({
      analytics: false,
      attributesToRetrieve: [
        'this is last in parameters, but first in queries',
      ],
      clickAnalytics: false,
      facetFilters: [['whatever:item']],
      facets: 'test_disjunctive',
      hitsPerPage: 0,
      numericFilters: ['test_numeric>=10'],
      page: 0,
    })
  );
  expect(JSON.stringify(queries[2].params)).toBe(
    JSON.stringify({
      analytics: false,
      attributesToRetrieve: [
        'this is last in parameters, but first in queries',
      ],
      clickAnalytics: false,
      facetFilters: [['test_disjunctive:test_disjunctive_value']],
      facets: ['whatever'],
      hitsPerPage: 0,
      numericFilters: ['test_numeric>=10'],
      page: 0,
    })
  );
  expect(JSON.stringify(queries[3].params)).toBe(
    JSON.stringify({
      analytics: false,
      attributesToRetrieve: [
        'this is last in parameters, but first in queries',
      ],
      clickAnalytics: false,
      facetFilters: [
        ['test_disjunctive:test_disjunctive_value'],
        ['whatever:item'],
      ],
      facets: 'test_numeric',
      hitsPerPage: 0,
      page: 0,
    })
  );
});

describe('wildcard facets', function () {
  test('keeps as-is if no * present', function () {
    var searchParams = new SearchParameters({
      facets: ['test'],
      disjunctiveFacets: ['test_disjunctive', 'test_numeric'],
      hierarchicalFacets: [
        { name: 'test_hierarchical', attributes: ['whatever'] },
      ],
    });

    var queries = getQueries(searchParams.index, searchParams);

    expect(queries.length).toBe(1);
    expect(queries[0].params.facets).toEqual([
      'test',
      'test_disjunctive',
      'test_numeric',
      'whatever',
    ]);
  });

  test('keeps only *', function () {
    var searchParams = new SearchParameters({
      facets: ['test', '*'],
      disjunctiveFacets: ['test_disjunctive', 'test_numeric'],
      hierarchicalFacets: [
        { name: 'test_hierarchical', attributes: ['whatever'] },
      ],
    });

    var queries = getQueries(searchParams.index, searchParams);

    expect(queries.length).toBe(1);
    expect(queries[0].params.facets).toEqual(['*']);
  });

  test('keeps only * when first value', function () {
    var searchParams = new SearchParameters({
      facets: ['*', 'test'],
      disjunctiveFacets: ['test_disjunctive', 'test_numeric'],
      hierarchicalFacets: [
        { name: 'test_hierarchical', attributes: ['whatever'] },
      ],
    });

    var queries = getQueries(searchParams.index, searchParams);

    expect(queries.length).toBe(1);
    expect(queries[0].params.facets).toEqual(['*']);
  });

  test('only applies to first query', function () {
    var searchParams = new SearchParameters({
      facets: ['test', '*'],
      disjunctiveFacets: ['test_disjunctive', 'test_numeric'],
      hierarchicalFacets: [
        { name: 'test_hierarchical', attributes: ['whatever'] },
      ],
      disjunctiveFacetsRefinements: { test_disjunctive: ['one', 'two'] },
    });

    var queries = getQueries(searchParams.index, searchParams);

    expect(queries.length).toBe(2);
    expect(queries[0].params.facets).toEqual(['*']);
    expect(queries[1].params.facets).toEqual('test_disjunctive');
  });
});

describe('request ordering', function () {
  test('should order queries and facet values by name', function () {
    // These facets are all sorted reverse-alphabetically
    var searchParams = new SearchParameters({
      facets: [
        'c_test_conjunctive_2',
        'c_conjunctive_1',
        'd_exclude_2',
        'd_exclude_1',
      ],
      disjunctiveFacets: ['b_disjunctive_2', 'b_disjunctive_1'],
      hierarchicalFacets: [
        {
          name: 'a_hierarchical_2',
          attributes: ['a_hierarchical_2'],
        },
        {
          name: 'a_hierarchical_1',
          attributes: ['a_hierarchical_1'],
        },
      ],
      hierarchicalFacetsRefinements: {
        a_hierarchical_2: ['beta'],
        a_hierarchical_1: ['alpha'],
      },
      disjunctiveFacetsRefinements: {
        b_disjunctive_2: ['beta', 'alpha'],
        b_disjunctive_1: ['beta', 'alpha'],
      },
      facetsRefinements: {
        c_conjunctive_2: ['beta', 'alpha'],
        c_conjunctive_1: ['beta', 'alpha'],
      },
      facetsExcludes: {
        d_exclude_2: ['beta', 'alpha'],
        d_exclude_1: ['beta', 'alpha'],
      },
    });

    var queries = getQueries(searchParams.index, searchParams);

    // Order of filters is alphabetical within type
    // Order of queries is alphabetical within type
    expect(queries.length).toBe(5);
    // Hits
    expect(queries[0].params.facetFilters).toEqual([
      'c_conjunctive_1:alpha',
      'c_conjunctive_1:beta',
      'c_conjunctive_2:alpha',
      'c_conjunctive_2:beta',
      'd_exclude_1:-alpha',
      'd_exclude_1:-beta',
      'd_exclude_2:-alpha',
      'd_exclude_2:-beta',
      ['b_disjunctive_1:alpha', 'b_disjunctive_1:beta'],
      ['b_disjunctive_2:alpha', 'b_disjunctive_2:beta'],
      ['a_hierarchical_1:alpha'],
      ['a_hierarchical_2:beta'],
    ]);
    // Hierarchical 1
    expect(queries[1].params.facetFilters).toEqual([
      'c_conjunctive_1:alpha',
      'c_conjunctive_1:beta',
      'c_conjunctive_2:alpha',
      'c_conjunctive_2:beta',
      'd_exclude_1:-alpha',
      'd_exclude_1:-beta',
      'd_exclude_2:-alpha',
      'd_exclude_2:-beta',
      ['b_disjunctive_1:alpha', 'b_disjunctive_1:beta'],
      ['b_disjunctive_2:alpha', 'b_disjunctive_2:beta'],
      ['a_hierarchical_2:beta'],
    ]);
    // Hierarchical 2
    expect(queries[2].params.facetFilters).toEqual([
      'c_conjunctive_1:alpha',
      'c_conjunctive_1:beta',
      'c_conjunctive_2:alpha',
      'c_conjunctive_2:beta',
      'd_exclude_1:-alpha',
      'd_exclude_1:-beta',
      'd_exclude_2:-alpha',
      'd_exclude_2:-beta',
      ['b_disjunctive_1:alpha', 'b_disjunctive_1:beta'],
      ['b_disjunctive_2:alpha', 'b_disjunctive_2:beta'],
      ['a_hierarchical_1:alpha'],
    ]);
    // Disjunctive 1
    expect(queries[3].params.facetFilters).toEqual([
      'c_conjunctive_1:alpha',
      'c_conjunctive_1:beta',
      'c_conjunctive_2:alpha',
      'c_conjunctive_2:beta',
      'd_exclude_1:-alpha',
      'd_exclude_1:-beta',
      'd_exclude_2:-alpha',
      'd_exclude_2:-beta',
      ['b_disjunctive_2:alpha', 'b_disjunctive_2:beta'],
      ['a_hierarchical_1:alpha'],
      ['a_hierarchical_2:beta'],
    ]);
    // Disjunctive 2
    expect(queries[4].params.facetFilters).toEqual([
      'c_conjunctive_1:alpha',
      'c_conjunctive_1:beta',
      'c_conjunctive_2:alpha',
      'c_conjunctive_2:beta',
      'd_exclude_1:-alpha',
      'd_exclude_1:-beta',
      'd_exclude_2:-alpha',
      'd_exclude_2:-beta',
      ['b_disjunctive_1:alpha', 'b_disjunctive_1:beta'],
      ['a_hierarchical_1:alpha'],
      ['a_hierarchical_2:beta'],
    ]);
  });
});
