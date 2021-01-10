/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","5368c5cd0c7406beca9f4c2deda04851"],["/2020/10/23/index.html","a7233d63afc230ad8cbd1d6a8d013432"],["/2020/10/24/index.html","7660a08951717134c24f8caadc202f5f"],["/2020/10/25/index.html","8653b91ae4c12032e3255afbc5af78b5"],["/2020/10/26/index.html","f1d7e8468dd181f63bd40fc92421011c"],["/2020/10/27/index.html","3439e4a1e325115d42913c5fb37228b8"],["/2020/10/28/index.html","c945e19c8d21f3cf667f9c2c16d2b315"],["/2020/11/01/index.html","b0079a39f43ed2f2bd4dbd3f5ada8646"],["/2020/11/03/index.html","aadfddbdecac6339b3865724e331472c"],["/2020/11/08/index.html","f5721d23a262c1010cde58f4130d7ae4"],["/2020/11/09/index.html","66ba1e6019089c391cb7fe2d8311d981"],["/2020/11/19/index.html","2dcc33bb43809c2a27502b703fe13536"],["/2020/11/28/index.html","571610dfaad7d0b1f220f16bec169433"],["/2020/11/30/index.html","72a60a9dd9077f4adc54345c20ac869c"],["/2020/12/01/index.html","4787497682f4ea8e2f1971e987160200"],["/2020/12/02/index.html","7415346e05eec0e88b9e0eacde7a307d"],["/2020/12/04/index.html","6dfe6967c2362612a68b0862899e166a"],["/2020/12/05/index.html","7589933a43eff28c28b31fbf7190a1d1"],["/2020/12/09/index.html","a2df5c4a2633e3e9e7d183669aef867b"],["/2020/12/14/index.html","51b7e8301c180ad7c17f0f9051ed6f4f"],["/2020/12/16/index.html","d3bba778e830c5c00a040a6722e21d7c"],["/2020/12/20/index.html","304611a30c70bd47a8ea2523f7a6f75a"],["/2021/01/01/index.html","12813e566e2786bc4a1258c91627e56e"],["/2021/01/02/index.html","df30d3fac24dc243d9664bb97aaf54bc"],["/2021/01/03/index.html","f7a7d0b31208ae74e5ca71ece6b15459"],["/2021/01/09/index.html","64fdbdcca848a35610edcc7f736b064c"],["/2021/01/10/index.html","15dede153cca2d5975d1718d1d2de76f"],["/about/index.html","62cb805c682195d4661b719d256829b5"],["/archives/2020/10/index.html","55ed423bb1f773b94aaef3ac72e6489a"],["/archives/2020/11/index.html","f0cef9b5980483fc8773691692fc77b0"],["/archives/2020/12/index.html","ae0bae9bdae646caefd06d38ec5aba7a"],["/archives/2020/index.html","914e64ab89f3069915897f0dba42f636"],["/archives/2020/page/2/index.html","19dc7418dfa5fbdca77635b5f0417e0c"],["/archives/2020/page/3/index.html","44cc679458b0b93f57031744f825d311"],["/archives/2021/01/index.html","7fe1b509d545b6f2b239307bc589b90e"],["/archives/2021/index.html","0d0313736ac3171dbc0cdc8c5ec85fc0"],["/archives/index.html","66e72022bda64568df4a85b8e5277b87"],["/archives/page/2/index.html","66e72022bda64568df4a85b8e5277b87"],["/archives/page/3/index.html","66e72022bda64568df4a85b8e5277b87"],["/categories/index.html","c6328fd4ee41b1c54adb0dcb77625cf9"],["/categories/官方公告/index.html","af61561abef7dd1446476e51efe206c9"],["/categories/每日精选/index.html","fddd641ffb7771ee36e5fc1d8437bf83"],["/categories/每日精选/page/2/index.html","748a288af5cd8501f2199b9bc0c0367a"],["/categories/每日精选/page/3/index.html","bf150b9700abb86115dbcb8a25c4d906"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","2acb8bbf69c0517d4a8184ccf8616599"],["/friends/index.html","57d1a6ee4c75548df1b7eee58d56580a"],["/index.html","b227211d252651f17df846e165a6f54b"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","c3040abb807c07d3652a465ddcd70b25"],["/page/3/index.html","49f5a6413d840e8ad0bc97049d85088c"],["/sw-register.js","9fb39205c2cddec7b2046d40ef81b7ee"],["/tags/index.html","57e4f61b94250913b634db2d1d1308c9"],["/tags/每日精选/index.html","a7c030aa8e9690a8cab94861ddb3b838"],["/tags/每日精选/page/2/index.html","5ff378db9ee2a432b86a1c4331c9f883"],["/tags/每日精选/page/3/index.html","beedde5b3769130485881584635467e7"],["/tags/线报云/index.html","d774f67a15d34fc51e4d684488464be4"],["/tags/线报云/page/2/index.html","811de9f91ae5682d9fe69bdfc3cf1e1d"],["/tags/线报云/page/3/index.html","20618c552ddca1e82a473b04d37ad031"],["/tags/线报云精选/index.html","143d892003ace9aa16c4801b3d07814f"],["/tags/线报云精选/page/2/index.html","5d519c8c502c924f1053a79aac567f03"],["/tags/线报云精选/page/3/index.html","4c839e723ba5fcf0ca65aefcce2c1e22"]];
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
