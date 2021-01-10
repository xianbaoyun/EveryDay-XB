/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","dadfcc9870d44780619f12bdb109be13"],["/2020/10/23/index.html","25e526e054f952f69c6c79c8c91ef3a3"],["/2020/10/24/index.html","69b4d9b4519ae67de2fa2b815afa2e44"],["/2020/10/25/index.html","75df70660212ddd48df521dc8327a72e"],["/2020/10/26/index.html","d65db3c1a7cd4063e21e1416664e02a0"],["/2020/10/27/index.html","b4281321cb9f890a71e95349fb0b516b"],["/2020/10/28/index.html","a4fc68006fc0ee39ee0f648b650f2383"],["/2020/11/01/index.html","20dd8bb4d26f27af8163926d56f2142a"],["/2020/11/03/index.html","536103279c0326bbdfd20eac9e83588d"],["/2020/11/08/index.html","16da040bf259849ca597e23502650588"],["/2020/11/09/index.html","32c98e2aa912d42ecc3e2cbf5dcf143f"],["/2020/11/19/index.html","c5056cc9a87c47dfe78db412748199ce"],["/2020/11/28/index.html","0c6760bb71e22c603c28b1d58f4f4b51"],["/2020/11/30/index.html","a19864ed6bde847f23859082f7ccd86a"],["/2020/12/01/index.html","1864ddaf4a73f94de4026db024b31e8a"],["/2020/12/02/index.html","0c1e8b353525c82a6f24b20a2f11b26a"],["/2020/12/04/index.html","fce2311028bbf18f1debbc82cdd04e35"],["/2020/12/05/index.html","a05176363a46e1734f2ba7350164559c"],["/2020/12/09/index.html","619826d5054ea462f3c994dccf120b60"],["/2020/12/14/index.html","b41810a2124d343c451fc88d1a9bb13c"],["/2020/12/16/index.html","a068d7aefeebc0316ff29d2f97cf6db9"],["/2020/12/20/index.html","54024e439c7f5db4a61cbb1b58beda5f"],["/2021/01/01/index.html","394d7274e33263164ceb6dbac06091ed"],["/2021/01/02/index.html","9696a7fcc3c9c39c4c1a85ce7e0ad7c1"],["/2021/01/03/index.html","a20d28eeda214329bedd4663bc41a5ee"],["/about/index.html","f4b4f8084eb09c1041c84433fcb12a3b"],["/archives/2020/10/index.html","ad5f9ade58bfc20128f24b57a8029a7f"],["/archives/2020/11/index.html","67663c32e9b98aaf28ec4dd56bf36caf"],["/archives/2020/12/index.html","5eeef380fc0e291d7ca488ef6003788b"],["/archives/2020/index.html","5ac96c4b0bbf870368c7283b1e6cdc3d"],["/archives/2020/page/2/index.html","7c15a2b6450b8d94ef6a2099bbbeec8a"],["/archives/2020/page/3/index.html","2530cfef9467a672dd2c88a60c324bbc"],["/archives/2021/01/index.html","a28bda885035481b68d74f6b4d18c2a8"],["/archives/2021/index.html","cdf0e689c63669857467abd57a859a19"],["/archives/index.html","4861bd3370a91260d85af1b6291b05e6"],["/archives/page/2/index.html","4861bd3370a91260d85af1b6291b05e6"],["/archives/page/3/index.html","4861bd3370a91260d85af1b6291b05e6"],["/categories/index.html","c6c3687fae794549fbeec12a1a2e35cf"],["/categories/官方公告/index.html","d470f3ca71e17aa41e1e24753266bbd3"],["/categories/每日精选/index.html","53b44c3419bfbbef874a21c502c9fff4"],["/categories/每日精选/page/2/index.html","cad3ae7e15ecb620c284c9c97a3c425c"],["/categories/每日精选/page/3/index.html","9c13b82d17fd089fd7c4b336bf972a38"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","c6b58824763fb34c189705c53ca3b00d"],["/index.html","7e9da97b3167cc9486b7ab64dd6066b0"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","49b3c28f202ca69e011f91eab807350f"],["/page/3/index.html","0c1bc0c308c9d888a34f4b44bd31079d"],["/sw-register.js","bb3917766acbb429b85999a22d3d490c"],["/tags/每日精选/index.html","65f348b032388bae61cb03471bc46dd1"],["/tags/每日精选/page/2/index.html","35cdb732b633446041554fb00f816df7"],["/tags/每日精选/page/3/index.html","19fdbb842ea80eeed16da560d51b8fe0"],["/tags/线报云/index.html","e6725ea920bde764dff755c5f83e0099"],["/tags/线报云/page/2/index.html","8516b5ce99e4d0a5fb56a60a6f83aa44"],["/tags/线报云/page/3/index.html","2fbc67e0560b1e77479d9bbd44f80228"],["/tags/线报云精选/index.html","ec5d2be84b234a4110f23d80a1b5e93c"],["/tags/线报云精选/page/2/index.html","d6019d3e4136e587beb02cf0f58e7282"],["/tags/线报云精选/page/3/index.html","03d2de61129a26b78ae06f2555cf6676"]];
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
