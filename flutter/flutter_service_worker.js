'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".well-known/assetlinks.json": "04c17a0560b49eda9cf036074b1ccfa8",
"assets/AssetManifest.json": "33a5f6bc0f7be1f2138d460edf034c3a",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft.otf": "b36e184608bff0426f7c92c23e36bfce",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_black.otf": "d000ac9746812d7221f603f228fb699b",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_black_it.otf": "c328a1cfe87c8260c0f0d08e582798ef",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_bold.otf": "27769b3cb8d53b136abc64cff7a591d9",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_extrabold.otf": "6e03e14a78931fcf047ef34de9ddcd78",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_light.otf": "2ac04696b3e32cd5fc759feb7e33876c",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_medium.otf": "799155363ba12d8e7f4e1d65de5cbcc8",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_semibold.otf": "4569c7b74cc205a6b170a0a6eef9c00c",
"assets/assets/fonts/proximasoft/mark_simonson_proxima_soft_thin.otf": "ad6a0cef4c37d8df666c0b96fca36671",
"assets/assets/images/2.0x/forgotpw.png": "5ce478dc194595202295a88b99575b4d",
"assets/assets/images/2.0x/hello.png": "c09be1bca28225ef93f7d490908868a7",
"assets/assets/images/2.0x/login.png": "87eb06551dbe95359ff77f2ac13afc94",
"assets/assets/images/2.0x/logo.png": "f953dc3065b1aad77ab461c9f9b0e96d",
"assets/assets/images/2.0x/qrgirl@2x.png": "acc0ecb4a14e93386d9643af895cd369",
"assets/assets/images/2.0x/qrman@2x.png": "7729e41cbe354a341f1796a139d3bf8e",
"assets/assets/images/2.0x/splash.png": "7fe86882589394aa0c1897ba72101f81",
"assets/assets/images/2.0x/splash_logo.png": "ddec735a212eea09b34ffe0b2227b51c",
"assets/assets/images/2.0x/teacher@2x.png": "2f060bf98773f86eb5454d77145c823b",
"assets/assets/images/3.0x/forgotpw.png": "57c1f2bd84d1e71db67d10f20c629309",
"assets/assets/images/3.0x/hello.png": "9849994fed4a6081c53866572f9dbe22",
"assets/assets/images/3.0x/login.png": "83e914928b20e9867d41bb7a912fa58f",
"assets/assets/images/3.0x/logo.png": "3e5ec4cabef206575df734c570ec06c2",
"assets/assets/images/3.0x/qrgirl@3x.png": "627d772da24a5a313d1c9286c6457b0a",
"assets/assets/images/3.0x/qrman@3x.png": "8e203a43d89c98fc8fb18866b2db88e9",
"assets/assets/images/3.0x/splash.png": "7fe86882589394aa0c1897ba72101f81",
"assets/assets/images/3.0x/splash_logo.png": "5fde680977b08be289ac9d03b51e7ede",
"assets/assets/images/3.0x/teacher@3x.png": "35e4218da915e01cdd616c42158cc2e4",
"assets/assets/images/forgotpw.png": "599cd672133bebe50db6a46aa743a68d",
"assets/assets/images/hello.png": "3bd65ef76e712d0928e66e94ce1dbf95",
"assets/assets/images/login.png": "d2d3c03e78c3243a14fdff94d2f2e3d5",
"assets/assets/images/logo.png": "8eec8a8a40eb7b037fd54bfbc850e87d",
"assets/assets/images/qrgirl.png": "babf021097ddc5dab34854d302ea1764",
"assets/assets/images/qrman.png": "d7395548f6b42647a170f4941372d313",
"assets/assets/images/splash.png": "7fe86882589394aa0c1897ba72101f81",
"assets/assets/images/teacher.png": "fbd2b72c4ab829fa82e42239b3bf6bd8",
"assets/assets/svgs/clock.svg": "fc471cbf9bf912e97aa3d9305e46ffb6",
"assets/assets/svgs/pause-circle.svg": "c57a952c5d83eee856b6ab0f77082228",
"assets/FontManifest.json": "7f9eba2f65607e06a0cccc56c6cb73a9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5c37f98322f1015a33252ff615e0d045",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon.ico": "0bf4140b7b6fbdb3ff8a304b4d650c0d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3219c658b0d91e1e95c88d1b29dd38d4",
"/": "3219c658b0d91e1e95c88d1b29dd38d4",
"main.dart.js": "a94ad08c1f2a5888d8512404ed805791",
"manifest.json": "e680a96360a9e49c11b40e202abce0fd",
"version.json": "6dac297582193241d3d0da2f37870beb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
