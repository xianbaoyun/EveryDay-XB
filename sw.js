/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","7b1e7f34054b712446ae61993cdb8670"],["/2020/10/23/index.html","67c4b503c673908106db0ffb6d67e16e"],["/2020/10/24/index.html","9bd9268d989f29bacce5f8450ca00d82"],["/2020/10/25/index.html","56f9cc815addebadb32432c03ecff123"],["/2020/10/26/index.html","a3202ff2c6bfd9dff70a4adc09c94c19"],["/2020/10/27/index.html","c684be4a458c9179a48be5c9cfcd0fee"],["/2020/10/28/index.html","dc11dc19ff316cbc6f54469cc8d78aef"],["/2020/11/01/index.html","853929db923bd330a28dd067d336eb0f"],["/2020/11/03/index.html","ee5cff69f418094df37203f3a7ea9e1e"],["/2020/11/08/index.html","8dc1ea4e26b562a50bf51e0fe6cf441d"],["/2020/11/09/index.html","a3e97fdd93887d052a8a695eaf0f70ce"],["/2020/11/19/index.html","91d70db42b29147201b577afa49285fa"],["/2020/11/28/index.html","37a743f6a6d81557f275dce72f17008c"],["/2020/11/30/index.html","1d9bf91c959bb5dbd1f9d56a676bcab4"],["/2020/12/01/index.html","b2898d2918fd5ce15cfefbc2c0e93301"],["/2020/12/02/index.html","e3f2d7c12c5a1635f3afd9f4949fc1a7"],["/2020/12/04/index.html","5fea6c2d860bbbddfb937cef9a0d23bb"],["/2020/12/05/index.html","58e20c17ab5bae5758a9e5986262e8e9"],["/2020/12/09/index.html","1c58a5fd629ef6576dd6369ddbec4d53"],["/2020/12/14/index.html","facddc0ef2751533464c2318b30d43e7"],["/2020/12/16/index.html","bdcac76bd30d0135d5fcbc8bfc2ccf57"],["/2020/12/20/index.html","dec2898c16aa9cb506f7c93f91e4b567"],["/2021/01/01/index.html","2327e93dbb6c55d3914c33af4edca4af"],["/2021/01/02/index.html","e0d9cb27b7e366e4226f03aca0fa4b4d"],["/2021/01/03/index.html","4eacd07719177be4950561c8adfb5cda"],["/2021/01/09/index.html","1d6e32ea7fc82058dfd952ccd35fcd22"],["/2021/01/10/index.html","5ddf16bf4e9e57f8efa21bf6eda02ab6"],["/about/index.html","1b28ee6fb3d84a4ca602bbc36ce594c8"],["/archives/2020/10/index.html","5386cb3136e3f0f9b0b2949d489f2a49"],["/archives/2020/11/index.html","a7512019328189e3e0fbe745c584f919"],["/archives/2020/12/index.html","2a51943fd468def5f28ae79d2d08e4ca"],["/archives/2020/index.html","8ac9707d3500bb155d811dc2615ba571"],["/archives/2020/page/2/index.html","548d72f910835a2ebf6ee6f1358d4392"],["/archives/2020/page/3/index.html","7ba003a119bcea7f638030401a5f9805"],["/archives/2021/01/index.html","e3cf620f4662750b81249c30857f9573"],["/archives/2021/index.html","1066fe0cbaa99cd2904cb80a1274ad78"],["/archives/index.html","1ea108af5334c39ccb1e4387c05d52fb"],["/archives/page/2/index.html","1ea108af5334c39ccb1e4387c05d52fb"],["/archives/page/3/index.html","1ea108af5334c39ccb1e4387c05d52fb"],["/categories/index.html","7902b158fe117ef44f0e0b9e618bf32d"],["/categories/官方公告/index.html","b5f534aa7712fe9d203712d5ebc7997f"],["/categories/每日精选/index.html","6d147a64456e07504d4553568193f4d6"],["/categories/每日精选/page/2/index.html","5b7bbecb18dc6053bfd08c43ae5e8abc"],["/categories/每日精选/page/3/index.html","4852a2c9f065879cadbc27b81a4466eb"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","2acb8bbf69c0517d4a8184ccf8616599"],["/friends/index.html","f7037b45a4b4e913d84ecb0df15f39d0"],["/index.html","7a7bc2f37a362fea90932bd4a30fd7e3"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","28beb5fcafcf0a0e3ba75e7b6a31a3b4"],["/page/3/index.html","df2adf805f569fe7970984c776035749"],["/sw-register.js","b4eefab0612b0b19af622251dd295b27"],["/tags/index.html","b85b366ff41f2477a2e6ae3384b21007"],["/tags/每日精选/index.html","24f65f8ecccf89e3b00032f08d236ba1"],["/tags/每日精选/page/2/index.html","fb6c06c1989a36bdd0d43f7e3bfc4268"],["/tags/每日精选/page/3/index.html","11ebe13e22068aeab4c3762390a57857"],["/tags/线报云/index.html","bb233da4b174ac3c08692edaedd0443c"],["/tags/线报云/page/2/index.html","56ce0141da3f4e9fddd9c32a0f64e57b"],["/tags/线报云/page/3/index.html","e608fe6283bb57dfd922d1f98b403ad2"],["/tags/线报云精选/index.html","d6479d5eba0b9eb2900bf1e76fcbe9eb"],["/tags/线报云精选/page/2/index.html","961f421f1535b4ef8de5127e29f7b0bd"],["/tags/线报云精选/page/3/index.html","847e7ae55ff396dee2ee3e4385009dd7"]];
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
