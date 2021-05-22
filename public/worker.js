var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/',
  '/favicon.ico',
  '/static/media/Social.158225d8.svg',
  '/static/media/Trends.453b5a25.svg'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then((response)=>{
            if(!response || response.status !== 200 || response.type !== 'basic'){
              return response;
            }
            const respToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) =>{
              cache.put(event.request, respToCache);
            });
            console.log(respToCache);
            return response;
        })
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});