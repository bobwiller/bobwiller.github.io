'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f503f010da7393a7e6ad6c7d6add4261",
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
"assets/assets/images/2.0x/login.png": "87eb06551dbe95359ff77f2ac13afc94",
"assets/assets/images/2.0x/logo.png": "f953dc3065b1aad77ab461c9f9b0e96d",
"assets/assets/images/2.0x/splash.png": "7fe86882589394aa0c1897ba72101f81",
"assets/assets/images/2.0x/splash_logo.png": "ddec735a212eea09b34ffe0b2227b51c",
"assets/assets/images/2.0x/welcome-person.png": "2edc0fc6d0e57763d3e5b6377c8e74ca",
"assets/assets/images/3.0x/forgotpw.png": "57c1f2bd84d1e71db67d10f20c629309",
"assets/assets/images/3.0x/login.png": "83e914928b20e9867d41bb7a912fa58f",
"assets/assets/images/3.0x/logo.png": "3e5ec4cabef206575df734c570ec06c2",
"assets/assets/images/3.0x/splash.png": "7fe86882589394aa0c1897ba72101f81",
"assets/assets/images/3.0x/splash_logo.png": "5fde680977b08be289ac9d03b51e7ede",
"assets/assets/images/3.0x/welcome-person.png": "e0cd542c949178f8d3091c24377a2e10",
"assets/assets/images/card_payment.png": "210f61f03c636a294cf020109556b4c0",
"assets/assets/images/forgotpw.png": "599cd672133bebe50db6a46aa743a68d",
"assets/assets/images/login.png": "d2d3c03e78c3243a14fdff94d2f2e3d5",
"assets/assets/images/logo.png": "8eec8a8a40eb7b037fd54bfbc850e87d",
"assets/assets/images/malvern-logo.png": "d4770b9893534b0626d4dc85da5c642f",
"assets/assets/images/splash.png": "7fe86882589394aa0c1897ba72101f81",
"assets/assets/images/welcome-person.png": "2be53157974b6787ff264a3e92fa2beb",
"assets/assets/logos/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/assets/logos/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/assets/logos/discover.png": "43f4d460228d50e94b5d8301f3e9076e",
"assets/assets/logos/flogo-HexRBG-Wht-100.png": "25e26b49492089deea672175452d50df",
"assets/assets/logos/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/assets/logos/master_card.png": "a1ec07eed183f4c984ba72613b67124a",
"assets/assets/logos/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/assets/logos/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/assets/logos/visa_logo.png": "95a8bf08126276acfca87598881454d7",
"assets/FontManifest.json": "7f9eba2f65607e06a0cccc56c6cb73a9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "76f4f88aa5e7259ddf817bb9257947f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "32f7f1214486b42771ee4f04b8660be0",
"/": "32f7f1214486b42771ee4f04b8660be0",
"main.dart.js": "ccc26b9ddc679dbf553539adbce94351",
"manifest.json": "2b1d44ba48698392b2f5e993fb53e507",
"version.json": "3fbe743159d977e1fca330e92ee92025"
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
