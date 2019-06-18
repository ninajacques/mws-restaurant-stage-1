const staticCacheName = 'restaurant-reviews-v2';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(staticCacheName).then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/img/',
       '/css/styles.css',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/js/dbhelper.js',
       '/data/restaurants.json'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});