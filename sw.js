const CACHE_NAME = 'web-dashers-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/style.css',
  '/assets/scripts/libs/phaser.min.js',
  '/assets/scripts/libs/pako.min.js',
  '/assets/scripts/game/allObjects.js',
  '/assets/scripts/game/allLevels.js',
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
