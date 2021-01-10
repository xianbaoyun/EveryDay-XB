/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","14d9439b1c62ee614fb7eaae0ef97fa4"],["/2020/10/23/index.html","868eb227147528e9b672a73a909634ab"],["/2020/10/24/index.html","c388b9544a12b8294430a3c5341d06f5"],["/2020/10/25/index.html","313f333ce38b2202980ca9fdd6f27513"],["/2020/10/26/index.html","a878a3bae4d411373bea5885239d4825"],["/2020/10/27/index.html","ad3b07de444925d1608e156da7301865"],["/2020/10/28/index.html","85ee95ddcdc673af3ca3424828d5f52e"],["/2020/11/01/index.html","36b75559cd04e2f1a38f49cd7592e323"],["/2020/11/03/index.html","dc00e6a4c260671ecbfba2ffce8d0177"],["/2020/11/08/index.html","ae62217100efecd09cf05353f0fc0a87"],["/2020/11/09/index.html","c48aa325f9e0bc1bc9d5c9933938dd76"],["/2020/11/19/index.html","b99054870da0d809c1a26d739a5cf5ee"],["/2020/11/28/index.html","7d4aa6d3c6d64d0955b63fdc447390de"],["/2020/11/30/index.html","eb2f81bcf8dac5c784a09d748c4fcf08"],["/2020/12/01/index.html","0011d3c06cff3491d8625fec94d12250"],["/2020/12/02/index.html","ec796da9d1fbd3e1d8131a315236d382"],["/2020/12/04/index.html","7a1a9f329c41451a708cc372fafea712"],["/2020/12/05/index.html","df58a67ad0dca0df28a099c572861cac"],["/2020/12/09/index.html","f989a1f598f85b563eee285048c68f7f"],["/2020/12/14/index.html","e9afa6a6cceb2ca1315d5c222ea78924"],["/2020/12/16/index.html","737e4f0c68f9b0e0f294741a4016dc53"],["/2020/12/20/index.html","3ac9c9c48cc11c3db005f356aac5f2dc"],["/2021/01/01/index.html","1e190d52672b88bb01824cec20691b03"],["/2021/01/02/index.html","b26a176536b9c9ee37e76b1926247f7b"],["/2021/01/03/index.html","1b336d610954e53c6e7a78b8f5150325"],["/about/index.html","69d768986c041181a3463ef093bc8120"],["/archives/2020/10/index.html","4b4d6bf26f5aa68c5e29662c525d347b"],["/archives/2020/11/index.html","dab79ebfe805c987b1e17806409fe110"],["/archives/2020/12/index.html","88408eeae3f16a1f95392917b1edd10b"],["/archives/2020/index.html","3024fc92e7843f28d7a635c023cf76ba"],["/archives/2020/page/2/index.html","41de032d529543dd3b381da64d10a191"],["/archives/2020/page/3/index.html","7d6609c35ce8c076f743d345f8ae7d3c"],["/archives/2021/01/index.html","163b928c9610ebda8b3316508c2dba52"],["/archives/2021/index.html","9d321aba9078800af84d392ca8728b30"],["/archives/index.html","1f3dd333c85bd481f4901f87ad0734d8"],["/archives/page/2/index.html","1f3dd333c85bd481f4901f87ad0734d8"],["/archives/page/3/index.html","1f3dd333c85bd481f4901f87ad0734d8"],["/categories/index.html","e534f942228296811d4f109ab9b5421e"],["/categories/官方公告/index.html","b61e654c58cd933d225d0ccae092cea6"],["/categories/每日精选/index.html","8413b2cf2d519e51a79850414f66901b"],["/categories/每日精选/page/2/index.html","bd4a8c769c9050898b55dc2749a910f2"],["/categories/每日精选/page/3/index.html","c0907a778b5d1540e3a2e43b65f8f3b4"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","c6b58824763fb34c189705c53ca3b00d"],["/index.html","4b35efb9a98bed0e737e7b6b6ed001eb"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","567f4e4ad4aa76780495ee49464888e2"],["/page/3/index.html","c0b8c19f00ad42eb481395faca8102a8"],["/sw-register.js","a3ca29142ef9d8eb310ca14b30d74158"],["/tags/每日精选/index.html","9115120f2506977178a5fd1c5cd11d0a"],["/tags/每日精选/page/2/index.html","190cf91819ddff802e5e48549042e72f"],["/tags/每日精选/page/3/index.html","864aa7e579cacfe34b586d08a5cfef5f"],["/tags/线报云/index.html","63b0b1a91c36f59515875314e8ffa3b6"],["/tags/线报云/page/2/index.html","067c2e20de06bb410fc65e1c07342453"],["/tags/线报云/page/3/index.html","466ac7d104e0775435286510a9d61369"],["/tags/线报云精选/index.html","beeb4bf8e67d42cfa94681ad5c649deb"],["/tags/线报云精选/page/2/index.html","6a72f76a60140c98f6b0c11af21cba80"],["/tags/线报云精选/page/3/index.html","f0d577946f9c0408de61b695969be28c"]];
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
