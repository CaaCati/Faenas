const CACHE_NAME = 'faenas-v4'; // 👈 subir este número cada vez que hagas un cambio importante en el HTML/JS

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icono.png',
  './logo.png'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // fuerza a que el SW nuevo no espere a que se cierren las pestañas viejas
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Borra caches viejos (de versiones anteriores del sw.js)
      caches.keys().then(keys =>
        Promise.all(
          keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
        )
      ),
      self.clients.claim() // toma control inmediato de todas las pestañas abiertas
    ])
  );
});

self.addEventListener('fetch', event => {
  // Nunca cachear llamadas al Apps Script (esto ya lo tenías bien)
  if (event.request.url.includes('script.google.com')) {
    return fetch(event.request);
  }

  // Solo cachear peticiones GET (evita errores con POST/OPTIONS, etc.)
  if (event.request.method !== 'GET') {
    return;
  }

  // Network-first para el HTML/JS de la app: siempre intenta traer la versión
  // más nueva del servidor, y solo usa la caché como respaldo offline.
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
