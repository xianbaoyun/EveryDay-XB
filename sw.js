/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","37d99ce930e9ba16e0c673704ec5fe74"],["/2020/10/23/index.html","2070ecbaa1803802029acb723a03de16"],["/2020/10/24/index.html","b206b5e062431be96f5fb28b171134fe"],["/2020/10/25/index.html","c77f6daaef3f3f7e1ae1055bf76f4b04"],["/2020/10/26/index.html","86fed008d82aa774944a1d06d7a3020f"],["/2020/10/27/index.html","053ec707fc3a00da2840c5abfdc54560"],["/2020/10/28/index.html","d24afb3f346c70689df93bb3c6ef0358"],["/2020/11/01/index.html","db55b1383e9908ee8676dea9aa6a7e3e"],["/2020/11/03/index.html","46ca4471e213eeb0cc62a60ed11097dd"],["/2020/11/08/index.html","5859a1a1e5bba457a3f44daf491ffb62"],["/2020/11/09/index.html","2e7a53318e6023648767f58b2b1c0fc5"],["/2020/11/19/index.html","796d7a7cb5bcd0f53c418fa8fb75bd45"],["/2020/11/28/index.html","043df79f5f350f6542581d6430c6d822"],["/2020/11/30/index.html","718abe61244f8dfb585fba60660fdab7"],["/2020/12/01/index.html","fed40018974536b9e47728456a0de6a9"],["/2020/12/02/index.html","be8c8194228630bafc25aa4bc2344a88"],["/2020/12/04/index.html","6ccbc9e803439d32d53275ac8e4088a9"],["/2020/12/05/index.html","c672f47c8924dcfb0108bf23bb5186d0"],["/2020/12/09/index.html","f76f4a643b835121a4ded2affc8cb797"],["/2020/12/14/index.html","aa17268cef6b1bae6a8502900faec697"],["/2020/12/16/index.html","3d152ed003734a71f44c9c0bcb01cd42"],["/2020/12/20/index.html","adb6e4706755abf3c1e8d65e4c4824a5"],["/2021/01/01/index.html","2f38c650020b8f692835381656cfb33b"],["/2021/01/02/index.html","f7160e118297254aa3d353ebc53d82b1"],["/2021/01/03/index.html","5833eb4d67a3677eb601688144164c19"],["/2021/01/09/index.html","2fe49f57c986594ef942fa17ebfda532"],["/about/index.html","ab6a733202219345c60426e8aa5b2861"],["/archives/2020/10/index.html","43e3264f4deb1aeb7482e159ebab0df1"],["/archives/2020/11/index.html","8c6e048922ab8162b56ff4e522f1d3f3"],["/archives/2020/12/index.html","f936ef7e1449c1684f1148479ee08b08"],["/archives/2020/index.html","3dcb265432fa993ed739a9fdc157f731"],["/archives/2020/page/2/index.html","0d83ff4c662333c36849c2dccebcc977"],["/archives/2020/page/3/index.html","6e4bebca759b44619d8ef2c9ad2dc080"],["/archives/2021/01/index.html","3ae79c1087c4dc38333fb89b2877ea02"],["/archives/2021/index.html","ad82b200dd58160874c49c0c7c2b2503"],["/archives/index.html","ebe7108edd7cb868caacf1e62d1358b0"],["/archives/page/2/index.html","ebe7108edd7cb868caacf1e62d1358b0"],["/archives/page/3/index.html","ebe7108edd7cb868caacf1e62d1358b0"],["/categories/index.html","d4186872009b632a35b82b7514471111"],["/categories/官方公告/index.html","2eb0fe436cdd0a62273549594fd8411c"],["/categories/每日精选/index.html","1b45280aed740188d83a2bbab68b0920"],["/categories/每日精选/page/2/index.html","c6bae8b6704449a3892ab59cc4ade030"],["/categories/每日精选/page/3/index.html","12c4b09e0d79cb69ded3d5d48a4c13a6"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","c6b58824763fb34c189705c53ca3b00d"],["/friends/index.html","ec1ca025d948dd4b2522200d9499b9e6"],["/index.html","d02c205980fe1107d39b0ce39511cc7c"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","ad153337e5ec48859c1e5c0c2bcfb555"],["/page/3/index.html","aa895f6a0e609ffe91c9abcb88b95157"],["/sw-register.js","57abcbe2105ce7b374786f0702568985"],["/tags/index.html","e7ea56c09f3445f8f4ee03e86c60de23"],["/tags/每日精选/index.html","01248b2a9eb8005961985c656778c780"],["/tags/每日精选/page/2/index.html","e071ed04e9a1f9b9363d0f1043dd09aa"],["/tags/每日精选/page/3/index.html","1e0cb3477ad72c28b94ddc0d89bf33f6"],["/tags/线报云/index.html","7123779c7f30dd6253e668a741aecfab"],["/tags/线报云/page/2/index.html","98fae69873be038caae59e5fb35d7f4e"],["/tags/线报云/page/3/index.html","2cb8ca357e33ab3921df8fc44b464eaa"],["/tags/线报云精选/index.html","c5dde349c3bdaa64d6ebf83ea80496c8"],["/tags/线报云精选/page/2/index.html","3d871d84fea4a49e53e391135544df67"],["/tags/线报云精选/page/3/index.html","c10bf13382aa655c4f23018f68a082cc"]];
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
