# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.79.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.79.1...instantsearch.js@4.79.2) (2025-07-22)


### Bug Fixes

* **infiniteHits:** fix cache not using proper state ([#6671](https://github.com/algolia/instantsearch/issues/6671)) ([ec495e0](https://github.com/algolia/instantsearch/commit/ec495e0c79a24de4d012a2c15276b399fce2cdb6))





## [4.79.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.79.0...instantsearch.js@4.79.1) (2025-07-08)

**Note:** Version bump only for package instantsearch.js





# [4.79.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.78.3...instantsearch.js@4.79.0) (2025-06-16)


### Bug Fixes

* **breadcrumb:** use hierarchical facets only ([#6645](https://github.com/algolia/instantsearch/issues/6645)) ([c9e50d9](https://github.com/algolia/instantsearch/commit/c9e50d9230426c13fd68cf08b0004fc7e19147ce))
* **infiniteHits:** always return valid showPrevious and showMore functions ([#6644](https://github.com/algolia/instantsearch/issues/6644)) ([03670aa](https://github.com/algolia/instantsearch/commit/03670aa503f4428708e5fd2d76bd2c960063cf53))


### Features

* **refinementList:** add option to disable selecting on searchbox submit ([#6649](https://github.com/algolia/instantsearch/issues/6649)) ([8b9fae6](https://github.com/algolia/instantsearch/commit/8b9fae67738fec4aaf2a2dad93910be9d89ac69b))
* **server:** reset scheduleSearch only after all components mount ([#6650](https://github.com/algolia/instantsearch/issues/6650)) ([7aca759](https://github.com/algolia/instantsearch/commit/7aca7595d5a5bb026b0bd2e456f144c1eec61664))





## [4.78.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.78.2...instantsearch.js@4.78.3) (2025-05-06)


### Bug Fixes

* **insights:** use latest appId and apiKey ([#6631](https://github.com/algolia/instantsearch/issues/6631)) ([d03d391](https://github.com/algolia/instantsearch/commit/d03d391c088011aee9a2ad290f9531d662c6b905))





## [4.78.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.78.1...instantsearch.js@4.78.2) (2025-04-29)

**Note:** Version bump only for package instantsearch.js





## [4.78.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.78.0...instantsearch.js@4.78.1) (2025-03-18)

**Note:** Version bump only for package instantsearch.js





# [4.78.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.77.3...instantsearch.js@4.78.0) (2025-03-04)


### Features

* make events default implementation compatible with composition API ([#6569](https://github.com/algolia/instantsearch/issues/6569)) ([f43c40f](https://github.com/algolia/instantsearch/commit/f43c40f5d64708f6938ac2843b62b212c4885eff))





## [4.77.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.77.2...instantsearch.js@4.77.3) (2025-01-28)

**Note:** Version bump only for package instantsearch.js





## [4.77.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.77.1...instantsearch.js@4.77.2) (2025-01-28)


### Bug Fixes

* **recommend:** use Hit type instead of AlgoliaHit ([#6540](https://github.com/algolia/instantsearch/issues/6540)) ([6f2dc2f](https://github.com/algolia/instantsearch/commit/6f2dc2f8586abb11b92cbfe6030c8ada70563695))





## [4.77.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.77.0...instantsearch.js@4.77.1) (2025-01-21)


### Bug Fixes

* **recommend:** fix sendEvent function passing to Recommend components ([#6533](https://github.com/algolia/instantsearch/issues/6533)) ([38d9f95](https://github.com/algolia/instantsearch/commit/38d9f952861164eca01c7cba2403396d4f194bee))
* **refinement list:** prevent error when value has a quote ([#6526](https://github.com/algolia/instantsearch/issues/6526)) ([7721896](https://github.com/algolia/instantsearch/commit/772189605029e8bbb61413737824c096f16269da))





# [4.77.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.76.0...instantsearch.js@4.77.0) (2025-01-16)


### Features

* **recommend:** add support for event collection in recommend ([#6523](https://github.com/algolia/instantsearch/issues/6523)) ([2679a5e](https://github.com/algolia/instantsearch/commit/2679a5e6a5e5767fc3b1c1e074c53ab6a084e7f3))





# [4.76.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.7...instantsearch.js@4.76.0) (2025-01-14)


### Features

* composition ([#6437](https://github.com/algolia/instantsearch/issues/6437)) ([cee83ab](https://github.com/algolia/instantsearch/commit/cee83ab4473dc738dda7c6d928ebed88e3ec4c8d))





## [4.75.7](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.6...instantsearch.js@4.75.7) (2025-01-07)


### Bug Fixes

* **insights:** detect appId and apiKey from client directly in v5 ([#6492](https://github.com/algolia/instantsearch/issues/6492)) ([392a65b](https://github.com/algolia/instantsearch/commit/392a65bd92465e3b392632597dd82ac3120bdfda))





## [4.75.6](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.5...instantsearch.js@4.75.6) (2024-12-09)


### Bug Fixes

* **insights:** ensure the same token is used when rendered multiple times server side ([#6456](https://github.com/algolia/instantsearch/issues/6456)) ([c3a1c70](https://github.com/algolia/instantsearch/commit/c3a1c70fa79109a9ed7eb4509274887d8b0c972e))
* **instantsearch.js:** prevent authenticated token being set as the `userToken` ([#6443](https://github.com/algolia/instantsearch/issues/6443)) ([2f1f397](https://github.com/algolia/instantsearch/commit/2f1f397aa9583de89731c7c623712d171c10b4cf))
* **rendering:** ensure resilience against "null" results ([#6442](https://github.com/algolia/instantsearch/issues/6442)) ([a3f0e18](https://github.com/algolia/instantsearch/commit/a3f0e1830ca8c765b21feaf84657249d7f1f5857)), closes [#6441](https://github.com/algolia/instantsearch/issues/6441)





## [4.75.5](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.4...instantsearch.js@4.75.5) (2024-11-14)


### Bug Fixes

* **deps:** update search-insights ([#6433](https://github.com/algolia/instantsearch/issues/6433)) ([05d93de](https://github.com/algolia/instantsearch/commit/05d93deb05d219f5d124175119d2e55707fb51c9)), closes [#6432](https://github.com/algolia/instantsearch/issues/6432)





## [4.75.4](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.3...instantsearch.js@4.75.4) (2024-11-05)


### Bug Fixes

* **insights:** deduplicate view events ([#6414](https://github.com/algolia/instantsearch/issues/6414)) ([76b0247](https://github.com/algolia/instantsearch/commit/76b0247108a0597809a543a8c925aa7ae14c6b18))





## [4.75.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.2...instantsearch.js@4.75.3) (2024-10-24)


### Bug Fixes

* **instantsearch.js:** fix user token not being set in time for the first query ([#6377](https://github.com/algolia/instantsearch/issues/6377)) ([22016b0](https://github.com/algolia/instantsearch/commit/22016b02a7aa8d6736ea02e2c3998d878fdd0031))





## [4.75.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.1...instantsearch.js@4.75.2) (2024-10-22)


### Bug Fixes

* **refinement-list:** re-apply focus on facet checkbox after render ([#6392](https://github.com/algolia/instantsearch/issues/6392)) ([17e6658](https://github.com/algolia/instantsearch/commit/17e6658ff45c35bc5676d4b8569271b90e2328f2))





## [4.75.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.75.0...instantsearch.js@4.75.1) (2024-10-15)

**Note:** Version bump only for package instantsearch.js





# [4.75.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.74.2...instantsearch.js@4.75.0) (2024-10-08)


### Features

* **sessionStorage:** allow a cache key suffix ([#6370](https://github.com/algolia/instantsearch/issues/6370)) ([96e73ae](https://github.com/algolia/instantsearch/commit/96e73aece53b5cb78a3823359ae3b340afd5d295))





## [4.74.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.74.1...instantsearch.js@4.74.2) (2024-09-24)


### Bug Fixes

* **links:** ensure cmd-click always opens in new tab ([#5994](https://github.com/algolia/instantsearch/issues/5994)) ([1109091](https://github.com/algolia/instantsearch/commit/1109091cb090e25bb9871c9105cfc16cfe5501e5))





## [4.74.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.74.0...instantsearch.js@4.74.1) (2024-09-10)


### Bug Fixes

* **client:** ensure client.search is bound ([#6352](https://github.com/algolia/instantsearch/issues/6352)) ([2a171a9](https://github.com/algolia/instantsearch/commit/2a171a9b63e9c3bec1fb8991b533c61b824dd736)), closes [#6350](https://github.com/algolia/instantsearch/issues/6350) [algolia/algoliasearch-client-javascript#1549](https://github.com/algolia/algoliasearch-client-javascript/issues/1549) [#6348](https://github.com/algolia/instantsearch/issues/6348)
* **client:** use client.search in sffv for v5 ([#6354](https://github.com/algolia/instantsearch/issues/6354)) ([11399e6](https://github.com/algolia/instantsearch/commit/11399e6fd232f005c4e3e8aba842c50110869ae5))
* **flavors:** remove mentions of angular instantsearch ([#6341](https://github.com/algolia/instantsearch/issues/6341)) ([735e8d1](https://github.com/algolia/instantsearch/commit/735e8d1bc32e5532258a5551b11650b8362013b4))





# [4.74.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.73.4...instantsearch.js@4.74.0) (2024-08-20)


### Bug Fixes

* **client:** support v5 fully ([#6270](https://github.com/algolia/instantsearch/issues/6270)) ([c3b5e80](https://github.com/algolia/instantsearch/commit/c3b5e80bbb449acb3b9719a7449c6c926d034e34)), closes [#6271](https://github.com/algolia/instantsearch/issues/6271) [#6286](https://github.com/algolia/instantsearch/issues/6286)
* **ExperimentalConfigureRelatedItems:** deprecate in favor of RelatedItems ([#6312](https://github.com/algolia/instantsearch/issues/6312)) ([857f4ec](https://github.com/algolia/instantsearch/commit/857f4ec278fce24b0aef6428f7b9f3d36be9edd6))
* **geoSearch:** correct type of MarkerOptions ([#6319](https://github.com/algolia/instantsearch/issues/6319)) ([849190e](https://github.com/algolia/instantsearch/commit/849190e41072ed0e0ec1311df69ab923adf22252)), closes [#6253](https://github.com/algolia/instantsearch/issues/6253)
* **instantsearch.js:** forward widget classes to carousel ([#6326](https://github.com/algolia/instantsearch/issues/6326)) ([62b6e4b](https://github.com/algolia/instantsearch/commit/62b6e4bbd27743cd0008548d7d59bd7cdb680b82))


### Features

* **instantsearch.js:** introduce `carousel` template ([#6314](https://github.com/algolia/instantsearch/issues/6314)) ([b40f2a9](https://github.com/algolia/instantsearch/commit/b40f2a93dfba64e7963f2500ec45c703937bcaed))





## [4.73.4](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.73.3...instantsearch.js@4.73.4) (2024-08-06)


### Bug Fixes

* import `index` from its specific file ([#6310](https://github.com/algolia/instantsearch/issues/6310)) ([209bb00](https://github.com/algolia/instantsearch/commit/209bb0030519e94aa1708268137b83e60b46de68)), closes [#6309](https://github.com/algolia/instantsearch/issues/6309)





## [4.73.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.73.2...instantsearch.js@4.73.3) (2024-07-30)


### Bug Fixes

* **history:** cleanUrlOnDispose also prevents write after dispose ([#6305](https://github.com/algolia/instantsearch/issues/6305)) ([e6fbc05](https://github.com/algolia/instantsearch/commit/e6fbc05ccc0d1d8eb540a3bbb2fa9ad046051d14)), closes [#5966](https://github.com/algolia/instantsearch/issues/5966)
* **typescript:** make recommendResults.params non-nullable ([#6296](https://github.com/algolia/instantsearch/issues/6296)) ([0f87fc3](https://github.com/algolia/instantsearch/commit/0f87fc3e9c6feb0f0f5d1fdb8e183cd4d583a670)), closes [#6295](https://github.com/algolia/instantsearch/issues/6295)





## [4.73.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.73.1...instantsearch.js@4.73.2) (2024-07-16)


### Bug Fixes

* **cache:** support multi-index and multiple queries per index ([#6275](https://github.com/algolia/instantsearch/issues/6275)) ([60c3f20](https://github.com/algolia/instantsearch/commit/60c3f2066bc24d7af7884094b3f7293bf77d5d2a))
* **cache:** support nested hierarchical refinements ([#6283](https://github.com/algolia/instantsearch/issues/6283)) ([8a0ae01](https://github.com/algolia/instantsearch/commit/8a0ae01ddfceec129075256b19a0cc634ae5bb6e))





## [4.73.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.73.0...instantsearch.js@4.73.1) (2024-07-09)


### Bug Fixes

* **algoliasearch:** correctly retrieve headers for v5 ([#6268](https://github.com/algolia/instantsearch/issues/6268)) ([25c72cf](https://github.com/algolia/instantsearch/commit/25c72cf2f1957b72dc237b32a8a73a006753d5e1))
* **deps:** update dependency search-insights to 2.15.0 ([#6273](https://github.com/algolia/instantsearch/issues/6273)) ([efeed39](https://github.com/algolia/instantsearch/commit/efeed39ae23a2ff244e40878a0a11eec5dd18211))





# [4.73.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.72.2...instantsearch.js@4.73.0) (2024-07-02)


### Bug Fixes

* **algoliasearch:** v5 does not default threshold to 0 ([#6251](https://github.com/algolia/instantsearch/issues/6251)) ([762e633](https://github.com/algolia/instantsearch/commit/762e6335692bc0f05243edbf168f1be0b8d31f0c))
* **pagination:** any page outside the range is also first or last ([#6252](https://github.com/algolia/instantsearch/issues/6252)) ([7cbaf53](https://github.com/algolia/instantsearch/commit/7cbaf538418f68af83dfe5ac3d880790f31a5739))
* **RawHtml:** force component to remount ([#6254](https://github.com/algolia/instantsearch/issues/6254)) ([b7d8f04](https://github.com/algolia/instantsearch/commit/b7d8f04196986d91860a6ad7158e3606676df9e4))


### Features

* **infinite-hits:** add top banner to InfiniteHits widget ([#6243](https://github.com/algolia/instantsearch/issues/6243)) ([9287532](https://github.com/algolia/instantsearch/commit/9287532ec277da963cfddcff82f46bec50ad9a14))





## [4.72.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.72.1...instantsearch.js@4.72.2) (2024-06-25)


### Bug Fixes

* **typescript**: compile definitions using latest version of TypeScript ([54978fec1](https://https://github.com/algolia/instantsearch/commit/54978fec1))


## [4.72.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.72.0...instantsearch.js@4.72.1) (2024-06-20)


### Bug Fixes

* **helper:** don't send empty "tagRefinements" and "facets" parameters ([#6204](https://github.com/algolia/instantsearch/issues/6204)) ([fb7cc23](https://github.com/algolia/instantsearch/commit/fb7cc23acfaad55579032587a4222647e240838b))





# [4.72.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.71.1...instantsearch.js@4.72.0) (2024-06-18)


### Bug Fixes

* **routing:** warn if initialUiState is used ([#6238](https://github.com/algolia/instantsearch/issues/6238)) ([7b4cc3f](https://github.com/algolia/instantsearch/commit/7b4cc3fa2c6df9ca7435ac2d0092b2a883d984cc))


### Features

* **infinite-hits:** return banner info with connectInfiniteHits ([#6230](https://github.com/algolia/instantsearch/issues/6230)) ([0d50f0d](https://github.com/algolia/instantsearch/commit/0d50f0deaa20602d0fe51043f58ec2cf40d6c107))





## [4.71.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.71.0...instantsearch.js@4.71.1) (2024-06-05)

**Note:** Version bump only for package instantsearch.js





# [4.71.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.70.0...instantsearch.js@4.71.0) (2024-06-04)


### Bug Fixes

* **hits:** rename the exposed "hits" to "items" ([#6212](https://github.com/algolia/instantsearch/issues/6212)) ([1b99e39](https://github.com/algolia/instantsearch/commit/1b99e3951345a4054c6ff302dc09dd901bec984d))


### Features

* **typescript:** allow generics for the Hit type in all hit-displaying connectors and widgets ([#6218](https://github.com/algolia/instantsearch/issues/6218)) ([89dd7ae](https://github.com/algolia/instantsearch/commit/89dd7ae4d45dea4dafbe451e55b01f2e45caf07e))





# [4.70.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.69.0...instantsearch.js@4.70.0) (2024-05-28)


### Features

* **recommend:** enable server-side rendering ([#6215](https://github.com/algolia/instantsearch/issues/6215)) ([21404fc](https://github.com/algolia/instantsearch/commit/21404fc530a9aad640a88fac1a48244f4e665828))





# [4.69.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.68.1...instantsearch.js@4.69.0) (2024-05-21)


### Features

* **recommend:** enable multiple `objectIDs` in connectors ([#6176](https://github.com/algolia/instantsearch/issues/6176)) ([ffe6a1c](https://github.com/algolia/instantsearch/commit/ffe6a1c2ff60e31c1e91ff3dc0791948d0a4c0f5))
* **recommend:** harmonize UI component for FBT and Related Products ([#6157](https://github.com/algolia/instantsearch/issues/6157)) ([82d3001](https://github.com/algolia/instantsearch/commit/82d30012c7051531ca7f906571c74663bdce2fcc))
* **recommend:** introduce `connectFrequentlyBoughtTogether` connector ([#6117](https://github.com/algolia/instantsearch/issues/6117)) ([f72e898](https://github.com/algolia/instantsearch/commit/f72e898947b8ce83e4066bbdf77c558a9aaa96e6))
* **recommend:** introduce `connectLookingSimilar` connector ([#6180](https://github.com/algolia/instantsearch/issues/6180)) ([78a7723](https://github.com/algolia/instantsearch/commit/78a772329de7958fe3bfcff8014c1a9e3c5c6764))
* **recommend:** introduce `connectRelatedProducts` connector ([#6142](https://github.com/algolia/instantsearch/issues/6142)) ([89c4409](https://github.com/algolia/instantsearch/commit/89c44091ac69245ea5b2fe5b5e38efbaf10f8c69))
* **recommend:** introduce `connectTrendingItems` connector ([#6169](https://github.com/algolia/instantsearch/issues/6169)) ([fa165ab](https://github.com/algolia/instantsearch/commit/fa165abd5a3b4b23121f4d752e46ad1141960591))
* **recommend:** introduce `frequentlyBoughtTogether` widget ([#6126](https://github.com/algolia/instantsearch/issues/6126)) ([984704e](https://github.com/algolia/instantsearch/commit/984704e6070f220a357791279f6864a4624073f2))
* **recommend:** introduce `lookingSimilar` widget ([#6183](https://github.com/algolia/instantsearch/issues/6183)) ([6fae57c](https://github.com/algolia/instantsearch/commit/6fae57c96fdb96bf65d1ab1754ff18803f19929f))
* **recommend:** introduce `relatedProducts` widget ([#6154](https://github.com/algolia/instantsearch/issues/6154)) ([b8602af](https://github.com/algolia/instantsearch/commit/b8602afc042ec28158cdd70e12a01630adce11fa))
* **recommend:** introduce `trendingItems` widget ([#6171](https://github.com/algolia/instantsearch/issues/6171)) ([fdbd8ce](https://github.com/algolia/instantsearch/commit/fdbd8ce59bb4d319168bacf064100a59f9f029b6))
* **recommend:** map recommend results to widgets ([a5a87dd](https://github.com/algolia/instantsearch/commit/a5a87dd0315606ce70bf1787ba0566de8944d134))
* **recommend:** rename `fallbackComponent` into `emptyComponent` ([#6190](https://github.com/algolia/instantsearch/issues/6190)) ([8e65ebf](https://github.com/algolia/instantsearch/commit/8e65ebf350261d996011142ce72cab841001e09a))
* **recommend:** support `escapeHTML` in recommend widgets ([#6199](https://github.com/algolia/instantsearch/issues/6199)) ([720e700](https://github.com/algolia/instantsearch/commit/720e70040e549e3169e66658c3289e68b6d5830a))





## [4.68.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.68.0...instantsearch.js@4.68.1) (2024-05-07)


### Bug Fixes

* **index:** allow dispose to be called before init ([#6173](https://github.com/algolia/instantsearch/issues/6173)) ([1405aeb](https://github.com/algolia/instantsearch/commit/1405aebb52cd84b02a4f645ee5395763f4878b79)), closes [#6073](https://github.com/algolia/instantsearch/issues/6073)





# [4.68.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.67.0...instantsearch.js@4.68.0) (2024-04-30)


### Bug Fixes

* provide scopedResults when main index has no index name set ([#6161](https://github.com/algolia/instantsearch/issues/6161)) ([cb72e94](https://github.com/algolia/instantsearch/commit/cb72e94dc3c1c9271b847db02348c1850a0ca2b7))
* **templates:** text nodes with fragment as `rootTagName` ([fb16091](https://github.com/algolia/instantsearch/commit/fb16091859314ebbb2d600b1391e9fb0faebaeb0))


### Features

* **hits:** add banner to instantsearch-js hits widget ([#6158](https://github.com/algolia/instantsearch/issues/6158)) ([cfc9016](https://github.com/algolia/instantsearch/commit/cfc9016f1f72c34e2cb34240c5a27a2248b94221))
* **hits:** return banner from connectHits ([#6130](https://github.com/algolia/instantsearch/issues/6130)) ([5bde60d](https://github.com/algolia/instantsearch/commit/5bde60df53401dc3cdf32b1446ec960ca4060112))





# [4.67.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.66.1...instantsearch.js@4.67.0) (2024-04-18)


### Features

* **instantsearch:** prepare index widget for recommend widgets ([#6104](https://github.com/algolia/instantsearch/issues/6104)) ([f4e3527](https://github.com/algolia/instantsearch/commit/f4e35270ab23f66a4de8fe4c71d7c1d7be143439))





## [4.66.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.66.0...instantsearch.js@4.66.1) (2024-04-02)


### Bug Fixes

* **vue-instantsearch:** properly add `noRefinement` class on `<ais-refinement-list>` ([#6095](https://github.com/algolia/instantsearch/issues/6095)) ([9ae7c05](https://github.com/algolia/instantsearch/commit/9ae7c05ef6d17bd1d945dc1d31c7d87a262d1e06))





# [4.66.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.65.0...instantsearch.js@4.66.0) (2024-02-27)


### Bug Fixes

* **support:** deprecate answers & places ([#6057](https://github.com/algolia/instantsearch/issues/6057)) ([7b053d3](https://github.com/algolia/instantsearch/commit/7b053d3c2c8137b8a3c1281400c80ed5f66f0675))


### Features

* **ui-components:** migrate `Hits` component ([#6042](https://github.com/algolia/instantsearch/issues/6042)) ([55d550e](https://github.com/algolia/instantsearch/commit/55d550eb1030a3b2091917b1a84d280a73a28a3a))





# [4.65.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.64.3...instantsearch.js@4.65.0) (2024-02-13)


### Features

* **instantsearch-ui-components:** update build ([#6037](https://github.com/algolia/instantsearch/issues/6037)) ([b4ed187](https://github.com/algolia/instantsearch/commit/b4ed187d5ffab1067b68f553278e0d5feffd3527))
* **instantsearch.js:** replace `Highlight` and `cx` ([#6030](https://github.com/algolia/instantsearch/issues/6030)) ([ff8b345](https://github.com/algolia/instantsearch/commit/ff8b3458f147349f4c041ded7a1b426b45b28b5a))

### Bug Fixes

* **autocomplete:** add indexId to type ([#6050](https://github.com/algolia/instantsearch/issues/6050)) ([5f60268](https://github.com/algolia/instantsearch/commit/5f60268b1d74b33e93c17d1c9677e8abce7f6429))



## [4.64.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.64.2...instantsearch.js@4.64.3) (2024-02-06)


### Bug Fixes

* **insights:** use up-to-date index name when sending events ([#6036](https://github.com/algolia/instantsearch/issues/6036)) ([fbda9fb](https://github.com/algolia/instantsearch/commit/fbda9fb1359339153ba8d4f78c9c0e28eabe7d75))





## [4.64.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.64.1...instantsearch.js@4.64.2) (2024-01-30)


### Bug Fixes

* **searchbox:** ignore composition events with option ([#6009](https://github.com/algolia/instantsearch/issues/6009)) ([7d82b01](https://github.com/algolia/instantsearch/commit/7d82b0198f0b22c753bff012a0edf667b7e40be7))





## [4.64.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.64.0...instantsearch.js@4.64.1) (2024-01-23)


### Bug Fixes

* **hydration:** generate cache with search parameters from server-side request ([#5991](https://github.com/algolia/instantsearch/issues/5991)) ([968cf43](https://github.com/algolia/instantsearch/commit/968cf433511eb172acee8eaf6a7c90740f7ee0a6))
* **perf:** remove usage of SearchParameters.clearRefinements ([#6004](https://github.com/algolia/instantsearch/issues/6004)) ([d9491e1](https://github.com/algolia/instantsearch/commit/d9491e155a0157085d11e6ef3a2fb02b19e28985))





# [4.64.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.63.1...instantsearch.js@4.64.0) (2024-01-16)


### Features

* **createInsightsMiddleware:** support `authenticatedUserToken` ([#5997](https://github.com/algolia/instantsearch/issues/5997)) ([a20715c](https://github.com/algolia/instantsearch/commit/a20715c9a8a69cdca6c58c369b7f1f5ab2e557d6))





## [4.63.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.63.0...instantsearch.js@4.63.1) (2024-01-16)


### Bug Fixes

* **RatingMenu/RefinementList:** handle clicks in svg ([#5993](https://github.com/algolia/instantsearch/issues/5993)) ([a6698f5](https://github.com/algolia/instantsearch/commit/a6698f5db33a6e18733aa8861e38491aef793c15))





# [4.63.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.62.0...instantsearch.js@4.63.0) (2023-12-19)


### Bug Fixes

* **searchbox:** only refine if composition ended when using an IME ([#5963](https://github.com/algolia/instantsearch/issues/5963)) ([0820455](https://github.com/algolia/instantsearch/commit/0820455ad291fb3e1910ebdfbcfa8d18eb811d31))


### Features

* **insights:** update default version to support `authenticatedUserToken` ([#5958](https://github.com/algolia/instantsearch/issues/5958)) ([b62f2bc](https://github.com/algolia/instantsearch/commit/b62f2bc3f62f13e0dfd84d6df3a189ae293d5da2))
* **history:** provide option to not clean url on dispose ([#5966](https://github.com/algolia/instantsearch/issues/5966)) ([e60ac95](https://github.com/algolia/instantsearch/commit/e60ac95083252589d60543c09039c3944e37abe9))





# [4.62.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.61.0...instantsearch.js@4.62.0) (2023-12-07)


### Bug Fixes

* **routing:** ensure UiState is cleaned up allowing "undefined" for values ([#5956](https://github.com/algolia/instantsearch/issues/5956)) ([18cfece](https://github.com/algolia/instantsearch/commit/18cfeced8a33e5dba479868fc871205702abd45a)), closes [#5954](https://github.com/algolia/instantsearch/issues/5954)


### Features

* **hierarchical-menu:** persist refined root level count with a future flag ([#5950](https://github.com/algolia/instantsearch/issues/5950)) ([79ee485](https://github.com/algolia/instantsearch/commit/79ee485b63904debe16e033011d6bf728c1f1a0b))





# [4.61.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.60.0...instantsearch.js@4.61.0) (2023-11-28)


### Bug Fixes

* **createURL:** ensure refined value gets removed ([#5912](https://github.com/algolia/instantsearch/issues/5912)) ([77919a9](https://github.com/algolia/instantsearch/commit/77919a92ede2dac7420c16f7743567e550e7cdac))
* **cache-hydration:** normalize params returned from response ([#5946](https://github.com/algolia/instantsearch/issues/5946)) ([042aaac](https://github.com/algolia/instantsearch/commit/042aaacc0eb06226b2e5e29f7a77fcf2e4e8676e))


### Features

* **stats:** add common test suite ([#5931](https://github.com/algolia/instantsearch/issues/5931)) ([16e9b34](https://github.com/algolia/instantsearch/commit/16e9b3440a75d2d559fbeadfbcc4778be3212c63))
* **dynamicWidgets:** accept strings for `facets` ([#5948](https://github.com/algolia/instantsearch/pull/5948)) ([61a4bea](https://github.com/algolia/instantsearch/commit/61a4beaf3da414370c946b8eed9d6a533db3e58f))





# [4.60.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.59.0...instantsearch.js@4.60.0) (2023-10-31)


### Features

* **instantsearch:** hydrate search client ([#5854](https://github.com/algolia/instantsearch/issues/5854)) ([5b96771](https://github.com/algolia/instantsearch/commit/5b96771fd6289969065815e1804fd3eb999d012e)), closes [#5913](https://github.com/algolia/instantsearch/issues/5913)





# [4.59.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.58.0...instantsearch.js@4.59.0) (2023-10-24)


### Bug Fixes

* **accessibility:** CR-4249 instantearch accessibility fixes ([#5884](https://github.com/algolia/instantsearch/issues/5884)) ([bed187b](https://github.com/algolia/instantsearch/commit/bed187be5ce0f9c8b4b3b41994e1226f56ba598a))
* **insights:** declare automatic source ([#5901](https://github.com/algolia/instantsearch/issues/5901)) ([c82ce6d](https://github.com/algolia/instantsearch/commit/c82ce6d01eae3054baab897a7c9317ff7df799e9))


### Features

* **insights:** allow sending additional data in events payloads ([#5878](https://github.com/algolia/instantsearch/issues/5878)) ([86d70ac](https://github.com/algolia/instantsearch/commit/86d70ac5c1c61eb8ccdb79ab59df114ac7c048b9))
* **instantsearch:** allow the insights middleware to be added in answer to a server setting ([#5883](https://github.com/algolia/instantsearch/issues/5883)) ([2a9e654](https://github.com/algolia/instantsearch/commit/2a9e6542f6ce22d67789febc8a2e1852a0ad7641))
* **instantsearch:** make `insights` undefined by default ([#5889](https://github.com/algolia/instantsearch/issues/5889)) ([96a5c8b](https://github.com/algolia/instantsearch/commit/96a5c8b736d081aa11ca23ff7ad06a24d6b54960))





# [4.58.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.57.0...instantsearch.js@4.58.0) (2023-10-10)


### Bug Fixes

* **dependencies:** update ui-components ([#5882](https://github.com/algolia/instantsearch/issues/5882)) ([85eac81](https://github.com/algolia/instantsearch/commit/85eac8102ae45ac43a0bee2dd7d12df82872451e)), closes [#5853](https://github.com/algolia/instantsearch/issues/5853)
* use mainHelper consistently ([#5875](https://github.com/algolia/instantsearch/issues/5875)) ([121d13a](https://github.com/algolia/instantsearch/commit/121d13ab9cec7a6555963bfc3c8fedc8b1afd790))


### Features

* preserve shared state on unmount with a future flag ([#5123](https://github.com/algolia/instantsearch/issues/5123)) ([2258d89](https://github.com/algolia/instantsearch/commit/2258d899fab887d495af8f31905f0974f53e8e47))





# [4.57.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.11...instantsearch.js@4.57.0) (2023-09-19)


### Bug Fixes

* **prettier:** consistent version ([#5850](https://github.com/algolia/instantsearch/issues/5850)) ([ca59c6d](https://github.com/algolia/instantsearch/commit/ca59c6dbd5c9eac4e2e0179a24e39bca997ae141))


### Features

* **server:** add experimental support for React Server Components and Next.js app directory ([#5827](https://github.com/algolia/instantsearch/issues/5827)) ([44de9ec](https://github.com/algolia/instantsearch/commit/44de9ecbb2bf2e10085b884ab4089b6a5d968da6)), closes [#5830](https://github.com/algolia/instantsearch/issues/5830)





## [4.56.11](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.10...instantsearch.js@4.56.11) (2023-09-12)

### Bug Fixes

- **insights**: use init method params type from Search Insights ([#5848](https://github.com/algolia/instantsearch/issues/5848)) ([d05c6c6](https://github.com/algolia/instantsearch/commit/d05c6c69c7662c9551431ae787223029076ff972))





## [4.56.10](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.9...instantsearch.js@4.56.10) (2023-09-05)

### Bug Fixes

- **server:** allow detached index (no rootIndexName) in SSR ([#5832](https://github.com/algolia/instantsearch/issues/5832)) ([bed6c5f](https://github.com/algolia/instantsearch/commit/bed6c5fd003da7ba85618cd5f2fb4ff1e60c50f9)), closes [#5831](https://github.com/algolia/instantsearch/issues/5831)

## [4.56.9](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.8...instantsearch.js@4.56.9) (2023-08-08)

## [4.56.9](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.8...instantsearch.js@4.56.9) (2023-08-08)

### Bug Fixes

- **pagination:** correctly use 1-based pagination in createURL ([#5798](https://github.com/algolia/instantsearch/issues/5798)) ([69ec7de](https://github.com/algolia/instantsearch/commit/69ec7deba05a60a223b833c6a117d5a0f2e83012))

## [4.56.8](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.7...instantsearch.js@4.56.8) (2023-07-25)

**Note:** Version bump only for package instantsearch.js

## [4.56.7](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.6...instantsearch.js@4.56.7) (2023-07-19)

### Bug Fixes

- **instantsearch:** keep algoliasearch-helper as external dependency during build ([#5765](https://github.com/algolia/instantsearch/issues/5765)) ([550fefa](https://github.com/algolia/instantsearch/commit/550fefa1401773f38dedc20322513ae662faa25d))

## [4.56.6](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.5...instantsearch.js@4.56.6) (2023-07-18)

**Note:** Version bump only for package instantsearch.js

## [4.56.5](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.4...instantsearch.js@4.56.5) (2023-07-10)

### Bug Fixes

- **url:** base createURL on UiState instead of SearchParameters ([#5696](https://github.com/algolia/instantsearch/issues/5696)) ([7e2c8a2](https://github.com/algolia/instantsearch/commit/7e2c8a295a6fc5ba36d9482f645ef55b422d5e75)), closes [#5694](https://github.com/algolia/instantsearch/issues/5694)

## [4.56.4](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.3...instantsearch.js@4.56.4) (2023-07-04)

### Bug Fixes

- **router:** do not update ui state if there are no widgets ([#5692](https://github.com/algolia/instantsearch/issues/5692)) ([ba8199f](https://github.com/algolia/instantsearch/commit/ba8199fe8deed9539619c6f7d65d299358979c49))

## [4.56.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.2...instantsearch.js@4.56.3) (2023-06-20)

### Bug Fixes

- **dependencies:** update helper requirement ([#5676](https://github.com/algolia/instantsearch/issues/5676)) ([c289120](https://github.com/algolia/instantsearch/commit/c2891205c1125b1203b3b3db946d57e0fc4e4687)), closes [#5658](https://github.com/algolia/instantsearch/issues/5658)
- **insights:** delay usertoken updates if received after init ([#5681](https://github.com/algolia/instantsearch/issues/5681)) ([0fe653e](https://github.com/algolia/instantsearch/commit/0fe653eab2403f39879886b7d77b52a7214f528d))

## [4.56.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.1...instantsearch.js@4.56.2) (2023-06-13)

### Bug Fixes

- **infiniteHits:** correctly avoid writing to cache when dynamicWidgets has no facets in the results ([#5669](https://github.com/algolia/instantsearch/issues/5669)) ([2eec37e](https://github.com/algolia/instantsearch/commit/2eec37e2bf70c4745577883fb1716dfe6ddce936)), closes [#5620](https://github.com/algolia/instantsearch/issues/5620)

## [4.56.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.56.0...instantsearch.js@4.56.1) (2023-05-30)

### Bug Fixes

- **insights:** send default click event when using auxiliary pointer button ([#5634](https://github.com/algolia/instantsearch/issues/5634)) ([7e4a216](https://github.com/algolia/instantsearch/commit/7e4a2162f87596a384b35c97efa51db9bb6f8973))

# [4.56.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.55.0...instantsearch.js@4.56.0) (2023-05-16)

### Bug Fixes

- **infinite-hits:** do not write cache with incomplete state caused by dynamic widgets ([#5620](https://github.com/algolia/instantsearch/issues/5620)) ([30edccd](https://github.com/algolia/instantsearch/commit/30edccdaf0607695a6e621d7a71dd36f0f719d0b))
- **rangeinput:** allow input of numbers with precision ([#5541](https://github.com/algolia/instantsearch/issues/5541)) ([fb48951](https://github.com/algolia/instantsearch/commit/fb489513a8550528f3e2867be30fb380229ad188))
- **this:** ensure all functions are able to be destructured ([#5611](https://github.com/algolia/instantsearch/issues/5611)) ([a8b5c1e](https://github.com/algolia/instantsearch/commit/a8b5c1e5bbd6afac39fce523f7d7c2ec02f51153)), closes [#5589](https://github.com/algolia/instantsearch/issues/5589)

### Features

- **history:** warn when `createURL` does not return an absolute URL ([#5613](https://github.com/algolia/instantsearch/issues/5613)) ([f45e0fa](https://github.com/algolia/instantsearch/commit/f45e0faede3461678cb05170887f3b7bc02dad50))
- **instantsearch:** make root indexName optional ([#5590](https://github.com/algolia/instantsearch/issues/5590)) ([80f309e](https://github.com/algolia/instantsearch/commit/80f309ed69b61534ca118b60c9c88691e0148fca))

# [4.55.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.54.1...instantsearch.js@4.55.0) (2023-04-24)

### Features

- **insights:** add insights option to InstantSearch ([#5488](https://github.com/algolia/instantsearch/issues/5488)) ([9031573](https://github.com/algolia/instantsearch/commit/9031573807fa6803dcfae9f33d61b8f111f68423)) ([#5578](https://github.com/algolia/instantsearch/issues/5578)) ([8fb517f](https://github.com/algolia/instantsearch/commit/8fb517f15381ecb32ea00cf4b01a0fd5e70e1d17)) ([#5545](https://github.com/algolia/instantsearch/issues/5545)) ([99a0972](https://github.com/algolia/instantsearch/commit/99a0972663b8f3284cac3b5621571ced7a33908f)) ([#5493](https://github.com/algolia/instantsearch/issues/5493)) ([cff723f](https://github.com/algolia/instantsearch/commit/cff723fc95a90ebb2ed14c46c51ab05764835a47))
- **insights:** always pass Algolia credentials locally ([#5554](https://github.com/algolia/instantsearch/issues/5554)) ([654ab81](https://github.com/algolia/instantsearch/commit/654ab81e1669354c249710b6756610fba35d54b4)) ([#5558](https://github.com/algolia/instantsearch/issues/5558)) ([82144c0](https://github.com/algolia/instantsearch/commit/82144c0a0b18e6b47d6f508e5c670a9de274c121)) ([#5529](https://github.com/algolia/instantsearch/issues/5529)) ([8537f8f](https://github.com/algolia/instantsearch/commit/8537f8f7a10bcaf053ff62180c082e077b1b052d))
- **insights:** annotate events with algoliaSource ([#5580](https://github.com/algolia/instantsearch/issues/5580)) ([c419307](https://github.com/algolia/instantsearch/commit/c419307a5f7fe46d5032c9437a17c8e3dad57fe5))
- **insights:** automatically load search-insights if not passed ([#5484](https://github.com/algolia/instantsearch/issues/5484)) ([a85797b](https://github.com/algolia/instantsearch/commit/a85797b503edc94e001c5bfb3b754db6cb556943))
- **insights:** enable default click events on hits and infinite hits ([#5522](https://github.com/algolia/instantsearch/issues/5522)) ([271bd12](https://github.com/algolia/instantsearch/commit/271bd12e34bc55656976bb53c90282193083eb86)) ([#5527](https://github.com/algolia/instantsearch/issues/5527)) ([0e55821](https://github.com/algolia/instantsearch/commit/0e558213c807cd17d592fadec052f3d1fc692e6c))
- **insights:** prevent potential errors ([#5487](https://github.com/algolia/instantsearch/issues/5487)) ([33fe510](https://github.com/algolia/instantsearch/commit/33fe510307e4b382a5ba1153a0eaf160420acd11)) ([#5606](https://github.com/algolia/instantsearch/issues/5606)) ([bdd9290](https://github.com/algolia/instantsearch/commit/bdd92901b59ae4e5d7311eadfbf53ed656bbaf4a)) ([#5512](https://github.com/algolia/instantsearch/issues/5512)) ([85dfbc9](https://github.com/algolia/instantsearch/commit/85dfbc9ebd722fbe6a7e1bd056950fdbcc16d8d9))
- **metadata:** register metadata around middleware ([#5492](https://github.com/algolia/instantsearch/issues/5492)) ([3e72ec8](https://github.com/algolia/instantsearch/commit/3e72ec82894a05a071328a4802d2f764233fe005))

## [4.54.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.54.0...instantsearch.js@4.54.1) (2023-04-11)

### Bug Fixes

- **helpers:** deprecate highlight helpers ([09817fb](https://github.com/algolia/instantsearch/commit/09817fb1e9231cb60d91f1c08e918fec18b08fcf))
- **pagination:** use real template ([6783408](https://github.com/algolia/instantsearch/commit/678340856f690e1ebaa94c407d4d2e7644f6c1d1))
- **panel:** use undefined templates by default ([dcef813](https://github.com/algolia/instantsearch/commit/dcef813020a5f9b2d3a128fe79653df52efb097d))
- **Template:** easier to debug warning when string template is used ([f285942](https://github.com/algolia/instantsearch/commit/f2859424526b65f969e0bf69e0c358c433bf5b32))

# [4.54.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.53.0...instantsearch.js@4.54.0) (2023-03-28)

### Features

- warn if same attribute is used for different faceting type ([#5553](https://github.com/algolia/instantsearch/issues/5553)) ([2b3da9b](https://github.com/algolia/instantsearch/commit/2b3da9b398fcf081bdefc5cf7887f0a9a2dd2409))

### Bug Fixes

- **places**: don't require package to be installed ([#5574](https://github.com/algolia/instantsearch/pull/5574)) ([f5ed576](https://github.com/algolia/instantsearch/commit/f5ed576129e7e81c37d985b19dff54acff893b1b))

# [4.53.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.52.0...instantsearch.js@4.53.0) (2023-03-21)

### Bug Fixes

- **searchbox:** add aria-hidden to svg icons ([#5547](https://github.com/algolia/instantsearch/issues/5547)) ([50344e3](https://github.com/algolia/instantsearch/commit/50344e3b14c22c886415c0e7d799aca778dc39ab)), closes [#5546](https://github.com/algolia/instantsearch/issues/5546)
- **svg:** don't style width/height in attributes with unit ([#5550](https://github.com/algolia/instantsearch/issues/5550)) ([31b85a6](https://github.com/algolia/instantsearch/commit/31b85a6ad56993455adb201f88ab1d1ae2d96683))

### Features

- **current-refinements:** provide indexId of refinements in transformItems ([#5546](https://github.com/algolia/instantsearch/issues/5546)) ([89781db](https://github.com/algolia/instantsearch/commit/89781db6cb1d2b8ebbc116e9bcd8a10f646e7baf))

# [4.52.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.51.1...instantsearch.js@4.52.0) (2023-03-07)

### Bug Fixes

- **core:** deprecate searchFunction ([#5494](https://github.com/algolia/instantsearch/issues/5494)) ([6a98ae0](https://github.com/algolia/instantsearch/commit/6a98ae065802b6c6c599aa7ce37af52b2c3b26fb))
- **infinitehits/hits:** correctly deprecate \_\_hitIndex ([#5495](https://github.com/algolia/instantsearch/issues/5495)) ([2e3d1f3](https://github.com/algolia/instantsearch/commit/2e3d1f3f999428bbf688b0f16a1f4a422dbab87b))
- **instantsearch**: allow dispose before start ([#5533](https://github.com/algolia/instantsearch/issues/5533)) ([ab1b872](https://github.com/algolia/instantsearch/commit/ab1b872969f08266ea8a67cb04cdd3aa7aa5431f))
- **routing**: allow writing when InstantSearch restarts ([#5534](https://github.com/algolia/instantsearch/issues/5534)) ([2c7c3ed](https://github.com/algolia/instantsearch/commit/2c7c3ed07e45fd4ddc71d493edc824449d195407))

### Features

- **index:** introduce setIndexUiState ([#5504](https://github.com/algolia/instantsearch/issues/5504)) ([c199feb](https://github.com/algolia/instantsearch/commit/c199febbc3381df574afbb2504edd7373b32904a))

## [4.51.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.51.1...instantsearch.js@4.51.2) (2023-02-28)

### Bug Fixes

- **core:** deprecate searchFunction ([#5494](https://github.com/algolia/instantsearch/issues/5494)) ([6a98ae0](https://github.com/algolia/instantsearch/commit/6a98ae065802b6c6c599aa7ce37af52b2c3b26fb))

## [4.51.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.51.0...instantsearch.js@4.51.1) (2023-02-21)

### Bug Fixes

- **breadcrumb:** guard against undefined facets ([#5482](https://github.com/algolia/instantsearch/issues/5482)) ([3159afe](https://github.com/algolia/instantsearch/commit/3159afe57472fe2b669dceb5f1ee638b658f7f52))

# [4.51.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.50.3...instantsearch.js@4.51.0) (2023-02-14)

### Features

- expose callbacks for advanced routers in historyRouter ([#5432](https://github.com/algolia/instantsearch/issues/5432)) ([39b5859](https://github.com/algolia/instantsearch/commit/39b5859ba78a5e8472a80e357a35ba900c963b61))

## [4.50.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.50.2...instantsearch.js@4.50.3) (2023-02-07)

### Bug Fixes

- **types:** expose InstantSearchStatus ([#5463](https://github.com/algolia/instantsearch/issues/5463)) ([2253d9e](https://github.com/algolia/instantsearch/commit/2253d9ed16dbe7dcd820ae3903b54b01119f2b21))

## [4.50.2](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.50.1...instantsearch.js@4.50.2) (2023-01-30)

### Bug Fixes

- **infiniteHits:** read cache correctly when search is loading ([#5461](https://github.com/algolia/instantsearch/issues/5461)) ([bfabe00](https://github.com/algolia/instantsearch/commit/bfabe002a26e15e13b33200c355379f4e3c60f21))

## [4.50.1](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.50.0...instantsearch.js@4.50.1) (2023-01-26)

### Bug Fixes

- **dependencies:** update typescript ([#5454](https://github.com/algolia/instantsearch/issues/5454)) ([0e6bb48](https://github.com/algolia/instantsearch/commit/0e6bb485a31cd3294436ac9902c2c2662dfcdf8b))
- **insights:** pass correct sendEvent to html template ([#5457](https://github.com/algolia/instantsearch/issues/5457)) ([11a8473](https://github.com/algolia/instantsearch/commit/11a8473e52f535ec1cb54b24187f2e5899c772e3)), closes [/github.com/algolia/instantsearch/discussions/5447#discussioncomment-4779169](https://github.com//github.com/algolia/instantsearch/discussions/5447/issues/discussioncomment-4779169)

# [4.50.0](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.49.4...instantsearch.js@4.50.0) (2023-01-25)

### Bug Fixes

- **bindEvent:** skip view event if search isn't stable ([#5439](https://github.com/algolia/instantsearch/issues/5439)) ([b0ea594](https://github.com/algolia/instantsearch/commit/b0ea59404faff40c975bfa63f98ca411ddef27cb))
- **sendEvent:** correct types in template ([#5449](https://github.com/algolia/instantsearch/issues/5449)) ([68152d0](https://github.com/algolia/instantsearch/commit/68152d0665ad67954ab7351069798e6fd530aa4b))

### Features

- **rendering:** always render with current state ([#5429](https://github.com/algolia/instantsearch/issues/5429)) ([920e951](https://github.com/algolia/instantsearch/commit/920e951f03aada0e6a1ce16bc389a82a2f00b202))
- **rendering:** revert search state on error ([#5438](https://github.com/algolia/instantsearch/issues/5438)) ([732fcac](https://github.com/algolia/instantsearch/commit/732fcac79ea1f51b19f62d5c4bf1fdf22619fa73))

## [4.49.4](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.49.3...instantsearch.js@4.49.4) (2023-01-09)

### Bug Fixes

- **dependencies:** update helper requirement for minor PP vulnerability ([#5417](https://github.com/algolia/instantsearch/issues/5417)) ([254ef00](https://github.com/algolia/instantsearch/commit/254ef00439a9af48be15f22b4fd9902899610226))

# [4.49.3](https://github.com/algolia/instantsearch/compare/instantsearch.js@4.49.2...instantsearch.js@4.49.3) (2023-01-03)

### Bug Fixes

- simple state mapping `routeToState` function throw an error when state is `null` ([#5177](https://github.com/algolia/instantsearch/issues/5177)) ([8e61c4c](https://github.com/algolia/instantsearch/commit/8e61c4ca32d8f9649f24721a7c682e517919e55e))

## 4.49.2 (2022-12-13)

### Bug Fixes

- **answers:** mark as deprecated ([#5157](https://github.com/algolia/instantsearch/pull/5157)) ([d7b62eda](https://github.com/algolia/instantsearch/commit/d7b62eda77d894a3677a0967a05a2a357e7e5a94))

## [4.49.1](https://github.com/algolia/instantsearch/compare/v4.49.0...v4.49.1) (2022-11-01)

### Bug Fixes

- **insights:** check before usage of `document` ([#5149](https://github.com/algolia/instantsearch/issues/5149)) ([6733dea](https://github.com/algolia/instantsearch/commit/6733dea1091a3a6c8ec9049eba652a7f06e9c501))

# [4.49.0](https://github.com/algolia/instantsearch/compare/v4.48.1...v4.49.0) (2022-10-25)

### Features

- **poweredBy:** update component logo ([#5145](https://github.com/algolia/instantsearch/issues/5145)) ([7df7816](https://github.com/algolia/instantsearch/commit/7df7816eac1bb3d2eafee5da7b6f4f59611468b2))

## [4.48.1](https://github.com/algolia/instantsearch/compare/v4.48.0...v4.48.1) (2022-10-18)

### Bug Fixes

- **bundlesize:** consolidate usage of "classnames" helper ([#5138](https://github.com/algolia/instantsearch/issues/5138)) ([f1ec288](https://github.com/algolia/instantsearch/commit/f1ec28889be5c2f906dd398f37d072587e29cf3a))
- **currentRefinements:** reset page number on refine ([#5136](https://github.com/algolia/instantsearch/issues/5136)) ([407b576](https://github.com/algolia/instantsearch/commit/407b5767b51c26d5f471071a92f2e32762898f24))
- **events:** prevent warning on low number of listeners ([#5143](https://github.com/algolia/instantsearch/issues/5143)) ([432aa70](https://github.com/algolia/instantsearch/commit/432aa7006e7d8eefd1c8c382f59ea2d2974a19da))

# [4.48.0](https://github.com/algolia/instantsearch/compare/v4.47.0...v4.48.0) (2022-10-10)

### Bug Fixes

- **insightsMiddleware:** infer type of insightsClient for onEvent ([#5130](https://github.com/algolia/instantsearch/issues/5130)) ([dd5fca4](https://github.com/algolia/instantsearch/commit/dd5fca4c185c66f1e31ebe9c0568bcad48e062f3)), closes [#5129](https://github.com/algolia/instantsearch/issues/5129)

### Features

- **routing:** include repeated indexId in URL correctly ([#5134](https://github.com/algolia/instantsearch/issues/5134)) ([679f5da](https://github.com/algolia/instantsearch/commit/679f5dad839536def6ae9c3a18416296d40ed49a))

# [4.47.0](https://github.com/algolia/instantsearch/compare/v4.46.3...v4.47.0) (2022-10-03)

### Bug Fixes

- **hierarchicalMenu:** pass correct attribute name to Insights ([#5124](https://github.com/algolia/instantsearch/issues/5124)) ([fe18a16](https://github.com/algolia/instantsearch/commit/fe18a168b1b195d067298770b55fd29a7fdb6edb))

### Features

- **status:** introduce status in InstantSearch class ([#5115](https://github.com/algolia/instantsearch/issues/5115)) ([21f3147](https://github.com/algolia/instantsearch/commit/21f31476e75e162b38b002d5439f231f3990e785))
- **hierarchicalMenu**: introduce `ais-HierarchicalMenu-item--selected` class ([#5125](https://github.com/algolia/instantsearch/issues/5125)) ([4ebb828](https://github.com/algolia/instantsearch/commit/4ebb828c93afabfd8083246dfe7edfd33932d5fd))

## [4.46.3](https://github.com/algolia/instantsearch/compare/v4.46.2...v4.46.3) (2022-09-27)

### Bug Fixes

- **currentRefinements:** implement noRefinementRoot modifier class ([#5114](https://github.com/algolia/instantsearch/issues/5114)) ([cb66830](https://github.com/algolia/instantsearch/commit/cb668305af26bf919841c25bd4cc8493fcdf8cf9))

## [4.46.2](https://github.com/algolia/instantsearch/compare/v4.46.1...v4.46.2) (2022-09-22)

### Bug Fixes

- **build:** remove jsx pragma comments from build output ([#5112](https://github.com/algolia/instantsearch/issues/5112)) ([6582083](https://github.com/algolia/instantsearch/commit/65820831b7d7e14867f13a2947795491730b8442))
- **imports:** split out templating from ./utils ([#5111](https://github.com/algolia/instantsearch/issues/5111)) ([fc765f3](https://github.com/algolia/instantsearch/commit/fc765f35ddd85068237edc81c66932b098e3b55a)), closes [#5109](https://github.com/algolia/instantsearch/issues/5109)

## [4.46.1](https://github.com/algolia/instantsearch/compare/v4.46.0...v4.46.1) (2022-09-15)

### Bug Fixes

- **hierarchicalMenu:** use existing facet filters in multi queries for parent facet values ([#5105](https://github.com/algolia/instantsearch/issues/5105)) ([10a83f1](https://github.com/algolia/instantsearch/commit/10a83f146f714d9f97bb8edca2499f16df4ca22d))
- **insights:** make sure change in userToken can't reset the search parameters ([#5101](https://github.com/algolia/instantsearch/issues/5101)) ([b20c8dc](https://github.com/algolia/instantsearch/commit/b20c8dc70e34c1f234dc10eb7fc69296f30986a4))
- **setUiState**: call onStateChange handler ([#5104](https://github.com/algolia/instantsearch/issues/5104)) ([231853d](https://github.com/algolia/instantsearch/commit/231853dab731189a33ee480cdb196789c7336fda)))

## [4.46.0](https://github.com/algolia/instantsearch/compare/v4.45.1...v4.46.0) (2022-09-12)

### Features

- **html:** deprecate Hogan.js and string-based templates ([#5095](https://github.com/algolia/instantsearch/issues/5095)) ([a06ddf5](https://github.com/algolia/instantsearch/commit/a06ddf55f1ffd1a93cddab2fcf95d2be3220a423))
- **html:** introduce `html` templating ([#5081](https://github.com/algolia/instantsearch/issues/5081)) ([e55e224](https://github.com/algolia/instantsearch/commit/e55e2245256193d27f2c85f24b8aab7c9048c554))

## [4.45.1](https://github.com/algolia/instantsearch/compare/v4.45.0...v4.45.1) (2022-09-06)

### Bug Fixes

- **ratingMenu:** fix `undefined` facet values error when `disjunctiveFacets` is empty ([#5096](https://github.com/algolia/instantsearch/issues/5096)) ([dd870d5](https://github.com/algolia/instantsearch/commit/dd870d5a658ce42b068eadf34f9b69772291aa20))

# [4.45.0](https://github.com/algolia/instantsearch/compare/v4.44.1...v4.45.0) (2022-08-29)

### Features

- **connectors:** deprecate `hasNoResults` in favor of `canRefine` ([#5091](https://github.com/algolia/instantsearch/issues/5091)) ([1749a4e](https://github.com/algolia/instantsearch/commit/1749a4eb9a2f28fa4a8d442163e3b10acbde7c22))

## [4.44.1](https://github.com/algolia/instantsearch/compare/v4.44.0...v4.44.1) (2022-08-25)

### Bug Fixes

- **connectNumericMenu + connectRange:** stop sending invalid clickedFilters event ([#5085](https://github.com/algolia/instantsearch/issues/5085)) ([20996c7](https://github.com/algolia/instantsearch/commit/20996c7a159988c58e00ff24d2d2dc98af8b980f))

# [4.44.0](https://github.com/algolia/instantsearch/compare/v4.43.1...v4.44.0) (2022-08-08)

### Features

- **geo-search:** make `GeoHit` type generic ([#5083](https://github.com/algolia/instantsearch/issues/5083)) ([3d3c7b2](https://github.com/algolia/instantsearch/commit/3d3c7b298b74effe9bb722a04fbb47dc39a4bd95))

## [4.43.1](https://github.com/algolia/instantsearch/compare/v4.43.0...v4.43.1) (2022-07-11)

### Bug Fixes

- **errors:** rethrow error as error if it's an object ([#5075](https://github.com/algolia/instantsearch/issues/5075)) ([34132bb](https://github.com/algolia/instantsearch/commit/34132bba38c05fa2f5e4e54c6889e9335e62e4f4))
- **ratingMenu:** don't warn if results are artificial ([#5073](https://github.com/algolia/instantsearch/issues/5073)) ([d747d23](https://github.com/algolia/instantsearch/commit/d747d23b28c380fe82a40eeab06c57359af8004a))
- **types:** use correct case for \_geoloc property ([#5074](https://github.com/algolia/instantsearch/issues/5074)) ([6fed7d8](https://github.com/algolia/instantsearch/commit/6fed7d870c3607980776d33a3697f8e2789aa08b))

# [4.43.0](https://github.com/algolia/instantsearch/compare/v4.42.0...v4.43.0) (2022-06-28)

### Features

- **types:** support algoliasearch v5 ([#5066](https://github.com/algolia/instantsearch/issues/5066)) ([3eb4dc7](https://github.com/algolia/instantsearch/commit/3eb4dc75a5935f2ee4fead8787f39af0150b24c4))

# [4.42.0](https://github.com/algolia/instantsearch/compare/v4.41.2...v4.42.0) (2022-06-21)

### Bug Fixes

- **es:** update import path for `infiniteHitsCache` in depreciation message ([#5068](https://github.com/algolia/instantsearch/issues/5068)) ([545cbaf](https://github.com/algolia/instantsearch/commit/545cbafd748bb8be32bff66ac60b5f3f9133a5b4))

### Features

- **core:** sort parameters & support client.search for sffv ([#5069](https://github.com/algolia/instantsearch/issues/5069)) ([34e2b00](https://github.com/algolia/instantsearch/commit/34e2b00cbc93f1bc86ee0abaec6b6e132bd18354))

## [4.41.2](https://github.com/algolia/instantsearch/compare/v4.41.1...v4.41.2) (2022-06-15)

### Bug Fixes

- **hierarchicalMenu:** show full hierarchical parent values ([#5063](https://github.com/algolia/instantsearch/issues/5063)) ([cd1db34](https://github.com/algolia/instantsearch/commit/cd1db34815f92acb3d2d0cec6c1ae7865d14fb13))

## [4.41.1](https://github.com/algolia/instantsearch/compare/v4.41.0...v4.41.1) (2022-06-14)

### Bug Fixes

- **insights:** don't send view event if search is stalled ([#5058](https://github.com/algolia/instantsearch/issues/5058)) ([1686dfb](https://github.com/algolia/instantsearch/commit/1686dfb096cfce062e268feda7956e3b160bf2da)), closes [/github.com/algolia/instantsearch/blob/99f6fe1dc51e4815e5b9efcfb30e3e2f3127e763/src/lib/utils/createSendEventForHits.ts#L168](https://github.com//github.com/algolia/instantsearch/blob/99f6fe1dc51e4815e5b9efcfb30e3e2f3127e763/src/lib/utils/createSendEventForHits.ts/issues/L168) [/github.com/algolia/instantsearch/blob/55313e4ea4105b777f3f102e9f48a7e440496d25/src/middlewares/createInsightsMiddleware.ts#L144](https://github.com//github.com/algolia/instantsearch/blob/55313e4ea4105b777f3f102e9f48a7e440496d25/src/middlewares/createInsightsMiddleware.ts/issues/L144)
- **types:** avoid inferring UiState type from initialUiState ([#5061](https://github.com/algolia/instantsearch/issues/5061)) ([80ca07e](https://github.com/algolia/instantsearch/commit/80ca07e29064357343ee997be94ef10beadba637)), closes [/github.com/Microsoft/TypeScript/issues/14829#issuecomment-504042546](https://github.com//github.com/Microsoft/TypeScript/issues/14829/issues/issuecomment-504042546) [#5060](https://github.com/algolia/instantsearch/issues/5060)
- **types:** make all usages of UiState in InstantSearch generic ([#5060](https://github.com/algolia/instantsearch/issues/5060)) ([2b9e76b](https://github.com/algolia/instantsearch/commit/2b9e76b568fb4d4cc5bd49c384ee583d84d6f39a))

# [4.41.0](https://github.com/algolia/instantsearch/compare/v4.40.6...v4.41.0) (2022-06-01)

### Features

- **core:** don't schedule search without widgets ([#5056](https://github.com/algolia/instantsearch/issues/5056)) ([ea3d6d9](https://github.com/algolia/instantsearch/commit/ea3d6d9c6ae1fe2f90bf5643d4bdcbb89507e9bc))

## [4.40.6](https://github.com/algolia/instantsearch/compare/v4.40.5...v4.40.6) (2022-05-24)

### Bug Fixes

- **types:** only allow `null` for parent in `getWidgetRenderState` if widget is an index ([#5052](https://github.com/algolia/instantsearch/issues/5052)) ([fe0fce0](https://github.com/algolia/instantsearch/commit/fe0fce0641ffff9af1d1303b7ee71d77ba08f8bd))

## [4.40.5](https://github.com/algolia/instantsearch/compare/v4.40.4...v4.40.5) (2022-04-26)

### Bug Fixes

- **routing:** prevent writing the same URL twice ([#5045](https://github.com/algolia/instantsearch/issues/5045)) ([5d79d92](https://github.com/algolia/instantsearch/commit/5d79d92b30e188e5206dcb5fe86fcac058c3f09b))

## [4.40.4](https://github.com/algolia/instantsearch/compare/v4.40.3...v4.40.4) (2022-04-13)

### Bug Fixes

- **currentRefinements:** correctly show and allow for refining escaped values ([#5041](https://github.com/algolia/instantsearch/issues/5041)) ([277f4df](https://github.com/algolia/instantsearch/commit/277f4dff21fb7eeaeb41a8c49aaaf707f880ee58))

## [4.40.3](https://github.com/algolia/instantsearch/compare/v4.40.2...v4.40.3) (2022-04-04)

### Bug Fixes

- **refinements:** escape facet values starting with "-" ([#5039](https://github.com/algolia/instantsearch/issues/5039)) ([6b6f4e8](https://github.com/algolia/instantsearch/commit/6b6f4e86550a3c9dd02f3a8400d832cef64cb45d))

## [4.40.2](https://github.com/algolia/instantsearch/compare/v4.40.1...v4.40.2) (2022-03-29)

### Bug Fixes

- **currentRefinements:** more detailed type for item.type ([#5034](https://github.com/algolia/instantsearch/issues/5034)) ([773e2c6](https://github.com/algolia/instantsearch/commit/773e2c65840f86881eb3dd8825c8c4ad9c73aec9))

## [4.40.1](https://github.com/algolia/instantsearch/compare/v4.40.0...v4.40.1) (2022-03-21)

### Bug Fixes

- **types:** update to latest algoliasearch-helper ([6bbe790](https://github.com/algolia/instantsearch/commit/6bbe790a99320b4237b81614472c048ffe4426d8))

# [4.40.0](https://github.com/algolia/instantsearch/compare/v4.39.2...v4.40.0) (2022-03-21)

### Features

- **infiniteHits:** avoid caching artificial results ([#5023](https://github.com/algolia/instantsearch/issues/5023)) ([e8c0145](https://github.com/algolia/instantsearch/commit/e8c01452ebe77b82b8a107c5d4fc026abf5645d8))

## [4.39.2](https://github.com/algolia/instantsearch/compare/v4.39.1...v4.39.2) (2022-03-14)

### Bug Fixes

- fix types of `sortBy` option ([#5024](https://github.com/algolia/instantsearch/issues/5024)) ([3f7ea32](https://github.com/algolia/instantsearch/commit/3f7ea32374e0e409ebf27b07d28cf3871a5b33b3))

## [4.39.1](https://github.com/algolia/instantsearch/compare/v4.39.0...v4.39.1) (2022-03-01)

### Bug Fixes

- **insights:** send view events after rendering ([#5014](https://github.com/algolia/instantsearch/issues/5014)) ([e952abc](https://github.com/algolia/instantsearch/commit/e952abc64043a55e06c9c46a656bc98ad45d1502))

# [4.39.0](https://github.com/algolia/instantsearch/compare/v4.38.1...v4.39.0) (2022-02-23)

### Features

- **ts:** allow Hits related connectors to be generic ([#5019](https://github.com/algolia/instantsearch/issues/5019)) ([e986f7e](https://github.com/algolia/instantsearch/commit/e986f7e46d57173da4d3d6c3c23fbdf3f9c0f78c))

## [4.38.1](https://github.com/algolia/instantsearch/compare/v4.38.0...v4.38.1) (2022-02-08)

### Bug Fixes

- **routing:** fix history router based on history length ([#5004](https://github.com/algolia/instantsearch/issues/5004)) ([40541af](https://github.com/algolia/instantsearch/commit/40541af5c8face0e32a1ec3a4665a8387d89c626))
- **metadata:** ensure safe user agent detection ([#5009](https://github.com/algolia/instantsearch/pull/5009) [15a6a9d](https://github.com/algolia/instantsearch/commit/15a6a9d10ee512fab6884696bc59bedea13bd1b3))

# [4.38.0](https://github.com/algolia/instantsearch/compare/v4.37.3...v4.38.0) (2022-01-28)

### Bug Fixes

- **typescript:** remove non-existing UMD type definition ([#5001](https://github.com/algolia/instantsearch/issues/5001)) ([c234374](https://github.com/algolia/instantsearch/commit/c234374a1f5333f6625980c45fa0833a8c130257))

### Features

- **connectors:** expose search results to `transformItems` when available ([#5000](https://github.com/algolia/instantsearch/issues/5000)) ([58c2651](https://github.com/algolia/instantsearch/commit/58c26517aad916ce49b474458e3411ff7ef5497a))

## [4.37.3](https://github.com/algolia/instantsearch/compare/v4.37.2...v4.37.3) (2022-01-25)

### Bug Fixes

- **helpers:** display warning if attribute cannot be highlighted/snippeted ([#4996](https://github.com/algolia/instantsearch/issues/4996)) ([e81bf59](https://github.com/algolia/instantsearch/commit/e81bf59f0f28eb7b9f54f7d4424c60546b9a4d8c))

## [4.37.2](https://github.com/algolia/instantsearch/compare/v4.37.1...v4.37.2) (2022-01-10)

### Bug Fixes

- **searchbox:** make sure setting query to the initial doesn't cause a stale state ([#4990](https://github.com/algolia/instantsearch/issues/4990)) ([3faca01](https://github.com/algolia/instantsearch/commit/3faca014aad08145c3b4cc66a5e841da3a0f64b8))

## [4.37.1](https://github.com/algolia/instantsearch/compare/v4.37.0...v4.37.1) (2022-01-05)

### Bug Fixes

- **connectBreadcrumb:** returns an empty array if no hierarchicalFacets exist ([#4980](https://github.com/algolia/instantsearch/issues/4980)) ([3ea9b91](https://github.com/algolia/instantsearch/commit/3ea9b918f85c686a07b06cfc12b8c59b80181f28))
- **es:** mark inner package.json as side-effect free ([#4984](https://github.com/algolia/instantsearch/issues/4984)) ([74f56f3](https://github.com/algolia/instantsearch/commit/74f56f35b7ccc78904592edfc40e782e40847986)), closes [#4971](https://github.com/algolia/instantsearch/issues/4971)
- **events:** emit error as typeof Error ([#4983](https://github.com/algolia/instantsearch/issues/4983)) ([4adfaf2](https://github.com/algolia/instantsearch/commit/4adfaf2eba40fffa7f4800664dc89e0edf2d819e))

# [4.37.0](https://github.com/algolia/instantsearch/compare/v4.36.0...v4.37.0) (2022-01-04)

### Features

- **build:** expose `/es` as a real ES module ([#4971](https://github.com/algolia/instantsearch/issues/4971)) ([e5b3434](https://github.com/algolia/instantsearch/commit/e5b343490921f70736e11a7758bdc7a3aeed6d69))

# [4.36.0](https://github.com/algolia/instantsearch/compare/v4.35.0...v4.36.0) (2021-12-16)

### Features

- **dynamicWidgets:** send facets \* and maxValuesPerFacet by default ([#4968](https://github.com/algolia/instantsearch/issues/4968)) ([969ae89](https://github.com/algolia/instantsearch/commit/969ae8980f7c8a055bb4c6c5967d04744644f555))
- **DynamicWidgets:** throw when transformItems returns anything that isn't an array ([#4975](https://github.com/algolia/instantsearch/issues/4975)) ([5c328c8](https://github.com/algolia/instantsearch/commit/5c328c85428eb9a5c1450fd01154751f4e0ea2fa))

# [4.35.0](https://github.com/algolia/instantsearch/compare/v4.34.0...v4.35.0) (2021-12-13)

### Features

- **events:** move to @algolia/events ([#4961](https://github.com/algolia/instantsearch/issues/4961)) ([1c56726](https://github.com/algolia/instantsearch/commit/1c5672640c65d7ed6f6e381a3162e508bdda44f3))

### Bug Fixes

- **deps:** Add missing peer dependency ([#4950](https://github.com/algolia/instantsearch/issues/4950)) ([468578da9](https://github.com/algolia/instantsearch/commit/468578da948a12224c892fd12cba4c880aa7b25f))

# [4.34.0](https://github.com/algolia/instantsearch/compare/v4.33.2...v4.34.0) (2021-12-07)

### Features

- rely on `state` in `getWidgetRenderState` ([#4960](https://github.com/algolia/instantsearch/issues/4960)) ([5006841](https://github.com/algolia/instantsearch/commit/50068417e5e7211802bc717b582946f6e630d7ac))
- support initial results (experimental) ([#4967](https://github.com/algolia/instantsearch/issues/4967)) ([db11c13](https://github.com/algolia/instantsearch/commit/db11c13ea55433491f5e924633bff12a303c1bc6))

## [4.33.2](https://github.com/algolia/instantsearch/compare/v4.33.1...v4.33.2) (2021-11-16)

### Bug Fixes

- **connectNumericMenu:** allow option for same start/end values ([#4951](https://github.com/algolia/instantsearch/issues/4951)) ([18da714](https://github.com/algolia/instantsearch/commit/18da714574fa98957d29014add3123e9c377551f))

## [4.33.1](https://github.com/algolia/instantsearch/compare/v4.33.0...v4.33.1) (2021-11-02)

### Bug Fixes

- **getUiState:** support `initialUiState` ([#4948](https://github.com/algolia/instantsearch/issues/4948)) ([532474d](https://github.com/algolia/instantsearch/commit/532474dfaf49446ab59a2a27424ca220947dd5bd))

# [4.33.0](https://github.com/algolia/instantsearch/compare/v4.32.0...v4.33.0) (2021-10-26)

### Bug Fixes

- **router:** skip history push on browser back and forward actions ([#4933](https://github.com/algolia/instantsearch/issues/4933)) ([7909da4](https://github.com/algolia/instantsearch/commit/7909da4903eb1aee885811e280b909a3bda488be))
- **setUiState:** reset UI state with empty object ([#4944](https://github.com/algolia/instantsearch/issues/4944)) ([5faae4a](https://github.com/algolia/instantsearch/commit/5faae4ac44ac5ad2f8086ad2a306bcfaa14bc754))

### Features

- **router:** support server environments ([#4940](https://github.com/algolia/instantsearch/issues/4940)) ([a002962](https://github.com/algolia/instantsearch/commit/a002962df0e7683b29bef8bfaaddb494fa551a14))

# [4.32.0](https://github.com/algolia/instantsearch/compare/v4.31.1...v4.32.0) (2021-10-20)

### Features

- **dependencies:** update algoliasearch-helper ([#4936](https://github.com/algolia/instantsearch/issues/4936)) ([014a413](https://github.com/algolia/instantsearch/commit/014a413f14dded3861a9c288ea618f1602bcd66d))

## [4.31.1](https://github.com/algolia/instantsearch/compare/v4.31.0...v4.31.1) (2021-10-19)

### Bug Fixes

- **types:** export correct types from search-insights ([#4930](https://github.com/algolia/instantsearch/issues/4930)) ([5ae7a5b](https://github.com/algolia/instantsearch/commit/5ae7a5b86ad9c042bfbdc60e505c159eebdb404f))

# [4.31.0](https://github.com/algolia/instantsearch/compare/v4.30.3...v4.31.0) (2021-10-14)

### Features

- **InstantSearch:** defer initial search ([#4925](https://github.com/algolia/instantsearch/issues/4925)) ([9a88115](https://github.com/algolia/instantsearch/commit/9a8811534af1288e316cdfb6f6fc49df1597290e))

## [4.30.3](https://github.com/algolia/instantsearch/compare/v4.30.2...v4.30.3) (2021-10-12)

### Bug Fixes

- **toggleRefinement:** don't set off value in getWidgetRenderState ([#4912](https://github.com/algolia/instantsearch/issues/4912)) ([69525bf](https://github.com/algolia/instantsearch/commit/69525bf2a3087aeb75c4f1e5ab8452012436f61f))

## [4.30.2](https://github.com/algolia/instantsearch/compare/v4.30.1...v4.30.2) (2021-09-21)

### Bug Fixes

- **es:** add warning to typescript declaration of keys to be imported from helpers ([#4908](https://github.com/algolia/instantsearch/issues/4908)) ([8cbd5fb](https://github.com/algolia/instantsearch/commit/8cbd5fb3f02427f2c7de6e818f1ff4c81485b3e1))
- **infinite/hits:** stop saving the transformed results in cache ([#4907](https://github.com/algolia/instantsearch/issues/4907)) ([82dc0ae](https://github.com/algolia/instantsearch/commit/82dc0ae966fda37582d5324ea6ca3e0f33ef56d5)), closes [#4819](https://github.com/algolia/instantsearch/issues/4819)

## [4.30.1](https://github.com/algolia/instantsearch/compare/v4.30.0...v4.30.1) (2021-09-14)

### Bug Fixes

- **insightsMiddleware:** throw an error when credentials can't be extracted ([#4901](https://github.com/algolia/instantsearch/issues/4901)) ([55313e4](https://github.com/algolia/instantsearch/commit/55313e4ea4105b777f3f102e9f48a7e440496d25))

# [4.30.0](https://github.com/algolia/instantsearch/compare/v4.29.1...v4.30.0) (2021-09-07)

### Bug Fixes

- **insights:** handle multiple setUserToken call before search.start() ([#4897](https://github.com/algolia/instantsearch/issues/4897)) ([51a6f2b](https://github.com/algolia/instantsearch/commit/51a6f2bcd2ea312e7038e6f3208a2e9b3fed494a))

### Features

- **dynamicWidgets:** add fallbackWidget ([#4847](https://github.com/algolia/instantsearch/issues/4847)) ([7d99ab9](https://github.com/algolia/instantsearch/commit/7d99ab95972d5886cdc82abb5794a41d38381a50))
- **dynamicWidgets:** mark as stable ([#4899](https://github.com/algolia/instantsearch/issues/4899)) ([f97468f](https://github.com/algolia/instantsearch/commit/f97468f134d92c198433a7dad16a3b19b3779a94))

## [4.29.1](https://github.com/algolia/instantsearch/compare/v4.29.0...v4.29.1) (2021-09-02)

### Bug Fixes

- **middleware:** subscribe middleware before initializing main index ([#4849](https://github.com/algolia/instantsearch/issues/4849)) ([0fc8f73](https://github.com/algolia/instantsearch/commit/0fc8f7322f8521f934ed871e8125707ba2ec0bfd))

# [4.29.0](https://github.com/algolia/instantsearch/compare/v4.28.0...v4.29.0) (2021-08-31)

### Features

- **panel:** render templates on init with render state ([#4845](https://github.com/algolia/instantsearch/issues/4845)) ([0e151a9](https://github.com/algolia/instantsearch/commit/0e151a9552092807ecbc6993f3f6193fef621f44))

# [4.28.0](https://github.com/algolia/instantsearch/compare/v4.27.2...v4.28.0) (2021-08-24)

### Bug Fixes

- **sendEvent:** split > 20 objects in multiple calls ([#4841](https://github.com/algolia/instantsearch/issues/4841)) ([44574bc](https://github.com/algolia/instantsearch/commit/44574bcf03ac05e22274099622e6a1839599ca7e))
- **svg:** remove xmlns ([#4839](https://github.com/algolia/instantsearch/issues/4839)) ([932ae3a](https://github.com/algolia/instantsearch/commit/932ae3a868340a32ccaacb276c862921fee41a93))

### Features

- **ts:** expose built files in umd ([#4844](https://github.com/algolia/instantsearch/issues/4844)) ([8578ae3](https://github.com/algolia/instantsearch/commit/8578ae30a915db49acaa0292faba2ec6ccd52b73))

## [4.27.2](https://github.com/algolia/instantsearch/compare/v4.27.1...v4.27.2) (2021-08-18)

### Bug Fixes

- **types:** export all types as "type" to avoid exporting in .js ([#4837](https://github.com/algolia/instantsearch/issues/4837)) ([dcbbd88](https://github.com/algolia/instantsearch/commit/dcbbd8804b4b6471d24820b42826b57388974c27))

## [4.27.1](https://github.com/algolia/instantsearch/compare/v4.27.0...v4.27.1) (2021-08-17)

### Bug Fixes

- **ts:** export types from entry point ([#4834](https://github.com/algolia/instantsearch/issues/4834)) ([3014e84](https://github.com/algolia/instantsearch/commit/3014e8481e401db62fff41d6867580c04adeaf6b))

# [4.27.0](https://github.com/algolia/instantsearch/compare/v4.26.0...v4.27.0) (2021-08-17)

### Bug Fixes

- **ts:** correct entry point ([#4829](https://github.com/algolia/instantsearch/issues/4829)) ([24a45f9](https://github.com/algolia/instantsearch/commit/24a45f9a9fb3c8f62003d2aa37b3456c11af2985))
- **ts:** export PaginationConnector ([d201322](https://github.com/algolia/instantsearch/commit/d201322de0d09a664b762422fdc0a51e2bd566bc))

### Features

- **typescript:** expose types at regular build ([#4832](https://github.com/algolia/instantsearch/issues/4832)) ([4bea07b](https://github.com/algolia/instantsearch/commit/4bea07b99f492441eb94e483378e0778f90c5b43))

If you were using typescript via the `experimental-typescript` tag, you can now use regular InstantSearch.js.

# [4.26.0](https://github.com/algolia/instantsearch/compare/v4.25.3...v4.26.0) (2021-08-10)

### Features

- **ts:** allow custom ui state and route state in routing ([#4816](https://github.com/algolia/instantsearch/issues/4816)) ([5f8ba5d](https://github.com/algolia/instantsearch/commit/5f8ba5ddcf5e32fd3cecf39ea667d8266dab35f8))
- **types:** allow typed access to properties added to entry ([#4814](https://github.com/algolia/instantsearch/issues/4814)) ([9000f16](https://github.com/algolia/instantsearch/commit/9000f16c3e0ff53eda4ca21281a87d8ff9b9154d))

## [4.25.3](https://github.com/algolia/instantsearch/compare/v4.25.2...v4.25.3) (2021-08-03)

### Bug Fixes

- **types:** fix hits and results types in connectHits and connectInfiniteHits ([#4820](https://github.com/algolia/instantsearch/issues/4820)) ([2bf987e](https://github.com/algolia/instantsearch/commit/2bf987e8b2728a8e65a88a49d46eadf6c0172660))

## [4.25.2](https://github.com/algolia/instantsearch/compare/v4.25.1...v4.25.2) (2021-07-20)

### Bug Fixes

- **build:** ensure build fails when types building fails ([#4812](https://github.com/algolia/instantsearch/issues/4812)) ([b37e23b](https://github.com/algolia/instantsearch/commit/b37e23b5819abbc03049124bc3a29120f91aeb8c))
- **types:** export widget's types ([#4813](https://github.com/algolia/instantsearch/issues/4813)) ([e9764e9](https://github.com/algolia/instantsearch/commit/e9764e9273e5b7bacd86f8d1cb751e87bd75eb75))

## [4.25.1](https://github.com/algolia/instantsearch/compare/v4.25.0...v4.25.1) (2021-07-13)

### Bug Fixes

- **deps:** force a lower version of qs ([#4805](https://github.com/algolia/instantsearch/issues/4805)) ([07b7e08](https://github.com/algolia/instantsearch/commit/07b7e086282f8cc6a17aee822902d97204c1d2da))

# [4.25.0](https://github.com/algolia/instantsearch/compare/v4.24.3...v4.25.0) (2021-07-06)

### Features

- **facets:** apply result from facet ordering ([#4784](https://github.com/algolia/instantsearch/issues/4784)) ([9e9d839](https://github.com/algolia/instantsearch/commit/9e9d8394067bec35425b7d66f94fcce504faee7f))

## [4.24.3](https://github.com/algolia/instantsearch/compare/v4.24.2...v4.24.3) (2021-07-05)

### Bug Fixes

- **dynamicWidgets:** read from facetOrdering.facets ([42d6c6c](https://github.com/algolia/instantsearch/commit/42d6c6cefc5f009a3cfc63ab3d628ed2811f1700))
- **ts:** make template types consistent ([#4785](https://github.com/algolia/instantsearch/issues/4785)) ([e0fbd55](https://github.com/algolia/instantsearch/commit/e0fbd55b6b98dd64301f113fd394dce57552d94c))

## [4.24.2](https://github.com/algolia/instantsearch/compare/v4.24.1...v4.24.2) (2021-06-29)

### Bug Fixes

- **index:** export `IndexWidgetParams` type ([#4793](https://github.com/algolia/instantsearch/issues/4793)) ([91bdea1](https://github.com/algolia/instantsearch/commit/91bdea18f3768265937e2d3aca4acaa05c24e426))
- **onStateChange:** propagate change to middleware ([#4796](https://github.com/algolia/instantsearch/issues/4796)) ([57c32c0](https://github.com/algolia/instantsearch/commit/57c32c0a43bd2c6cbdd3f8ea7eac8109e3024f2a))
- **relevantSort:** export `RelevantSortWidgetParams` type ([#4794](https://github.com/algolia/instantsearch/issues/4794)) ([1a10b59](https://github.com/algolia/instantsearch/commit/1a10b59938c6121f58510726b67ee6dfa1aa1b7c))
- **sortBy:** do not write the default state ([#4798](https://github.com/algolia/instantsearch/issues/4798)) ([1d8a40e](https://github.com/algolia/instantsearch/commit/1d8a40ecc8e6e48746113ec3ec0d975e14bec1ea))

## [4.24.1](https://github.com/algolia/instantsearch/compare/v4.24.0...v4.24.1) (2021-06-23)

### Bug Fixes

- **mainHelper:** allow a mainHelper to be set before start ([#4790](https://github.com/algolia/instantsearch/issues/4790)) ([e8329ae](https://github.com/algolia/instantsearch/commit/e8329aecb386755a039cf10850e394d0d71f29f4))

# [4.24.0](https://github.com/algolia/instantsearch/compare/v4.23.0...v4.24.0) (2021-06-15)

### Bug Fixes

- **clearRefinements:** do not throw when widgetParams is not given ([#4778](https://github.com/algolia/instantsearch/issues/4778)) ([6b1a375](https://github.com/algolia/instantsearch/commit/6b1a375ed7139c0b98993c0cb7ab40838e1f2288))
- **ts:** make `CSSClasses` types consistent ([#4774](https://github.com/algolia/instantsearch/issues/4774)) ([99008a9](https://github.com/algolia/instantsearch/commit/99008a985ddc61ce197200df51fdcf385914064d))

### Features

- **dynamicWidgets:** add default attributesToRender & transformItems ([#4776](https://github.com/algolia/instantsearch/issues/4776)) ([44dab44](https://github.com/algolia/instantsearch/commit/44dab44282da58b36a707ad80aff4c18477abccd))
- **ts:** convert pagination widget and component ([#4765](https://github.com/algolia/instantsearch/issues/4765)) ([34eb950](https://github.com/algolia/instantsearch/commit/34eb9500a2d7072814fd715e1c2217ed22de30d1))
- **ts:** convert rangeInput widget and component ([#4766](https://github.com/algolia/instantsearch/issues/4766)) ([40b1a82](https://github.com/algolia/instantsearch/commit/40b1a82f9df4b16708fceefbba77a8fb49c7dc41))

# [4.23.0](https://github.com/algolia/instantsearch/compare/v4.22.0...v4.23.0) (2021-05-25)

### Bug Fixes

- **range:** reset the page on refine ([#4760](https://github.com/algolia/instantsearch/issues/4760)) ([24e3b34](https://github.com/algolia/instantsearch/commit/24e3b34c944ec32b414e845550e9c6c02b39cb92)), closes [#4759](https://github.com/algolia/instantsearch/issues/4759)

### Features

- **ts:** convert poweredBy widget ([#4756](https://github.com/algolia/instantsearch/issues/4756)) ([142660a](https://github.com/algolia/instantsearch/commit/142660a2bc0ab7212265a9ff6dadf7a7f1081c69))

# [4.22.0](https://github.com/algolia/instantsearch/compare/v4.21.0...v4.22.0) (2021-05-05)

### Bug Fixes

- **insights:** do not throw when userToken is not given ([#4724](https://github.com/algolia/instantsearch/issues/4724)) ([8241b29](https://github.com/algolia/instantsearch/commit/8241b2909c981a6bb52e9f4f9b6bacb7bc60263b))
- **insights:** use getUserToken method instead of \_get ([#4744](https://github.com/algolia/instantsearch/issues/4744)) ([05d05a9](https://github.com/algolia/instantsearch/commit/05d05a9a8ad79e4ec8b183a3d17c2360430c302e))
- **relevantSort:** remove "relevantSort" nesting, since there's only one property ([#4735](https://github.com/algolia/instantsearch/issues/4735)) ([f742083](https://github.com/algolia/instantsearch/commit/f74208396159524086341be4acf84d2af2b44135))
- **connectToggleRefinement:** nest getRenderState per attribute ([#4743](https://github.com/algolia/instantsearch/issues/4743)) ([b9c884d](https://github.com/algolia/instantsearch/commit/b9c884daa406e1be63482ed198674b2ba22e66f2))
- **connectToggleRefinement:** remove search parameters from render state ([#4743](https://github.com/algolia/instantsearch/issues/4743)) ([b9c884d](https://github.com/algolia/instantsearch/commit/b9c884daa406e1be63482ed198674b2ba22e66f2))

### Features

- **core:** add getUiState function ([#4750](https://github.com/algolia/instantsearch/issues/4750)) ([adce212](https://github.com/algolia/instantsearch/commit/adce2127de6c652ee6364e889a525d9d0ff6efdd))
- **dynamicWidgets:** implementation ([#4687](https://github.com/algolia/instantsearch/issues/4687)) ([2e7ccc9](https://github.com/algolia/instantsearch/commit/2e7ccc91c8d2e4aa50c82a186cce057907042ed4))
- **ts:** migrate toggleRefinement & connectToggleRefinement ([#4743](https://github.com/algolia/instantsearch/issues/4743)) ([b9c884d](https://github.com/algolia/instantsearch/commit/b9c884daa406e1be63482ed198674b2ba22e66f2))
- **widget:** add access to "parent" in dispose ([#4745](https://github.com/algolia/instantsearch/issues/4745)) ([3fca986](https://github.com/algolia/instantsearch/commit/3fca986542e8b18312a6c6be810bf5fb986804a4))

# [4.21.0](https://github.com/algolia/instantsearch/compare/v4.20.0...v4.21.0) (2021-04-12)

### Bug Fixes

- **infiniteHits:** fix wrong behavior of showPrevious regarding cachedHits ([#4725](https://github.com/algolia/instantsearch/issues/4725)) ([40b27b6](https://github.com/algolia/instantsearch/commit/40b27b668ec1dcb8608b299c941e0003b43911d3))
- **ratingMenu:** use url in default template ([#4728](https://github.com/algolia/instantsearch/issues/4728)) ([31d9c50](https://github.com/algolia/instantsearch/commit/31d9c50344818cd4f4e62993a981ec3616d8b88e))

### Features

- **middleware:** accept partial methods ([#4673](https://github.com/algolia/instantsearch/issues/4673)) ([8f2aad2](https://github.com/algolia/instantsearch/commit/8f2aad2f0465cc883681143f350a11c24ce694e2))
- **ts:** convert hierarchical-menu to TypeScript ([#4711](https://github.com/algolia/instantsearch/issues/4711)) ([870e2f7](https://github.com/algolia/instantsearch/commit/870e2f7285d58c48196356cd88fb4aca66feb7aa))
- **ts:** convert RefinementList component to TypeScript ([#4702](https://github.com/algolia/instantsearch/issues/4702)) ([fd562de](https://github.com/algolia/instantsearch/commit/fd562de5e50e3889abaa9ef8151faa1b5179d7f6))
- **ts:** convert search-box to TypeScript ([#4710](https://github.com/algolia/instantsearch/issues/4710)) ([e73257a](https://github.com/algolia/instantsearch/commit/e73257a466082207c0289f22bad523334d101aae))

# [4.20.0](https://github.com/algolia/instantsearch/compare/v4.19.0...v4.20.0) (2021-04-06)

### Features

- **clearRefinements:** implement canRefine ([#4684](https://github.com/algolia/instantsearch/issues/4684)) ([a898f09](https://github.com/algolia/instantsearch/commit/a898f09bddca5db1f6782104375df3873d49c688))
- **currentRefinements:** implement canRefine ([#4697](https://github.com/algolia/instantsearch/issues/4697)) ([4db75ba](https://github.com/algolia/instantsearch/commit/4db75baa9ff2e18f871547511d8f1234eea9d41b))
- **hierarchicalMenu:** implement canRefine ([#4685](https://github.com/algolia/instantsearch/issues/4685)) ([0d2e450](https://github.com/algolia/instantsearch/commit/0d2e450aed2aaac72ae7ff7f1bb322ce6992c8ba))
- **middleware:** add unuse method ([#4708](https://github.com/algolia/instantsearch/issues/4708)) ([8e3c406](https://github.com/algolia/instantsearch/commit/8e3c406c8f29bcae56d2f82f07cbd087043346fe))
- **pagination:** implement canRefine ([#4683](https://github.com/algolia/instantsearch/issues/4683)) ([3ae51e6](https://github.com/algolia/instantsearch/commit/3ae51e60543984463a13b25e64aa2f879c91313e))
- **range:** implement canRefine ([#4686](https://github.com/algolia/instantsearch/issues/4686)) ([a99ab6f](https://github.com/algolia/instantsearch/commit/a99ab6f968b791ffa31cd17dda598c293e73b88e))
- **ratingMenu:** implement canRefine ([#4691](https://github.com/algolia/instantsearch/issues/4691)) ([42191a0](https://github.com/algolia/instantsearch/commit/42191a097a048a325234dd3f40f7799145628cd6))
- **toggleRefinement:** implement canRefine ([#4689](https://github.com/algolia/instantsearch/issues/4689)) ([48dc7f8](https://github.com/algolia/instantsearch/commit/48dc7f8423c92b21bcd59856bf2fc685ae4aba69))
- **ts:** convert rating-menu to TypeScript ([#4701](https://github.com/algolia/instantsearch/issues/4701)) ([f14ca08](https://github.com/algolia/instantsearch/commit/f14ca0891237a7a49b09d881cddedb93efc3a266))
- **ts:** convert Template component to TypeScript ([#4703](https://github.com/algolia/instantsearch/issues/4703)) ([0688571](https://github.com/algolia/instantsearch/commit/068857137b85d1065bc5997514461d72fe595130))

# [4.19.0](https://github.com/algolia/instantsearch/compare/v4.18.0...v4.19.0) (2021-03-30)

### Bug Fixes

- **setUiState:** make sure previous ui state is stored ([#4699](https://github.com/algolia/instantsearch/issues/4699)) ([0f5d688](https://github.com/algolia/instantsearch/commit/0f5d6888c5e77c750d264ed19be3418d920266af))

### Features

- **relevantSort:** implement canRefine ([#4693](https://github.com/algolia/instantsearch/issues/4693)) ([24d9ded](https://github.com/algolia/instantsearch/commit/24d9ded0c0e3246b91fe16ab1d1d579c17d68731))
- **currentRefinements:** implement canRefine ([#4690](https://github.com/algolia/instantsearch/issues/4690)) ([f02416c](https://github.com/algolia/instantsearch/commit/f02416cf226ec3f7c2238b3e0902ec6f78381515))
- **ts:** convert sortBy, connectSortBy ([#4700](https://github.com/algolia/instantsearch/issues/4700)) ([86de1e0](https://github.com/algolia/instantsearch/commit/86de1e0a675c91b75e72463e6b11df62739d69b5))

# [4.18.0](https://github.com/algolia/instantsearch/compare/v4.17.0...v4.18.0) (2021-03-24)

### Bug Fixes

- **createURL:** correctly remove page in state ([#4679](https://github.com/algolia/instantsearch/issues/4679)) ([48c080e](https://github.com/algolia/instantsearch/commit/48c080ef85b974e68e1c80ceffea7a0138407a1e))
- **utils:** circular dependency in createSendEventForHits ([#4680](https://github.com/algolia/instantsearch/issues/4680)) ([045f33b](https://github.com/algolia/instantsearch/commit/045f33bc6184fb04501e39a5a97e1e969095389a))

### Features

- **metadata:** expose client's algolia agent ([#4694](https://github.com/algolia/instantsearch/issues/4694)) ([3d0cb5b](https://github.com/algolia/instantsearch/commit/3d0cb5b69056674246efb1acf33e143ac7ae4915))
- **ts:** convert connectRefinementList, refinementList ([#4658](https://github.com/algolia/instantsearch/issues/4658)) ([794b2d3](https://github.com/algolia/instantsearch/commit/794b2d3316ae7ee79cfa0643565b65e5bec5c7c1))
- **ts:** convert stats, connectStats ([#4681](https://github.com/algolia/instantsearch/issues/4681)) ([37bbd01](https://github.com/algolia/instantsearch/commit/37bbd016a83d5cb66d1f78c0865f7677fa7098fb))
- **ts:** update to typescript 4 ([#4654](https://github.com/algolia/instantsearch/issues/4654)) ([638e437](https://github.com/algolia/instantsearch/commit/638e437fdd80af0cfd38818f9da37a50f8f4343f))

# [4.17.0](https://github.com/algolia/instantsearch/compare/v4.16.1...v4.17.0) (2021-03-09)

### Bug Fixes

- **bindEvent:** escape payload correctly ([#4670](https://github.com/algolia/instantsearch/issues/4670)) ([c1cbaf4](https://github.com/algolia/instantsearch/commit/c1cbaf49f6af9784535df80d024cdad56f3ddb84))

### Features

- **insights:** add hits and attributes to InsightsEvent ([#4667](https://github.com/algolia/instantsearch/issues/4667)) ([17ef71c](https://github.com/algolia/instantsearch/commit/17ef71c32586d0a93bb3905696b6ff7c7be1f3f9))

## [4.16.1](https://github.com/algolia/instantsearch/compare/v4.16.0...v4.16.1) (2021-03-03)

### Bug Fixes

- **relevantSort:** rename smartSort to relevantSort ([#4668](https://github.com/algolia/instantsearch/issues/4668)) ([579eee8](https://github.com/algolia/instantsearch/commit/579eee8d38effe067407a269e493400c460eb842))

# [4.16.0](https://github.com/algolia/instantsearch/compare/v4.15.0...v4.16.0) (2021-03-01)

### Bug Fixes

- **relevantSort:** export the widget and the connector ([#4663](https://github.com/algolia/instantsearch/issues/4663)) ([e7aaa8c](https://github.com/algolia/instantsearch/commit/e7aaa8ceb47b8cafc3a3a323ebe47f45f3841ba4))

### Features

- **answers:** add `EXPERIMENTAL_answers` widget ([#4581](https://github.com/algolia/instantsearch/issues/4581)) ([e4c9070](https://github.com/algolia/instantsearch/commit/e4c9070250779d7d3afabe7f9a19644717bc12c8)), closes [#4635](https://github.com/algolia/instantsearch/issues/4635)

# [4.15.0](https://github.com/algolia/instantsearch/compare/v4.14.2...v4.15.0) (2021-02-23)

### Features

- **relevantSort:** add widget ([#4648](https://github.com/algolia/instantsearch/issues/4648)) ([89c6e86](https://github.com/algolia/instantsearch/commit/89c6e868f490e9b6e507dd70c215e962f4c69ccb))
- **stats:** apply nbSortedHits ([#4649](https://github.com/algolia/instantsearch/issues/4649)) ([34478c1](https://github.com/algolia/instantsearch/commit/34478c198dcafbd45fd101db0cd2fbe6328272b8))
- **ts:** convert menu ([#4652](https://github.com/algolia/instantsearch/issues/4652)) ([2271b43](https://github.com/algolia/instantsearch/commit/2271b4379918e865a1b0cea09c139e517df97bc5))

## [4.14.2](https://github.com/algolia/instantsearch/compare/v4.14.1...v4.14.2) (2021-02-17)

### Bug Fixes

- **insights:** don't reset page ([#4655](https://github.com/algolia/instantsearch/issues/4655)) ([2b31250](https://github.com/algolia/instantsearch/commit/2b312508e8be59284180e7f490ce0aac80f9c2b6))

## [4.14.1](https://github.com/algolia/instantsearch/compare/v4.14.0...v4.14.1) (2021-02-16)

### Bug Fixes

- **compat:** remove references to window ([#4651](https://github.com/algolia/instantsearch/issues/4651)) ([1ede1ae](https://github.com/algolia/instantsearch/commit/1ede1ae392d3a12f5b0fe29075ffeb05e572a874)), closes [#4650](https://github.com/algolia/instantsearch/issues/4650)

# [4.14.0](https://github.com/algolia/instantsearch/compare/v4.13.2...v4.14.0) (2021-02-09)

### Features

- **queryRuleContext:** allow to make refinements based on query ([#4638](https://github.com/algolia/instantsearch/issues/4638)) ([dd033fc](https://github.com/algolia/instantsearch/commit/dd033fc58ff11027e4f4b6157aedf0aea0326af3))

## [4.13.2](https://github.com/algolia/instantsearch/compare/v4.13.1...v4.13.2) (2021-02-03)

### Bug Fixes

- **range:** don't go out of bounds with min or max given ([#4627](https://github.com/algolia/instantsearch/issues/4627)) ([8327ec0](https://github.com/algolia/instantsearch/commit/8327ec01c3940dfc20f5f1c8e3e0fc85f29af690))

## [4.13.1](https://github.com/algolia/instantsearch/compare/v4.13.0...v4.13.1) (2021-01-26)

### Bug Fixes

- **index:** only set listeners on init once ([#4634](https://github.com/algolia/instantsearch/issues/4634)) ([730b49d](https://github.com/algolia/instantsearch/commit/730b49d43782b98c5119a5d3dbfec09073bde1d0))

# [4.13.0](https://github.com/algolia/instantsearch/compare/v4.12.0...v4.13.0) (2021-01-26)

### Features

- **ratingMenu:** Add support for floats in values ([#4611](https://github.com/algolia/instantsearch/issues/4611)) ([3f52784](https://github.com/algolia/instantsearch/commit/3f52784862b72ef59acfc0735fe482cbfa6ad1f5))

# [4.12.0](https://github.com/algolia/instantsearch/compare/v4.11.0...v4.12.0) (2021-01-20)

### Code Refactoring

- rename all references to widgetOptions as widgetParams ([#4612](https://github.com/algolia/instantsearch/issues/4612)) ([ff9a18d](https://github.com/algolia/instantsearch/commit/ff9a18d31635013ee4bc242291f121c8e5827f38))

### Features

- **core:** expose metadata of widgets ([#4604](https://github.com/algolia/instantsearch/issues/4604)) ([1fcf716](https://github.com/algolia/instantsearch/commit/1fcf71657b176b14067df36765a38e32d2a6dd9b))
- **widgets:** annotate widget instances with $$widgetType ([#4624](https://github.com/algolia/instantsearch/issues/4624)) ([df3f478](https://github.com/algolia/instantsearch/commit/df3f47867e65a2e56c6da968d7a154471172adce))

### BREAKING CHANGES

- if you're using experimental-typescript and importing a type of the form `...WidgetOptions`, this now becomes `...WidgetParams` (eg. replace `HitsWidgetOptions` with `HitsWidgetParams`)

# [4.11.0](https://github.com/algolia/instantsearch/compare/v4.10.0...v4.11.0) (2021-01-14)

### Bug Fixes

- **index:** do not warn for nested index widget ([#4620](https://github.com/algolia/instantsearch/issues/4620)) ([7502744](https://github.com/algolia/instantsearch/commit/7502744cd546181ec4429cd6b8144200ba2a8f82))
- **insights:** don't quote values ([#4619](https://github.com/algolia/instantsearch/issues/4619)) ([ac2444c](https://github.com/algolia/instantsearch/commit/ac2444c36c6f41e35ed6d1a6d045479b35416576))

### Features

- **insights:** accept initParams for insightsClient ([#4608](https://github.com/algolia/instantsearch/issues/4608)) ([0a0ae2b](https://github.com/algolia/instantsearch/commit/0a0ae2bf10a4e210373b8fde635949a56c86e52e))

# [4.10.0](https://github.com/algolia/instantsearch/compare/v4.9.2...v4.10.0) (2021-01-05)

### Features

- **index:** expose createURL ([#4603](https://github.com/algolia/instantsearch/issues/4603)) ([f57e9c5](https://github.com/algolia/instantsearch/commit/f57e9c5a46e927b8dd38f167ee5c467151334a08))
- **index:** expose scoped results getter ([#4609](https://github.com/algolia/instantsearch/issues/4609)) ([a41b1e4](https://github.com/algolia/instantsearch/commit/a41b1e46bb195e6ef1f9bdbdde64d9300246c22f))
- **reverseHighlight/reverseSnippet:** Implements reverseHighlight and reverseSnippet ([#4592](https://github.com/algolia/instantsearch/issues/4592)) ([718bf45](https://github.com/algolia/instantsearch/commit/718bf458152bb55bab1efb542adb8e31298c0c3c))

## [4.9.2](https://github.com/algolia/instantsearch/compare/v4.9.1...v4.9.2) (2020-12-15)

### Bug Fixes

- warn about invalid userToken ([#4605](https://github.com/algolia/instantsearch/issues/4605)) ([5fce769](https://github.com/algolia/instantsearch/commit/5fce769f42fe5b44f73eb68f3858a6ea1ec2d854))
- **types:** correct type for queryHook return ([#4602](https://github.com/algolia/instantsearch/issues/4602)) ([acff8db](https://github.com/algolia/instantsearch/commit/acff8db3a2238edf40da1ee6b44e93a94e090698))

## [4.9.1](https://github.com/algolia/instantsearch/compare/v4.9.0...v4.9.1) (2020-12-08)

### Bug Fixes

- **range:** consistently convert min & max to numbers ([#4587](https://github.com/algolia/instantsearch/issues/4587)) ([ccf159e](https://github.com/algolia/instantsearch/commit/ccf159efcb94e9c8c04c558fcb69e2e3d8d79729))

# [4.9.0](https://github.com/algolia/instantsearch/compare/v4.8.7...v4.9.0) (2020-12-01)

### Bug Fixes

- remove a warning about insights that is not relevant anymore ([#4593](https://github.com/algolia/instantsearch/issues/4593)) ([b5f6a47](https://github.com/algolia/instantsearch/commit/b5f6a479ff1b9b692c733f51e39eade724ff3413))

### Features

- **autocomplete:** implement `getWidgetRenderState` ([#4466](https://github.com/algolia/instantsearch/issues/4466)) ([c215836](https://github.com/algolia/instantsearch/commit/c2158364a63d0f05bb820f802871a2f093e041ec))
- **breadcrumb:** implement `getWidgetRenderState` ([#4467](https://github.com/algolia/instantsearch/issues/4467)) ([80b348e](https://github.com/algolia/instantsearch/commit/80b348ef1a6a29b1897f5ee1d680dcbaba5fa4fe))
- **clearRefinements:** implement `getWidgetRenderState` ([#4468](https://github.com/algolia/instantsearch/issues/4468)) ([2b3117c](https://github.com/algolia/instantsearch/commit/2b3117c34207514967ff453b6f5d8275a6b0b0ec))
- **configure:** getRenderState for multiple configure widgets ([#4582](https://github.com/algolia/instantsearch/issues/4582)) ([5432af1](https://github.com/algolia/instantsearch/commit/5432af1df3c1ee4e62b87ede76acda7b749f38dd))
- **configure:** implement `getWidgetRenderState` ([#4469](https://github.com/algolia/instantsearch/issues/4469)) ([3a1b325](https://github.com/algolia/instantsearch/commit/3a1b32556f3d5a6a3330b404688e06d5815a2390))
- **connectPagination:** add getWidgetRenderState & refactor to TS ([#4574](https://github.com/algolia/instantsearch/issues/4574)) ([1553aa3](https://github.com/algolia/instantsearch/commit/1553aa36c8bb8664b5e74fd2378ea2ef45a52acf))
- **core:** introduce `getWidgetRenderState` (2/n) ([#4457](https://github.com/algolia/instantsearch/issues/4457)) ([4839bb6](https://github.com/algolia/instantsearch/commit/4839bb61e4c8ee6083710195d5db5684c7b0889f))
- **core:** introduce `getWidgetUiState` lifecycle hook (1/n) ([#4454](https://github.com/algolia/instantsearch/issues/4454)) ([cf21ea4](https://github.com/algolia/instantsearch/commit/cf21ea4cb580ed523828c926b7ba724c46eed8a4))
- **currentRefinements:** implement `getWidgetRenderState` ([#4470](https://github.com/algolia/instantsearch/issues/4470)) ([b8df824](https://github.com/algolia/instantsearch/commit/b8df824e26a164280d9da9b3c3ce41ad56962439))
- **connectQueryRules:** getWidgetRenderState ([#4572](https://github.com/algolia/instantsearch/issues/4572)) ([edcc4a4](https://github.com/algolia/instantsearch/commit/edcc4a463d32af21bb73acbca879d4982ae9006f))
- **connectGeoSearch:** support getWidgetRenderState ([#4564](https://github.com/algolia/instantsearch/issues/4564)) ([8d06fba](https://github.com/algolia/instantsearch/commit/8d06fba40be0392daa1b48f235d93d92bb6b5e93))
- **hierarchicalMenu:** implement `getWidgetRenderState` ([#4471](https://github.com/algolia/instantsearch/issues/4471)) ([9fd3cd0](https://github.com/algolia/instantsearch/commit/9fd3cd06dfc3b5302c00ee1820ff58be2a37c3b7))
- **highlight:** accept array for attribute ([#4588](https://github.com/algolia/instantsearch/issues/4588)) ([b0c3a3a](https://github.com/algolia/instantsearch/commit/b0c3a3a960646bff22b2d28e21aa2675484a354b))
- **hits:** implement `getWidgetRenderState` ([#4525](https://github.com/algolia/instantsearch/issues/4525)) ([3391ff7](https://github.com/algolia/instantsearch/commit/3391ff7bac8b406ab474e712408bda2be69934c9))
- **hitsPerPage:** implement `getRenderState` and `getWidgetRenderState` ([#4532](https://github.com/algolia/instantsearch/issues/4532)) ([7ad10ea](https://github.com/algolia/instantsearch/commit/7ad10ea648f48766061153994da90920a5194103))
- **infinite-hits:** implement `getRenderState` and `getWidgetRenderState` ([#4535](https://github.com/algolia/instantsearch/issues/4535)) ([98c70d9](https://github.com/algolia/instantsearch/commit/98c70d980bc1036057a2dd99dc6aeee8343e4472))
- **menu:** implement `getRenderState` and `getWidgetRenderState` ([#4540](https://github.com/algolia/instantsearch/issues/4540)) ([239906c](https://github.com/algolia/instantsearch/commit/239906c7fdb36c691b9a9aca343802a8ccc616c8))
- **panel:** spread widgetRenderState in the options in panel ([#4527](https://github.com/algolia/instantsearch/issues/4527)) ([8f82eaa](https://github.com/algolia/instantsearch/commit/8f82eaa34e7abe9070e404a5a45d352af61d940a)), closes [#4558](https://github.com/algolia/instantsearch/issues/4558)
- **poweredBy:** getWidgetRenderState ([#4551](https://github.com/algolia/instantsearch/issues/4551)) ([cd816a4](https://github.com/algolia/instantsearch/commit/cd816a41afe0704eab3cbd1f019fc660ca5d255e))
- **range:** implement `getRenderState` and `getWidgetRenderState` ([#4536](https://github.com/algolia/instantsearch/issues/4536)) ([d67bfcd](https://github.com/algolia/instantsearch/commit/d67bfcdb828cc8b35a5c959e54823b6d3c37b087))
- **rating-menu:** implement `getRenderState` and `getWidgetRenderState` ([#4548](https://github.com/algolia/instantsearch/issues/4548)) ([166a96c](https://github.com/algolia/instantsearch/commit/166a96c170c137e78b3fe3b9f69f73744f4fcb8b))
- **refinement-list:** implement `getRenderState` and `getWidgetRenderState` ([#4549](https://github.com/algolia/instantsearch/issues/4549)) ([c824bd0](https://github.com/algolia/instantsearch/commit/c824bd074d388e44e99b53592167cffcacae3377))
- **numeric-menu:** add `getRenderState` ([#4550](https://github.com/algolia/instantsearch/issues/4550)) ([5385edf](https://github.com/algolia/instantsearch/commit/5385edf39d3ac1515845b5e20ce179a2869ab86d))
- **sortBy:** implement `getRenderState` and `getWidgetRenderState` ([#4568](https://github.com/algolia/instantsearch/issues/4568)) ([fd249f7](https://github.com/algolia/instantsearch/commit/fd249f700854d1f11e97cb5dac2c1b3964c59e29))
- **stats:** implement `getRenderState` and `getWidgetRenderState` ([#4565](https://github.com/algolia/instantsearch/issues/4565)) ([b8dfd6d](https://github.com/algolia/instantsearch/commit/b8dfd6dbb8c462b0d0571e9f0499df6e4dda7745))
- **toggleRefinement:** implement `getRenderState` and `getWidgetRenderState` ([#4569](https://github.com/algolia/instantsearch/issues/4569)) ([f2c9a10](https://github.com/algolia/instantsearch/commit/f2c9a102cba9abe21ed08b18e979713156e10901))
- **voice-search:** implement `getRenderState` and `getWidgetRenderState` ([#4557](https://github.com/algolia/instantsearch/issues/4557)) ([d308da1](https://github.com/algolia/instantsearch/commit/d308da1ab892cc5185616cd5b8a4a3f488e708c4))

## [4.8.7](https://github.com/algolia/instantsearch/compare/v4.8.6...v4.8.7) (2020-11-19)

### Bug Fixes

- **insights:** use internal `find` util method ([#4580](https://github.com/algolia/instantsearch/issues/4580)) ([61b855b](https://github.com/algolia/instantsearch/commit/61b855b28282992a55795db88f8bfef2e5825cb3))

## [4.8.6](https://github.com/algolia/instantsearch/compare/v4.8.5...v4.8.6) (2020-11-17)

### Bug Fixes

- **insights:** do not throw when sending event right after creating insights middleware ([#4575](https://github.com/algolia/instantsearch/issues/4575)) ([d963f8d](https://github.com/algolia/instantsearch/commit/d963f8d6155e6bb56f852e00528ed10dc9bcc461))

## [4.8.5](https://github.com/algolia/instantsearch/compare/v4.8.4...v4.8.5) (2020-11-10)

### Bug Fixes

- **configure:** pass the latest state to onStateChange ([#4555](https://github.com/algolia/instantsearch/issues/4555)) ([6ab76e8](https://github.com/algolia/instantsearch/commit/6ab76e82f93e8c7bb2bfdde267b6d7f4f9b333ff))

## [4.8.4](https://github.com/algolia/instantsearch/compare/v4.8.3...v4.8.4) (2020-10-27)

### Bug Fixes

- **infiniteHits:** do not cache the cached hits inside the connector ([#4534](https://github.com/algolia/instantsearch/issues/4534)) ([c97395e](https://github.com/algolia/instantsearch/commit/c97395e2d3443651e628617f0974703a100a988e))
- **insights:** show deprecation warnings for old insights related properties and functions ([#4524](https://github.com/algolia/instantsearch/issues/4524)) ([c93e1cf](https://github.com/algolia/instantsearch/commit/c93e1cfcad06b327066078088410eb7d51972790))

## [4.8.3](https://github.com/algolia/instantsearch/compare/v4.8.2...v4.8.3) (2020-09-29)

### Bug Fixes

- **middleware:** rename EXPERIMENTAL_use to use ([#4450](https://github.com/algolia/instantsearch/issues/4450)) ([87ecb99](https://github.com/algolia/instantsearch/commit/87ecb99f33ab4930d8ec1996ddba9db0a9d07da4))
- **refinementList:** cap `maxFacetHits` to 100 for SFFV ([#4523](https://github.com/algolia/instantsearch/issues/4523)) ([baf1f02](https://github.com/algolia/instantsearch/commit/baf1f027fc2436e86536fffbee11a595cfd7dac0))

## [4.8.2](https://github.com/algolia/instantsearch/compare/v4.8.1...v4.8.2) (2020-09-22)

### Bug Fixes

- **insights:** fix the regression that it didn't send events with instantsearch.insights() ([#4519](https://github.com/algolia/instantsearch/issues/4519)) ([10e38df](https://github.com/algolia/instantsearch/commit/10e38df02608071cd7272e829b6748be41b9c2c0))

## [4.8.1](https://github.com/algolia/instantsearch/compare/v4.8.0...v4.8.1) (2020-09-15)

### Bug Fixes

- **hitsPerPage:** update link to hitsPerPage widget ([#4513](https://github.com/algolia/instantsearch/issues/4513)) ([daa4bb9](https://github.com/algolia/instantsearch/commit/daa4bb944065dede46d716308325039c3602d9dc))
- **infiniteHits:** compute `isLastPage` based on cached pages ([#4509](https://github.com/algolia/instantsearch/issues/4509)) ([b6fb1ab](https://github.com/algolia/instantsearch/commit/b6fb1abcf5ac456dc39adaeb97945665cad8fa11))

# [4.8.0](https://github.com/algolia/instantsearch/compare/v4.7.2...v4.8.0) (2020-09-08)

### Features

- **insights:** introduce `insights` middleware ([#4446](https://github.com/algolia/instantsearch/issues/4446)) ([9bc6359](https://github.com/algolia/instantsearch/commit/9bc635986097736272aac8c5d3380a255488fdb7))

## [4.7.2](https://github.com/algolia/instantsearch/compare/v4.7.1...v4.7.2) (2020-08-31)

### Bug Fixes

- **bundlesize:** remove prop-type imports ([#4491](https://github.com/algolia/instantsearch/issues/4491)) ([8361cd6](https://github.com/algolia/instantsearch/commit/8361cd63b3bac15eb6250e9f509fb15c1fc57f48))
- **router:** skip router write on duplicate entries ([#4487](https://github.com/algolia/instantsearch/issues/4487)) ([9296022](https://github.com/algolia/instantsearch/commit/9296022fecadfbf82f15e837c215a1356eac4bc5))
- **searchBox:** pass "spellcheck" property correctly to input ([#4483](https://github.com/algolia/instantsearch/issues/4483)) ([3cf43c7](https://github.com/algolia/instantsearch/commit/3cf43c7187841cf961a0280307af1a5f7a4e8da7))

# [4.7.1](https://github.com/algolia/instantsearch/compare/v4.7.0...v4.7.1) (2020-08-19)

### Bug Fixes

- **configureRelatedItems:** support nested attributes ([#4480](https://github.com/algolia/instantsearch/issues/4480)) ([2266004](https://github.com/algolia/instantsearch/commit/2266004f274138b45640f000a5da8aa14e419e6c))
- **connectToggleRefinement:** fix onFacetValue/offFacetValue on render when using arrays for on/off ([#4449](https://github.com/algolia/instantsearch/issues/4449)) ([fd3e83f](https://github.com/algolia/instantsearch/commit/fd3e83f2cf2e5b44b7d29eb4c67526e55c18d708))
- **index:** don't show a development warning for inconsistent UI state in `connectRange` ([#4440](https://github.com/algolia/instantsearch/issues/4440)) ([eb8c8b3](https://github.com/algolia/instantsearch/commit/eb8c8b3494cb66dbef1d03e7d74374dc49059345)), closes [#4437](https://github.com/algolia/instantsearch/issues/4437)
- **infiniteHits:** work with controlled mode ([#4435](https://github.com/algolia/instantsearch/issues/4435)) ([68b20f4](https://github.com/algolia/instantsearch/commit/68b20f487fcd54fd7dec11b4c494b6aa94a18516))
- **typescript:** correct dummy v4 client ([#4459](https://github.com/algolia/instantsearch/issues/4459)) ([ca0c394](https://github.com/algolia/instantsearch/commit/ca0c3946608bb8ec5dcf5378d8d382d809a4d86f))
- **typescript:** jsDoc comments which conform to Connector definition ([#4458](https://github.com/algolia/instantsearch/issues/4458)) ([5209bdb](https://github.com/algolia/instantsearch/commit/5209bdb9189e7cbbf9514b62fde55f923b2b3273))
- **typescript:** export correct types ([#4476](https://github.com/algolia/instantsearch/issues/4476)) ([5fb4c5b](https://github.com/algolia/instantsearch/commit/5fb4c5b9d6ac75636e94514598ef5d5a86affafd))

# [4.7.0](https://github.com/algolia/instantsearch/compare/v4.6.0...v4.7.0) (2020-06-15)

### Bug Fixes

- **rangeInput:** clear input when refinement is cleared ([#4429](https://github.com/algolia/instantsearch/issues/4429)) ([a2c7663](https://github.com/algolia/instantsearch/commit/a2c7663424c5cd59e17ed841e12abaa19e524b14))

### Features

- **infiniteHits:** support cache ([#4431](https://github.com/algolia/instantsearch/issues/4431)) ([008c01c](https://github.com/algolia/instantsearch/commit/008c01c7cd09e4fcecdf53a4b299960de2b7a026))

# [4.6.0](https://github.com/algolia/instantsearch/compare/v4.5.0...v4.6.0) (2020-06-08)

### Bug Fixes

- **connectPagination:** set `isLastPage` to `true` when no results ([#4422](https://github.com/algolia/instantsearch/issues/4422)) ([92bcc02](https://github.com/algolia/instantsearch/commit/92bcc0271927f0239083366fff920530977e32cd))
- **rangeInput:** support typing float numbers ([#4418](https://github.com/algolia/instantsearch/issues/4418)) ([61b19b8](https://github.com/algolia/instantsearch/commit/61b19b87ae3afdabde8ef355e3b727059ae59911))

### Features

- **connectToggleRefinement:** add support for array values ([#4420](https://github.com/algolia/instantsearch/issues/4420)) ([fe1fbee](https://github.com/algolia/instantsearch/commit/fe1fbee4ad59c5f24831ed38a419906bbd7d2c15))

# [4.5.0](https://github.com/algolia/instantsearch/compare/v4.4.1...v4.5.0) (2020-05-13)

### Bug Fixes

- **middleware:** subscribe middleware after `init` ([#4322](https://github.com/algolia/instantsearch/issues/4322)) ([f61fc4d](https://github.com/algolia/instantsearch/commit/f61fc4d133c118cfe8f2a2ba2e02d037a21cf8e0))

### Features

- **index:** support adding index widget with initial UI state ([#4359](https://github.com/algolia/instantsearch/issues/4359)) ([5ff4c83](https://github.com/algolia/instantsearch/commit/5ff4c8307c2be7bde7fb53aa9935a243e6532fe2))
- **voice:** allow custom voice helper ([#4363](https://github.com/algolia/instantsearch/issues/4363)) ([4a00fa6](https://github.com/algolia/instantsearch/commit/4a00fa607354aefaae468735b590e237a2d46f9b))

## [4.4.1](https://github.com/algolia/instantsearch/compare/v4.4.0...v4.4.1) (2020-04-29)

### Bug Fixes

- **range:** fix range calculation when step is set ([#4398](https://github.com/algolia/instantsearch/issues/4398)) ([a36b4e0](https://github.com/algolia/instantsearch/commit/a36b4e0a64afaa9dfa3048c802d010d569c821a9))
- **router:** don't write an existing URL ([#4392](https://github.com/algolia/instantsearch/issues/4392)) ([ee6a9c6](https://github.com/algolia/instantsearch/commit/ee6a9c657c97adebba9fb9404eae454c3996b86d))

# [4.4.0](https://github.com/algolia/instantsearch/compare/v4.3.1...v4.4.0) (2020-04-08)

### Features

- introduce controlled mode APIs with `onStateChange` and `setUiState` ([#4362](https://github.com/algolia/instantsearch/issues/4362)) ([4953324](https://github.com/algolia/instantsearch/commit/4953324ac8a3af4c6a8be411ca9e7cc673ee6561))

## [4.3.1](https://github.com/algolia/instantsearch/compare/v4.3.0...v4.3.1) (2020-03-06)

This versions fixes a [Cross-Site Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) (XSS) vulnerability ([#4344](https://github.com/algolia/instantsearch/issues/4344)) when using the [`refinementList`](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/) widget when relying on its default [`item`](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/#widget-param-item) template and [routing](https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/#widget-param-routing). **We recommend all users to upgrade to this version**. We now escape the `refinementList` `item` template by default, which avoids HTML to be injected. If ever you were relying on this behavior, **which we do not recommend**, you can copy the [previous `item` template](https://github.com/algolia/instantsearch/blob/933d9ffb3c0a396a047eeb4b44733b17aa31d081/src/widgets/refinement-list/defaultTemplates.js#L2-L9) into your widget.

You were not vulnerable to this XSS if:

- You didn't use [routing](https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/#widget-param-routing)
- You didn't use use the [`refinementList`](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/) widget ([`connectRefinementList`](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/#connector) is not subject to this issue)
- You used a custom `item` template for your [`refinementList`](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/) widget that does not rely on the triple-brace Hogan.js syntax (e.g., `{{{highlighted}}}`)

### Bug Fixes

- **refinementList:** prevent XSS via routing ([#4344](https://github.com/algolia/instantsearch/issues/4344)) ([8552221](https://github.com/algolia/instantsearch/commit/8552221eff17a4ae5ba9c454054b0eb6e002934d))

# [4.3.0](https://github.com/algolia/instantsearch/compare/v4.2.0...v4.3.0) (2020-02-25)

### Bug Fixes

- **deps:** update dependency algoliasearch-helper to v3.1.1 that fixes a case where refinements for a facet with a name that matches a substring of another facet could be cleared by mistake ([algolia/algoliasearch-helper-js/pull/760](https://github.com/algolia/algoliasearch-helper-js/pull/760)) ([#4335](https://github.com/algolia/instantsearch/issues/4335)) ([9bc66cf](https://github.com/algolia/instantsearch/commit/381cda05c9c51dc9d3245a6d926e3c919245b723))

### Features

- **highlight:** add cssClasses to snippet & highlight helper ([#4306](https://github.com/algolia/instantsearch/issues/4306)) ([ece0aa6](https://github.com/algolia/instantsearch/commit/ece0aa60f05c2c687a23f9219d62ace0d5b866f9))

# [4.2.0](https://github.com/algolia/instantsearch/compare/v4.1.1...v4.2.0) (2020-01-23)

### Features

- **algoliasearch:** add support for algoliasearch v4 ([#4294](https://github.com/algolia/instantsearch/issues/4294)) ([73f1584](https://github.com/algolia/instantsearch/commit/73f158428c7d4de1e3d1bc40bf4342362f275829))
- **insights:** add getInsightsAnonymousUserToken helper ([#4279](https://github.com/algolia/instantsearch/issues/4279)) ([4653f95](https://github.com/algolia/instantsearch/commit/4653f95b436a0715ce1489e0b83c00a87e4a02f0))

## [4.1.1](https://github.com/algolia/instantsearch/compare/v4.1.0...v4.1.1) (2019-12-20)

### Bug Fixes

- **configureRelatedItems:** use `facetFilters` to exclude `obje… ([#4264](https://github.com/algolia/instantsearch/issues/4264)) ([9bc66cf](https://github.com/algolia/instantsearch/commit/9bc66cfb8b13a44840c687a1631696c85e45845f))
- **index:** fix warning for widgets sharing connectors ([#4260](https://github.com/algolia/instantsearch/issues/4260)) ([ec97b4a](https://github.com/algolia/instantsearch/commit/ec97b4a07e5d1f9a967f5ee5925ebd3b447e1b02))
- **insights:** export Insights helper in the ESM build ([#4261](https://github.com/algolia/instantsearch/issues/4261)) ([20649af](https://github.com/algolia/instantsearch/commit/20649aff54a3150050866038cd3718d6010c353b))
- **insights:** move 'insightsClient not provided error' to wrapper level ([#4254](https://github.com/algolia/instantsearch/issues/4254)) ([15d38dd](https://github.com/algolia/instantsearch/commit/15d38ddb87fbd6323f350d42f791c4d7a1505eeb))

### Features

- **insights:** add hogan helper ([#4253](https://github.com/algolia/instantsearch/issues/4253)) ([85739d7](https://github.com/algolia/instantsearch/commit/85739d782ae1fad3b87612e4a410eada0ca4fe54))

# [4.1.0](https://github.com/algolia/instantsearch/compare/v4.0.1...v4.1.0) (2019-12-10)

The [4.0.1](#4.0.1) release contained experimental TypeScript definitions in the ESM build by accident. We rolled this back in 4.1.0 because types will first be released on an experimental tag: `experimental-typescript`.

### Bug Fixes

- **core:** display correct object types in messages ([#4249](https://github.com/algolia/instantsearch/issues/4249)) ([fb2c3c9](https://github.com/algolia/instantsearch/commit/fb2c3c9c37fd8d28cd4712486c5c637e237fe83b))
- **insights:** detect clicks on children of `[data-insights]` HTML elements ([#4197](https://github.com/algolia/instantsearch/issues/4197)) ([9cac5a3](https://github.com/algolia/instantsearch/commit/9cac5a3aa4af616ec7913c17ed7388134c5e7f0a))
- **insights:** display docs URL when missing ([#4231](https://github.com/algolia/instantsearch/issues/4231)) ([9df1e7f](https://github.com/algolia/instantsearch/commit/9df1e7f762333bd31b5840b35378d56605fe4844))
- **widgets:** override connectors' `$$type` ([#4227](https://github.com/algolia/instantsearch/issues/4227)) ([50f4af3](https://github.com/algolia/instantsearch/commit/50f4af3006a44cd08dd99b3a72bd410340c2e48a))

### Features

- **middleware:** introduce `EXPERIMENTAL_use` to plug middleware into InstantSearch ([#4224](https://github.com/algolia/instantsearch/issues/4224)) ([9d1f7be](https://github.com/algolia/instantsearch/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3))
- **router:** plug router as a middleware ([#4224](https://github.com/algolia/instantsearch/issues/4224)) ([9d1f7be](https://github.com/algolia/instantsearch/commit/9d1f7be9df304a4bc2d07dbd253a73580a0593c3))
- **insights:** detect window.aa when available on global scope and a function ([#4191](https://github.com/algolia/instantsearch/issues/4191)) ([d6df5af](https://github.com/algolia/instantsearch/commit/d6df5affc4111aaf2c82f847ffe877793faac86c))
- **typescript:** add declaration files (experimental) ([#4220](https://github.com/algolia/instantsearch/issues/4220)) ([ebacfe5](https://github.com/algolia/instantsearch/commit/ebacfe55bc0fddf9ca217eca8c8a207b220ab93d))
- **widgets:** introduce Related Items widgets as experimental (`EXPERIMENTAL_configureRelatedItems` and `EXPERIMENTAL_connectConfigureRelatedItems`) ([#4233](https://github.com/algolia/instantsearch/issues/4233)) ([f811f4e](https://github.com/algolia/instantsearch/commit/f811f4efa3e58a2b868d11ec338248715a7596c9))

## [4.0.1](https://github.com/algolia/instantsearch/compare/v4.0.0...v4.0.1) (2019-11-28)

### Bug Fixes

- widget name in documentation link for index ([#4172](https://github.com/algolia/instantsearch/issues/4172)) ([fe7e588](https://github.com/algolia/instantsearch/commit/fe7e588d252ad6bd7de2f49d52ca022099f3e959))
- **helper:** rely on stable version of algoliasearch-helper ([#4200](https://github.com/algolia/instantsearch/issues/4200)) ([ff11731](https://github.com/algolia/instantsearch/commit/ff117314d786c4509edabcb1ddbac73f55930511))
- **infiniteHits:** correct widget options types ([#4222](https://github.com/algolia/instantsearch/issues/4222)) ([bb1b327](https://github.com/algolia/instantsearch/commit/bb1b327e26b5faad3358a00d174dc48fd4b73356))
- **queryHook:** restore behaviour of queryHook ([#4202](https://github.com/algolia/instantsearch/issues/4202)) ([7bf96cb](https://github.com/algolia/instantsearch/commit/7bf96cb6eafd5349cdf2f32114d5e6ef5dde1328)), closes [/github.com/algolia/instantsearch/commit/c073a9acb51fff3c15278fcd563e47fec55c8365#diff-530222e0c4597f2110dc6ba173a306b0L98](https://github.com//github.com/algolia/instantsearch/commit/c073a9acb51fff3c15278fcd563e47fec55c8365/issues/diff-530222e0c4597f2110dc6ba173a306b0L98)

### Features

- **transformers:** add tests ([#4153](https://github.com/algolia/instantsearch/issues/4153)) ([5a28415](https://github.com/algolia/instantsearch/commit/5a28415c39bf5a3a65c61d8f0d444ea6f4e0e17a))

# [4.0.0](https://github.com/algolia/instantsearch/compare/v3.7.0...v4.0.0) (2019-10-23)

This release is focused on two main features: Federated search, and bundle size reduction.

Federated search, is the feature where you search through multiple types of content with the same experience, but with separate result lists. In the past we have also called this feature "multi-index search". This feature helps you make more efficient UIs with multiple result lists, autocomplete, nested interfaces and query suggestions. You can read more about the new index widget [in the documentation](https://www.algolia.com/doc/api-reference/widgets/index-widget/js/).

The second main feature is bundle size reduction. This is a bottom-up process where we started by removing Lodash from our bundle. While the library has many useful features, it was a major part of our compiled code. We have also updated to Preact X, the latest version of Preact internally. This allows us to use more modern (p)react features in the future, which have a more efficient bundling pattern.

You can read more details on our choices by following [the original posts](https://discourse.algolia.com/t/instantsearch-js-v4-beta-0-is-released/8461) about the beta releases.

Even though all this internally were major refactors, this should not have a big impact on how you are using InstantSearch. For the few things which did change, a migration guide can be found in [the documentation](https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/#upgrade-from-v3-to-v4). Don't hesitate to reach out if anything is unclear from that guide, so we can fix it for everyone.

Note, if you are using the [places.js](https://github.com/algolia/places) InstantSearch widget, it is not compatible with InstantSearch v4. However, we took this opportunity to make it a real part of InstantSearch.js, and is now accessible as a widget of InstantSearch. You can use it with a `placesReference`.

### Bug Fixes

- **configure:** merge with the previous parameters ([#4085](https://github.com/algolia/instantsearch/issues/4085)) ([a215d0c](https://github.com/algolia/instantsearch/commit/a215d0c))
- **configure:** update lifecycle state ([#3994](https://github.com/algolia/instantsearch/issues/3994)) ([3d8d967](https://github.com/algolia/instantsearch/commit/3d8d967))
- **connectInfiniteHits:** fix page state when adding or removing widgets ([#4104](https://github.com/algolia/instantsearch/issues/4104)) ([1077340](https://github.com/algolia/instantsearch/commit/1077340))
- **connectInfiniteHits:** fix state when navigating or adding/removing widgets ([#4123](https://github.com/algolia/instantsearch/issues/4123)) ([9cbd24a](https://github.com/algolia/instantsearch/commit/9cbd24a))
- **createURL:** support multi-index ([#4082](https://github.com/algolia/instantsearch/issues/4082)) ([179a6e5](https://github.com/algolia/instantsearch/commit/179a6e5))
- **defer:** recover from error ([#3933](https://github.com/algolia/instantsearch/issues/3933)) ([f22b9e2](https://github.com/algolia/instantsearch/commit/f22b9e2))
- **helper:** expose .lastResults to .helper ([#4170](https://github.com/algolia/instantsearch/issues/4170)) ([236eb7b](https://github.com/algolia/instantsearch/commit/236eb7b))
- **history:** avoid empty query string ([#4130](https://github.com/algolia/instantsearch/issues/4130)) ([18fee7c](https://github.com/algolia/instantsearch/commit/18fee7c))
- **hits:** update lifecycle state ([#3977](https://github.com/algolia/instantsearch/issues/3977)) ([6e55ba6](https://github.com/algolia/instantsearch/commit/6e55ba6))
- **hitsPerPage:** avoid sync default value ([#4086](https://github.com/algolia/instantsearch/issues/4086)) ([3f8b958](https://github.com/algolia/instantsearch/commit/3f8b958))
- **hitsPerPage:** update lifecycle state ([#3978](https://github.com/algolia/instantsearch/issues/3978)) ([d21d620](https://github.com/algolia/instantsearch/commit/d21d620))
- **index:** ensure that we always use the index set by widgets ([#4125](https://github.com/algolia/instantsearch/issues/4125)) ([952dc70](https://github.com/algolia/instantsearch/commit/952dc70)), closes [/github.com/algolia/algoliasearch-helper-js/blob/5a0352aa233c5ea932df6b054a16989c8d302404/src/algoliasearch.helper.js#L124](https://github.com//github.com/algolia/algoliasearch-helper-js/blob/5a0352aa233c5ea932df6b054a16989c8d302404/src/algoliasearch.helper.js/issues/L124)
- **index:** prevent render without results ([#3932](https://github.com/algolia/instantsearch/issues/3932)) ([1b9b5f4](https://github.com/algolia/instantsearch/commit/1b9b5f4))
- **index:** subscribe to state change only after init for uiState ([#4003](https://github.com/algolia/instantsearch/issues/4003)) ([9490ca9](https://github.com/algolia/instantsearch/commit/9490ca9))
- **index:** support custom UI params in UI state warning ([#4165](https://github.com/algolia/instantsearch/issues/4165)) ([80d32fc](https://github.com/algolia/instantsearch/commit/80d32fc))
- **index:** warn for inconsistent UI state in development mode ([#4140](https://github.com/algolia/instantsearch/issues/4140)) ([7e277dc](https://github.com/algolia/instantsearch/commit/7e277dc))
- **infiniteHits:** update lifecycle state ([#3983](https://github.com/algolia/instantsearch/issues/3983)) ([4b8bee5](https://github.com/algolia/instantsearch/commit/4b8bee5))
- **instantsearch:** return instance in widgets methods ([#4143](https://github.com/algolia/instantsearch/issues/4143)) ([77ffb93](https://github.com/algolia/instantsearch/commit/77ffb93))
- **InstantSearch:** cancel scheduled operations ([#3930](https://github.com/algolia/instantsearch/issues/3930)) ([3aafbad](https://github.com/algolia/instantsearch/commit/3aafbad))
- **InstantSearch:** fix initialUIState when refinements are already present in the route ([#4103](https://github.com/algolia/instantsearch/issues/4103)) ([079db57](https://github.com/algolia/instantsearch/commit/079db57))
- **InstantSearch:** remove useless walk/duplicate request ([#4127](https://github.com/algolia/instantsearch/issues/4127)) ([70163a8](https://github.com/algolia/instantsearch/commit/70163a8))
- **menu:** apply & remove refinement ([#4027](https://github.com/algolia/instantsearch/issues/4027)) ([85de2cf](https://github.com/algolia/instantsearch/commit/85de2cf))
- **menu:** prevent error on stale search ([#3934](https://github.com/algolia/instantsearch/issues/3934)) ([5f9e138](https://github.com/algolia/instantsearch/commit/5f9e138))
- **numericMenu:** take array into account for empty state ([#4084](https://github.com/algolia/instantsearch/issues/4084)) ([2c05a01](https://github.com/algolia/instantsearch/commit/2c05a01))
- **pagination:** update lifecycle state ([#3979](https://github.com/algolia/instantsearch/issues/3979)) ([2b08344](https://github.com/algolia/instantsearch/commit/2b08344))
- **pagination:** update no refinement behavior ([#4124](https://github.com/algolia/instantsearch/issues/4124)) ([8d222ad](https://github.com/algolia/instantsearch/commit/8d222ad))
- **range:** clear widget state on empty refinements ([#4157](https://github.com/algolia/instantsearch/issues/4157)) ([23cd112](https://github.com/algolia/instantsearch/commit/23cd112))
- **ratingMenu:** update lifecycle state ([#3987](https://github.com/algolia/instantsearch/issues/3987)) ([ffadf64](https://github.com/algolia/instantsearch/commit/ffadf64))
- **RefinementList:** remove root css class on sublists ([#4117](https://github.com/algolia/instantsearch/issues/4117)) ([ceddd42](https://github.com/algolia/instantsearch/commit/ceddd42)), closes [/github.com/algolia/instantsearch/blob/v2/src/decorators/headerFooter.js#L22](https://github.com//github.com/algolia/instantsearch/blob/v2/src/decorators/headerFooter.js/issues/L22)
- **searchBox:** update lifecycle state ([#3981](https://github.com/algolia/instantsearch/issues/3981)) ([0ea4950](https://github.com/algolia/instantsearch/commit/0ea4950))
- **sortBy:** ensure a return value for getWidgetSearchParameters ([#4126](https://github.com/algolia/instantsearch/issues/4126)) ([569d573](https://github.com/algolia/instantsearch/commit/569d573))
- **sortBy:** read initial index name from parent index ([#4079](https://github.com/algolia/instantsearch/issues/4079)) ([fe23c55](https://github.com/algolia/instantsearch/commit/fe23c55))
- display warnings only in development ([#4150](https://github.com/algolia/instantsearch/issues/4150)) ([44f69a0](https://github.com/algolia/instantsearch/commit/44f69a0))
- remove useless types ([#3958](https://github.com/algolia/instantsearch/issues/3958)) ([ddebf53](https://github.com/algolia/instantsearch/commit/ddebf53))
- **stories:** hide Places ([#4152](https://github.com/algolia/instantsearch/issues/4152)) ([7ff843f](https://github.com/algolia/instantsearch/commit/7ff843f))
- **toggleRefinement:** update lifecycle state ([#3993](https://github.com/algolia/instantsearch/issues/3993)) ([f1beff6](https://github.com/algolia/instantsearch/commit/f1beff6))
- **voiceSearch:** update lifecycle state ([#3982](https://github.com/algolia/instantsearch/issues/3982)) ([798e3c1](https://github.com/algolia/instantsearch/commit/798e3c1))
- **warnings:** remove v3 warnings ([#4134](https://github.com/algolia/instantsearch/issues/4134)) ([7eb6810](https://github.com/algolia/instantsearch/commit/7eb6810))

### Features

- **autocomplete:** leverage scoped results ([#3975](https://github.com/algolia/instantsearch/issues/3975)) ([8f05968](https://github.com/algolia/instantsearch/commit/8f05968))
- **autocomplete:** participate in routing ([#4029](https://github.com/algolia/instantsearch/issues/4029)) ([a9ca0c5](https://github.com/algolia/instantsearch/commit/a9ca0c5))
- **autocomplete:** provide indexId ([#4142](https://github.com/algolia/instantsearch/issues/4142)) ([b641e23](https://github.com/algolia/instantsearch/commit/b641e23))
- **clearRefinements:** support multiple indices ([#4036](https://github.com/algolia/instantsearch/issues/4036)) ([3611b11](https://github.com/algolia/instantsearch/commit/3611b11))
- **connectAutocomplete:** add default value on getConfiguration ([#3836](https://github.com/algolia/instantsearch/issues/3836)) ([724b83f](https://github.com/algolia/instantsearch/commit/724b83f))
- **connectAutocomplete:** clear the state on dispose ([#3815](https://github.com/algolia/instantsearch/issues/3815)) ([8ae87d8](https://github.com/algolia/instantsearch/commit/8ae87d8))
- **connectHierarchicalMenu:** update getWidgetSearchParameters ([#4053](https://github.com/algolia/instantsearch/issues/4053)) ([c99f822](https://github.com/algolia/instantsearch/commit/c99f822))
- **connectHits:** clear the state on dispose ([#3816](https://github.com/algolia/instantsearch/issues/3816)) ([c4de730](https://github.com/algolia/instantsearch/commit/c4de730))
- **connectHits:** implement getWidgetSearchParameters ([#4001](https://github.com/algolia/instantsearch/issues/4001)) ([c77cf66](https://github.com/algolia/instantsearch/commit/c77cf66))
- **connectHitsPerPage:** clear the state on dispose ([#3818](https://github.com/algolia/instantsearch/issues/3818)) ([d7a5c89](https://github.com/algolia/instantsearch/commit/d7a5c89))
- **connectInfiniteHits:** add default value on getConfiguration ([#3837](https://github.com/algolia/instantsearch/issues/3837)) ([8c65249](https://github.com/algolia/instantsearch/commit/8c65249))
- **connectInfiniteHits:** clear the state on dispose ([#3819](https://github.com/algolia/instantsearch/issues/3819)) ([60ce151](https://github.com/algolia/instantsearch/commit/60ce151))
- **connectMenu:** update getWidgetSearchParameters ([#4054](https://github.com/algolia/instantsearch/issues/4054)) ([7d001e7](https://github.com/algolia/instantsearch/commit/7d001e7))
- **connectNumericMenu:** update state lifecycle ([#4013](https://github.com/algolia/instantsearch/issues/4013)) ([2620c90](https://github.com/algolia/instantsearch/commit/2620c90))
- **connectPagination:** add default value on getConfiguration ([#3838](https://github.com/algolia/instantsearch/issues/3838)) ([aa4602c](https://github.com/algolia/instantsearch/commit/aa4602c))
- **connectPagination:** clear the state on dispose ([#3821](https://github.com/algolia/instantsearch/issues/3821)) ([5b8ef49](https://github.com/algolia/instantsearch/commit/5b8ef49))
- **connectPagination:** update getWidgetSearchParameters ([#4004](https://github.com/algolia/instantsearch/issues/4004)) ([eed7e77](https://github.com/algolia/instantsearch/commit/eed7e77))
- **connectRange:** default `precision` to 0 ([#3953](https://github.com/algolia/instantsearch/issues/3953)) ([632e06b](https://github.com/algolia/instantsearch/commit/632e06b))
- **connectRatingMenu:** update getWidgetSearchParameters ([#4008](https://github.com/algolia/instantsearch/issues/4008)) ([d3c96bf](https://github.com/algolia/instantsearch/commit/d3c96bf))
- **connectRefinementList:** update getWidgetSearchParameters ([#4010](https://github.com/algolia/instantsearch/issues/4010)) ([ddc8fc4](https://github.com/algolia/instantsearch/commit/ddc8fc4))
- **connectSearchBox:** clear the state on dispose ([#3822](https://github.com/algolia/instantsearch/issues/3822)) ([940522c](https://github.com/algolia/instantsearch/commit/940522c))
- **connectSearchBox:** mount with a default query ([#3840](https://github.com/algolia/instantsearch/issues/3840)) ([c3a7d69](https://github.com/algolia/instantsearch/commit/c3a7d69))
- **connectSearchBox:** update getWidgetSearchParameters ([#4002](https://github.com/algolia/instantsearch/issues/4002)) ([5c6fcd8](https://github.com/algolia/instantsearch/commit/5c6fcd8))
- **connectVoiceSearch:** add default value on getConfiguration ([#3841](https://github.com/algolia/instantsearch/issues/3841)) ([fb70363](https://github.com/algolia/instantsearch/commit/fb70363))
- **connectVoiceSearch:** clear the state on dispose ([#3823](https://github.com/algolia/instantsearch/issues/3823)) ([705b3e6](https://github.com/algolia/instantsearch/commit/705b3e6))
- **connectVoiceSearch:** update getWidgetSearchParameters ([#4055](https://github.com/algolia/instantsearch/issues/4055)) ([b8c669f](https://github.com/algolia/instantsearch/commit/b8c669f))
- **core:** deprecate addWidget & removeWidget ([#4131](https://github.com/algolia/instantsearch/issues/4131)) ([e5dafef](https://github.com/algolia/instantsearch/commit/e5dafef))
- **currentRefinements:** support multiple indices ([#4012](https://github.com/algolia/instantsearch/issues/4012)) ([e997728](https://github.com/algolia/instantsearch/commit/e997728))
- **defer:** implement cancellable callback ([#3916](https://github.com/algolia/instantsearch/issues/3916)) ([43a0bf8](https://github.com/algolia/instantsearch/commit/43a0bf8))
- **federated:** keep a consistent state in the RefinementList life cycle ([#3976](https://github.com/algolia/instantsearch/issues/3976)) ([31d0fd6](https://github.com/algolia/instantsearch/commit/31d0fd6))
- **hitsPerPage:** support new routing system ([#4038](https://github.com/algolia/instantsearch/issues/4038)) ([02502cb](https://github.com/algolia/instantsearch/commit/02502cb)), closes [#4069](https://github.com/algolia/instantsearch/issues/4069)
- **index:** accept indexId ([#4070](https://github.com/algolia/instantsearch/issues/4070)) ([b74f8e3](https://github.com/algolia/instantsearch/commit/b74f8e3))
- **index:** add mergeSearchParameters function ([#3917](https://github.com/algolia/instantsearch/issues/3917)) ([c0fe7bb](https://github.com/algolia/instantsearch/commit/c0fe7bb))
- **index:** add widget ([dbbda0f](https://github.com/algolia/instantsearch/commit/dbbda0f)), closes [#3892](https://github.com/algolia/instantsearch/issues/3892) [#3893](https://github.com/algolia/instantsearch/issues/3893) [#3914](https://github.com/algolia/instantsearch/issues/3914)
- **index:** compute local uiState ([#3997](https://github.com/algolia/instantsearch/issues/3997)) ([997c0f4](https://github.com/algolia/instantsearch/commit/997c0f4))
- **index:** merge `ruleContexts` search parameter ([#3944](https://github.com/algolia/instantsearch/issues/3944)) ([e94752d](https://github.com/algolia/instantsearch/commit/e94752d))
- **index:** provide scoped results to render hook ([#3964](https://github.com/algolia/instantsearch/issues/3964)) ([37c6aad](https://github.com/algolia/instantsearch/commit/37c6aad))
- **index:** replicate searchFunction hack ([#4078](https://github.com/algolia/instantsearch/issues/4078)) ([1d2a816](https://github.com/algolia/instantsearch/commit/1d2a816)), closes [/github.com/algolia/instantsearch/blob/509513c0feafaad522f6f18d87a441559f4aa050/src/lib/RoutingManager.ts#L113-L130](https://github.com//github.com/algolia/instantsearch/blob/509513c0feafaad522f6f18d87a441559f4aa050/src/lib/RoutingManager.ts/issues/L113-L130)
- **index:** reset page of child indexes ([#3962](https://github.com/algolia/instantsearch/issues/3962)) ([131b1ce](https://github.com/algolia/instantsearch/commit/131b1ce))
- **index:** resolve parent SearchParameters ([#3937](https://github.com/algolia/instantsearch/issues/3937)) ([2611da5](https://github.com/algolia/instantsearch/commit/2611da5))
- **index:** use uiState driven SearchParameters ([#4059](https://github.com/algolia/instantsearch/issues/4059)) ([b12bb9f](https://github.com/algolia/instantsearch/commit/b12bb9f))
- **infiniteHits:** support new routing system ([#4040](https://github.com/algolia/instantsearch/issues/4040)) ([49315cf](https://github.com/algolia/instantsearch/commit/49315cf))
- **instantsearch:** add onStateChange method ([#4080](https://github.com/algolia/instantsearch/issues/4080)) ([9f68da5](https://github.com/algolia/instantsearch/commit/9f68da5))
- **InstantSearch:** switch to DerivedHelper only ([#3885](https://github.com/algolia/instantsearch/issues/3885)) ([d6fc317](https://github.com/algolia/instantsearch/commit/d6fc317))
- **places:** add Places widget ([#4167](https://github.com/algolia/instantsearch/issues/4167)) ([1d754d1](https://github.com/algolia/instantsearch/commit/1d754d1))
- drop support of searchParameters for initialUiState ([#4081](https://github.com/algolia/instantsearch/issues/4081)) ([571efeb](https://github.com/algolia/instantsearch/commit/571efeb))
- **range:** support new routing system ([#4039](https://github.com/algolia/instantsearch/issues/4039)) ([8cba05a](https://github.com/algolia/instantsearch/commit/8cba05a))
- **routing:** add a "single index" compatibility mode ([#4087](https://github.com/algolia/instantsearch/issues/4087)) ([842eb0f](https://github.com/algolia/instantsearch/commit/842eb0f))
- **RoutingManager:** update state on route update ([#4100](https://github.com/algolia/instantsearch/issues/4100)) ([88f2615](https://github.com/algolia/instantsearch/commit/88f2615))
- **toggleRefinement:** support new routing system ([#4037](https://github.com/algolia/instantsearch/issues/4037)) ([6a9d99f](https://github.com/algolia/instantsearch/commit/6a9d99f))
- **types:** DerivedHelper ([#3887](https://github.com/algolia/instantsearch/issues/3887)) ([0f38b4a](https://github.com/algolia/instantsearch/commit/0f38b4a))
- **types:** rename RenderOptions -> RendererOptions ([#3867](https://github.com/algolia/instantsearch/issues/3867)) ([05c6f72](https://github.com/algolia/instantsearch/commit/05c6f72))
- **utils:** implement defer ([#3882](https://github.com/algolia/instantsearch/issues/3882)) ([8af470e](https://github.com/algolia/instantsearch/commit/8af470e))
- **voice:** add additional query parameters ([#3738](https://github.com/algolia/instantsearch/issues/3738)) ([c555255](https://github.com/algolia/instantsearch/commit/c555255))
- drop suppot for onHistoryChange ([#3941](https://github.com/algolia/instantsearch/issues/3941)) ([697f609](https://github.com/algolia/instantsearch/commit/697f609))
- introduce initialUiState option ([#4074](https://github.com/algolia/instantsearch/issues/4074)) ([de00707](https://github.com/algolia/instantsearch/commit/de00707))
- update UiState definition ([#4075](https://github.com/algolia/instantsearch/issues/4075)) ([9e7d3d8](https://github.com/algolia/instantsearch/commit/9e7d3d8))
- **widgets:** add `$$type` to widgets definition ([#3960](https://github.com/algolia/instantsearch/issues/3960)) ([344d1b7](https://github.com/algolia/instantsearch/commit/344d1b7))

# [3.7.0](https://github.com/algolia/instantsearch/compare/v3.5.4...v3.7.0) (2019-10-08)

### Bug Fixes

- **clearRefinements:** reset page to 0 ([#3936](https://github.com/algolia/instantsearch/issues/3936)) ([7378a0a](https://github.com/algolia/instantsearch/commit/7378a0a))
- **connectSortBy:** never update the initial index ([#4015](https://github.com/algolia/instantsearch/issues/4015)) ([bc0f9e2](https://github.com/algolia/instantsearch/commit/bc0f9e2))
- **deps:** update dependency instantsearch.js to v3.5.4 ([#3929](https://github.com/algolia/instantsearch/issues/3929)) ([eff84c5](https://github.com/algolia/instantsearch/commit/eff84c5))
- **deps:** update dependency instantsearch.js to v3.6.0 ([#4021](https://github.com/algolia/instantsearch/issues/4021)) ([7719bba](https://github.com/algolia/instantsearch/commit/7719bba))
- **enhanceConfiguration:** deduplicate the hierarchicalFacets ([#3966](https://github.com/algolia/instantsearch/issues/3966)) ([baf8a35](https://github.com/algolia/instantsearch/commit/baf8a35))
- **examples:** fix IE11 compatibility for e-commerce demo ([#4049](https://github.com/algolia/instantsearch/issues/4049)) ([dc6f350](https://github.com/algolia/instantsearch/commit/dc6f350))
- **examples:** fix missing polyfill in e-commerce demo ([#4076](https://github.com/algolia/instantsearch/issues/4076)) ([4bf3ab3](https://github.com/algolia/instantsearch/commit/4bf3ab3))
- **hierarchicalFacets:** prevent different rootPath on same attribute ([#3965](https://github.com/algolia/instantsearch/issues/3965)) ([5ee79fa](https://github.com/algolia/instantsearch/commit/5ee79fa))
- **instantsearch:** warn deprecated usage of `searchParameters` ([#4151](https://github.com/algolia/instantsearch/issues/4151)) ([18e1c36](https://github.com/algolia/instantsearch/commit/18e1c36))
- **menuSelect:** unmount component ([#3911](https://github.com/algolia/instantsearch/issues/3911)) ([f6debce](https://github.com/algolia/instantsearch/commit/f6debce))
- **rangeInput:** unmount component ([#3910](https://github.com/algolia/instantsearch/issues/3910)) ([f6c29e8](https://github.com/algolia/instantsearch/commit/f6c29e8))
- **refinementList:** fix showMore button to work after search ([#3082](https://github.com/algolia/instantsearch/issues/3082)) ([23e46b6](https://github.com/algolia/instantsearch/commit/23e46b6))
- pass noop as default value to unmountFn at connectors ([#3955](https://github.com/algolia/instantsearch/issues/3955)) ([7c38744](https://github.com/algolia/instantsearch/commit/7c38744))

# [3.6.0](https://github.com/algolia/instantsearch/compare/v3.5.4...v3.6.0) (2019-07-30)

### Bug Fixes

- **clearRefinements:** reset page to 0 ([#3936](https://github.com/algolia/instantsearch/issues/3936)) ([7378a0a](https://github.com/algolia/instantsearch/commit/7378a0a))
- pass noop as default value to unmountFn at connectors ([#3955](https://github.com/algolia/instantsearch/issues/3955)) ([7c38744](https://github.com/algolia/instantsearch/commit/7c38744))
- **enhanceConfiguration:** deduplicate the hierarchicalFacets ([#3966](https://github.com/algolia/instantsearch/issues/3966)) ([baf8a35](https://github.com/algolia/instantsearch/commit/baf8a35))
- **hierarchicalFacets:** prevent different rootPath on same attribute ([#3965](https://github.com/algolia/instantsearch/issues/3965)) ([5ee79fa](https://github.com/algolia/instantsearch/commit/5ee79fa))
- **menuSelect:** unmount component ([#3911](https://github.com/algolia/instantsearch/issues/3911)) ([f6debce](https://github.com/algolia/instantsearch/commit/f6debce))
- **rangeInput:** unmount component ([#3910](https://github.com/algolia/instantsearch/issues/3910)) ([f6c29e8](https://github.com/algolia/instantsearch/commit/f6c29e8))
- **refinementList:** fix showMore button to work after search ([#3082](https://github.com/algolia/instantsearch/issues/3082)) ([23e46b6](https://github.com/algolia/instantsearch/commit/23e46b6))

## [3.5.4](https://github.com/algolia/instantsearch/compare/v3.5.3...v3.5.4) (2019-07-01)

### Bug Fixes

- **connectSortBy:** do not throw with wrong indexes ([#3824](https://github.com/algolia/instantsearch/issues/3824)) ([2a84ee2](https://github.com/algolia/instantsearch/commit/2a84ee2))
- **deps:** update dependency instantsearch.js to v3.5.3 ([#3877](https://github.com/algolia/instantsearch/issues/3877)) ([463f3bb](https://github.com/algolia/instantsearch/commit/463f3bb))
- **escape:** make sure that \_\_escaped does not get removed ([#3830](https://github.com/algolia/instantsearch/issues/3830)) ([fbafd22](https://github.com/algolia/instantsearch/commit/fbafd22))
- **getRefinements:** check for facet before accessing its data ([#3842](https://github.com/algolia/instantsearch/issues/3842)) ([aadc769](https://github.com/algolia/instantsearch/commit/aadc769))
- **panel:** return value from dispose ([#3895](https://github.com/algolia/instantsearch/issues/3895)) ([bceb78f](https://github.com/algolia/instantsearch/commit/bceb78f))
- **voiceSearch:** remove event listeners on stop ([#3845](https://github.com/algolia/instantsearch/issues/3845)) ([688e36a](https://github.com/algolia/instantsearch/commit/688e36a))

## [3.5.3](https://github.com/algolia/instantsearch/compare/v3.5.1...v3.5.3) (2019-05-28)

### Bug Fixes

- **voiceSearch:** let the connector handle the default value of searchAsYouSpeak when it's not given ([#3817](https://github.com/algolia/instantsearch/issues/3817)) ([9d3e91b](https://github.com/algolia/instantsearch/commit/9d3e91b))
- **getTag:** use object version of toString ([#3820](https://github.com/algolia/instantsearch/issues/3820)) ([a7348ea](https://github.com/algolia/instantsearch/commit/a7348ea))
- **types:** fix cssClasses of voiceSearch ([#3783](https://github.com/algolia/instantsearch/issues/3783)) ([f016326](https://github.com/algolia/instantsearch/commit/f016326))

# [3.5.1](https://github.com/algolia/instantsearch/compare/v3.4.0...v3.5.1) (2019-05-20)

### Bug Fixes

- **types:** improve types for voiceSearch ([#3778](https://github.com/algolia/instantsearch/issues/3778)) ([ed2d61a](https://github.com/algolia/instantsearch/commit/ed2d61a))
- **types:** update UiState type ([#3777](https://github.com/algolia/instantsearch/issues/3777)) ([36e3a3d](https://github.com/algolia/instantsearch/commit/36e3a3d))
- **voiceSearch:** remove event listeners on dispose ([#3779](https://github.com/algolia/instantsearch/issues/3779)) ([0e988cc](https://github.com/algolia/instantsearch/commit/0e988cc))
- **hitsPerPage:** improve warning for missing state value ([#3707](https://github.com/algolia/instantsearch/issues/3707)) ([93d8432](https://github.com/algolia/instantsearch/commit/93d8432))
- **numericMenu:** prevent refinement reset on checked radio click ([#3749](https://github.com/algolia/instantsearch/issues/3749)) ([e4a6e75](https://github.com/algolia/instantsearch/commit/e4a6e75))
- **rangeSlider:** round the slider pit value ([#3758](https://github.com/algolia/instantsearch/issues/3758)) ([6edee3e](https://github.com/algolia/instantsearch/commit/6edee3e)), closes [#2904](https://github.com/algolia/instantsearch/issues/2904)
- **types:** improve UiState types ([#3763](https://github.com/algolia/instantsearch/issues/3763)) ([e8ea57b](https://github.com/algolia/instantsearch/commit/e8ea57b))
- **voice:** import correct noop ([#3766](https://github.com/algolia/instantsearch/issues/3766)) ([6a80422](https://github.com/algolia/instantsearch/commit/6a80422))

### Features

- **voiceSearch:** add connector and widget ([#3601](https://github.com/algolia/instantsearch/issues/3601)) ([21e4d81](https://github.com/algolia/instantsearch/commit/21e4d81))

### Reverts

- chore(build): remove PropTypes from builds ([#3697](https://github.com/algolia/instantsearch/issues/3697)) ([#3776](https://github.com/algolia/instantsearch/issues/3776)) ([1e6be79](https://github.com/algolia/instantsearch/commit/1e6be79))

# [3.4.0](https://github.com/algolia/instantsearch/compare/v3.3.0...v3.4.0) (2019-04-17)

### Bug Fixes

- **storybook:** fix Hierarchical menu separator in Breadcrumb story ([#3695](https://github.com/algolia/instantsearch/issues/3695)) ([b3bf8ac](https://github.com/algolia/instantsearch/commit/b3bf8ac))
- **tools:** use commonjs in bump-package-version.js ([#3699](https://github.com/algolia/instantsearch/issues/3699)) ([6a6dbe1](https://github.com/algolia/instantsearch/commit/6a6dbe1))
- **types:** fix wrong typing in getWidgetState ([#3693](https://github.com/algolia/instantsearch/issues/3693)) ([b3c2154](https://github.com/algolia/instantsearch/commit/b3c2154))
- **types:** remove unused Without type ([#3694](https://github.com/algolia/instantsearch/issues/3694)) ([656d000](https://github.com/algolia/instantsearch/commit/656d000))

### Features

- **infiniteHits:** add previous button ([#3675](https://github.com/algolia/instantsearch/issues/3675)) ([2e6137b](https://github.com/algolia/instantsearch/commit/2e6137b))
- **Insights:** Insights inside Instantsearch ([#3598](https://github.com/algolia/instantsearch/issues/3598)) ([387f41f](https://github.com/algolia/instantsearch/commit/387f41f))

# [3.3.0](https://github.com/algolia/instantsearch/compare/v3.2.1...v3.3.0) (2019-04-11)

### Bug Fixes

- **connectQueryRules:** improve tracked refinement type ([#3648](https://github.com/algolia/instantsearch/issues/3648)) ([e16ad57](https://github.com/algolia/instantsearch/commit/e16ad57))
- **currentRefinements:** don't rely on `_objectSpread` ([#3672](https://github.com/algolia/instantsearch/issues/3672)) ([cd64bcf](https://github.com/algolia/instantsearch/commit/cd64bcf))
- **queryRuleCustomData:** add default template ([#3650](https://github.com/algolia/instantsearch/issues/3650)) ([83e9eaa](https://github.com/algolia/instantsearch/commit/83e9eaa))
- **QueryRuleCustomData:** pass data as object to templates ([#3647](https://github.com/algolia/instantsearch/issues/3647)) ([b8f8b4e](https://github.com/algolia/instantsearch/commit/b8f8b4e))
- **queryRules:** fix types and stories ([#3670](https://github.com/algolia/instantsearch/issues/3670)) ([ba6e2e6](https://github.com/algolia/instantsearch/commit/ba6e2e6))
- **routing:** apply windowTitle on first load ([#3669](https://github.com/algolia/instantsearch/issues/3669)) ([d553502](https://github.com/algolia/instantsearch/commit/d553502)), closes [#3667](https://github.com/algolia/instantsearch/issues/3667)
- **routing:** support parsing URLs with up to 100 refinements ([#3671](https://github.com/algolia/instantsearch/issues/3671)) ([6ddcfb6](https://github.com/algolia/instantsearch/commit/6ddcfb6))
- **RoutingManager:** avoid stale uiState ([#3630](https://github.com/algolia/instantsearch/issues/3630)) ([e1588aa](https://github.com/algolia/instantsearch/commit/e1588aa))
- **types:** improve InstantSearch types ([#3651](https://github.com/algolia/instantsearch/issues/3651)) ([db9b91e](https://github.com/algolia/instantsearch/commit/db9b91e))
- **ua:** Update the User-Agent to use the new format ([#3616](https://github.com/algolia/instantsearch/issues/3616)) ([ab84c57](https://github.com/algolia/instantsearch/commit/ab84c57))

### Features

- **infiniteHits:** add previous button ([#3645](https://github.com/algolia/instantsearch/issues/3645)) ([2c9e38d](https://github.com/algolia/instantsearch/commit/2c9e38d))
- **queryRules:** add connectQueryRules connector ([#3597](https://github.com/algolia/instantsearch/issues/3597)) ([924cd99](https://github.com/algolia/instantsearch/commit/924cd99)), closes [#3599](https://github.com/algolia/instantsearch/issues/3599) [#3600](https://github.com/algolia/instantsearch/issues/3600)
- **queryRules:** add context features to Query Rules ([#3617](https://github.com/algolia/instantsearch/issues/3617)) ([922879e](https://github.com/algolia/instantsearch/commit/922879e)), closes [#3602](https://github.com/algolia/instantsearch/issues/3602)

### Reverts

- feat(infiniteHits): add previous button ([214c0fc](https://github.com/algolia/instantsearch/commit/214c0fc))

## [3.2.1](https://github.com/algolia/instantsearch/compare/v3.1.0...v3.2.1) (2019-03-18)

### Bug Fixes

- **connectToggleRefinement:** keep user provided, but falsy values ([#3526](https://github.com/algolia/instantsearch/issues/3526)) ([958a151](https://github.com/algolia/instantsearch/commit/958a151))
- **instantsearch:** update usage errors ([#3543](https://github.com/algolia/instantsearch/issues/3543)) ([a2a800b](https://github.com/algolia/instantsearch/commit/a2a800b))
- **panel:** append panel body as a child element ([#3561](https://github.com/algolia/instantsearch/issues/3561)) ([3de59a3](https://github.com/algolia/instantsearch/commit/3de59a3))
- **poweredBy:** remove TypeScript extension in import ([#3530](https://github.com/algolia/instantsearch/issues/3530)) ([99ecc0b](https://github.com/algolia/instantsearch/commit/99ecc0b)), closes [#3528](https://github.com/algolia/instantsearch/issues/3528)
- **release:** update doctoc script ([e07c654](https://github.com/algolia/instantsearch/commit/e07c654))
- **searchbox:** unmount component on dispose ([#3563](https://github.com/algolia/instantsearch/issues/3563)) ([c3f0435](https://github.com/algolia/instantsearch/commit/c3f0435))
- **searchBox:** add reusable SearchBox component ([#3489](https://github.com/algolia/instantsearch/issues/3489)) ([c073a9a](https://github.com/algolia/instantsearch/commit/c073a9a))

### Features

- **panel:** implement collapsed feature ([#3575](https://github.com/algolia/instantsearch/issues/3575)) ([e84b02b](https://github.com/algolia/instantsearch/commit/e84b02b))

# [3.2.0](https://github.com/algolia/instantsearch/compare/v3.1.0...v3.2.0) (2019-03-14)

### Bug Fixes

- **instantsearch:** update usage errors ([#3543](https://github.com/algolia/instantsearch/issues/3543)) ([a2a800b](https://github.com/algolia/instantsearch/commit/a2a800b))
- **searchBox:** add reusable SearchBox component ([#3489](https://github.com/algolia/instantsearch/issues/3489)) ([c073a9a](https://github.com/algolia/instantsearch/commit/c073a9a))

### Features

- **panel:** implement collapsed feature ([#3575](https://github.com/algolia/instantsearch/issues/3575)) ([e84b02b](https://github.com/algolia/instantsearch/commit/e84b02b))

<a name="3.1.1"></a>

## [3.1.1](https://github.com/algolia/instantsearch/compare/v3.1.0...v3.1.1) (2019-02-14)

### Bug Fixes

- **connectToggleRefinement:** keep user provided, but falsy values ([#3526](https://github.com/algolia/instantsearch/issues/3526)) ([958a151](https://github.com/algolia/instantsearch/commit/958a151))
- **poweredBy:** remove TypeScript extension in import ([#3530](https://github.com/algolia/instantsearch/issues/3530)) ([99ecc0b](https://github.com/algolia/instantsearch/commit/99ecc0b)), closes [#3528](https://github.com/algolia/instantsearch/issues/3528)
- **release:** update doctoc script ([e07c654](https://github.com/algolia/instantsearch/commit/e07c654))

<a name="3.1.0"></a>

## [3.1.0](https://github.com/algolia/instantsearch/compare/v3.0.0...v3.1.0) (2019-02-13)

### Features

- **connectCurrentRefinements**: add a root label ([#3515](https://github.com/algolia/instantsearch/pull/3515)) ([b8f774f](https://github.com/algolia/instantsearch/commit/b8f774f))
- Update error messages ([#3516](https://github.com/algolia/instantsearch/pull/3516))
- **InstantSearch**: remove event listeners on dispose ([#3420](https://github.com/algolia/instantsearch/pull/3420))
- **InstantSearch**: set helper to `null` on dispose ([#3415](https://github.com/algolia/instantsearch/pull/3415))
- **utils**: warn only in development ([#3367](https://github.com/algolia/instantsearch/pull/3367))

### Bug Fixes

- **InstantSearch**: set helper to `null` on dispose ([#3415](https://github.com/algolia/instantsearch/pull/3415))
- **utils**: warn only in development ([#3367](https://github.com/algolia/instantsearch/pull/3367))

<a name="3.0.0"></a>

## [3.0.0](https://github.com/algolia/instantsearch/compare/v2.10.3...v3.0.0) (2018-12-20)

Check the [migration guide](https://github.com/algolia/instantsearch/blob/879aa20d3c1e2fe906bc526b05c57f6847c433be/docgen/src/guides/v3-migration.md).

<a name="2.10.4"></a>

## [2.10.4](https://github.com/algolia/instantsearch/compare/v2.10.3...v2.10.4) (2018-10-30)

### Bug Fixes

- **getRefinements:** provide attributeName for type: query ([6a58b99](https://github.com/algolia/instantsearch/commit/6a58b99)), closes [#3205](https://github.com/algolia/instantsearch/issues/3205)

<a name="2.10.3"></a>

## [2.10.3](https://github.com/algolia/instantsearch/compare/v2.10.2...v2.10.3) (2018-10-29)

### Bug Fixes

- **deps:** unpin production dependencies ([257ecb7](https://github.com/algolia/instantsearch/commit/257ecb7))
- **InstantSearch:** avoid useless search on addWidgets ([#3178](https://github.com/algolia/instantsearch/issues/3178)) ([961626d](https://github.com/algolia/instantsearch/commit/961626d))
- **numericselector:** default value can be undefined ([#3139](https://github.com/algolia/instantsearch/issues/3139)) ([39d22f5](https://github.com/algolia/instantsearch/commit/39d22f5))

### Features

- **utils:** add warn function ([#3147](https://github.com/algolia/instantsearch/issues/3147)) ([9de87bb](https://github.com/algolia/instantsearch/commit/9de87bb))

<a name="2.10.2"></a>

## [2.10.2](https://github.com/algolia/instantsearch/compare/v2.10.1...v2.10.2) (2018-09-10)

### Bug Fixes

- **searchbox:** Add missing color to searchbox input field ([#3086](https://github.com/algolia/instantsearch/issues/3086)) ([62b852a](https://github.com/algolia/instantsearch/commit/62b852a)), closes [#3075](https://github.com/algolia/instantsearch/issues/3075)
- **Stats:** let the widget render on all values ([#3070](https://github.com/algolia/instantsearch/issues/3070)) ([cd8f17e](https://github.com/algolia/instantsearch/commit/cd8f17e)), closes [#3056](https://github.com/algolia/instantsearch/issues/3056)

<a name="2.10.1"></a>

## [2.10.1](https://github.com/algolia/instantsearch/compare/v2.10.0...v2.10.1) (2018-08-17)

### Bug Fixes

- **connectBreadcrumb:** ensure that data is an array ([#3067](https://github.com/algolia/instantsearch/issues/3067)) ([759f709](https://github.com/algolia/instantsearch/commit/759f709))

<a name="2.10.0"></a>

# [2.10.0](https://github.com/algolia/instantsearch/compare/v2.9.0...v2.10.0) (2018-08-08)

### Bug Fixes

- **release:** provide interactive TTY for npm publish ([#3053](https://github.com/algolia/instantsearch/issues/3053)) ([ede9460](https://github.com/algolia/instantsearch/commit/ede9460))

### Features

- Implement `transformItems` API ([#3042](https://github.com/algolia/instantsearch/issues/3042)) ([1510a94](https://github.com/algolia/instantsearch/commit/1510a94))

<a name="2.9.0"></a>

# [2.9.0](https://github.com/algolia/instantsearch/compare/v2.8.1...v2.9.0) (2018-07-18)

### Features

- **infiniteHits:** add showmoreButton to cssClasses ([#3026](https://github.com/algolia/instantsearch/issues/3026)) ([8287de0](https://github.com/algolia/instantsearch/commit/8287de0))

<a name="2.8.1"></a>

## [2.8.1](https://github.com/algolia/instantsearch/compare/v2.8.0...v2.8.1) (2018-07-03)

### Bug Fixes

- **connectHitsPerPage:** default value should not break the API ([#3006](https://github.com/algolia/instantsearch/issues/3006)) ([6635304](https://github.com/algolia/instantsearch/commit/6635304)), closes [#2732](https://github.com/algolia/instantsearch/issues/2732)
- **connectRefinementList:** throw error with usage ([#2962](https://github.com/algolia/instantsearch/issues/2962)) ([f60222d](https://github.com/algolia/instantsearch/commit/f60222d))
- **sourcemap:** provide good url ([#3011](https://github.com/algolia/instantsearch/issues/3011)) ([9632ade](https://github.com/algolia/instantsearch/commit/9632ade))
- **warning:** make sure suggested import is possible ([#3014](https://github.com/algolia/instantsearch/issues/3014)) ([eb27152](https://github.com/algolia/instantsearch/commit/eb27152))

<a name="2.8.0"></a>

# [2.8.0](https://github.com/algolia/instantsearch/compare/v2.7.6...v2.8.0) (2018-05-30)

### Features

- **connectors:** add connectAutocomplete ([#2841](https://github.com/algolia/instantsearch/issues/2841)) ([4bec81e](https://github.com/algolia/instantsearch/commit/4bec81e)), closes [/github.com/algolia/instantsearch/pull/2841#discussion_r188383882](https://github.com//github.com/algolia/instantsearch/pull/2841/issues/discussion_r188383882) [#2313](https://github.com/algolia/instantsearch/issues/2313)
- **search-client:** Add support for Universal Search Clients ([#2894](https://github.com/algolia/instantsearch/issues/2894)) ([5df3c74](https://github.com/algolia/instantsearch/commit/5df3c74)), closes [#2905](https://github.com/algolia/instantsearch/issues/2905)

<a name="2.7.6"></a>

## [2.7.6](https://github.com/algolia/instantsearch/compare/v2.7.5...v2.7.6) (2018-05-29)

### Bug Fixes

- **connectConfigure:** ensure we do not extend `SearchParameters` ([#2945](https://github.com/algolia/instantsearch/issues/2945)) ([fdb4a7a](https://github.com/algolia/instantsearch/commit/fdb4a7a))
- **infinite-hits:** fix [#2543](https://github.com/algolia/instantsearch/issues/2543) ([#2948](https://github.com/algolia/instantsearch/issues/2948)) ([bbf9f8f](https://github.com/algolia/instantsearch/commit/bbf9f8f))

<a name="2.7.5"></a>

## [2.7.5](https://github.com/algolia/instantsearch/compare/v2.7.4...v2.7.5) (2018-05-28)

### Bug Fixes

- **clear-all:** apply excludeAttribute correctly with clearsQuery ([#2935](https://github.com/algolia/instantsearch/issues/2935)) ([e782ab8](https://github.com/algolia/instantsearch/commit/e782ab8))
- **connectInfiniteHits:** fix [#2928](https://github.com/algolia/instantsearch/issues/2928) ([#2939](https://github.com/algolia/instantsearch/issues/2939)) ([0293a31](https://github.com/algolia/instantsearch/commit/0293a31))

<a name="2.7.4"></a>

## [2.7.4](https://github.com/algolia/instantsearch/compare/v2.7.3...v2.7.4) (2018-05-03)

### Bug Fixes

- **searchFunction:** Fix unresolved returned Promise ([#2913](https://github.com/algolia/instantsearch/issues/2913)) ([5286c7c](https://github.com/algolia/instantsearch/commit/5286c7c))

<a name="2.7.3"></a>

## [2.7.3](https://github.com/algolia/instantsearch/compare/v2.7.2...v2.7.3) (2018-04-26)

### Bug Fixes

- **index.es6:** avoid use of Object.assign for IE ([#2908](https://github.com/algolia/instantsearch/issues/2908)) ([228b02e](https://github.com/algolia/instantsearch/commit/228b02e))

<a name="2.7.2"></a>

## [2.7.2](https://github.com/algolia/instantsearch/compare/v2.7.1...v2.7.2) (2018-04-18)

### Bug Fixes

- **routing:** should apply stateMapping when doing initial write ([#2892](https://github.com/algolia/instantsearch/issues/2892)) ([7f62e6dc](https://github.com/algolia/instantsearch/commit/7f62e6dc))
- **ie:** do not rely on Object.assign ([#2885](https://github.com/algolia/instantsearch/issues/2885)) ([88497e56](https://github.com/algolia/instantsearch/commit/88497e56))

<a name="2.7.1"></a>

## [2.7.1](https://github.com/algolia/instantsearch/compare/v2.7.0...v2.7.1) (2018-04-11)

### Bug Fixes

- **history:** provide location and use named parameters ([#2877](https://github.com/algolia/instantsearch/issues/2877)) ([761ffa4](https://github.com/algolia/instantsearch/commit/761ffa4))

<a name="2.7.0"></a>

# [2.7.0](https://github.com/algolia/instantsearch/compare/v2.6.3...v2.7.0) (2018-04-09)

### Bug Fixes

- pagination padding ([#2866](https://github.com/algolia/instantsearch/issues/2866)) ([e8c58cc](https://github.com/algolia/instantsearch/commit/e8c58cc))
- **geosearch:** avoid reset map when it already moved ([#2870](https://github.com/algolia/instantsearch/issues/2870)) ([f171b8a](https://github.com/algolia/instantsearch/commit/f171b8a))
- **removeWidget:** check for widgets.length on next tick ([#2831](https://github.com/algolia/instantsearch/issues/2831)) ([7e639d6](https://github.com/algolia/instantsearch/commit/7e639d6))

### Features

- **connetConfigure:** add a connector to create a connector widget ([8fdf752](https://github.com/algolia/instantsearch/commit/8fdf752))
- **routing:** provide a mechanism to synchronize the search ([#2829](https://github.com/algolia/instantsearch/issues/2829)) ([75b2ca3](https://github.com/algolia/instantsearch/commit/75b2ca3)), closes [#2849](https://github.com/algolia/instantsearch/issues/2849) [#2849](https://github.com/algolia/instantsearch/issues/2849)
- **size:** add sideEffects false to package.json ([#2861](https://github.com/algolia/instantsearch/issues/2861)) ([f5d1ab1](https://github.com/algolia/instantsearch/commit/f5d1ab1)), closes [#2859](https://github.com/algolia/instantsearch/issues/2859)

<a name="2.6.3"></a>

## [2.6.3](https://github.com/algolia/instantsearch/compare/v2.6.2...v2.6.3) (2018-03-30)

### Bug Fixes

- **rangeSlider:** handles were blocked ([#2849](https://github.com/algolia/instantsearch/issues/2849)) ([a2af4f0](https://github.com/algolia/instantsearch/commit/a2af4f0))

<a name="2.6.2"></a>

## [2.6.2](https://github.com/algolia/instantsearch/compare/v2.6.1...v2.6.2) (2018-03-29)

### Bug Fixes

- **connectGeoSearch:** correctly dispose the connector ([#2845](https://github.com/algolia/instantsearch/issues/2845)) ([a4eafd2](https://github.com/algolia/instantsearch/commit/a4eafd2))
- **GeoSearch:** correctly unmount the widget ([#2846](https://github.com/algolia/instantsearch/issues/2846)) ([f31ef3c](https://github.com/algolia/instantsearch/commit/f31ef3c))

<a name="2.6.1"></a>

## [2.6.1](https://github.com/algolia/instantsearch/compare/v2.6.0...v2.6.1) (2018-03-28)

### Bug Fixes

- **connectBreadcrumb:** allow unmounting ([#2815](https://github.com/algolia/instantsearch/issues/2815)) ([c6c353a](https://github.com/algolia/instantsearch/commit/c6c353a))
- **connectBreadcrumb:** update typo in property type items ([#2782](https://github.com/algolia/instantsearch/issues/2782)) ([79ebd66](https://github.com/algolia/instantsearch/commit/79ebd66))
- **docgen:** pass the relatedTypes to the struct mixin in connectors layout ([#2780](https://github.com/algolia/instantsearch/issues/2780)) ([f7f8b05](https://github.com/algolia/instantsearch/commit/f7f8b05))
- **GeoSearch:** update typo in property type cssClasses ([#2781](https://github.com/algolia/instantsearch/issues/2781)) ([419c2ab](https://github.com/algolia/instantsearch/commit/419c2ab))
- **main:** correctly import EventEmitter ([#2814](https://github.com/algolia/instantsearch/issues/2814)) ([8fa3649](https://github.com/algolia/instantsearch/commit/8fa3649)), closes [#2730](https://github.com/algolia/instantsearch/issues/2730)

<a name="2.6.0"></a>

# [2.6.0](https://github.com/algolia/instantsearch/compare/v2.5.2...v2.6.0) (2018-03-06)

### Bug Fixes

- **GeoSearch:** add apiKey for Google Maps ([#2773](https://github.com/algolia/instantsearch/issues/2773)) ([6c1846f](https://github.com/algolia/instantsearch/commit/6c1846f))
- **GeoSearch:** override button style ([#2772](https://github.com/algolia/instantsearch/issues/2772)) ([4d69b50](https://github.com/algolia/instantsearch/commit/4d69b50))

### Features

- **configure:** add the Configure widget ([#2698](https://github.com/algolia/instantsearch/issues/2698)) ([94daabc](https://github.com/algolia/instantsearch/commit/94daabc))
- add GeoSearch widget & connector ([#2743](https://github.com/algolia/instantsearch/issues/2743)) ([7fa17ff](https://github.com/algolia/instantsearch/commit/7fa17ff))

<a name="2.5.2"></a>

## [2.5.2](https://github.com/algolia/instantsearch/compare/v2.5.1...v2.5.2) (2018-02-26)

### Bug Fixes

- **Template:** harden Symbol checks ([#2749](https://github.com/algolia/instantsearch/issues/2749)) ([fab66bc](https://github.com/algolia/instantsearch/commit/fab66bc))
- **yarnrc:** use empty string for save-prefix ([#2739](https://github.com/algolia/instantsearch/issues/2739)) ([979e0cd](https://github.com/algolia/instantsearch/commit/979e0cd))

<a name="2.5.1"></a>

## [2.5.1](https://github.com/algolia/instantsearch/compare/v2.5.0...v2.5.1) (2018-02-13)

### Bug Fixes

- **perf:** only compute snappoints when step is provided ([#2699](https://github.com/algolia/instantsearch/issues/2699)) ([ce9ca19](https://github.com/algolia/instantsearch/commit/ce9ca19)), closes [#2662](https://github.com/algolia/instantsearch/issues/2662)

<a name="2.5.0"></a>

# [2.5.0](https://github.com/algolia/instantsearch/compare/v2.4.1...v2.5.0) (2018-02-06)

### Bug Fixes

- **doc:** add maximum width to images (fix [#2685](https://github.com/algolia/instantsearch/issues/2685)) ([#2686](https://github.com/algolia/instantsearch/issues/2686)) ([f4b5377](https://github.com/algolia/instantsearch/commit/f4b5377))

### Features

- support for algolia insights ([#2689](https://github.com/algolia/instantsearch/issues/2689)) ([96b8d61](https://github.com/algolia/instantsearch/commit/96b8d61))

<a name="2.4.1"></a>

## [2.4.1](https://github.com/algolia/instantsearch/compare/v2.4.0...v2.4.1) (2018-01-04)

### Bug Fixes

- **core:** correct escape highlight for arrays and nested objects ([#2646](https://github.com/algolia/instantsearch/issues/2646)) ([ed0ee73](https://github.com/algolia/instantsearch/commit/ed0ee73))

<a name="2.4.0"></a>

# [2.4.0](https://github.com/algolia/instantsearch/compare/v2.3.3...v2.4.0) (2018-01-02)

### Bug Fixes

- **pagination:** disable buttons if not results ([#2643](https://github.com/algolia/instantsearch/issues/2643)) ([9017b72](https://github.com/algolia/instantsearch/commit/9017b72)), closes [#2014](https://github.com/algolia/instantsearch/issues/2014)
- **theme:** fix height of pagination ([#2641](https://github.com/algolia/instantsearch/issues/2641)) ([b3185e5](https://github.com/algolia/instantsearch/commit/b3185e5))

### Features

- **core:** add a reload method on the InstantSearch component ([#2637](https://github.com/algolia/instantsearch/issues/2637)) ([e73ff13](https://github.com/algolia/instantsearch/commit/e73ff13))
- **core:** add an error event to monitor error from Algolia ([#2642](https://github.com/algolia/instantsearch/issues/2642)) ([71c2d68](https://github.com/algolia/instantsearch/commit/71c2d68)), closes [#1585](https://github.com/algolia/instantsearch/issues/1585)
- **core:** rename `reload` to `refresh` ([#2645](https://github.com/algolia/instantsearch/issues/2645)) ([9b8ac65](https://github.com/algolia/instantsearch/commit/9b8ac65))
- **wrapWithHits:** enable async init ([#2635](https://github.com/algolia/instantsearch/issues/2635)) ([08a8747](https://github.com/algolia/instantsearch/commit/08a8747))

<a name="2.3.3"></a>

## [2.3.3](https://github.com/algolia/instantsearch/compare/v2.3.2...v2.3.3) (2017-12-11)

### Bug Fixes

- **core:** search is stalled at init ([#2623](https://github.com/algolia/instantsearch/issues/2623)) ([e3dd577](https://github.com/algolia/instantsearch/commit/e3dd577)), closes [#2616](https://github.com/algolia/instantsearch/issues/2616)

<a name="2.3.2"></a>

## [2.3.2](https://github.com/algolia/instantsearch/compare/v2.3.1...v2.3.2) (2017-12-06)

### Bug Fixes

- React reference: Breadcrumb & RangeInput components ([#2618](https://github.com/algolia/instantsearch/issues/2618)) ([7f32161](https://github.com/algolia/instantsearch/commit/7f32161))

<a name="2.3.1"></a>

## [2.3.1](https://github.com/algolia/instantsearch/compare/v2.3.0...v2.3.1) (2017-12-04)

### Bug Fixes

- **connectors:** check facet is refined before removing it. hierarchicalMenu / menu ([67ae035](https://github.com/algolia/instantsearch/commit/67ae035))
- **poweredBy:** minify slightly and make into correct URL ([#2615](https://github.com/algolia/instantsearch/issues/2615)) ([2b7d747](https://github.com/algolia/instantsearch/commit/2b7d747)), closes [#2613](https://github.com/algolia/instantsearch/issues/2613)

<a name="2.3.0"></a>

# [2.3.0](https://github.com/algolia/instantsearch/compare/v2.3.0-beta.7...v2.3.0) (2017-11-30)

### Bug Fixes

- **InstantSearch.dispose:** dont call `getConfiguration` of URLSync widget ([#2604](https://github.com/algolia/instantsearch/issues/2604)) ([3234b12](https://github.com/algolia/instantsearch/commit/3234b12))
- **connectors:** prefer wrappers over bind ([#2575](https://github.com/algolia/instantsearch/issues/2575)) ([f8e0e00](https://github.com/algolia/instantsearch/commit/f8e0e00))
- **connectHierarchicalMenu:** do not return if facet not set ([#2521](https://github.com/algolia/instantsearch/issues/2521)) ([26e99fb](https://github.com/algolia/instantsearch/commit/26e99fb))

### Features

- **core:** provide information about stalled search to widgets ([#2569](https://github.com/algolia/instantsearch/issues/2569)) ([d104be1](https://github.com/algolia/instantsearch/commit/d104be1))
- **core:** InstantSearch hot remove/add widgets ([#2384](https://github.com/algolia/instantsearch/issues/2384)) ([cfc1710](https://github.com/algolia/instantsearch/commit/cfc1710))
- **refinementList:** add escapeFacetHits parameter ([#2507](https://github.com/algolia/instantsearch/issues/2507)) ([9b1b7ee](https://github.com/algolia/instantsearch/commit/9b1b7ee))
- **breadcrumb:** Add the breadcrumb widget ([#2451](https://github.com/algolia/instantsearch/issues/2451)) ([11d78f0](https://github.com/algolia/instantsearch/commit/11d78f0)), closes [#2299](https://github.com/algolia/instantsearch/issues/2299)
- **connectRange:** round the range based on precision ([#2498](https://github.com/algolia/instantsearch/issues/2498)) ([d4df45d](https://github.com/algolia/instantsearch/commit/d4df45d))
- **rangeInput:** add rangeInput widget ([#2440](https://github.com/algolia/instantsearch/issues/2440)) ([7916d16](https://github.com/algolia/instantsearch/commit/7916d16))

<a name="2.2.5"></a>

## [2.2.5](https://github.com/algolia/instantsearch/compare/v2.2.4...v2.2.5) (2017-11-20)

### Bug Fixes

- **searchbox:** fix usage of custom reset template ([#2585](https://github.com/algolia/instantsearch/issues/2585)) ([aad92b9](https://github.com/algolia/instantsearch/commit/aad92b9)), closes [#2528](https://github.com/algolia/instantsearch/issues/2528)

<a name="2.2.4"></a>

## [2.2.4](https://github.com/algolia/instantsearch/compare/v2.2.3...v2.2.4) (2017-11-13)

### Bug Fixes

- **numericSelector:** make default value possible ([#2565](https://github.com/algolia/instantsearch/issues/2565)) ([5664f98](https://github.com/algolia/instantsearch/commit/5664f98))

<a name="2.2.3"></a>

## [2.2.3](https://github.com/algolia/instantsearch/compare/v2.2.2...v2.2.3) (2017-11-07)

### Bug Fixes

- **connectRefinementList:** add label to searched items ([#2553](https://github.com/algolia/instantsearch/issues/2553)) ([ec810fa](https://github.com/algolia/instantsearch/commit/ec810fa))
- **refinementList:** fix facet exhaustivity check ([#2554](https://github.com/algolia/instantsearch/issues/2554)) ([0f1bf08](https://github.com/algolia/instantsearch/commit/0f1bf08)), closes [#2552](https://github.com/algolia/instantsearch/issues/2552)
- **theme:** searchbar should have normal size input ([#2545](https://github.com/algolia/instantsearch/issues/2545)) ([50d99f0](https://github.com/algolia/instantsearch/commit/50d99f0))

<a name="2.2.2"></a>

## [2.2.2](https://github.com/algolia/instantsearch/compare/v2.2.1...v2.2.2) (2017-10-30)

### Bug Fixes

- **connectRefinementList:** set default value for limit ([#2517](https://github.com/algolia/instantsearch/issues/2517)) ([32918c9](https://github.com/algolia/instantsearch/commit/32918c9))
- **MenuSelect:** switch from react to preact-compat ([#2513](https://github.com/algolia/instantsearch/issues/2513)) ([06aa626](https://github.com/algolia/instantsearch/commit/06aa626))
- **range-slider:** add option `collapsible` ([#2502](https://github.com/algolia/instantsearch/issues/2502)) ([e78399d](https://github.com/algolia/instantsearch/commit/e78399d)), closes [#2501](https://github.com/algolia/instantsearch/issues/2501)
- **url-sync:** make URLSync consistent even if search is tampered ([392927e](https://github.com/algolia/instantsearch/commit/392927e)), closes [#2523](https://github.com/algolia/instantsearch/issues/2523)

<a name="2.2.1"></a>

## [2.2.1](https://github.com/algolia/instantsearch/compare/v2.2.0...v2.2.1) (2017-10-16)

### Bug Fixes

- **connectRangeSlider:** only clear the refinement on the current attribute ([#2459](https://github.com/algolia/instantsearch/issues/2459)) ([7cebf58](https://github.com/algolia/instantsearch/commit/7cebf58))
- **menuSelect:** select in userCssClasses ([#2455](https://github.com/algolia/instantsearch/issues/2455)) ([0eb3dc8](https://github.com/algolia/instantsearch/commit/0eb3dc8))
- **menuSelect:** use preact instead of React ([#2460](https://github.com/algolia/instantsearch/issues/2460)) ([35ccae8](https://github.com/algolia/instantsearch/commit/35ccae8))
- **test:** correctly reset the wired dependency ([#2461](https://github.com/algolia/instantsearch/issues/2461)) ([1f7f4ed](https://github.com/algolia/instantsearch/commit/1f7f4ed))

<a name="2.2.0"></a>

# [2.2.0](https://github.com/algolia/instantsearch/compare/v2.1.6...v2.2.0) (2017-10-03)

### Bug Fixes

- **build:** minify css with `csso` instead of unminify css ([#2419](https://github.com/algolia/instantsearch/issues/2419)) ([12f96b8](https://github.com/algolia/instantsearch/commit/12f96b8)), closes [#2375](https://github.com/algolia/instantsearch/issues/2375)
- **clear-all:** display the query when clearsQuery is true ([#2414](https://github.com/algolia/instantsearch/issues/2414)) ([6921895](https://github.com/algolia/instantsearch/commit/6921895))
- **range-slider:** Fix slider boundaries ([#2408](https://github.com/algolia/instantsearch/issues/2408)) ([bea43db](https://github.com/algolia/instantsearch/commit/bea43db)), closes [#2386](https://github.com/algolia/instantsearch/issues/2386)
- **selector:** root classname is applied twice ([#2423](https://github.com/algolia/instantsearch/issues/2423)) ([44dca11](https://github.com/algolia/instantsearch/commit/44dca11)), closes [#2396](https://github.com/algolia/instantsearch/issues/2396) [#2397](https://github.com/algolia/instantsearch/issues/2397)
- **webpack.dev:** sourcemaps in dev ([#2422](https://github.com/algolia/instantsearch/issues/2422)) ([ba6ca0a](https://github.com/algolia/instantsearch/commit/ba6ca0a))

### Features

- **menu-select:** add menu select widget ([#2316](https://github.com/algolia/instantsearch/issues/2316)) ([680f9bd](https://github.com/algolia/instantsearch/commit/680f9bd))

<a name="2.2.0-beta.1"></a>

# [2.2.0-beta.1](https://github.com/algolia/instantsearch/compare/v2.1.4...v2.2.0-beta.1) (2017-09-18)

### Features

- **analytics:** Push pagination ([#2337](https://github.com/algolia/instantsearch/issues/2337)) ([94ce086](https://github.com/algolia/instantsearch/commit/94ce086))
- **hitsPerPageSelector:** default hits per page setting ([4efd43e](https://github.com/algolia/instantsearch/commit/4efd43e))
- **hitsPerPageSelector:** default hits per page setting ([355f080](https://github.com/algolia/instantsearch/commit/355f080))

<a name="2.1.6"></a>

## [2.1.6](https://github.com/algolia/instantsearch/compare/v2.1.5...v2.1.6) (2017-09-26)

### Bug Fixes

- **deps:** update dependency documentation to v^5.0.0 ([#2355](https://github.com/algolia/instantsearch/issues/2355)) ([489647a](https://github.com/algolia/instantsearch/commit/489647a))
- **searchbox:** use initial input value if provided in the dom ([#2342](https://github.com/algolia/instantsearch/issues/2342)) ([180902a](https://github.com/algolia/instantsearch/commit/180902a)), closes [#2289](https://github.com/algolia/instantsearch/issues/2289)

<a name="2.1.5"></a>

## [2.1.5](https://github.com/algolia/instantsearch/compare/v2.1.4...v2.1.5) (2017-09-25)

### Bug Fixes

- **deps:** update dependency algolia-frontend-components to v^0.0.33 ([#2341](https://github.com/algolia/instantsearch/issues/2341)) ([16994d8](https://github.com/algolia/instantsearch/commit/16994d8))
- **price-ranges:** update call to refine ([#2377](https://github.com/algolia/instantsearch/issues/2377)) ([34915d7](https://github.com/algolia/instantsearch/commit/34915d7))
- **slider:** Fix range slider pips and value 0 ([#2350](https://github.com/algolia/instantsearch/issues/2350)) ([fa0dc09](https://github.com/algolia/instantsearch/commit/fa0dc09)), closes [#2343](https://github.com/algolia/instantsearch/issues/2343)

<a name="2.1.4"></a>

## [2.1.4](https://github.com/algolia/instantsearch/compare/v2.1.3...v2.1.4) (2017-09-14)

### Bug Fixes

- **release-script:** Add the generation of changelog for the release ([#2333](https://github.com/algolia/instantsearch/issues/2333)) ([9a2f70b](https://github.com/algolia/instantsearch/commit/9a2f70b))
- **slider:** edge case when min > max ([#2336](https://github.com/algolia/instantsearch/issues/2336)) ([8830ab0](https://github.com/algolia/instantsearch/commit/8830ab0))
- **slider:** Fix range slider dev env ([#2320](https://github.com/algolia/instantsearch/issues/2320)) ([e78de70](https://github.com/algolia/instantsearch/commit/e78de70))
- **slider:** use algolia fork of rheostat ([#2335](https://github.com/algolia/instantsearch/issues/2335)) ([9eae009](https://github.com/algolia/instantsearch/commit/9eae009))

<a name="2.1.3"></a>

## [2.1.3](https://github.com/algolia/instantsearch/compare/v2.1.2...v2.1.3) (2017-09-05)

### Bug Fixes

- **Pagination:** add `autohideContainerHOC` to <Pagination /> ([#2296](https://github.com/algolia/instantsearch/issues/2296)) ([545f076](https://github.com/algolia/instantsearch/commit/545f076))
- **sffv:** no error when not providing noResults and no results ([#2310](https://github.com/algolia/instantsearch/issues/2310)) ([cc02b71](https://github.com/algolia/instantsearch/commit/cc02b71)), closes [#2087](https://github.com/algolia/instantsearch/issues/2087)

<a name="2.1.2"></a>

## [2.1.2](https://github.com/algolia/instantsearch/compare/v2.1.1...v2.1.2) (2017-08-24)

### Bug Fixes

- **es:** wrong path to files ([#2295](https://github.com/algolia/instantsearch/issues/2295)) ([a437e19](https://github.com/algolia/instantsearch/commit/a437e19))

<a name="2.1.1"></a>

## [2.1.1](https://github.com/algolia/instantsearch/compare/v2.1.0...v2.1.1) (2017-08-23)

### Bug Fixes

- **build:** provide unminified css as well ([#2292](https://github.com/algolia/instantsearch/issues/2292)) ([a79e067](https://github.com/algolia/instantsearch/commit/a79e067))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/algolia/instantsearch/compare/v2.1.0-beta.4...v2.1.0) (2017-08-21)

### Bug Fixes

- **nvmrc:** upgrade nodejs version ([#2291](https://github.com/algolia/instantsearch/issues/2291)) ([94529d4](https://github.com/algolia/instantsearch/commit/94529d4))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/algolia/instantsearch/compare/v2.0.1...v2.0.2) (2017-07-24)

### Bug Fixes

- **doc:** Cosmetic change ([48bb128](https://github.com/algolia/instantsearch/commit/48bb128))
- **search-box:** fix magnifier and reset customization ([4adfade](https://github.com/algolia/instantsearch/commit/4adfade))
- **theme:** enforce box-sizing: border-box ([e26e50d](https://github.com/algolia/instantsearch/commit/e26e50d))
- **url-sync:** remove is_v from url ([f19a1d5](https://github.com/algolia/instantsearch/commit/f19a1d5)), closes [#2233](https://github.com/algolia/instantsearch/issues/2233)

<a name="2.0.1"></a>

## [2.0.1](https://github.com/algolia/instantsearch/compare/v2.0.0...v2.0.1) (2017-07-12)

<a name="2.0.0"></a>

# [2.0.0](https://github.com/algolia/instantsearch/compare/v1.11.15...v2.0.0) (2017-07-01)

### Bug Fixes

- **argos-ci:** blur the active element ([66d0551](https://github.com/algolia/instantsearch/commit/66d0551))
- **connectNumericRefinementList:** reset page on refine ([22ec08d](https://github.com/algolia/instantsearch/commit/22ec08d))
- **doc.build:** watch & rebuild `.pug` ([16d8542](https://github.com/algolia/instantsearch/commit/16d8542))
- **doc.build/autoprefixer:** update mtime for onlyChanged plugin ([3b83e58](https://github.com/algolia/instantsearch/commit/3b83e58))
- **escapeHits:** dont apply configuration if not requested ([c89f99d](https://github.com/algolia/instantsearch/commit/c89f99d))

### Features

- **searchFunction:** make search function provide a better API ([8fc0831](https://github.com/algolia/instantsearch/commit/8fc0831))

<a name="2.0.0-beta.5"></a>

# [2.0.0-beta.5](https://github.com/algolia/instantsearch/compare/v1.11.12...v2.0.0-beta.5) (2017-06-01)

### Bug Fixes

- **Slider:** dont call `refine()` when it's disabled ([f1eabc9](https://github.com/algolia/instantsearch/commit/f1eabc9))

### Features

- **hits:** opt-in xss filtering for hits and infinite hits. FIX #2138 ([4f67b48](https://github.com/algolia/instantsearch/commit/4f67b48)), closes [#2138](https://github.com/algolia/instantsearch/issues/2138)

<a name="2.0.0-beta.4"></a>

# [2.0.0-beta.4](https://github.com/algolia/instantsearch/compare/v1.11.11...v2.0.0-beta.4) (2017-05-24)

### Bug Fixes

- **misc:** IE 11 support ([072edfe](https://github.com/algolia/instantsearch/commit/072edfe))
- **misc:** IE11 support without using transpiler ([324f062](https://github.com/algolia/instantsearch/commit/324f062))
- **show-more:** should hide button when show more is not available (#2161) ([fbca3e6](https://github.com/algolia/instantsearch/commit/fbca3e6)), closes [#2160](https://github.com/algolia/instantsearch/issues/2160)
- **Slider:** handle edge case where `min === max` ([22a5614](https://github.com/algolia/instantsearch/commit/22a5614))
- **Slider:** restore `slider--handle-lower` && `slider--handle-upper` ([64d7ad2](https://github.com/algolia/instantsearch/commit/64d7ad2))

<a name="2.0.0-beta.2"></a>

# [2.0.0-beta.2](https://github.com/algolia/instantsearch/compare/v1.11.9...v2.0.0-beta.2) (2017-05-17)

### Bug Fixes

- **autoHideContainer:** dont prevent render with `shouldComponentUpdate` ([8c4b13f](https://github.com/algolia/instantsearch/commit/8c4b13f))
- **clearsQuery:** not applied when only the query was not empty ([e7976ad](https://github.com/algolia/instantsearch/commit/e7976ad))
- **connectors:** ensure `widgetParams` is at least an `{}` ([0c0e98f](https://github.com/algolia/instantsearch/commit/0c0e98f))
- **connectRefinementList:** currentRefinements: return an array instead of first item ([a53223a](https://github.com/algolia/instantsearch/commit/a53223a)), closes [#2102](https://github.com/algolia/instantsearch/issues/2102)
- **dev:docs:** dont watch `/docgen/rootFiles` ([ab1a7f5](https://github.com/algolia/instantsearch/commit/ab1a7f5))
- **doc:** add doc for isFirstRendering ([cea6739](https://github.com/algolia/instantsearch/commit/cea6739))
- **docs:** dont filter out `p.type.type` ([881659a](https://github.com/algolia/instantsearch/commit/881659a))
- **documentation.js:** Support for record types ([219ecd9](https://github.com/algolia/instantsearch/commit/219ecd9))
- **documentationjs:** add support litteral string types in type format ([2a08e7d](https://github.com/algolia/instantsearch/commit/2a08e7d))
- **documentationjs:** deeper related types ([6e3121e](https://github.com/algolia/instantsearch/commit/6e3121e))
- **documentationjs:** find related type in TypeApplication ([e0487ee](https://github.com/algolia/instantsearch/commit/e0487ee))
- **documentationjs:** fix 2+ depth structs ([4c8b7ec](https://github.com/algolia/instantsearch/commit/4c8b7ec))
- **documentationjs:** fixed default value parameter ([b62cbc7](https://github.com/algolia/instantsearch/commit/b62cbc7))
- **documentationjs:** records display with , ([8a968f2](https://github.com/algolia/instantsearch/commit/8a968f2))
- **documentationjs:** Updgrade to RC + fixes ([e9f0361](https://github.com/algolia/instantsearch/commit/e9f0361))
- **infinite-hits:** Remove hitsPerPage option (#2128) ([c13e377](https://github.com/algolia/instantsearch/commit/c13e377))
- **live-example:** adapt regex for matching connectors ([774254c](https://github.com/algolia/instantsearch/commit/774254c))
- **pagination:** fix zealous find/replace ([e269d87](https://github.com/algolia/instantsearch/commit/e269d87))
- **price-ranges:** fix test ([fd65cb3](https://github.com/algolia/instantsearch/commit/fd65cb3))
- **price-ranges:** New API uses ranges ([a5a6916](https://github.com/algolia/instantsearch/commit/a5a6916))
- **refinementList:** reimplement show more on refinement list ([72655ab](https://github.com/algolia/instantsearch/commit/72655ab))
- **refinementList:** sffv fix thanks [@julienpa](https://github.com/julienpa) ([30e0e9a](https://github.com/algolia/instantsearch/commit/30e0e9a))
- **sffv:** Fix exhaustive facets ([0cadcc3](https://github.com/algolia/instantsearch/commit/0cadcc3))
- **sortby:** Consistent across widget / connectors + migration ([8e366cc](https://github.com/algolia/instantsearch/commit/8e366cc))
- **widgets/price-ranges:** wrong compute of `templateProps` ([be5e063](https://github.com/algolia/instantsearch/commit/be5e063))

### Features

- **connectHierarchicalMenu:** remove `currentRefinement` ([3912aaf](https://github.com/algolia/instantsearch/commit/3912aaf))
- **connectHits:** typo `widgetOptions` -> `widgetParams` ([4420231](https://github.com/algolia/instantsearch/commit/4420231))
- **connector:** Add hierarchical menu connector ([f727949](https://github.com/algolia/instantsearch/commit/f727949))
- **connector:** add infinite hits connector ([cdf8675](https://github.com/algolia/instantsearch/commit/cdf8675))
- **connector:** add instantsearchInstance to pagination render ([4fa96dc](https://github.com/algolia/instantsearch/commit/4fa96dc))
- **connector:** add missing jsDoc descriptions ([e26e8e2](https://github.com/algolia/instantsearch/commit/e26e8e2))
- **connector:** add range-slider ([1a02798](https://github.com/algolia/instantsearch/commit/1a02798))
- **connector:** add tests for connectClearAll and connectHierarchicalMenu ([0eb29ec](https://github.com/algolia/instantsearch/commit/0eb29ec))
- **connector:** Adds hits and menu connectors ([77083b7](https://github.com/algolia/instantsearch/commit/77083b7))
- **connector:** Clear and CurrentRefinedValues ([02f7d3e](https://github.com/algolia/instantsearch/commit/02f7d3e))
- **connector:** clearAll connector (iteration 2) ([90aa02e](https://github.com/algolia/instantsearch/commit/90aa02e))
- **connector:** clearAll jsDoc + eslint fixes ([430a420](https://github.com/algolia/instantsearch/commit/430a420))
- **connector:** complete jsdoc + pass instantsearch to view ([e125931](https://github.com/algolia/instantsearch/commit/e125931))
- **connector:** connectClearAll documentation ([9b153aa](https://github.com/algolia/instantsearch/commit/9b153aa))
- **connector:** connectClearAll iteration 2 (fix) ([03653f1](https://github.com/algolia/instantsearch/commit/03653f1))
- **connector:** connectClearAll test ([5409157](https://github.com/algolia/instantsearch/commit/5409157))
- **connector:** connectCurrentRefinedValues (iteration 2) ([68408de](https://github.com/algolia/instantsearch/commit/68408de))
- **connector:** connectHierarchicalMenu (iteration 2) ([589454c](https://github.com/algolia/instantsearch/commit/589454c))
- **connector:** connectHierarchicalMenu jsDoc ([e166090](https://github.com/algolia/instantsearch/commit/e166090))
- **connector:** connectHits (iteration 2) ([bca09af](https://github.com/algolia/instantsearch/commit/bca09af))
- **connector:** connectHitsPerPageSelector (iteration 2) ([26bb273](https://github.com/algolia/instantsearch/commit/26bb273))
- **connector:** connectInfiniteHits (iteration 2) ([410459c](https://github.com/algolia/instantsearch/commit/410459c))
- **connector:** connectNumericRefinementList (iteration 2) ([bfcf860](https://github.com/algolia/instantsearch/commit/bfcf860))
- **connector:** connectNumericSelector (iteration 2) ([1eda8a2](https://github.com/algolia/instantsearch/commit/1eda8a2))
- **connector:** connectNumericSelector jsDoc ([760fcea](https://github.com/algolia/instantsearch/commit/760fcea))
- **connector:** connectRefinementList jsdoc + start document bool isFirstRendering ([52d13de](https://github.com/algolia/instantsearch/commit/52d13de))
- **connector:** connectStats second iteration ([82b1cb3](https://github.com/algolia/instantsearch/commit/82b1cb3))
- **connector:** connectToggle second iteration ([73b0878](https://github.com/algolia/instantsearch/commit/73b0878))
- **connector:** fix createURL usage to generate correct urls ([fdf59d7](https://github.com/algolia/instantsearch/commit/fdf59d7))
- **connector:** fix no param usage on custom infiniteHits ([961348a](https://github.com/algolia/instantsearch/commit/961348a))
- **connector:** fix parameter consistency in connectClearAll ([9ddffd8](https://github.com/algolia/instantsearch/commit/9ddffd8))
- **connector:** Fix parameters for toggle connector ([f96671c](https://github.com/algolia/instantsearch/commit/f96671c))
- **connector:** hits-per-page-selector connector refactoring ([dd794e0](https://github.com/algolia/instantsearch/commit/dd794e0))
- **connector:** jsDoc + check rendering function ([86f9739](https://github.com/algolia/instantsearch/commit/86f9739))
- **connector:** jsDoc connectPagination ([3b284de](https://github.com/algolia/instantsearch/commit/3b284de))
- **connector:** jsDoc for connectMenu ([626d5f1](https://github.com/algolia/instantsearch/commit/626d5f1))
- **connector:** jsDoc updates ([c924043](https://github.com/algolia/instantsearch/commit/c924043))
- **connector:** move clearAll as a rendering option ([ce41cde](https://github.com/algolia/instantsearch/commit/ce41cde))
- **connector:** Numeric selector ([0dc42d2](https://github.com/algolia/instantsearch/commit/0dc42d2))
- **connector:** numericRefinementList connector ([918d971](https://github.com/algolia/instantsearch/commit/918d971))
- **connector:** pagination connector ([7a876f3](https://github.com/algolia/instantsearch/commit/7a876f3))
- **connector:** price ranges connector ([d8bed96](https://github.com/algolia/instantsearch/commit/d8bed96))
- **connector:** provide consistent interface for searchbox renderer ([17d8301](https://github.com/algolia/instantsearch/commit/17d8301))
- **connector:** provide instantsearch instance at render ([12a7935](https://github.com/algolia/instantsearch/commit/12a7935))
- **connector:** refactor search function ([618dca2](https://github.com/algolia/instantsearch/commit/618dca2))
- **connector:** refinement list connector ([c8fcf4e](https://github.com/algolia/instantsearch/commit/c8fcf4e))
- **connector:** remove legacy implementation of toggle ([04437b0](https://github.com/algolia/instantsearch/commit/04437b0))
- **connector:** remove non relevant instantsearch API from test ([c5dce5c](https://github.com/algolia/instantsearch/commit/c5dce5c))
- **connector:** remove unused parameter to searchbox connector ([e639f65](https://github.com/algolia/instantsearch/commit/e639f65))
- **connector:** searchbox connector ([70f8e1f](https://github.com/algolia/instantsearch/commit/70f8e1f))
- **connector:** small internal refactoring for SFFV ([cb5c1fa](https://github.com/algolia/instantsearch/commit/cb5c1fa))
- **connector:** sort by selector connector ([b9847cf](https://github.com/algolia/instantsearch/commit/b9847cf))
- **connector:** star rating connector ([9996b4d](https://github.com/algolia/instantsearch/commit/9996b4d))
- **connector:** stats connector ([680743b](https://github.com/algolia/instantsearch/commit/680743b))
- **connector:** test connectHits ([89c86a5](https://github.com/algolia/instantsearch/commit/89c86a5))
- **connector:** test connectHitsPerPageSelector ([9caab02](https://github.com/algolia/instantsearch/commit/9caab02))
- **connector:** test connectInfiniteHits ([e67e75e](https://github.com/algolia/instantsearch/commit/e67e75e))
- **connector:** test connectMenu ([03c6f11](https://github.com/algolia/instantsearch/commit/03c6f11))
- **connector:** test connectNumericRefinementList ([2f26251](https://github.com/algolia/instantsearch/commit/2f26251))
- **connector:** test connectNumericSelector ([182779b](https://github.com/algolia/instantsearch/commit/182779b))
- **connector:** test connectPagination ([6f125b7](https://github.com/algolia/instantsearch/commit/6f125b7))
- **connector:** test connectPriceRanges ([f5dfba7](https://github.com/algolia/instantsearch/commit/f5dfba7))
- **connector:** test connectRangeSlider ([4f6c180](https://github.com/algolia/instantsearch/commit/4f6c180))
- **connector:** test connectSearchBox ([b4d7e1b](https://github.com/algolia/instantsearch/commit/b4d7e1b))
- **connector:** test connectSortBySelector ([e8825df](https://github.com/algolia/instantsearch/commit/e8825df))
- **connector:** test connectStarRating ([0c16f15](https://github.com/algolia/instantsearch/commit/0c16f15)), closes [#2002](https://github.com/algolia/instantsearch/issues/2002)
- **connector:** test connectStats ([c992288](https://github.com/algolia/instantsearch/commit/c992288))
- **connector:** test connectToggle ([441293d](https://github.com/algolia/instantsearch/commit/441293d))
- **connector:** toggle connector ([bf9a9c0](https://github.com/algolia/instantsearch/commit/bf9a9c0))
- **connector:** update doc, move setValue to refine in SortBySelector ([2486f36](https://github.com/algolia/instantsearch/commit/2486f36))
- **connector:** update jsDoc descriptions ([f83022a](https://github.com/algolia/instantsearch/commit/f83022a))
- **connectors:** `refinement-list` widget (iteration2) ([1c6c3a5](https://github.com/algolia/instantsearch/commit/1c6c3a5))
- **connectors:** `setValue()` -> `refine()` / `currentValue` -> `currentRefinement` ([ec7806c](https://github.com/algolia/instantsearch/commit/ec7806c))
- **connectors:** `sortBy` to `['isRefined', 'count:desc']` ([01219f1](https://github.com/algolia/instantsearch/commit/01219f1))
- **connectors:** add `currentRefinement` on `hierarchical-menu` ([154cdb5](https://github.com/algolia/instantsearch/commit/154cdb5))
- **connectors:** connectPagination (iteration2) ([8a615f6](https://github.com/algolia/instantsearch/commit/8a615f6))
- **connectors:** connectPriceRanges (iteration2) ([e34968e](https://github.com/algolia/instantsearch/commit/e34968e))
- **connectors:** connectRangeSlider (iteration2) ([6073d94](https://github.com/algolia/instantsearch/commit/6073d94))
- **connectors:** connectSearchBox (iteration2) ([3161c9b](https://github.com/algolia/instantsearch/commit/3161c9b))
- **connectors:** connectSortBySelector (iteration 2) ([dec2d31](https://github.com/algolia/instantsearch/commit/dec2d31))
- **connectors:** connectStarRating (iteration2) ([7ef7b6b](https://github.com/algolia/instantsearch/commit/7ef7b6b))
- **connectors:** connectToggle, forward initial options to render ([704a455](https://github.com/algolia/instantsearch/commit/704a455))
- **connectors:** dissociate logic & view for `menu` widget ([5a02c88](https://github.com/algolia/instantsearch/commit/5a02c88))
- **connectors:** expose connectors on `instantsearch` instance ([ff799d0](https://github.com/algolia/instantsearch/commit/ff799d0))
- **connectors:** forward `widgetParams` to `renderFn` ([54222a3](https://github.com/algolia/instantsearch/commit/54222a3))
- **connectors:** jsDoc connectHitsPerPageSelector ([75243b0](https://github.com/algolia/instantsearch/commit/75243b0))
- **connectors:** provide `currentRefinement` on menu ([fb7bc5e](https://github.com/algolia/instantsearch/commit/fb7bc5e))
- **connectors:** provide `currentRefinement` on numeric refinement list ([91f7928](https://github.com/algolia/instantsearch/commit/91f7928))
- **connectors.numeric-selector:** `currentValue` -> `currentRefinement` / `setValue()` -> `refine()` ([998faf1](https://github.com/algolia/instantsearch/commit/998faf1))
- **connectors.price-ranges:** provides `currentRefiment` value ([39af437](https://github.com/algolia/instantsearch/commit/39af437))
- **connectors.refinement-list:** provide `currentRefinement` to `renderFn` ([7e86be3](https://github.com/algolia/instantsearch/commit/7e86be3))
- **connectors.star-rating:** provide `currentRefinement` value ([c08b3e4](https://github.com/algolia/instantsearch/commit/c08b3e4))
- **connectRefinementList:** first good iteration ([88fd6d5](https://github.com/algolia/instantsearch/commit/88fd6d5))
- **doc:** re-bootstrap doc based on instantsearch-android ([e4e816e](https://github.com/algolia/instantsearch/commit/e4e816e))
- **docs:** bootstrap v2 docs ([0db6caf](https://github.com/algolia/instantsearch/commit/0db6caf))
- **docs:** pages structure ([fe89dcf](https://github.com/algolia/instantsearch/commit/fe89dcf))
- **getting-started:** add `.zip` boilerplate ([7d3769c](https://github.com/algolia/instantsearch/commit/7d3769c))
- **getting-started:** add result example of guide ([78d9017](https://github.com/algolia/instantsearch/commit/78d9017))
- **live-example:** add support of connectors ([e4f3158](https://github.com/algolia/instantsearch/commit/e4f3158))
- **live-example:** include jquery on connectors example pages ([f32936f](https://github.com/algolia/instantsearch/commit/f32936f))
- **main:** export all the widgets at once ([4bc2d21](https://github.com/algolia/instantsearch/commit/4bc2d21))
- **numeric-refinement-list:** `facetValues` -> `items` / `toggleRefinement` -> `refine` ([eb2c993](https://github.com/algolia/instantsearch/commit/eb2c993))
- **pagination:** `setPage()` -> `refine()` / `currentPage` -> `currentRefinement` ([f783fea](https://github.com/algolia/instantsearch/commit/f783fea))
- **range-slider:** use `rheostat` as slider component (#2142) ([910a0a0](https://github.com/algolia/instantsearch/commit/910a0a0))
- **searchFunction:** Update API, fix #1924 ([c7beb1d](https://github.com/algolia/instantsearch/commit/c7beb1d)), closes [#1924](https://github.com/algolia/instantsearch/issues/1924)
- **sort-by-selector:** `currentValue` -> `currentRefinement` ([e94c8c7](https://github.com/algolia/instantsearch/commit/e94c8c7))
- **Template:** remove support for react element ([ca2ab44](https://github.com/algolia/instantsearch/commit/ca2ab44))

<a name="1.11.15"></a>

## [1.11.15](https://github.com/algolia/instantsearch/compare/v1.11.14...v1.11.15) (2017-06-20)

### Bug Fixes

- **numeric-refinement-list:** reset page on refine ([ee55ccb](https://github.com/algolia/instantsearch/commit/ee55ccb))

<a name="1.11.14"></a>

## [1.11.14](https://github.com/algolia/instantsearch/compare/v1.11.13...v1.11.14) (2017-06-19)

### Bug Fixes

- **powered-by:** update logo ([7e68b51](https://github.com/algolia/instantsearch/commit/7e68b51)), closes [#2126](https://github.com/algolia/instantsearch/issues/2126)

<a name="1.11.13"></a>

## [1.11.13](https://github.com/algolia/instantsearch/compare/v1.11.12...v1.11.13) (2017-06-07)

### Bug Fixes

- **url-sync:** reverting back to using `change` event (#2183) ([07f4be0](https://github.com/algolia/instantsearch/commit/07f4be0)), closes [#2173](https://github.com/algolia/instantsearch/issues/2173) [#2171](https://github.com/algolia/instantsearch/issues/2171)

<a name="1.11.12"></a>

## [1.11.12](https://github.com/algolia/instantsearch/compare/v1.11.11...v1.11.12) (2017-05-30)

### Bug Fixes

- **sffv:** when using a large limit, retain the search (#2163) ([3d95d4c](https://github.com/algolia/instantsearch/commit/3d95d4c)), closes [#2156](https://github.com/algolia/instantsearch/issues/2156)

<a name="1.11.10"></a>

## [1.11.10](https://github.com/algolia/instantsearch/compare/v1.11.9...v1.11.10) (2017-05-17)

<a name="1.11.9"></a>

## [1.11.9](https://github.com/algolia/instantsearch/compare/v1.11.8...v1.11.9) (2017-05-17)

<a name="1.11.8"></a>

## [1.11.8](https://github.com/algolia/instantsearch/compare/v1.11.7...v1.11.8) (2017-05-16)

### Bug Fixes

- **url-sync:** set firstRender to be class attribute ([22dbaeb](https://github.com/algolia/instantsearch/commit/22dbaeb))

<a name="1.11.7"></a>

## [1.11.7](https://github.com/algolia/instantsearch/compare/v1.11.6...v1.11.7) (2017-04-24)

### Bug Fixes

- **sffv:** add class for disabled state at the form level (#2122) ([029fa5f](https://github.com/algolia/instantsearch/commit/029fa5f))
- **sffv:** fixes typo (: was left) ([26d2845](https://github.com/algolia/instantsearch/commit/26d2845))

<a name="1.11.6"></a>

## [1.11.6](https://github.com/algolia/instantsearch/compare/v1.11.5...v1.11.6) (2017-04-20)

### Bug Fixes

- **CONTRIBUTING:** remove section about beta releases (#2109) ([5640131](https://github.com/algolia/instantsearch/commit/5640131))
- **sffv:** disable sffv input when few facet values FIX #2111 ([1e33c10](https://github.com/algolia/instantsearch/commit/1e33c10)), closes [#2111](https://github.com/algolia/instantsearch/issues/2111)

<a name="1.11.5"></a>

## [1.11.5](https://github.com/algolia/instantsearch/compare/v1.11.4...v1.11.5) (2017-04-12)

### Bug Fixes

- **url-sync:** sync url on search (#2108) ([7f33ffb](https://github.com/algolia/instantsearch/commit/7f33ffb))

<a name="1.11.4"></a>

## [1.11.4](https://github.com/algolia/instantsearch/compare/v1.11.3...v1.11.4) (2017-03-29)

### Bug Fixes

- **autoHideContainer:** dont prevent render with `shouldComponentUpdate` (#2076) ([b520400](https://github.com/algolia/instantsearch/commit/b520400))
- **star-rating:** make max value inclusive ([f5fc41c](https://github.com/algolia/instantsearch/commit/f5fc41c)), closes [#2002](https://github.com/algolia/instantsearch/issues/2002)

<a name="1.11.3"></a>

## [1.11.3](https://github.com/algolia/instantsearch/compare/v1.11.2...v1.11.3) (2017-03-22)

### Bug Fixes

- **Slider:** display disabled slider when `min === max` (#2041) ([511fdfd](https://github.com/algolia/instantsearch/commit/511fdfd)), closes [#2037](https://github.com/algolia/instantsearch/issues/2037)

<a name="1.11.2"></a>

## [1.11.2](https://github.com/algolia/instantsearch/compare/v1.11.1...v1.11.2) (2017-02-28)

### Bug Fixes

- **searchBox:** avoid unwanted cursor jumps on hashchange (#2013) ([d0103db](https://github.com/algolia/instantsearch/commit/d0103db)), closes [#2012](https://github.com/algolia/instantsearch/issues/2012)

<a name="1.11.1"></a>

## [1.11.1](https://github.com/algolia/instantsearch/compare/v1.11.0...v1.11.1) (2017-02-14)

### Bug Fixes

- **infinite-hits:** disable load more button when no more pages (#1973) ([745ed89](https://github.com/algolia/instantsearch/commit/745ed89)), closes [#1971](https://github.com/algolia/instantsearch/issues/1971)

<a name="1.11.0"></a>

# [1.11.0](https://github.com/algolia/instantsearch/compare/v1.10.5...v1.11.0) (2017-02-12)

### Features

- **analytics-widget:** add a new parameter pushInitialSearch (#1963) ([d777997](https://github.com/algolia/instantsearch/commit/d777997))
- **custom client:** allows to provide a custom JS client instance (#1948) ([cce4f2e](https://github.com/algolia/instantsearch/commit/cce4f2e))
- **InfiniteHits:** add new widget ([2d77e4b](https://github.com/algolia/instantsearch/commit/2d77e4b))

<a name="1.10.5"></a>

## [1.10.5](https://github.com/algolia/instantsearch/compare/v1.10.4...v1.10.5) (2017-02-06)

### Bug Fixes

- **urlSync:** update url only after threshold (#1917) ([b0f0cf1](https://github.com/algolia/instantsearch/commit/b0f0cf1)), closes [#1856](https://github.com/algolia/instantsearch/issues/1856)

<a name="1.10.4"></a>

## [1.10.4](https://github.com/algolia/instantsearch/compare/v1.10.3...v1.10.4) (2017-01-25)

<a name="1.10.3"></a>

## [1.10.3](https://github.com/algolia/instantsearch/compare/v1.10.2...v1.10.3) (2016-12-26)

### Bug Fixes

- **sffv-searchbox:** update classnames to avoid conflicts (#1781) ([f53e8fd](https://github.com/algolia/instantsearch/commit/f53e8fd))

<a name="1.10.2"></a>

## [1.10.2](https://github.com/algolia/instantsearch/compare/v1.10.1...v1.10.2) (2016-12-23)

### Bug Fixes

- **url:** clear timeout on pop ([41ad9af](https://github.com/algolia/instantsearch/commit/41ad9af))

<a name="1.10.1"></a>

## [1.10.1](https://github.com/algolia/instantsearch/compare/v1.10.0...v1.10.1) (2016-12-23)

### Bug Fixes

- **url:** default param ([7a18e1c](https://github.com/algolia/instantsearch/commit/7a18e1c))

### Features

- **url:** add a beta updateOnEveryKeystroke option (#1779) ([63f73fe](https://github.com/algolia/instantsearch/commit/63f73fe))

<a name="1.10.0"></a>

# [1.10.0](https://github.com/algolia/instantsearch/compare/v1.9.0...v1.10.0) (2016-12-22)

### Features

- **widget:** Search for facet values - refinement list (#1753) ([b9e20f3](https://github.com/algolia/instantsearch/commit/b9e20f3))

<a name="1.9.0"></a>

# [1.9.0](https://github.com/algolia/instantsearch/compare/v1.8.16...v1.9.0) (2016-12-14)

### Bug Fixes

- **currentRefinedValues:** unescape disjunctive facet refinement names (#1574) ([9ab65c4](https://github.com/algolia/instantsearch/commit/9ab65c4)), closes [#1569](https://github.com/algolia/instantsearch/issues/1569)
- **transformData:** default data is an object when not provided (#1570) ([8eeeeba](https://github.com/algolia/instantsearch/commit/8eeeeba)), closes [#1538](https://github.com/algolia/instantsearch/issues/1538)

### Features

- **analytics:** new analytics widget to easily plug search to any analytics service ([09d8fda](https://github.com/algolia/instantsearch/commit/09d8fda))
- **retry strategy:** new retry strategy ([afdcc3c](https://github.com/algolia/instantsearch/commit/afdcc3c))

<a name="1.8.16"></a>

## [1.8.16](https://github.com/algolia/instantsearch/compare/v1.8.15...v1.8.16) (2016-11-16)

<a name="1.8.15"></a>

## [1.8.15](https://github.com/algolia/instantsearch/compare/v1.8.14...v1.8.15) (2016-11-16)

### Bug Fixes

- **priceRanges:** avoid displaying solo ranges (#1544) ([ff396f0](https://github.com/algolia/instantsearch/commit/ff396f0)), closes [#1536](https://github.com/algolia/instantsearch/issues/1536)
- **priceRanges:** use formatNumber in defaultTemplate (#1559) ([557a501](https://github.com/algolia/instantsearch/commit/557a501)), closes [#1230](https://github.com/algolia/instantsearch/issues/1230)
- **toggle:** support negative numeric values for on/off (#1551) ([e4d88e0](https://github.com/algolia/instantsearch/commit/e4d88e0)), closes [#1537](https://github.com/algolia/instantsearch/issues/1537)
- **transformData:** always call transformData (#1555) ([49bfeca](https://github.com/algolia/instantsearch/commit/49bfeca)), closes [#1538](https://github.com/algolia/instantsearch/issues/1538)

<a name="1.8.14"></a>

## [1.8.14](https://github.com/algolia/instantsearch/compare/v1.8.13...v1.8.14) (2016-11-03)

### Bug Fixes

- **slider:** avoid multi touch issues (#1501) ([0b8a242](https://github.com/algolia/instantsearch/commit/0b8a242)), closes [#1186](https://github.com/algolia/instantsearch/issues/1186)

<a name="1.8.13"></a>

## [1.8.13](https://github.com/algolia/instantsearch/compare/v1.8.12...v1.8.13) (2016-10-21)

### Bug Fixes

- **searchbox:** poweredBy Algolia logo weren't visible in firefox ([39701f8](https://github.com/algolia/instantsearch/commit/39701f8))

<a name="1.8.12"></a>

## [1.8.12](https://github.com/algolia/instantsearch/compare/v1.8.11...v1.8.12) (2016-10-19)

### Bug Fixes

- **numericRefinementList:** classes on radio buttons (#1358) (#1432) ([fec6495](https://github.com/algolia/instantsearch/commit/fec6495))

<a name="1.8.11"></a>

## [1.8.11](https://github.com/algolia/instantsearch/compare/v1.8.10...v1.8.11) (2016-10-07)

### Bug Fixes

- **merge:** merge only plain object from searchParameters ([aab1c87](https://github.com/algolia/instantsearch/commit/aab1c87))

<a name="1.8.10"></a>

## [1.8.10](https://github.com/algolia/instantsearch/compare/v1.8.9...v1.8.10) (2016-10-07)

### Bug Fixes

- **lodash:** set lodash back to 4.15.0, fixes build, unknown issue for now ([ba4247e](https://github.com/algolia/instantsearch/commit/ba4247e))

<a name="1.8.9"></a>

## [1.8.9](https://github.com/algolia/instantsearch/compare/v1.8.8...v1.8.9) (2016-10-07)

### Bug Fixes

- **react:** avoid duplicating React ([59010f6](https://github.com/algolia/instantsearch/commit/59010f6)), closes [#1386](https://github.com/algolia/instantsearch/issues/1386)

<a name="1.8.8"></a>

## [1.8.8](https://github.com/algolia/instantsearch/compare/v1.8.6...v1.8.8) (2016-09-14)

### Bug Fixes

- **numericSelector:** do not change state on init (#1280) ([cf27db3](https://github.com/algolia/instantsearch/commit/cf27db3)), closes [#1253](https://github.com/algolia/instantsearch/issues/1253)
- **Slider:** default precision to 2 (#1279) ([552b9ea](https://github.com/algolia/instantsearch/commit/552b9ea))

<a name="1.8.6"></a>

## [1.8.6](https://github.com/algolia/instantsearch/compare/v1.8.5...v1.8.6) (2016-09-12)

<a name="1.8.5"></a>

## [1.8.5](https://github.com/algolia/instantsearch/compare/v1.8.4...v1.8.5) (2016-09-06)

### Bug Fixes

- **deps:** upgrade all deps 2016-09-05 (#1261) ([408d597](https://github.com/algolia/instantsearch/commit/408d597))
- **rangeSlider:** round pips numbers when step is integer (#1255) ([b993033](https://github.com/algolia/instantsearch/commit/b993033)), closes [#1254](https://github.com/algolia/instantsearch/issues/1254)

<a name="1.8.4"></a>

## [1.8.4](https://github.com/algolia/instantsearch/compare/v1.8.3...v1.8.4) (2016-08-29)

### Bug Fixes

- **bundle:** switch back to React by default, create a preact build (#1228) ([4845868](https://github.com/algolia/instantsearch/commit/4845868))

<a name="1.8.3"></a>

## [1.8.3](https://github.com/algolia/instantsearch/compare/v1.8.2...v1.8.3) (2016-08-29)

### Bug Fixes

- **numericSelector:** if no currentValue found, use the first option ([ef56dfa](https://github.com/algolia/instantsearch/commit/ef56dfa))
- **poweredBy:** fixed Algolia logo version (#1223) ([aab3fc3](https://github.com/algolia/instantsearch/commit/aab3fc3)), closes [#1223](https://github.com/algolia/instantsearch/issues/1223) [#1222](https://github.com/algolia/instantsearch/issues/1222)
- **Selector:** render a controlled component ([e9f6ff7](https://github.com/algolia/instantsearch/commit/e9f6ff7))

### Performance Improvements

- **filesize:** use preact in production build (#1224) ([5bb38f2](https://github.com/algolia/instantsearch/commit/5bb38f2)), closes [#1030](https://github.com/algolia/instantsearch/issues/1030)

<a name="1.8.2"></a>

## [1.8.2](https://github.com/algolia/instantsearch/compare/v1.8.1...v1.8.2) (2016-08-25)

### Bug Fixes

- **lodash:** use lodash v4, reduce build size ([216d1e0](https://github.com/algolia/instantsearch/commit/216d1e0))

<a name="1.8.1"></a>

## [1.8.1](https://github.com/algolia/instantsearch/compare/v1.8.0...v1.8.1) (2016-08-24)

### Bug Fixes

- **searchBox:** handle BFCache browsers (#1212) ([7deb9c3](https://github.com/algolia/instantsearch/commit/7deb9c3))
- **toggle:** make autoHide check facetValue.count (#1213) ([86872eb](https://github.com/algolia/instantsearch/commit/86872eb))

<a name="1.8.0"></a>

# [1.8.0](https://github.com/algolia/instantsearch/compare/v1.7.1...v1.8.0) (2016-08-18)

### Bug Fixes

- **documentation:** Change instantsearch.widgets.stats typo data.processingTimMS to data.processingTimeMS ([034703e](https://github.com/algolia/instantsearch/commit/034703e))
- **documentation:** Change responsiveNavigation.js & header.html to fix #1090 ([bf3a808](https://github.com/algolia/instantsearch/commit/bf3a808)), closes [#1090](https://github.com/algolia/instantsearch/issues/1090)
- **nouislider:** fix the slider for nouislider 8.5.1 ([af8f56b](https://github.com/algolia/instantsearch/commit/af8f56b))

### Features

- **clearAll:** Add optional excludeAttributes to list protected filters ([fe6d19c](https://github.com/algolia/instantsearch/commit/fe6d19c))

<a name="1.7.1"></a>

## [1.7.1](https://github.com/algolia/instantsearch/compare/v1.7.0...v1.7.1) (2016-07-28)

### Bug Fixes

- **toggle:** add backward compatibility for previous toggle implem (#1154) ([a1973a0](https://github.com/algolia/instantsearch/commit/a1973a0))

<a name="1.7.0"></a>

# [1.7.0](https://github.com/algolia/instantsearch/compare/v1.6.4...v1.7.0) (2016-07-26)

### Bug Fixes

- **searchParameters:** avoid mutating provided objects (#1148) ([0ea3bef](https://github.com/algolia/instantsearch/commit/0ea3bef)), closes [#1130](https://github.com/algolia/instantsearch/issues/1130)

### Features

- **toggle:** Provide a better default widget (#1146) ([d54107e](https://github.com/algolia/instantsearch/commit/d54107e)), closes [#1096](https://github.com/algolia/instantsearch/issues/1096) [#919](https://github.com/algolia/instantsearch/issues/919)

<a name="1.6.4"></a>

## [1.6.4](https://github.com/algolia/instantsearch/compare/v1.6.3...v1.6.4) (2016-07-12)

<a name="1.6.3"></a>

## [1.6.3](https://github.com/algolia/instantsearch/compare/v1.6.2...v1.6.3) (2016-07-11)

### Bug Fixes

- **Hits:** always render hits ([2e7bf8a](https://github.com/algolia/instantsearch/commit/2e7bf8a)), closes [#1100](https://github.com/algolia/instantsearch/issues/1100)

<a name="1.6.2"></a>

## [1.6.2](https://github.com/algolia/instantsearch/compare/v1.6.1...v1.6.2) (2016-07-11)

### Bug Fixes

- **paginationLink:** it's aria-label not ariaLabel (#1125) ([70a190c](https://github.com/algolia/instantsearch/commit/70a190c))
- **pricesRange:** fill the form according to the current refinement (#1126) ([12ebde7](https://github.com/algolia/instantsearch/commit/12ebde7)), closes [#1009](https://github.com/algolia/instantsearch/issues/1009)
- **rangeSlider:** handles now support stacking (#1129) ([ad394d3](https://github.com/algolia/instantsearch/commit/ad394d3))
- **rangeSlider:** use stats min/max when only user min or max is provided (#1124) ([4348463](https://github.com/algolia/instantsearch/commit/4348463)), closes [#1004](https://github.com/algolia/instantsearch/issues/1004)
- **searchBox:** force cursor position to be at the end of the query (#1123) ([8a27769](https://github.com/algolia/instantsearch/commit/8a27769)), closes [#946](https://github.com/algolia/instantsearch/issues/946)
- **searchBox:** IE8, IE9 needs to listen for setQuery ([97c166a](https://github.com/algolia/instantsearch/commit/97c166a))
- **searchBox:** update helper query on every keystroke (#1127) ([997c0c2](https://github.com/algolia/instantsearch/commit/997c0c2)), closes [#1015](https://github.com/algolia/instantsearch/issues/1015)
- **urlSync:** urls should be safe by default (#1104) ([db833c6](https://github.com/algolia/instantsearch/commit/db833c6)), closes [#982](https://github.com/algolia/instantsearch/issues/982)

<a name="1.6.1"></a>

## [1.6.1](https://github.com/algolia/instantsearch/compare/v1.6.0...v1.6.1) (2016-06-20)

### Bug Fixes

- **meteorjs:** lite build must point to the browser lite (#1097) ([265ace3](https://github.com/algolia/instantsearch/commit/265ace3))
- **toggle:** read numerical facet results stats for toggle count (#1098) ([1feb539](https://github.com/algolia/instantsearch/commit/1feb539)), closes [#1096](https://github.com/algolia/instantsearch/issues/1096)
- **website:** footer wording ([8355460](https://github.com/algolia/instantsearch/commit/8355460))

<a name="1.6.0"></a>

# [1.6.0](https://github.com/algolia/instantsearch/compare/v1.5.2...v1.6.0) (2016-06-13)

### Bug Fixes

- **hits:** rename \_\_position to hitIndex ([d051a54](https://github.com/algolia/instantsearch/commit/d051a54))
- **refinementList/header:** rename count to refinedFacetCount ([89ad602](https://github.com/algolia/instantsearch/commit/89ad602))

### Features

- **header:** Pass count of current refined filters in header ([d9e8582](https://github.com/algolia/instantsearch/commit/d9e8582)), closes [#1013](https://github.com/algolia/instantsearch/issues/1013) [#1041](https://github.com/algolia/instantsearch/issues/1041)
- **hits:** Add a `__position` attribute to data passed to items ([43ce1c7](https://github.com/algolia/instantsearch/commit/43ce1c7)), closes [#903](https://github.com/algolia/instantsearch/issues/903)

<a name="1.5.2"></a>

## [1.5.2](https://github.com/algolia/instantsearch/compare/v1.5.1...v1.5.2) (2016-06-10)

### Bug Fixes

- **lite:** use lite algoliasearch build (js client) ([219fa9f](https://github.com/algolia/instantsearch/commit/219fa9f)), closes [#1024](https://github.com/algolia/instantsearch/issues/1024)
- **poweredBy:** Let users define their own poweredBy template ([f1a96d8](https://github.com/algolia/instantsearch/commit/f1a96d8))

<a name="1.5.1"></a>

## [1.5.1](https://github.com/algolia/instantsearch/compare/v1.5.0...v1.5.1) (2016-05-17)

### Bug Fixes

- **numericRefinementList:** Correctly apply active class ([7cca9a4](https://github.com/algolia/instantsearch/commit/7cca9a4)), closes [#1010](https://github.com/algolia/instantsearch/issues/1010)

<a name="1.5.0"></a>

# [1.5.0](https://github.com/algolia/instantsearch/compare/v1.4.5...v1.5.0) (2016-04-29)

### Bug Fixes

- **base href:** always create absolute URLS in widgets ([ae6dbf6](https://github.com/algolia/instantsearch/commit/ae6dbf6)), closes [#970](https://github.com/algolia/instantsearch/issues/970)
- **IE11:** classList do not supports .add(class, class) ([ab10347](https://github.com/algolia/instantsearch/commit/ab10347)), closes [#989](https://github.com/algolia/instantsearch/issues/989)
- **lifecycle:** save configuration done in widget.init ([07d1fea](https://github.com/algolia/instantsearch/commit/07d1fea))
- **RefinementList:** use attributeNameKey when calling createURL ([253ec28](https://github.com/algolia/instantsearch/commit/253ec28))
- **rootpath:** remember rootpath option on 'back' button ([01ecdaa](https://github.com/algolia/instantsearch/commit/01ecdaa))
- **searchBox:** do not trigger a search when input value is the same ([81c2e80](https://github.com/algolia/instantsearch/commit/81c2e80))
- **urlSync:** only start watching for changes at first render ([4a672ae](https://github.com/algolia/instantsearch/commit/4a672ae))

### Features

- **urlSync:** allow overriding replaceState(state)/pushState(state) ([989856c](https://github.com/algolia/instantsearch/commit/989856c))

<a name="1.4.5"></a>

## [1.4.5](https://github.com/algolia/instantsearch/compare/v1.4.4...v1.4.5) (2016-04-18)

### Bug Fixes

- **showMore:** hide "show less" when nothing to hide ([5ac2bb6](https://github.com/algolia/instantsearch/commit/5ac2bb6))

<a name="1.4.4"></a>

## [1.4.4](https://github.com/algolia/instantsearch/compare/v1.4.3...v1.4.4) (2016-04-15)

### Bug Fixes

- **pagination:** Disabled pagination link can no longer be clicked ([88b567f](https://github.com/algolia/instantsearch/commit/88b567f)), closes [#974](https://github.com/algolia/instantsearch/issues/974)
- **showMore:** hide showMore when no more facet values to show ([cc31b1a](https://github.com/algolia/instantsearch/commit/cc31b1a))

<a name="1.4.3"></a>

## [1.4.3](https://github.com/algolia/instantsearch/compare/v1.4.2...v1.4.3) (2016-04-01)

### Bug Fixes

- **rangeSlider:** step accepts a float value ([6ecc925](https://github.com/algolia/instantsearch/commit/6ecc925))

<a name="1.4.2"></a>

## [1.4.2](https://github.com/algolia/instantsearch/compare/v1.4.1...v1.4.2) (2016-03-24)

### Performance Improvements

- **refinementList:** Stop creating URL for hidden refinements. ([2cdd17d](https://github.com/algolia/instantsearch/commit/2cdd17d))

<a name="1.4.1"></a>

## [1.4.1](https://github.com/algolia/instantsearch/compare/v1.4.0...v1.4.1) (2016-03-22)

### Bug Fixes

- **searchBox:** do not update the input when focused ([61cf9be](https://github.com/algolia/instantsearch/commit/61cf9be)), closes [#944](https://github.com/algolia/instantsearch/issues/944)

<a name="1.4.0"></a>

# [1.4.0](https://github.com/algolia/instantsearch/compare/v1.3.3...v1.4.0) (2016-03-16)

### Bug Fixes

- **url:** allow hierarchical facets in trackedParameters ([36b4011](https://github.com/algolia/instantsearch/commit/36b4011))

### Features

- **url-sync:** use the new mapping option ([f869885](https://github.com/algolia/instantsearch/commit/f869885)), closes [#838](https://github.com/algolia/instantsearch/issues/838)

<a name="1.3.3"></a>

## [1.3.3](https://github.com/algolia/instantsearch/compare/v1.3.2...v1.3.3) (2016-03-07)

### Bug Fixes

- **headerFooter:** make collapsible click handler work ([add0d50](https://github.com/algolia/instantsearch/commit/add0d50))

### Performance Improvements

- **linters:** Greatly improve the `npm run lint` task speed ([1ba53b0](https://github.com/algolia/instantsearch/commit/1ba53b0))

<a name="1.3.2"></a>

## [1.3.2](https://github.com/algolia/instantsearch/compare/v1.3.1...v1.3.2) (2016-03-07)

### Bug Fixes

- **Template:** stop leaking `data="[object Object]"` attributes in production builds ([7ec0431](https://github.com/algolia/instantsearch/commit/7ec0431)), closes [#899](https://github.com/algolia/instantsearch/issues/899)

### Features

- **validate-pr:** Allow `docs()` commits to be merged in master ([0abc689](https://github.com/algolia/instantsearch/commit/0abc689))

<a name="1.3.1"></a>

## [1.3.1](https://github.com/algolia/instantsearch/compare/v1.3.0...v1.3.1) (2016-03-07)

### Bug Fixes

- **collapsible:** stop duplicating collapsible styling ([7362901](https://github.com/algolia/instantsearch/commit/7362901))
- **lodash:** stop leaking lodash in the global scope ([91f71dc](https://github.com/algolia/instantsearch/commit/91f71dc)), closes [#900](https://github.com/algolia/instantsearch/issues/900)

<a name="1.3.0"></a>

# [1.3.0](https://github.com/algolia/instantsearch/compare/v1.2.5...v1.3.0) (2016-03-04)

### Bug Fixes

- **browser support:** make IE lte 10 work by fixing Object.getPrototypeOf ([bbb264b](https://github.com/algolia/instantsearch/commit/bbb264b))
- **menu,refinementList:** sort by count AND name to avoid reorders on refine ([02fe7bf](https://github.com/algolia/instantsearch/commit/02fe7bf)), closes [#65](https://github.com/algolia/instantsearch/issues/65)
- **priceRanges:** pass the bound refine to the form ([ce2b956](https://github.com/algolia/instantsearch/commit/ce2b956))
- **searchBox:** handle external updates of the query ([6a0af14](https://github.com/algolia/instantsearch/commit/6a0af14)), closes [#803](https://github.com/algolia/instantsearch/issues/803)
- **searchBox:** stop setting the query twice ([91270b2](https://github.com/algolia/instantsearch/commit/91270b2))
- **searchBox:** stop updating query at eachkeystroke with searchOnEnterKeyPressOnly ([28dc4d2](https://github.com/algolia/instantsearch/commit/28dc4d2)), closes [#875](https://github.com/algolia/instantsearch/issues/875)
- **Slider:** do not render Slider when range.min === range.max ([f20274e](https://github.com/algolia/instantsearch/commit/f20274e))
- **Template:** now render() when templateKey changes ([8906224](https://github.com/algolia/instantsearch/commit/8906224))
- **toggle:** pass isRefined to toggleRefinement ([8ac494e](https://github.com/algolia/instantsearch/commit/8ac494e))
- **url-sync:** always decode incoming query string ([bea38e3](https://github.com/algolia/instantsearch/commit/bea38e3)), closes [#848](https://github.com/algolia/instantsearch/issues/848)
- **url-sync:** handle <base> href pages ([e58aadc](https://github.com/algolia/instantsearch/commit/e58aadc)), closes [#790](https://github.com/algolia/instantsearch/issues/790)

### Features

- **collapsable widgets:** add collapsable and collapsed option ([c4df7c5](https://github.com/algolia/instantsearch/commit/c4df7c5))
- **instantsearch:** allow overriding the helper.search function ([9a930e7](https://github.com/algolia/instantsearch/commit/9a930e7))
- **rangeSlider:** allow passing min and max values ([409295c](https://github.com/algolia/instantsearch/commit/409295c)), closes [#858](https://github.com/algolia/instantsearch/issues/858)
- **searchBox:** allow to pass a queryHook ([5786a64](https://github.com/algolia/instantsearch/commit/5786a64))
- **Template:** allow template functions to return a React element ([748077d](https://github.com/algolia/instantsearch/commit/748077d))
- **Template:** allow template functions to return a React element ([0f9296d](https://github.com/algolia/instantsearch/commit/0f9296d))

### Performance Improvements

- **autoHideContainer:** stop re-creating React components ([8c89862](https://github.com/algolia/instantsearch/commit/8c89862))
- **formatting numbers:** stop using a default locale, use the system one ([b056554](https://github.com/algolia/instantsearch/commit/b056554))
- **nouislider:** upgrade nouislider, shaves some more ms ([fefbe65](https://github.com/algolia/instantsearch/commit/fefbe65))
- **React:** use babel `optimisation` option for React ([95f940c](https://github.com/algolia/instantsearch/commit/95f940c))
- **React, widgets:** implement shouldComponentUpdate, reduce bind ([5efaac1](https://github.com/algolia/instantsearch/commit/5efaac1))

<a name="1.2.5"></a>

## [1.2.5](https://github.com/algolia/instantsearch/compare/v1.2.4...v1.2.5) (2016-03-02)

### Bug Fixes

- **hierarchicalMenu:** configure maxValuesPerFacet using the limit option ([4868717](https://github.com/algolia/instantsearch/commit/4868717)), closes [#66](https://github.com/algolia/instantsearch/issues/66)

<a name="1.2.4"></a>

## [1.2.4](https://github.com/algolia/instantsearch/compare/v1.2.3...v1.2.4) (2016-02-29)

Upgraded the helper to 2.9.0 to support undocumented parameters from the API.

<a name="1.2.3"></a>

## [1.2.3](https://github.com/algolia/instantsearch/compare/v1.2.2...v1.2.3) (2016-02-18)

### Bug Fixes

- **currentRefinedValues:** clear numeric refinements using original value ([9a0ad45](https://github.com/algolia/instantsearch/commit/9a0ad45)), closes [#844](https://github.com/algolia/instantsearch/issues/844)

<a name="1.2.2"></a>

## [1.2.2](https://github.com/algolia/instantsearch/compare/v1.2.1...v1.2.2) (2016-02-03)

### Features

- **menu:** add showMore option ([e7e7677](https://github.com/algolia/instantsearch/commit/e7e7677)), closes [#815](https://github.com/algolia/instantsearch/issues/815)

<a name="1.2.1"></a>

## [1.2.1](https://github.com/algolia/instantsearch/compare/v1.2.0...v1.2.1) (2016-02-02)

### Bug Fixes

- **showmore:** now showMore in doc and also show-more BEM ([a020439](https://github.com/algolia/instantsearch/commit/a020439))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/algolia/instantsearch/compare/v1.1.3...v1.2.0) (2016-02-02)

### Bug Fixes

- **all:** typos ([fa8ba09](https://github.com/algolia/instantsearch/commit/fa8ba09))
- **currentRefinedValues:** allow array of strings for cssClasses.\* ([55b3a3f](https://github.com/algolia/instantsearch/commit/55b3a3f))
- **docs:** fixed bad link to scss in custom themes section ([823a859](https://github.com/algolia/instantsearch/commit/823a859))
- **getRefinements:** a name should be a string ([7efd1fd](https://github.com/algolia/instantsearch/commit/7efd1fd))
- **getRefinements:** hierarchical facets ([fe0fc5d](https://github.com/algolia/instantsearch/commit/fe0fc5d))
- **index:** Use module.exports instead of export on index ([81e7eee](https://github.com/algolia/instantsearch/commit/81e7eee))
- **pagination:** remove default value of maxPages. Fixes #761 ([607fe9a](https://github.com/algolia/instantsearch/commit/607fe9a)), closes [#761](https://github.com/algolia/instantsearch/issues/761)
- **prepareTemplates:** uses templates with keys that are not in defaults ([c4bf8ec](https://github.com/algolia/instantsearch/commit/c4bf8ec))
- **rangeSlider:** prevent slider from extending farther than the last pip ([6e534f5](https://github.com/algolia/instantsearch/commit/6e534f5))
- **search-box:** update value when state changes from the outside ([4550f99](https://github.com/algolia/instantsearch/commit/4550f99))
- **url-sync:** adds indexName in the helper configuration ([e50bafd](https://github.com/algolia/instantsearch/commit/e50bafd))
- **url-sync:** Makes url sync more reliable ([3157abc](https://github.com/algolia/instantsearch/commit/3157abc)), closes [#730](https://github.com/algolia/instantsearch/issues/730) [#729](https://github.com/algolia/instantsearch/issues/729)

### Features

- **currentRefinedValues:** new widget ([6c926d0](https://github.com/algolia/instantsearch/commit/6c926d0)), closes [#404](https://github.com/algolia/instantsearch/issues/404)
- **hits:** adds allItems template as an alternative to item ([1f3f889](https://github.com/algolia/instantsearch/commit/1f3f889))
- **poweredBy:** automatically add utm link to poweredBy ([05d1425](https://github.com/algolia/instantsearch/commit/05d1425)), closes [#711](https://github.com/algolia/instantsearch/issues/711)
- **priceRanges:** add currency option ([f41484a](https://github.com/algolia/instantsearch/commit/f41484a))
- **refinementlist:** lets configure showmore feature ([3b8688a](https://github.com/algolia/instantsearch/commit/3b8688a))
- **Template:** accepts any parameters and forwards them ([5170f53](https://github.com/algolia/instantsearch/commit/5170f53))

<a name="1.1.3"></a>

## [1.1.3](https://github.com/algolia/instantsearch/compare/v1.1.2...v1.1.3) (2016-01-12)

### Bug Fixes

- **searchBox:** fixes cssClasses option ([660ee2f](https://github.com/algolia/instantsearch/commit/660ee2f)), closes [#775](https://github.com/algolia/instantsearch/issues/775)

<a name="1.1.2"></a>

## [1.1.2](https://github.com/algolia/instantsearch/compare/v1.1.1...v1.1.2) (2016-01-08)

<a name="1.1.1"></a>

## [1.1.1](https://github.com/algolia/instantsearch/compare/v1.1.0...v1.1.1) (2016-01-07)

### Bug Fixes

- **style:** keyframes ([40eb0a5](https://github.com/algolia/instantsearch/commit/40eb0a5))
- **url-sync:** adds indexName in the helper configuration ([c2c0bc7](https://github.com/algolia/instantsearch/commit/c2c0bc7))

### Features

- **clearRefinements:** Added two utils methods ([49564e1](https://github.com/algolia/instantsearch/commit/49564e1))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/algolia/instantsearch/compare/v1.0.0...v1.1.0) (2015-11-26)

### Bug Fixes

- **pagination:** fix #668 edge case ([d8f1196](https://github.com/algolia/instantsearch/commit/d8f1196)), closes [#668](https://github.com/algolia/instantsearch/issues/668)
- **priceRanges:** Remove round from first range ([bf82395](https://github.com/algolia/instantsearch/commit/bf82395))
- **slider:** hide the slider when stats.min=stats.max ([42e4b64](https://github.com/algolia/instantsearch/commit/42e4b64))
- **starRating:** Retrieve the correct count and use numericRefinement ([f00ce38](https://github.com/algolia/instantsearch/commit/f00ce38)), closes [#615](https://github.com/algolia/instantsearch/issues/615)

### Features

- **hierarchical:** expose rootPath and showParentLevel ([6e9bb7c](https://github.com/algolia/instantsearch/commit/6e9bb7c))

<a name="1.0.0"></a>

# [1.0.0](https://github.com/algolia/instantsearch/compare/v0.14.9...v1.0.0) (2015-11-18)

<a name="0.14.9"></a>

## [0.14.9](https://github.com/algolia/instantsearch/compare/v0.14.8...v0.14.9) (2015-11-18)

<a name="0.14.8"></a>

## [0.14.8](https://github.com/algolia/instantsearch/compare/v0.14.7...v0.14.8) (2015-11-18)

<a name="0.14.7"></a>

## [0.14.7](https://github.com/algolia/instantsearch/compare/v0.14.6...v0.14.7) (2015-11-18)

<a name="0.14.6"></a>

## [0.14.6](https://github.com/algolia/instantsearch/compare/v0.14.5...v0.14.6) (2015-11-17)

<a name="0.14.5"></a>

## [0.14.5](https://github.com/algolia/instantsearch/compare/v0.14.4...v0.14.5) (2015-11-17)

<a name="0.14.4"></a>

## [0.14.4](https://github.com/algolia/instantsearch/compare/v0.14.3...v0.14.4) (2015-11-17)

### Bug Fixes

- **doc:** Expand input on documentation page ([6814a14](https://github.com/algolia/instantsearch/commit/6814a14))

<a name="0.14.3"></a>

## [0.14.3](https://github.com/algolia/instantsearch/compare/v0.14.2...v0.14.3) (2015-11-17)

### Bug Fixes

- **examples:** media logo ([64f850e](https://github.com/algolia/instantsearch/commit/64f850e))
- **website:** demos link to https ([b69c0f5](https://github.com/algolia/instantsearch/commit/b69c0f5))

<a name="0.14.2"></a>

## [0.14.2](https://github.com/algolia/instantsearch/compare/v0.14.1...v0.14.2) (2015-11-17)

### Bug Fixes

- **numericSelector:** pass currentValue as the refined value, not the full obj ([9286b4b](https://github.com/algolia/instantsearch/commit/9286b4b))
- **website:** search icon ([623f071](https://github.com/algolia/instantsearch/commit/623f071))

<a name="0.14.1"></a>

## [0.14.1](https://github.com/algolia/instantsearch/compare/v0.14.0...v0.14.1) (2015-11-16)

### Bug Fixes

- **docs:** minor CSS fixes ([94fa868](https://github.com/algolia/instantsearch/commit/94fa868)), closes [#573](https://github.com/algolia/instantsearch/issues/573)

<a name="0.14.0"></a>

# [0.14.0](https://github.com/algolia/instantsearch/compare/v0.13.0...v0.14.0) (2015-11-13)

### Bug Fixes

- **hierarchicalMenu:** handle limit option ([968cf58](https://github.com/algolia/instantsearch/commit/968cf58)), closes [#585](https://github.com/algolia/instantsearch/issues/585) [#235](https://github.com/algolia/instantsearch/issues/235)
- **numeric-selector:** makes init comply with the new API ([068e8d3](https://github.com/algolia/instantsearch/commit/068e8d3))

### Features

- **core:** sends a custom User Agent ([2561154](https://github.com/algolia/instantsearch/commit/2561154))
- **lifecycle:** makes init API consistent with the rest ([e7ed81f](https://github.com/algolia/instantsearch/commit/e7ed81f))

### BREAKING CHANGES

- all widgets using "facetName" are now using "attributeName"

<a name="0.13.0"></a>

# [0.13.0](https://github.com/algolia/instantsearch/compare/v0.12.3...v0.13.0) (2015-11-12)

### Features

- **clearAll:** New widget ([9e61a14](https://github.com/algolia/instantsearch/commit/9e61a14))

<a name="0.12.3"></a>

## [0.12.3](https://github.com/algolia/instantsearch/compare/v0.12.2...v0.12.3) (2015-11-12)

<a name="0.12.2"></a>

## [0.12.2](https://github.com/algolia/instantsearch/compare/v0.12.1...v0.12.2) (2015-11-12)

### Bug Fixes

- **layout:** missing div (did we lost that fix?) ([9a515e4](https://github.com/algolia/instantsearch/commit/9a515e4))

<a name="0.12.1"></a>

## [0.12.1](https://github.com/algolia/instantsearch/compare/v0.12.0...v0.12.1) (2015-11-12)

### Bug Fixes

- **counts:** missing formatNumber calls ([65e5ba0](https://github.com/algolia/instantsearch/commit/65e5ba0)), closes [#560](https://github.com/algolia/instantsearch/issues/560)
- **doc:** ensure selector is not conflicting ([6528f2c](https://github.com/algolia/instantsearch/commit/6528f2c)), closes [#505](https://github.com/algolia/instantsearch/issues/505)
- **docs:** improved label/input hover debug ([58573db](https://github.com/algolia/instantsearch/commit/58573db)), closes [#503](https://github.com/algolia/instantsearch/issues/503)
- **examples/airbnb:** Use default theme from CDN ([f379c0a](https://github.com/algolia/instantsearch/commit/f379c0a)), closes [#522](https://github.com/algolia/instantsearch/issues/522)
- **examples/youtube:** use the default theme ([cf9a4b6](https://github.com/algolia/instantsearch/commit/cf9a4b6))
- **rangeSlider:** fixed tooltip CSS & outdated default theme. ([c4be2ef](https://github.com/algolia/instantsearch/commit/c4be2ef))

<a name="0.12.0"></a>

# [0.12.0](https://github.com/algolia/instantsearch/compare/v0.11.1...v0.12.0) (2015-11-10)

### Bug Fixes

- **pagination:** Fix double BEM classes on elements ([2ede317](https://github.com/algolia/instantsearch/commit/2ede317)), closes [#500](https://github.com/algolia/instantsearch/issues/500)
- **price-ranges:** fix usage + add test ([89601d7](https://github.com/algolia/instantsearch/commit/89601d7))
- **range-slider:** check usage + display (fixes #395) ([301643a](https://github.com/algolia/instantsearch/commit/301643a)), closes [#395](https://github.com/algolia/instantsearch/issues/395)
- **rangeSlider:** error when no result ([70e8554](https://github.com/algolia/instantsearch/commit/70e8554))
- **theme:** Revert default spacing into pagination ([d755fd5](https://github.com/algolia/instantsearch/commit/d755fd5))

### BREAKING CHANGES

- pagination: Removes all `__disabled`, `__first`, `__last`, `__next`, `__previous`, `__active` and `__page` classes added on the links in the pagination. It only ads them to the parent `li`. Links instead now have a `.ais-pagination--link` class

Previously, the same CSS classes where added to both the `item` (`li`) and the link inside it. I've split them in `--item` and `--link`.

I've also made the various active/first/disabled/etc modifiers as actual `__modifier` classes.

I've updated the tests, the CSS skeleton, the examples and the docs accordingly.

<a name="0.11.1"></a>

## [0.11.1](https://github.com/algolia/instantsearch/compare/v0.11.0...v0.11.1) (2015-11-10)

<a name="0.11.0"></a>

# [0.11.0](https://github.com/algolia/instantsearch/compare/v0.10.0...v0.11.0) (2015-11-06)

### Bug Fixes

- **bem:** Make scss mixins actually follow BEM ([fcfb408](https://github.com/algolia/instantsearch/commit/fcfb408))
- **doc:** bolder font for the navigation ([64f6d56](https://github.com/algolia/instantsearch/commit/64f6d56))
- **InstantSearch:** throw error when init and render are not defined. Fixes #499 ([2830cd3](https://github.com/algolia/instantsearch/commit/2830cd3)), closes [#499](https://github.com/algolia/instantsearch/issues/499)
- **live-doc:** adds a start at a responsive display ([c83967e](https://github.com/algolia/instantsearch/commit/c83967e))
- **live-doc:** adds navigation menu for smaller screens ([a6bb71e](https://github.com/algolia/instantsearch/commit/a6bb71e))
- **live-doc:** fixes flow for texts ([3855071](https://github.com/algolia/instantsearch/commit/3855071))
- **live-doc:** Momentum scroll for iPhone ([60a36ff](https://github.com/algolia/instantsearch/commit/60a36ff))
- **live-doc:** uses only h4 and fixes style of h4 (mobile) ([0fdd2d0](https://github.com/algolia/instantsearch/commit/0fdd2d0))
- **middle-click:** Allow middle click on links ([a7601c0](https://github.com/algolia/instantsearch/commit/a7601c0))
- **range-slider:** Use lodash find instead of Array.prototype.find ([056153c](https://github.com/algolia/instantsearch/commit/056153c))
- **searchBox:** handling pasting event with contextual menu. ([a172458](https://github.com/algolia/instantsearch/commit/a172458)), closes [#467](https://github.com/algolia/instantsearch/issues/467)
- **website:** defered doc scripts ([0c1324f](https://github.com/algolia/instantsearch/commit/0c1324f))
- **website:** doc layout responsive ([a4dc894](https://github.com/algolia/instantsearch/commit/a4dc894))
- **website:** fixed space overlay color animation ([200b8a7](https://github.com/algolia/instantsearch/commit/200b8a7))
- **website:** Fixes & responsive stuff for doc ([7a8f920](https://github.com/algolia/instantsearch/commit/7a8f920))
- **website:** footer markup ([95364a1](https://github.com/algolia/instantsearch/commit/95364a1))
- **website:** home.js lint ([b70e06e](https://github.com/algolia/instantsearch/commit/b70e06e))
- **website:** icon-theme didn't like svgo (to fix) ([38d84af](https://github.com/algolia/instantsearch/commit/38d84af))
- **website:** image alt ([30cca29](https://github.com/algolia/instantsearch/commit/30cca29))
- **website:** jsdelivr for every scripts ([06591d4](https://github.com/algolia/instantsearch/commit/06591d4))
- **website:** Nav Icon + logo ([c1f419c](https://github.com/algolia/instantsearch/commit/c1f419c))
- **website:** only load what's needed in bootstrap ([4843474](https://github.com/algolia/instantsearch/commit/4843474))
- **website:** removed animation debug ([01ac079](https://github.com/algolia/instantsearch/commit/01ac079))
- **website:** space bg fadeIn ([5e09844](https://github.com/algolia/instantsearch/commit/5e09844))
- **website:** unclosed content block ([d42dc3e](https://github.com/algolia/instantsearch/commit/d42dc3e))

### Features

- **hierarchicalMenu:** Adding indentation with default theme ([34885d2](https://github.com/algolia/instantsearch/commit/34885d2))

### BREAKING CHANGES

- hierarchicalMenu: Hierarchical menu levels 1 and 2 now have a margin-left added in the default theme.

<a name="0.10.0"></a>

# [0.10.0](https://github.com/algolia/instantsearch/compare/v0.9.0...v0.10.0) (2015-11-06)

### Bug Fixes

- **api:** rename hideContainerWhenNoResults to autoHideContainer ([3f64bef](https://github.com/algolia/instantsearch/commit/3f64bef)), closes [#407](https://github.com/algolia/instantsearch/issues/407)
- **doc:** ensure the documentation content doesn't overflow ([1e28a4e](https://github.com/algolia/instantsearch/commit/1e28a4e)), closes [#444](https://github.com/algolia/instantsearch/issues/444)
- **hitsPerPageSelector:** Be more tolerant in options ([e14a344](https://github.com/algolia/instantsearch/commit/e14a344))
- **numeric widgets:** synchronizes rounded value between widgets ([b314160](https://github.com/algolia/instantsearch/commit/b314160))
- **numeric-refinement:** Replace Array.find with lodash find/includes ([b3e815c](https://github.com/algolia/instantsearch/commit/b3e815c))
- **price-ranges:** makes it uses same operator as the slider ([ad6f5c2](https://github.com/algolia/instantsearch/commit/ad6f5c2))
- **range-slider:** fixes bound definition ([e15c9b7](https://github.com/algolia/instantsearch/commit/e15c9b7))
- **selector:** makes component as uncontrolled component ([1dda12a](https://github.com/algolia/instantsearch/commit/1dda12a))
- **slider:** fixed `pip` propTypes constraint ([c77b7f4](https://github.com/algolia/instantsearch/commit/c77b7f4))
- **website:** fix images path ([a3f62eb](https://github.com/algolia/instantsearch/commit/a3f62eb))

### Features

- **searchBox:** ability to be non-instant ([b3ef871](https://github.com/algolia/instantsearch/commit/b3ef871)), closes [#458](https://github.com/algolia/instantsearch/issues/458)
- **toggle:** Allow custom on/off values ([9b6c2bf](https://github.com/algolia/instantsearch/commit/9b6c2bf)), closes [#409](https://github.com/algolia/instantsearch/issues/409)

### Performance Improvements

- **hitsPerPageSelector:** Use the correct lodash function ([be9aea7](https://github.com/algolia/instantsearch/commit/be9aea7))

### BREAKING CHANGES

- api: use autoHideContainer instead of hideContainerWhenNoResults

<a name="0.9.0"></a>

# [0.9.0](https://github.com/algolia/instantsearch/compare/v0.8.2...v0.9.0) (2015-11-04)

### Features

- **numericRefinementList:** create numericRefinementList widget using refinementList component ([a29e9c7](https://github.com/algolia/instantsearch/commit/a29e9c7))

<a name="0.8.2"></a>

## [0.8.2](https://github.com/algolia/instantsearch/compare/v0.8.1...v0.8.2) (2015-11-04)

### Bug Fixes

- **doc:** All wigdets in docs are not anymore linked together #fix #446 ([4361320](https://github.com/algolia/instantsearch/commit/4361320)), closes [#446](https://github.com/algolia/instantsearch/issues/446)
- **hitsPerPageSelector:** Issue when state did not have a `hitsPerPage` ([dc9371c](https://github.com/algolia/instantsearch/commit/dc9371c))

<a name="0.8.1"></a>

## [0.8.1](https://github.com/algolia/instantsearch/compare/v0.8.0...v0.8.1) (2015-11-04)

### Bug Fixes

- **hierarchicalMenu:** handle cases where no results after a search ([0a1d0ac](https://github.com/algolia/instantsearch/commit/0a1d0ac)), closes [#385](https://github.com/algolia/instantsearch/issues/385)

### Features

- **build:** allow building React based custom widgets ([cfbbfe4](https://github.com/algolia/instantsearch/commit/cfbbfe4)), closes [#373](https://github.com/algolia/instantsearch/issues/373)

<a name="0.8.0"></a>

# [0.8.0](https://github.com/algolia/instantsearch/compare/v0.7.0...v0.8.0) (2015-11-03)

### Bug Fixes

- **cssClasses:** Fixed duplication of classNames ([e193f45](https://github.com/algolia/instantsearch/commit/e193f45)), closes [#388](https://github.com/algolia/instantsearch/issues/388)
- **doc:** add doctype were missing ([86a18aa](https://github.com/algolia/instantsearch/commit/86a18aa))
- **doc:** new color scheme ([deccc17](https://github.com/algolia/instantsearch/commit/deccc17))
- **doc:** only show a scrollbar when needed ([f2d955b](https://github.com/algolia/instantsearch/commit/f2d955b))
- **hierarchical:** setPage 0 when toggling ([a976539](https://github.com/algolia/instantsearch/commit/a976539)), closes [#371](https://github.com/algolia/instantsearch/issues/371)
- **jsdoc:** use babel-node ([453dc21](https://github.com/algolia/instantsearch/commit/453dc21))
- **live-doc:** generates missing ul ([b43e6e2](https://github.com/algolia/instantsearch/commit/b43e6e2))
- **live-doc:** move scrollbars, removes useless ones ([548ae5f](https://github.com/algolia/instantsearch/commit/548ae5f))
- **live-doc:** moves octocat link to top. Removes stackOverflow ([8ff6a79](https://github.com/algolia/instantsearch/commit/8ff6a79))
- **live-doc:** Moves version in the main content ([27731c3](https://github.com/algolia/instantsearch/commit/27731c3))
- **live-reload:** integrates the links into the menu flow ([c118051](https://github.com/algolia/instantsearch/commit/c118051))
- **numerical widgets:** s/facetName/attributeName ([f209f5d](https://github.com/algolia/instantsearch/commit/f209f5d)), closes [#431](https://github.com/algolia/instantsearch/issues/431)
- **refinementList:** ensure the key reflects the underlying state ([b048f0b](https://github.com/algolia/instantsearch/commit/b048f0b)), closes [#398](https://github.com/algolia/instantsearch/issues/398)

### Features

- **examples:** try examples instead of themes ([bedffce](https://github.com/algolia/instantsearch/commit/bedffce))
- **headerFooter:** Only add markup if a template is defined ([7a2d22d](https://github.com/algolia/instantsearch/commit/7a2d22d)), closes [#370](https://github.com/algolia/instantsearch/issues/370)
- **priceRanges:** Add BEM classes and tests ([ad58d7a](https://github.com/algolia/instantsearch/commit/ad58d7a)), closes [#387](https://github.com/algolia/instantsearch/issues/387)

### BREAKING CHANGES

- numerical widgets: the priceRanges and rangeSlider widgets are now using `attributeName` instead of `facetName`.
- priceRanges: `ais-price-ranges--range` are now named `ais-price-ranges--item` and are wrapped in a `ais-price-ranges--list`.

I've moved the bottom form into it's own PriceRangesForm component, along with its own tests. I've fixed a minor typo where the component was internally named PriceRange (without the final **s**).

I factorize some logic form the render in individual methods and manage to individually test them. This was not an easy task. I had to mock the default `render` (so it does nothing) before instantiating the component. Then, I was able to call each inner method individually. This requires to stub prototype methods in beforeEach, then restore them in afterEach. I've added a few helper methods, this can surely be simplified again but this gives nice granularity in testing.

I've renamed the `range` items to `item` and wrapped them in a `list`. I've also added classes to all elements we add (`label`, `separator`, etc). I've removed the empty `span`s.

- headerFooter: The `<div class="ais-header">` and `<div class="ais-footer">` markup is only added when a `templates.{header,footer}` is passed.

<a name="0.7.0"></a>

# [0.7.0](https://github.com/algolia/instantsearch/compare/v0.6.5...v0.7.0) (2015-10-28)

### Features

- **searchBox:** Add `wrapInput` option ([b327dbc](https://github.com/algolia/instantsearch/commit/b327dbc))
- **urls:** ability to create an URL from a set of params ([9ca8369](https://github.com/algolia/instantsearch/commit/9ca8369)), closes [#372](https://github.com/algolia/instantsearch/issues/372)

### BREAKING CHANGES

- urls: the instantsearch.createURL method is now taking a simple JS object and not a SearchParameter instance anymore.
- searchBox: The `input` used by the search-box widget is now wrapped in a `<div class="ais-search-box">` by default. This can be turned off with `wrapInput: false`.

This PR is a bit long, I had to do some minor refactoring to keep the new code understandable. I simply split the large `init` method into calls to smaller methods.

There is some vanilla JS DOM manipulation involved to handle all the possible cases: targeting an `input` or a `div`, adding or not the `poweredBy`, adding or not the wrapping div.

Note that there is no `targetNode.insertAfter(newNode)` method, so I had to resort to the old trick of `parentNode.insertBefore(newNode, targetNode.nextSibling)`.

<a name="0.6.5"></a>

## [0.6.5](https://github.com/algolia/instantsearch/compare/v0.6.4...v0.6.5) (2015-10-27)

<a name="0.6.4"></a>

## [0.6.4](https://github.com/algolia/instantsearch/compare/v0.6.3...v0.6.4) (2015-10-27)

<a name="0.6.3"></a>

## [0.6.3](https://github.com/algolia/instantsearch/compare/v0.6.2...v0.6.3) (2015-10-27)

<a name="0.6.2"></a>

## [0.6.2](https://github.com/algolia/instantsearch/compare/v0.6.1...v0.6.2) (2015-10-27)

<a name="0.6.1"></a>

## [0.6.1](https://github.com/algolia/instantsearch/compare/v0.6.0...v0.6.1) (2015-10-27)

<a name="0.6.0"></a>

# [0.6.0](https://github.com/algolia/instantsearch/compare/v0.5.1...v0.6.0) (2015-10-27)

### Bug Fixes

- **generateRanges:** avoid any infinite loop. Fix #351 ([4965222](https://github.com/algolia/instantsearch/commit/4965222)), closes [#351](https://github.com/algolia/instantsearch/issues/351)
- **index-selector:** Fix tests passing with incorrect parameters ([8fc31b9](https://github.com/algolia/instantsearch/commit/8fc31b9))
- **index-selector:** Update usage and error ([a7e4c10](https://github.com/algolia/instantsearch/commit/a7e4c10))
- **priceRanges:** fixed 'active' CSS class not using BEM ([ec0d1b1](https://github.com/algolia/instantsearch/commit/ec0d1b1))
- **priceRanges:** plug the URL computation. Fix #354 ([fbf4022](https://github.com/algolia/instantsearch/commit/fbf4022)), closes [#354](https://github.com/algolia/instantsearch/issues/354)
- **template:** transformData checks too strict ([609f123](https://github.com/algolia/instantsearch/commit/609f123)), closes [#347](https://github.com/algolia/instantsearch/issues/347)

### Features

- **hits-per-page-selector:** New widget to change hitsPerPage ([a3e0f78](https://github.com/algolia/instantsearch/commit/a3e0f78)), closes [#331](https://github.com/algolia/instantsearch/issues/331)

### BREAKING CHANGES

- priceRanges: the `input-group` modifier has been renamed to `form`

<a name="0.5.1"></a>

## [0.5.1](https://github.com/algolia/instantsearch/compare/v0.5.0...v0.5.1) (2015-10-22)

### Bug Fixes

- **autohide:** Rename attribute to `hideContainerWhenNoResults` ([ecb6756](https://github.com/algolia/instantsearch/commit/ecb6756)), closes [#325](https://github.com/algolia/instantsearch/issues/325)

### BREAKING CHANGES

- autohide: Widget attribute is now named `hideContainerWhenNoResults` instead of `hideWhenNoResults` to be more explicit on what it is really doing.

Also internally renamed the `autoHide` decorator to `autoHideContainer`

<a name="0.5.0"></a>

# [0.5.0](https://github.com/algolia/instantsearch/compare/v0.4.1...v0.5.0) (2015-10-22)

### Bug Fixes

- **example:** Example searchbox ([cdad6c7](https://github.com/algolia/instantsearch/commit/cdad6c7)), closes [#157](https://github.com/algolia/instantsearch/issues/157)
- **hierarchicalFacets:** use a real attribute name for the hierarchicalFacet name ([0d2a455](https://github.com/algolia/instantsearch/commit/0d2a455))
- **hits:** Fix warning about unique key in iterator ([0c9468c](https://github.com/algolia/instantsearch/commit/0c9468c))
- **onClick:** do not replace the browser's behavior on special clicks ([8562d49](https://github.com/algolia/instantsearch/commit/8562d49)), closes [#278](https://github.com/algolia/instantsearch/issues/278)
- **package.json:** typo in repository ([33cf196](https://github.com/algolia/instantsearch/commit/33cf196))
- **pagination:** do not generate the URL for disabled pages. ([e5d78ab](https://github.com/algolia/instantsearch/commit/e5d78ab)), closes [#282](https://github.com/algolia/instantsearch/issues/282)
- **poweredBy:** Extract its hiding capabilities ([f5fa9ee](https://github.com/algolia/instantsearch/commit/f5fa9ee)), closes [#189](https://github.com/algolia/instantsearch/issues/189)
- **rangeSlider:** refinements cleanuo ([16c132c](https://github.com/algolia/instantsearch/commit/16c132c)), closes [#147](https://github.com/algolia/instantsearch/issues/147)
- **rangeSlider:** restore wrongly removed state nesting ([3ed3d39](https://github.com/algolia/instantsearch/commit/3ed3d39))
- **React:** require React in order for JSX to work in widgets ([64d6011](https://github.com/algolia/instantsearch/commit/64d6011))
- **react-nouislider:** upgrade react-nouislider to avoid mutating props ([1b7cd1d](https://github.com/algolia/instantsearch/commit/1b7cd1d))
- **refinementList:** Remove `singleRefine` attribute ([db73e38](https://github.com/algolia/instantsearch/commit/db73e38)), closes [#220](https://github.com/algolia/instantsearch/issues/220)
- **refinementList:** singleRefine is not dependant from operator ([d29dff6](https://github.com/algolia/instantsearch/commit/d29dff6))
- **RefinementList:** click on child should not click on parent ([d476da2](https://github.com/algolia/instantsearch/commit/d476da2)), closes [#191](https://github.com/algolia/instantsearch/issues/191)
- **Slider:** cssClasses.body handled by headerFooter HOC ([d8d20b2](https://github.com/algolia/instantsearch/commit/d8d20b2))
- **stats:** Move CSS classes definition to widget from component ([99073cd](https://github.com/algolia/instantsearch/commit/99073cd))
- **transformData:** add an explicit error message ([94c53d3](https://github.com/algolia/instantsearch/commit/94c53d3)), closes [#212](https://github.com/algolia/instantsearch/issues/212)
- **transformData:** this test is not needed, already covered by Template ([36e5b9c](https://github.com/algolia/instantsearch/commit/36e5b9c))
- **validate-commit:** Update the regexp ([96b93ba](https://github.com/algolia/instantsearch/commit/96b93ba))

### Features

- **bem:** Add BEM to the index-selector widget ([564da51](https://github.com/algolia/instantsearch/commit/564da51))
- **bem:** Add BEM-styling to the Stats widget ([92cebeb](https://github.com/algolia/instantsearch/commit/92cebeb))
- **build:** Add minified CSS theme version to build ([77f0640](https://github.com/algolia/instantsearch/commit/77f0640))
- **core/lifecycle-event:** emits `render` when render ([7f03ae9](https://github.com/algolia/instantsearch/commit/7f03ae9))
- **es7:** Enable `es7.objectRestSpread` ([fc2fbc4](https://github.com/algolia/instantsearch/commit/fc2fbc4))
- **headerFooter:** Add BEM classes to header and footer ([9e9d438](https://github.com/algolia/instantsearch/commit/9e9d438)), closes [#259](https://github.com/algolia/instantsearch/issues/259)
- **hierarchical-menu:** Add BEM classes ([58ec191](https://github.com/algolia/instantsearch/commit/58ec191))
- **hierarchical-menu:** Add CSS classes dependent on the depth ([1256ea8](https://github.com/algolia/instantsearch/commit/1256ea8))
- **hits:** Add BEM styling to the `hits` widget ([6681960](https://github.com/algolia/instantsearch/commit/6681960))
- **menu:** Add BEM classes ([467f49e](https://github.com/algolia/instantsearch/commit/467f49e))
- **pagination:** add `scrollTo` option ([e6cd621](https://github.com/algolia/instantsearch/commit/e6cd621)), closes [#73](https://github.com/algolia/instantsearch/issues/73)
- **priceRanges:** new Amazon-style price ranges widget ([e5fe344](https://github.com/algolia/instantsearch/commit/e5fe344))
- **priceRanges:** polish priceRanges widget ([0994e6f](https://github.com/algolia/instantsearch/commit/0994e6f))
- **refinement-list:** Add BEM naming ([b09b830](https://github.com/algolia/instantsearch/commit/b09b830))
- **refinementlist:** Move default templates to its own file ([cb6fa16](https://github.com/algolia/instantsearch/commit/cb6fa16))
- **refinementList:** Limits improvement ([ebcc8a9](https://github.com/algolia/instantsearch/commit/ebcc8a9))
- **searchbox:** Make the searchBox BEMish ([db8bd60](https://github.com/algolia/instantsearch/commit/db8bd60))
- **theme:** Add `searchBox` widget to default theme ([def831f](https://github.com/algolia/instantsearch/commit/def831f))
- **theme:** Add debug.css file ([ff8f2dc](https://github.com/algolia/instantsearch/commit/ff8f2dc)), closes [#249](https://github.com/algolia/instantsearch/issues/249)
- **theme:** Move `indexSelector` styling to default.css ([1841ef1](https://github.com/algolia/instantsearch/commit/1841ef1))
- **theme:** Move all default css rules to `default.css` ([57c8c65](https://github.com/algolia/instantsearch/commit/57c8c65))
- **toggle:** Adding BEM class naming ([8730c97](https://github.com/algolia/instantsearch/commit/8730c97))
- **urlSync:** url generation for widget links. Fix #29 ([23dd505](https://github.com/algolia/instantsearch/commit/23dd505)), closes [#29](https://github.com/algolia/instantsearch/issues/29)

### BREAKING CHANGES

- build: You should now include the `default.css` file in your page to get the default styling.

* Added `clean-css` as minifier
* Updated build script
* Updated documentation about loading it from jsdeliver
* `npm shrinkwrap` madness

- hits: The hit template and transform data key is renamed from `hit` to `item` to stay consistent with the other widgets
- menu: The default template now has the count element inside the link, not outside.
- stats: `cssClasses.root` now applies to the main root element (above header and footer) and no longer to the template wrapper. To style the template wrapper, use `cssClasses.body`
- theme: Classes are now named `ais-index-selector` and `ais-index-selector--item` to stay consistent with other widgets.

Updated tests as well. Widget is responsible for adding default classes + user-defined ones. Then component simply add them to the markup.

- theme: "Powered by" styles are now `ais-search-box--powered-by` and `ais-search-box--powered-by-link`.
- urlSync: urlSync is not a widget anymore. It's now an option of instantsearch(appID, apiKey, opts);. See the README.md for more info.
- searchbox: The `searchBox` widget now expect a `cssClasses.{input, poweredBy}`
- bem: We now use a `span.ais-stats--time` instead of a `small` tag in the stats widget.
- bem: We now use `cssClasses.select` and `cssClasses.option` instead of `cssClass` for the index-selector widget.

<a name="0.4.1"></a>

## [0.4.1](https://github.com/algolia/instantsearch/compare/v0.4.0...v0.4.1) (2015-10-05)

### Bug Fixes

- allow passing only one key of transformData as an object ([e0ce89f](https://github.com/algolia/instantsearch/commit/e0ce89f))
- **search-box:** Fix #137 autofocus must be configurable ([51f01be](https://github.com/algolia/instantsearch/commit/51f01be)), closes [#137](https://github.com/algolia/instantsearch/issues/137)
- **searchBox:** do not update input's value if focused ([0e85f0d](https://github.com/algolia/instantsearch/commit/0e85f0d)), closes [#163](https://github.com/algolia/instantsearch/issues/163)
- **templatesConfig:** helpers are now following Mustache spec ([8f3502f](https://github.com/algolia/instantsearch/commit/8f3502f))
- **url-sync:** handle both hash and query parameter fix #165 ([8d84de6](https://github.com/algolia/instantsearch/commit/8d84de6)), closes [#165](https://github.com/algolia/instantsearch/issues/165)

<a name="0.4.0"></a>

# [0.4.0](https://github.com/algolia/instantsearch/compare/v0.3.0...v0.4.0) (2015-09-30)

### Bug Fixes

- **pagination:** handle cases where maxPages is low ([d3c9959](https://github.com/algolia/instantsearch/commit/d3c9959)), closes [#100](https://github.com/algolia/instantsearch/issues/100)
- **searchBox:** allow searchBox to reuse an `<input>` ([e820cc3](https://github.com/algolia/instantsearch/commit/e820cc3))
- **searchBox:** Use `hasAttribute` instead of `getAttribute` ([a122af9](https://github.com/algolia/instantsearch/commit/a122af9))
- **slider:** allow handles to reach the real start and end of the slider ([03ed3f5](https://github.com/algolia/instantsearch/commit/03ed3f5))
- **slider:** fix tap event throwing ([d906d3e](https://github.com/algolia/instantsearch/commit/d906d3e)), closes [#120](https://github.com/algolia/instantsearch/issues/120)
- **Template:** add default value for template ([4291014](https://github.com/algolia/instantsearch/commit/4291014))
- **url-sync:** make input not to lose focus ([63488d3](https://github.com/algolia/instantsearch/commit/63488d3))

### Features

- **rangeSlider:** add headerFooter decorator ([19090c3](https://github.com/algolia/instantsearch/commit/19090c3))
- **searchBox:** add headerFooter decorator to the Component ([5974a88](https://github.com/algolia/instantsearch/commit/5974a88))
- **templatesConfig:** helpers and options transferred to Template ([456d781](https://github.com/algolia/instantsearch/commit/456d781)), closes [#99](https://github.com/algolia/instantsearch/issues/99)
- **toggle:** add headerFooter decorator ([8a70c7d](https://github.com/algolia/instantsearch/commit/8a70c7d))
- **url-sync:** Add `is_v` version to url ([9f597a0](https://github.com/algolia/instantsearch/commit/9f597a0)), closes [#70](https://github.com/algolia/instantsearch/issues/70)
- hierarchicalWidget ([1facd9d](https://github.com/algolia/instantsearch/commit/1facd9d))

### BREAKING CHANGES

- S:

* toggle: removed template

- - removed: inputClass

<a name="0.3.0"></a>

# [0.3.0](https://github.com/algolia/instantsearch/compare/v0.2.2...v0.3.0) (2015-09-24)

### Bug Fixes

- Allow not specifying `cssClass` on index selector ([4e9324f](https://github.com/algolia/instantsearch/commit/4e9324f))
- More explicit error message when DOM selector is invalid ([d36a2ad](https://github.com/algolia/instantsearch/commit/d36a2ad)), closes [#105](https://github.com/algolia/instantsearch/issues/105)
- Pass nbHits, hitsPerPage, nbPages and page to Stats widget ([deefd23](https://github.com/algolia/instantsearch/commit/deefd23)), closes [#106](https://github.com/algolia/instantsearch/issues/106)
- **hideIfEmpty:** should be hideWhenNoResults ([21877a0](https://github.com/algolia/instantsearch/commit/21877a0))
- **Hits:** handle the display when there is no result ([544ff5c](https://github.com/algolia/instantsearch/commit/544ff5c))
- **menu:** send an empty array values when no values ([12cd7dc](https://github.com/algolia/instantsearch/commit/12cd7dc)), closes [#107](https://github.com/algolia/instantsearch/issues/107)
- **pagination:** missing showFirstLast attribute when instantiating ([28fa0ae](https://github.com/algolia/instantsearch/commit/28fa0ae))
- **SearchBox:** Missing poweredBy in the not focused SearchBox ([ef695ff](https://github.com/algolia/instantsearch/commit/ef695ff))
- **slider:** hide slider if when no hits/matches ([31e4a80](https://github.com/algolia/instantsearch/commit/31e4a80)), closes [#107](https://github.com/algolia/instantsearch/issues/107)

### Features

- **menu,refinementList:** add header/item/footer templating solution ([58275dc](https://github.com/algolia/instantsearch/commit/58275dc)), closes [#101](https://github.com/algolia/instantsearch/issues/101)
- **searchBox:** add poweredBy option, disabled by default ([c9da165](https://github.com/algolia/instantsearch/commit/c9da165))
- **stats:** add query variable to the template ([75f457d](https://github.com/algolia/instantsearch/commit/75f457d))
- **transformData:** add to every widget using the Template component ([d080a03](https://github.com/algolia/instantsearch/commit/d080a03)), closes [#116](https://github.com/algolia/instantsearch/issues/116)
- **transformData:** refinementList + menu implementation ([0a0e36e](https://github.com/algolia/instantsearch/commit/0a0e36e))
- **urlSync:** add urlSync widget ([50fc4ce](https://github.com/algolia/instantsearch/commit/50fc4ce))
- **widgets:** auto hide some widgets ([187b4bd](https://github.com/algolia/instantsearch/commit/187b4bd))

### BREAKING CHANGES

- Removed from menu and refinementList:

* rootClass => cssClasses.root
* itemCLass => cssClasses.item
* template => templates.item

Added to menu and refinementList:

- cssClasses{root,list,item}
- templates{header,item,footer}
- widget (container) is automatically hidden by default
- hideWhenNoResults=true

This was done to allow more templating solutions like discussed in #101.

<a name="0.2.2"></a>

## [0.2.2](https://github.com/algolia/instantsearch/compare/v0.1.0...v0.2.2) (2015-09-17)

<a name="0.2.1"></a>

## [0.2.1](https://github.com/algolia/instantsearch/compare/v0.1.0...v0.2.1) (2015-09-17)

<a name="0.1.0"></a>

# 0.1.0 (2015-09-17)

First release

<a name="0.0.0"></a>

## [0.0.0](https://github.com/algolia/instantsearch/compare/v0.0.0...v0.0.0) (2015-09-17)

First commit
