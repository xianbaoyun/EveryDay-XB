/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","88353dac618a18fa5a18a7649b46c64b"],["/2020/10/23/index.html","53e3e1dc8ae1d7d9d814ab10ef3cf49b"],["/2020/10/24/index.html","ef220d3d61d9777a1bb46f4ccc46a7ad"],["/2020/10/25/index.html","17cda9d44bdf74296d5a76709900e7ef"],["/2020/10/26/index.html","918d019be8f1bd368715f52e9e239fd8"],["/2020/10/27/index.html","41c8e7a6e1faa81a68b08f6b389c99ff"],["/2020/10/28/index.html","640a8f7b317388f06f3c48bcedb57fe2"],["/2020/11/01/index.html","8a4999c794fb2b4425576e7eae343c6b"],["/2020/11/03/index.html","ec85fc4d41795cf758dc8d2e2ce81859"],["/2020/11/08/index.html","cd6ca26f40d55e44149b51edf137870b"],["/2020/11/09/index.html","692007691d0e508105109dcf671d6f8b"],["/2020/11/19/index.html","02693c51ccb070b196ecfedae2417e75"],["/2020/11/28/index.html","425f26649a53fd18bc817b47181e44c1"],["/2020/11/30/index.html","7a0746800e474951b792cfbf4f0a44b3"],["/2020/12/01/index.html","163005d020492d31fe56c95b356495f0"],["/2020/12/02/index.html","d67d989dadac087a9bdd642bbcdd7130"],["/2020/12/04/index.html","b5bae2fa1854bb320989717471d1a91a"],["/2020/12/05/index.html","58ac73eadd6a38e6c54118735afa1cc9"],["/2020/12/09/index.html","54da89a7551cd6b77e1899a9f053156c"],["/2020/12/14/index.html","b0278efb6954464058ad5d11cc3f37b3"],["/2020/12/16/index.html","2efdff9e99953cd0242d550eff1230ae"],["/2020/12/20/index.html","55691542eddbab0e79b9160aecab518f"],["/2021/01/01/index.html","b6d0415d3fe4e6f9cb6172789df7126a"],["/2021/01/02/index.html","e5e8a688207d45b3b34e59a4908a0970"],["/2021/01/03/index.html","42052953f33e50fc0b8e9dcc95d2b3d6"],["/2021/01/09/index.html","b5edb0488057649a949d350bf726a8ed"],["/2021/01/10/index.html","d878afcdb52c65ab9b96b5359a55a79a"],["/about/index.html","d90d4747bae35a763a737c9defcb7be4"],["/archives/2020/10/index.html","77ac5b32f141d011a552b044afcd7143"],["/archives/2020/11/index.html","68791969ca75e1ad39fcee649bb05717"],["/archives/2020/12/index.html","c83f51464068f1b5557a1f381578c7c6"],["/archives/2020/index.html","9c194915c4cea9085fdfd25502da5024"],["/archives/2020/page/2/index.html","7ff9966fc6f71c24b959a9fcebf8e81d"],["/archives/2020/page/3/index.html","0f354b91bb8a87044f3eefed579ce26a"],["/archives/2021/01/index.html","8b8ef1ebd10dae33c0841820bf40c03c"],["/archives/2021/index.html","923de90e308f7559ba57303f62b111f7"],["/archives/index.html","720f11d30e7a398518f5b1a7d395d283"],["/archives/page/2/index.html","720f11d30e7a398518f5b1a7d395d283"],["/archives/page/3/index.html","720f11d30e7a398518f5b1a7d395d283"],["/categories/index.html","50e678d3f21d63f0776cd57f60bf8a6c"],["/categories/官方公告/index.html","94bddf0d4425c1a423b93db5efebeedd"],["/categories/每日精选/index.html","547aa924fd5cffcb07981fc452e5f284"],["/categories/每日精选/page/2/index.html","040f40d3518c7cec138f02cc932cd710"],["/categories/每日精选/page/3/index.html","4a719d6f7d25459158c299f6685f6807"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","2acb8bbf69c0517d4a8184ccf8616599"],["/friends/index.html","7fb58f6e210bb5a581b9b40f49523831"],["/index.html","7be3a47fa8e792cb17ba1793ef72b699"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","1e4d13e008b535ada84108305f0a6260"],["/page/3/index.html","89be7308a8aa24a535391d978bec49e0"],["/sw-register.js","ccf863039beb349d29a21f6a16892639"],["/tags/index.html","58711927a3aa2e3919f21b666ee23085"],["/tags/每日精选/index.html","d151268be94b108ab77e2526429433fd"],["/tags/每日精选/page/2/index.html","04ca5a00ad9adbacf33a41997988fa58"],["/tags/每日精选/page/3/index.html","a6d5a6d4578f928e9bb61f8e16f76394"],["/tags/线报云/index.html","09b15c0472e2099a9fc509bdced24f5c"],["/tags/线报云/page/2/index.html","356301edcc452c9817fc868568982ab5"],["/tags/线报云/page/3/index.html","f01a2c2b3e4a56c25fe180ea802313fb"],["/tags/线报云精选/index.html","cbfca524fba11506519394d58665b009"],["/tags/线报云精选/page/2/index.html","62c82125197d450bcf784cdef808ce8c"],["/tags/线报云精选/page/3/index.html","ce2765ba97a33c860936aa7aaeb4aa0c"]];
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
