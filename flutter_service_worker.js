'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "be10b0ec3270b060ffe831740f7ff75d",
"assets/AssetManifest.bin": "8102f044a50697341aa705523abab811",
"assets/AssetManifest.bin.json": "c4c871ceec3180db7e2da7713bb598ed",
"assets/AssetManifest.json": "6a683275334b561c30ef6e479180d3c8",
"assets/assets/cv/executive_cv.pdf": "5cb82839d21be7f8ecc84eee726ef137",
"assets/assets/images/base/main_design.webp": "e3facf5eaca82851fd2eb6ac0e581014",
"assets/assets/images/base/process_menu_main_pcs.png": "847a71f4ff1fa75ec491e49145ce2062",
"assets/assets/images/base/process_menu_main_pcs.webp": "0cd0cac8ca4e5fa24d79fc686d070e7c",
"assets/assets/images/contact/contact_wave_lines.svg": "4a8b6b5294bdef36855d3568da4d56c7",
"assets/assets/images/contact/me.webp": "50d536396556e60f8c894f5d7fbda5b9",
"assets/assets/images/projects/bolygok_overview.png": "8d50eaa0fbc8f0cce0196193e3fb8163",
"assets/assets/images/projects/cruzr_1.webp": "e4f0d66013d651be9387b0dd743a956b",
"assets/assets/images/projects/cruzr_2.webp": "2e9f5f64219f8cefbd3e61a799d6ab4a",
"assets/assets/images/projects/cruzr_4.webp": "263b42ac148d49039510890d8b6e02be",
"assets/assets/images/projects/cruzr_5.webp": "a32905b0c8968175f32553bf24dc0bba",
"assets/assets/images/projects/cruzr_7.webp": "5edc776d63e5f77e630ccae3cc9ffcf7",
"assets/assets/images/projects/cruzr_8.webp": "7416e7ff643f5bee9b36ae454ec7c6b5",
"assets/assets/images/projects/cruzr_overview.webp": "263005c03214ff2e44390efd365f8afb",
"assets/assets/images/projects/vendomatiq_1.webp": "4af559b728d391727d9d0821b2db4b6c",
"assets/assets/images/projects/vendomatiq_2.webp": "ed5225cea8a1f7eef2db2169826a583d",
"assets/assets/images/projects/vendomatiq_3.webp": "0d7103a9b6441268cad2c554dae7b1e8",
"assets/assets/images/projects/vendomatiq_overview.webp": "3c7d75dd6b6f77ade94201b76f8dc2c1",
"assets/assets/images/projects/zenia_1.webp": "214e0d2a86c675c9d1242109cc5527dd",
"assets/assets/images/projects/zenia_2.webp": "79dad17d4c1abaf557869614c256cd57",
"assets/assets/images/projects/zenia_3.webp": "061d2fa6e3512fb508b3928218872dc0",
"assets/assets/images/projects/zenia_overview.webp": "552c1ea99edb1e16b2be1b66bfe8257e",
"assets/assets/lang/en.json": "6119b9b4552915e91077fa9bf759424d",
"assets/assets/lang/hu.json": "ea8c319338d05553a9333c83a716b33d",
"assets/assets/profile/README.txt": "e59f727de14b44792ea00b75a0992288",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "52bc58483045ef76f5fcb9d49837b2f7",
"assets/NOTICES": "92f6b80a5b95bf74fdcbad4dfa9c1f8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9bcb9ef6636aa64d674d858cb2e47906",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "17e6406f306b6e9732375ccb46e7ae54",
"/": "17e6406f306b6e9732375ccb46e7ae54",
"main.dart.js": "aaae1301e6c879716b207b77aeefb092",
"manifest.json": "09065360bf89641b9d9087c55e5a9f0a",
"robots.txt": "169325ab5f190090bcd25b85c7163aa4",
"version.json": "eb765fe3d87098b70f2f6302d2f4d41a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
