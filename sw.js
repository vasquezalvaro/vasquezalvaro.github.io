var cacheName = 'pyf';
var filesToCache = [
  '/',
  '/index.html',
  '/pyf.html',
  '/js/main.js',
  '/js/pyf1.js',
  '/themes/img/calc11.png',
  '/themes/img/colorspyfsel-0.png',
  '/themes/img/colorspyfsel-1.png',
  '/themes/img/colorspyfsel-2.png',
  '/themes/img/colorspy.png',
  '/themes/img/botones.png',
  '/themes/img/back_button.png',
  '/themes/img/button.png',
  '/themes/jqt/theme1.css',
  '/jqtouch/jqtouch.css',
  '/jqtouch/jqtouch.js',
  '/jqtouch/jquery-1.7.1.min.js'
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
