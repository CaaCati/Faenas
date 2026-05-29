const CACHE_NAME = 'faenas-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
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
  // Solo cachear assets estáticos, las peticiones a la API deben ser siempre live
  if (event.request.url.includes('script.google.com')) {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
