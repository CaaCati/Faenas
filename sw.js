const CACHE_NAME = 'faenas-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icono.png',
  './logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('script.google.com')) {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
