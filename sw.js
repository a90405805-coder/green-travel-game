const CACHE_NAME = 'green-travel-v1';
// 列出所有需要離線使用的檔案
const ASSETS = [
  'index.html',
  'luggage.png',
  'island.png',
  'success.mp3',
  'error.mp3',
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
  '7.png', '8.png', '9.png', '10.png', '11.png', '12.png',
  'icon-512.png',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});