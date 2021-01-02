/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","2932c62d172a9efde67feb286e2c8aea"],["/2020/10/23/index.html","24ee636a6b922bfb27c599d367bff5c7"],["/2020/10/24/index.html","6940a85d6a8234dac0a2b09dcab3519e"],["/2020/10/25/index.html","60fee1bb71367da748a0a66aa128e6ae"],["/2020/10/26/index.html","3296ea520da4091cce5c8ea2bbb32236"],["/2020/10/27/index.html","b2365f5eb1a6da1bd54ab84cf0dccaff"],["/2020/10/28/index.html","34f31b2ebe47750ef091e3cf979474f6"],["/2020/11/01/index.html","a441ed587f01dd1b477b81a0ad344d38"],["/2020/11/03/index.html","deeed22dc1080b39d97f01217754576d"],["/2020/11/08/index.html","d674ab0ae028ed100c6ef3d8e3788c7d"],["/2020/11/09/index.html","7b77d742b53e8951cbd69b0cfa5598e9"],["/2020/11/19/index.html","0b26cb8b23f04f004a8235074e9df7b7"],["/2020/11/28/index.html","d58221d7ada2ae6079a6b7a72f02de39"],["/2020/11/30/index.html","b4607d84ec4e6c6abfca9cdeab453597"],["/2020/12/01/index.html","dd83b5dad38ee312b04928eaae8ad27f"],["/2020/12/02/index.html","735a46a159ebc19d7e40f961c95a997d"],["/2020/12/04/index.html","2ecbde7cb9a666f0e1b18c36b07a0452"],["/2020/12/05/index.html","9b6af2fa803b4aaebdac3d181d951c75"],["/2020/12/09/index.html","2d9d6f16f1a22fd872370b1460b0ed67"],["/2020/12/14/index.html","eb52539a118ad9be21109d3454100b20"],["/2020/12/16/index.html","7b89513ba5f160fda839c32b9314fa22"],["/2020/12/20/index.html","2bb4fd0e4f2e246287e7687b5c55e86d"],["/2021/01/01/index.html","7cac5011891d34d71520b9ec6a0ed8bd"],["/2021/01/02/index.html","f43be5c7471b387bd0794c4320e1a824"],["/about/index.html","9a9913008f68437a8f59b58768f05d2b"],["/archives/2020/10/index.html","33a2f91bb9b3d48b4b3a3c57d399c287"],["/archives/2020/11/index.html","487504a912a7f0b9c29375f31b409e17"],["/archives/2020/12/index.html","5f7109912c0050fb46e0e833a5e074d5"],["/archives/2020/index.html","d40bc1c5ec9bdd6b617fa9d1a885052a"],["/archives/2020/page/2/index.html","a703c238f43bffa434c07ed20a801441"],["/archives/2020/page/3/index.html","7b214a16c800f051405390dea4a89314"],["/archives/2021/01/index.html","b0b29dfbf5b10e501a12e48599f07e69"],["/archives/2021/index.html","f748fdd5712d9957e5be15940bbcc73f"],["/archives/index.html","0bdd8985c4f96bb8010de4e4bbdc0024"],["/archives/page/2/index.html","7784c0f9b537e7591348922b1fce0e97"],["/archives/page/3/index.html","f9fa93f5cdd351e01fc23b36318c5f27"],["/categories/index.html","9b42e8fce546c8c74dd3ecd81ba80a28"],["/categories/官方公告/index.html","576851f90ad1bba07d545bb9281ec309"],["/categories/每日精选/index.html","834fee74db684ed04c55d40aac0999b9"],["/categories/每日精选/page/2/index.html","15e69e86bd1e1d482bbb2693aa1c3c8a"],["/categories/每日精选/page/3/index.html","20e7798cb1ff8cfba30564d0319f6fd3"],["/css/main.css","8e8ebc468f1520aa6fd0060b17b808ae"],["/index.html","f2bcc3473286710d2f06a3577c718c1f"],["/js/lib/busuanzi.min.js","ef330731559c710490682e854defea10"],["/js/lib/lozad.min.js","a42324d24f195ccd420a6d423c6d3729"],["/js/lib/prism/prism-coy.min.css","888d875c3126d5922dc4701f2135b3c6"],["/js/lib/prism/prism-dark.min.css","70689b1db280d6086d08c99051349570"],["/js/lib/prism/prism-funky.min.css","d8ecc74f7bfd22309f66478188d5bb07"],["/js/lib/prism/prism-line-numbers.min.css","e690a9b079409bfb523cbc2003d14768"],["/js/lib/prism/prism-okaidia.min.css","87fe106c07ef9f714a68b93f34e567ed"],["/js/lib/prism/prism-solarizedlight.min.css","5834260d695ea90973723c1121b19954"],["/js/lib/prism/prism-tomorrow.min.css","b2faddeab4fc2cc7cc2d1451990484a2"],["/js/lib/prism/prism-twilight.min.css","bf1e3650a2fa9cd3bdc8232cfbd6bc49"],["/js/lib/prism/prism.min.css","338d631c879470b5ab30a0e46c61dae7"],["/js/main.js","13865ec3289525575b642f7a7818ebb4"],["/links/index.html","310569d5e0c41439ce6a02429ad5c7db"],["/page/2/index.html","2f07032c3f8494e0dc79e274560baddd"],["/page/3/index.html","6972da30a5c674f0200980564c187ea1"],["/sw-register.js","1758c658974537d0de7a630eb670126c"],["/tags/index.html","e7446b756e605b4eda0dc26fdc7723e6"],["/tags/每日精选/index.html","c3d397cd7002584c5ee7528084db1a2f"],["/tags/每日精选/page/2/index.html","16be92d0846f2c679dae7349e68163eb"],["/tags/每日精选/page/3/index.html","36e17ffa7b04668dadec2ff4817052ee"],["/tags/线报云/index.html","fac6a9ed29ffc059baf76cfa4be18c76"],["/tags/线报云/page/2/index.html","5eaf8a3d4f95fb271bb7b7234a7896a3"],["/tags/线报云/page/3/index.html","8210404566f6f8268f27a76632dcdc62"],["/tags/线报云精选/index.html","e13962c600173d666670ae634411c2c4"],["/tags/线报云精选/page/2/index.html","e363add5aca3d60fce1e8c93d479eead"],["/tags/线报云精选/page/3/index.html","883aa2d4f236d2bec084fe3fba6de17c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
