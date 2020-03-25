var cacheName = 'Wazifa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/bootstrap.css',
  './css/style.css',
  './css/fontawsome/all.min.css', 
  './img/abstract.png',
  './img/background.jpg',
  './img/logo.png', 
  './js/bootstrap.min.js',
  './js/jquery.js',
  './js/app.js',
  './js/render.js' 
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
          
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});