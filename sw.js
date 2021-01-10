/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","efade0b25ec3752588df7ee8e95eb849"],["/2020/10/23/index.html","2a68eb174170885a37d12ec795d74671"],["/2020/10/24/index.html","caca7cfbe88be94d2000095f5ef868aa"],["/2020/10/25/index.html","e25c81e7583adfe4139988769c2a4787"],["/2020/10/26/index.html","5d9a6da04dcc3d4c700d979e8e31bed8"],["/2020/10/27/index.html","2a68a3c80f87e81361c417c02fe26238"],["/2020/10/28/index.html","bd7c1a1fab9654f8beb5d680c037bfce"],["/2020/11/01/index.html","000fdf339898d7a8215dc2a8431a9eb0"],["/2020/11/03/index.html","f35eebd6baf2335064989ddb446942a9"],["/2020/11/08/index.html","204167db9331e8a6e4e1d22c50c9e68b"],["/2020/11/09/index.html","306a22c533819d5405f497229f44dadf"],["/2020/11/19/index.html","071860c03bec72a99b151d43a2db8f2a"],["/2020/11/28/index.html","2ce9e0345b0c98e8a84b4b4674d1b964"],["/2020/11/30/index.html","1408cee5d85d77839d01c3a2c0ab06bf"],["/2020/12/01/index.html","58d110a1a0555e349e1e8b593c560c7b"],["/2020/12/02/index.html","e779ea90bfa22585d271d0681582aac0"],["/2020/12/04/index.html","d518df490bc85f04ed99bdd54284ef2f"],["/2020/12/05/index.html","b380e480384dd40b2f62af1a67404b31"],["/2020/12/09/index.html","06bb60b823ba4b08f97d6a3155fb800c"],["/2020/12/14/index.html","cd85f43bef7c4748440cf31cf34c45c6"],["/2020/12/16/index.html","114c6c0af7734448063f5ddf5f9a7696"],["/2020/12/20/index.html","97ead7bb54fb7e671755b2e0ff162314"],["/2021/01/01/index.html","824fdddf2d07b4eceab740c33775399a"],["/2021/01/02/index.html","b06b6f05e103cdf989a4cc2049c77768"],["/2021/01/03/index.html","a8d993df5aa844c598990439fa378908"],["/about/index.html","f920a77080dfc8f2758608c7d9be5891"],["/archives/2020/10/index.html","298ef2aa86ea85bf8e36c8352247b299"],["/archives/2020/11/index.html","d33b30bcaffcf0c7f108ab57a84275e0"],["/archives/2020/12/index.html","1b1b74db9d48ecd7440f2a19aca94aec"],["/archives/2020/index.html","95a03a864ba6def500d50c80345545d7"],["/archives/2020/page/2/index.html","0e01517870aee5c763816583ebc6da61"],["/archives/2020/page/3/index.html","518e32788f616bf3c76c4ebc274b4973"],["/archives/2021/01/index.html","9a9b2d635c15ec41f9f9e794786f5e74"],["/archives/2021/index.html","5992163d3575425673817dbfaf7b5f60"],["/archives/index.html","06d3c3709816358cc0e6c83d07fb6bb8"],["/archives/page/2/index.html","06d3c3709816358cc0e6c83d07fb6bb8"],["/archives/page/3/index.html","06d3c3709816358cc0e6c83d07fb6bb8"],["/categories/index.html","f75d16e08963fc98e21cbdbe19fe9544"],["/categories/官方公告/index.html","7bf7293f03b7bbe960d3cc61a38098f5"],["/categories/每日精选/index.html","f4e7327c287e71a047605072e50a3aa4"],["/categories/每日精选/page/2/index.html","e6a8d4268c9a4f0a091cc3c698404792"],["/categories/每日精选/page/3/index.html","f7050114b1a3b98c329712700af06dbc"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","c6b58824763fb34c189705c53ca3b00d"],["/index.html","12d264b0bbe5bf80d80838bcd3efaf18"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","664021aa290fbaa40a0622361f9a7707"],["/page/3/index.html","6911c4dbb2413dd4ef457515ba23cc5a"],["/sw-register.js","7559fd489205c46b76cbcbf64f57ace9"],["/tags/每日精选/index.html","d4f3d046bb4ec5710cc4dff808c15964"],["/tags/每日精选/page/2/index.html","b619fa289d27b99600f1426b0aea55be"],["/tags/每日精选/page/3/index.html","2f6018a4965397517ec6ac1f6b0177bf"],["/tags/线报云/index.html","eed8bdc7ba7d2f2fbbbd234f9c12663e"],["/tags/线报云/page/2/index.html","104b0648eef8d4e2fb785d179a6ed7a3"],["/tags/线报云/page/3/index.html","ede17712bce9e6a71992e1cb688ad418"],["/tags/线报云精选/index.html","fae7dce9e808b076d9904bcae21e4c11"],["/tags/线报云精选/page/2/index.html","933737e5ce50de6b4844020b95f8e209"],["/tags/线报云精选/page/3/index.html","54006e7c2effdf05b91629805fda6094"]];
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
