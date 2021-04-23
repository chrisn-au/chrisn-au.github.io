'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "133b2816e6b2e29054d22613857f953b",
"index.html": "6a507235499d38bd79677bba779df231",
"/": "6a507235499d38bd79677bba779df231",
"main.dart.js": "bd9b1470a267aad6f16053f7dabdbba2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf2ae71667058848c7429b12b85446d0",
".git/config": "6cf47cbbe989528ca3d673e1f4960b85",
".git/objects/0c/4681f7455d1241ad2c3c3d3fcbcb0844d7a681": "89103bbf3daeaf2a42722fcb4aab9eec",
".git/objects/3e/7ff0261c905ef6b8c4f14c2f566f4385064898": "4a11c2be1e30a4329081bb09f2f3e45e",
".git/objects/51/166fc5b60f66ee9d2f033af022c73a5a13db07": "826028e8e41915203d4ad80febedb5b6",
".git/objects/67/c18b180a4387342b2649e5a6324aac4c7d3054": "3fc02f354cb94dfd523d9bbb8906f45d",
".git/objects/0b/9c005bdcbbc3b0e15ed15dd67cae9b7d60c4d3": "8ee0dc4caa0fedd212b3fa5b524a61ee",
".git/objects/b5/dea5f481d85dd231a930f2442a2c178f922169": "8fba1d39ce3a294017df7bd21e3797b3",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d7/933769d5d81fe911ca59c27e3628f2eda290f5": "81af56c16e4ec9167523bfeb4f2a8aa6",
".git/objects/a2/650be0169419953bd58ccd442dff063db75c37": "c0b21d0628de12da36b0280ef13d72d2",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/ae/1194f8e9e3640de3fc5f95359d6cfbf6191e47": "e23132052839f8fa7f42349510d72b9d",
".git/objects/d8/bc6d71009fd6963d139520acd49a7b7f5d6e44": "35adadcdfbc1212c115a93824034f7ec",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/adef85aaf06bd5a987f89ee49fd011c40b8d1a": "05a80ae43c8bdde5053482c9b943ef4d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ec/3d9144f35275fbc4ce5efbcc423745f6ac9cde": "3d747919bbad253ab907024fa972021a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/16/b9dfabe410181a59c694ecb7616256442f1495": "c7c539dc66c4e7764cc439aceeb0cd48",
".git/objects/80/194d238b2bcccdeb83fc28db48432548cff19b": "330d9c5e72659f7136fb4791a42c45a9",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/7b/d362fd7ebfea913fb558f05bccbb069ee17faf": "29d81864bbfdd35a193921bf7c38201c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/22e737125a8666d016641e47b61222626e12ac": "6cc3a3f81e23bf30431b950ee3dc5806",
".git/objects/10/c2b82fd52cbdcd6b0f9587661bd4fd013c2cac": "7ad1379bafd4915096173030e02c95e5",
".git/objects/26/08583e3eda2cb2a7455dc67c6577312a6f5c48": "aef93134f1759c214738ec9487a6f519",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/2f/5759aa1b4e3f79f5912b081b163f80a1e9611e": "3eb04024ca6b8cd10f7f397d7cb44bc9",
".git/objects/43/a7aa1f8d68fafe65380df7290f094967e81b45": "66018f409e46e34f759d33975eaf6e56",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/7f544163b9d8d7f16d24bd63d6bc5dffc0cba8": "f8d16a480af2694bc82ecdd1fcddf839",
".git/objects/9a/2ad4568f1d661f089a69ef4b9bc9ca199af760": "82e44c8ea923bbfe1a8c4148f9f74d6c",
".git/objects/36/362315e796ac934aa46f2dbf382c35f44cc0d8": "d5895406c3e9b052f18f9532b165116f",
".git/objects/5d/2227f460c334c42081ceb2b548e97744084764": "14b9db0a7c0a0b16654433769cf021d3",
".git/objects/6d/21b2f5413b9b31ae3853693b24ee3d5edda49f": "b3df1866be00ca5e5c0f24230e5192cf",
".git/objects/6d/a12de3ce951812f67a169df6d6540994c3f098": "8ab1e56a6f59595ee98852fcde67228f",
".git/objects/06/fccf1f76ec4803b68aa994059c37f928a9a3e5": "5deae981f449fb79f62aac2aa5fe4745",
".git/objects/39/e8c522a9fc4eaeacf4f6a18c86535c92a624be": "acc4e04409c741f6e182e50b60dd23ed",
".git/objects/0f/e43418fe0ba9baa518c1c5c5d0915b547be0f7": "c0102a859ab271c728ad408c73ac5f31",
".git/objects/dc/8212624fe062812bf07c9201153de09a40049c": "20273497660b5e92ca27443c6518a833",
".git/objects/b6/6562e9d7576878a9a92b8f9330f2d532b0aa9c": "7ae617a38517cf8948df288148506037",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/93e2c6416f736ce4fca62bdff3bff9141bec3e": "3d352657bbf7fe68b32b57c21fc8b166",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/23251527c717200fec38cb526f06e7f16a11ec": "30fdb53c4083a5cd8d8868661de0ed3d",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f7/0900c8b7655145d595f1f8dc41bb2de10063b6": "d4027a3a23d191c7eff6506662c7a285",
".git/objects/fa/ace9a8c031c2e73f2bcaefae884225dfed57f5": "d6c5b98370b99f010756460929c8384c",
".git/objects/cb/6170d3264b6b9d6d5f974919530556d4aea6c8": "36489b0c62604e1f0fc8f071b5642f56",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/323ffff3ef70bcfc9f843cb6c93afc299d8194": "47d24a7cc18c5b6ddac17d3563ce6098",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/ed0f77fe6c1eab02fb4d5e20589f782b96092a": "c8e9ba905de85d1bcc81d5c438d6844a",
".git/objects/1b/e62083b398c38f20dac0953d92739cf516a0be": "7d702bd8d5ed5e188e9e37574915a901",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5863b7502e48b2b138ddf56764d2e882",
".git/logs/refs/heads/master": "5863b7502e48b2b138ddf56764d2e882",
".git/logs/refs/remotes/origin/master": "c75c84b21df9a0e3401c4a897e5bafb4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "1ca3bc6daea9cf6590821a0a2437d159",
".git/refs/remotes/origin/master": "1ca3bc6daea9cf6590821a0a2437d159",
".git/index": "3ac4a9f5c95ff04a4d1d1271d0bf2934",
".git/COMMIT_EDITMSG": "942e3add9cf4d314a5a992094cf98f23",
"assets/AssetManifest.json": "28791a94b49673d32d8f49e34873b362",
"assets/NOTICES": "b3600eab51275436edc28f37eea80dc6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_widget_from_html/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
