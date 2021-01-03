/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","e2395ffd87c694d5e5eda0fd01b7dbe4"],["/2020/10/23/index.html","ae493d6bad44cd5c4df5b1b27d569d91"],["/2020/10/24/index.html","5b5d68145e69736a5db910abeacd9368"],["/2020/10/25/index.html","7d4070587ac40948a06c2ab594c0e718"],["/2020/10/26/index.html","6a3484cba53d40259ee32b627ebfb956"],["/2020/10/27/index.html","6fd0d6c007bde4fadc607811c31fedd4"],["/2020/10/28/index.html","eeb6704d67a240203f711c65ae79911e"],["/2020/11/01/index.html","d0b0cfcf60155c455fd5fe97c967757e"],["/2020/11/03/index.html","02a72f6e351e3930d3f3540faff47695"],["/2020/11/08/index.html","c3bdd7f25cee42bd4230d5e593261e99"],["/2020/11/09/index.html","60a73700ac436f853900dbe37e20440a"],["/2020/11/19/index.html","7cb1da5214f9c1a1dc6b5609db6116d7"],["/2020/11/28/index.html","41a0faef5608ee2c5e836f41b3f1e6ce"],["/2020/11/30/index.html","e99809ac3c4f00e59974d8377e3492c0"],["/2020/12/01/index.html","6b1b394ff7a521e8bb58cc05c73d3bfc"],["/2020/12/02/index.html","d2e414963e904f7df96589032b23e888"],["/2020/12/04/index.html","f2e067e2658d05067403db61e7942406"],["/2020/12/05/index.html","d3970268fb3042ee4a05810bd70a54cc"],["/2020/12/09/index.html","d81d5c932dd5c73622282c1b58cadac5"],["/2020/12/14/index.html","52e1790b54cffb5143e843d650be5c46"],["/2020/12/16/index.html","29b345440cd7372595357ca8e448f4e2"],["/2020/12/20/index.html","bdde19f2e1d1a94fd327726f60e535a5"],["/2021/01/01/index.html","6dff145af069ff30352da5cd365ee630"],["/2021/01/02/index.html","06a51c48406f3143c9c3ca3634d32bcb"],["/2021/01/03/index.html","ca8d107bf3c36ce488db3d33d37056e3"],["/about/index.html","9a7dcbc08a5624020c4ddb29cb584873"],["/archives/2020/10/index.html","8471d8c552fa53aaaa3312ba5d315e2e"],["/archives/2020/11/index.html","5e0136cf642a5b7f9f63b2a79c902b42"],["/archives/2020/12/index.html","a3ccf8dcf544e8f94d432a8b4811753a"],["/archives/2020/index.html","7cc59c247d875b516fc590df70104560"],["/archives/2020/page/2/index.html","35cc8c48f14f56b52f94d79eb4bd6e6e"],["/archives/2020/page/3/index.html","a53c951ec9f46a6bbda9a7d184569d5d"],["/archives/2021/01/index.html","eee4ad572605fdff7cc9c7ddb77f29f5"],["/archives/2021/index.html","1d9d4020e3fd1a7a5653497e8b3c97c5"],["/archives/index.html","a95a2140c84171fb7d34ca1f2f9eac84"],["/archives/page/2/index.html","9de266725bf67cd80c1b7c041c9d6ea6"],["/archives/page/3/index.html","67cc6909e5eaa0bb44f17a675ffed630"],["/categories/index.html","f0ae6adf2da8535ce38ff912d2f79cf3"],["/categories/官方公告/index.html","9ef76a411cf6c42e00202519900a2a8c"],["/categories/每日精选/index.html","4021b78aa7c603221068428748c45df3"],["/categories/每日精选/page/2/index.html","cf308ae64dfa69d7b9170f6ee88c521f"],["/categories/每日精选/page/3/index.html","941d0e529aa593a96c627e915748eefb"],["/css/main.css","8e8ebc468f1520aa6fd0060b17b808ae"],["/index.html","c1219fad67b19ce20cd7ab7a5fce967b"],["/js/lib/busuanzi.min.js","ef330731559c710490682e854defea10"],["/js/lib/lozad.min.js","a42324d24f195ccd420a6d423c6d3729"],["/js/lib/prism/prism-coy.min.css","888d875c3126d5922dc4701f2135b3c6"],["/js/lib/prism/prism-dark.min.css","70689b1db280d6086d08c99051349570"],["/js/lib/prism/prism-funky.min.css","d8ecc74f7bfd22309f66478188d5bb07"],["/js/lib/prism/prism-line-numbers.min.css","e690a9b079409bfb523cbc2003d14768"],["/js/lib/prism/prism-okaidia.min.css","87fe106c07ef9f714a68b93f34e567ed"],["/js/lib/prism/prism-solarizedlight.min.css","5834260d695ea90973723c1121b19954"],["/js/lib/prism/prism-tomorrow.min.css","b2faddeab4fc2cc7cc2d1451990484a2"],["/js/lib/prism/prism-twilight.min.css","bf1e3650a2fa9cd3bdc8232cfbd6bc49"],["/js/lib/prism/prism.min.css","338d631c879470b5ab30a0e46c61dae7"],["/js/main.js","13865ec3289525575b642f7a7818ebb4"],["/links/index.html","bdeffad887dd8c1b29e285f2c2598588"],["/page/2/index.html","262409d92c514b57a3d70af081ac03bc"],["/page/3/index.html","a7b52fca457810a51c62ac5ec4e0aac5"],["/sw-register.js","bb36cf599925a2c6af033780a79a3087"],["/tags/index.html","b37b5c6c3a831445b8098a256ad8148d"],["/tags/每日精选/index.html","5806f5ce0d7bcf5a5f89424aa90e8a5b"],["/tags/每日精选/page/2/index.html","eb38735d5e34a0b783f0bb526bf25050"],["/tags/每日精选/page/3/index.html","b0ce485980a2dbc0fac57415794cd01b"],["/tags/线报云/index.html","32bb02c972b0e4a9e8d72abf8ceb435b"],["/tags/线报云/page/2/index.html","2fe3d5d5426569bb4aa2705a6b57ad57"],["/tags/线报云/page/3/index.html","a79a4e6dbd909024019bf254a2b80e25"],["/tags/线报云精选/index.html","e60089df4b7754a0efd9ffdfcf82295f"],["/tags/线报云精选/page/2/index.html","66c3a4d6468abd8ee473ba84fe9b02f6"],["/tags/线报云精选/page/3/index.html","620959b18fd665896f93282c3c338317"]];
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
