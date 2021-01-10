/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/10/22/index.html","f94c4fc71f300f70698ec218f0b2e363"],["/2020/10/23/index.html","ea5c395f4437c7ab75ebde190834bbcd"],["/2020/10/24/index.html","a976048038e6cfb4e41cf77ca07713d0"],["/2020/10/25/index.html","c5313a58b9f023a63e2d15c43112ed60"],["/2020/10/26/index.html","6f4b2a59be126ba3c942de9cc6bb8d63"],["/2020/10/27/index.html","0b8f4c4540b3ed8d8158012f703a0935"],["/2020/10/28/index.html","74c7fb5f57634e43b7161700a5757dce"],["/2020/11/01/index.html","061c2e145a5f3a2b73530017fbaaaa0a"],["/2020/11/03/index.html","eb39a0b5361b3e7cb922a3ffad8efad7"],["/2020/11/08/index.html","9455a085f1cfb6a8712218c74cf547c3"],["/2020/11/09/index.html","7aeffb5ad07b192a42a4e86c87a5712f"],["/2020/11/19/index.html","3d63c1c48b285b8619e36ceea859ac54"],["/2020/11/28/index.html","0a4032342d3a65873eea46757dbfc379"],["/2020/11/30/index.html","70c7d5dbe82766482440c3b5e8c75e0f"],["/2020/12/01/index.html","5d863143d8d610a15023f39aa5556883"],["/2020/12/02/index.html","82fe504c50857cf650619834b9911038"],["/2020/12/04/index.html","2bc47d56fadea6676ba9ea1f4ae13192"],["/2020/12/05/index.html","d324e93b72650c198db2dcceb5654c7f"],["/2020/12/09/index.html","06d798b18150c9b4c33e2607ee9e5ca7"],["/2020/12/14/index.html","149241a513665cf6c214acc8214036ef"],["/2020/12/16/index.html","77b2774ac34ff032efbabc275b2f7cec"],["/2020/12/20/index.html","6b41d416d3bdb10faba62ee6c786c1bf"],["/2021/01/01/index.html","efcc4e6739f83df5d1fd3d56c248f335"],["/2021/01/02/index.html","5589d6dc5ab00fde286192e0ac013a08"],["/2021/01/03/index.html","b3f08cdb2825b3d6c373576844c456c4"],["/2021/01/09/index.html","170c2225afaef8d78d5d5867c1005008"],["/about/index.html","4d73f628f3fd80bdcc19795b96102b74"],["/archives/2020/10/index.html","4fc1102ed61b33dd9e6a449378ed3f7b"],["/archives/2020/11/index.html","6162d42c843e40b4624db519242220a5"],["/archives/2020/12/index.html","031a4c2e8da84f3067d8e355494a3683"],["/archives/2020/index.html","ca072bb82362a69df17a28964a13ac1a"],["/archives/2020/page/2/index.html","b075725b3afc9281cb7f9144fa3dcde9"],["/archives/2020/page/3/index.html","7bb745a50cb2208915c73bf509b754f3"],["/archives/2021/01/index.html","000d097a2e911c1dd87f649ff31afc29"],["/archives/2021/index.html","0c586a21e7e5f1144fb05f06947998c0"],["/archives/index.html","ecffb3f084bbed26d2417b7e2299477d"],["/archives/page/2/index.html","ecffb3f084bbed26d2417b7e2299477d"],["/archives/page/3/index.html","ecffb3f084bbed26d2417b7e2299477d"],["/categories/index.html","a77fcc92f0a085ee10fc546055030d62"],["/categories/官方公告/index.html","b7f98b8efb77b6ff1a45031a307a31b3"],["/categories/每日精选/index.html","4a4ab7b0851888ef9eed1ccf9a08be1a"],["/categories/每日精选/page/2/index.html","1c6c662e16accfdc190b3612c6cbaafd"],["/categories/每日精选/page/3/index.html","a00021117a1f13d0f550559fe1130031"],["/css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["/css/style.css","c6b58824763fb34c189705c53ca3b00d"],["/friends/index.html","325b192bdff640d99ad891e7a9a31aa6"],["/index.html","e82f1a0f976e08eb9edb35de2b3d69e0"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","0e5f722836f92687f444e5db5169a9f8"],["/page/3/index.html","f1ba5d2b972b7f91adcf4f9de2a0a9d3"],["/sw-register.js","b10ff9b05e100ea3d8c24604d9850e8c"],["/tags/index.html","d61a08b40757e28e6a5fcf7dc5a9721c"],["/tags/每日精选/index.html","6aeb224a432cc37e5c2b8426ed3884cb"],["/tags/每日精选/page/2/index.html","f01c639acafecad0a939f83e06e58c9e"],["/tags/每日精选/page/3/index.html","1503be7a17e07d150bd501626500c3b1"],["/tags/线报云/index.html","eea8602710cb69fa75b7a71c7e0d8535"],["/tags/线报云/page/2/index.html","f235bb14d3497fa5392de1f4969108d5"],["/tags/线报云/page/3/index.html","86929026059a568433aa9996dff8f50e"],["/tags/线报云精选/index.html","6f83762b365a8f73b5bc5531edbc3ca0"],["/tags/线报云精选/page/2/index.html","8b3ca44148a56415bef7211bb4e3effb"],["/tags/线报云精选/page/3/index.html","446c5bc07240d628a62b3b0af6a15f79"]];
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
