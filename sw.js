// Version your cache to force updates when you change files
const CACHE_NAME = 'app-precache-v1';

// Precache explicit files (from your list)
const PRECACHE_URLS = [
  // HTML folder:
  './index.html',
  './HTML/introduction.html',
  './HTML/explanation.html',
  './HTML/read.html',
  './HTML/write.html',
  './HTML/photo.html',
  './HTML/video.html',
  './HTML/news.html',
  './HTML/contribution.html',
  // CSS folder:
  './CSS/styles.css',
  './CSS/index.css',
  './CSS/read.css',
  // Other files
  './script.js',
  './manifest.webmanifest',
]
  


  // Images:
 //  './Assets/Images/library.webp',
  // './Assets/Images/tenge_1.jpg',
  // './Assets/Images/tenge_2.jpg',
  // './Assets/Images/matin.png',
  // './Assets/Images/Uyrenu/1shi_yereje.png',
  // './Assets/Images/Uyrenu/2shi_yereje.png',
  // './Assets/Images/Uyrenu/3shi_yereje.png',
  // './Assets/Images/Uyrenu/4shi_yereje.png',
  // './Assets/Images/Uyrenu/dauisti.png',
  // './Assets/Images/Uyrenu/daussiz_dara.png',
  // './Assets/Images/Uyrenu/daussiz_jup.png',
  // './Assets/Images/Uyrenu/qos_dibis.png',
  // './Assets/Images/Uyrenu/jattigu_1.png',
  // './Assets/Images/Uyrenu/jattigu_2.png',
  // './Assets/Images/Uyrenu/salistirma_1.png',
  // './Assets/Images/Uyrenu/salistirma_2.png',
  // './Assets/Images/Uyrenu/layout.png',
  // './Assets/Images/Uyrenu/layout_1.png',
  // './Assets/Images/Uyrenu/layout_2.png',
  // './Assets/Images/Uyrenu/layout_3.png',

//   './Assets/Images/Kultegin/160.jpg',
//   './Assets/Images/Kultegin/127.jpg',
//   './Assets/Images/Kultegin/132.jpg',
//   './Assets/Images/Kultegin/134.jpg',
//   './Assets/Images/Kultegin/165.jpg',
//   './Assets/Images/Kultegin/137.jpg',
//   './Assets/Images/Kultegin/1648.jpg',
//   './Assets/Images/Kultegin/153.jpg',
//   './Assets/Images/Kultegin/146.jpg',
//   './Assets/Images/Kultegin/1109.jpg',

//   './Assets/Images/Bilge/1278.jpg',
//   './Assets/Images/Bilge/228.jpg',
//   './Assets/Images/Bilge/239.jpg',
//   './Assets/Images/Bilge/265.jpg',
//   './Assets/Images/Bilge/266.jpg',
//   './Assets/Images/Bilge/264.jpg',
//   './Assets/Images/Bilge/267.jpg',
//   './Assets/Images/Bilge/263.jpg',
//   './Assets/Images/Bilge/262.jpg',
//   './Assets/Images/Bilge/260.jpg',
//   './Assets/Images/Bilge/1103.jpg',

//   './Assets/Images/Tonikok/1090.jpg',
//   './Assets/Images/Tonikok/311.jpg',
//   './Assets/Images/Tonikok/309.jpg',
//   './Assets/Images/Tonikok/1086.jpg',
//   './Assets/Images/Tonikok/1094.jpg',
//   './Assets/Images/Tonikok/1088.jpg',
//   './Assets/Images/Tonikok/1136.jpg',
//   './Assets/Images/Tonikok/1134.jpg',

//   './Assets/Images/Irk_Bitik/1475.jpg',
//   './Assets/Images/Irk_Bitik/1477.jpg',
//   './Assets/Images/Irk_Bitik/1478.jpg',
//   './Assets/Images/Irk_Bitik/1483.jpg',
//   './Assets/Images/Irk_Bitik/1494.jpg',
//   './Assets/Images/Irk_Bitik/1504.jpg',
//   './Assets/Images/Irk_Bitik/1509.jpg',
//   './Assets/Images/Irk_Bitik/1529.jpg',

//   './Assets/Images/Qashau/RSWF.jpg',
//   './Assets/Images/Qashau/RSWC.jpg',
//   './Assets/Images/Qashau/BSWF.jpg',
//   './Assets/Images/Qashau/BSWC.jpg',
//   './Assets/Images/Qashau/RSGF.jpg',
//   './Assets/Images/Qashau/RSGC.jpg',
//   './Assets/Images/Qashau/RSSF.jpg',
//   './Assets/Images/Qashau/RSSC.jpg',

// ];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .catch(err => {
        console.error('Precaching failed:', err);
        throw err;
      })
  );
});


self.addEventListener('activate', event => {
  // Remove old caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle requests from the same origin
  if (url.origin !== location.origin) {
    return;
  }

  // For all same-origin requests: try cache first, then network and cache the result
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then(networkResponse => {
        // Only cache successful GET responses
        if (!networkResponse || networkResponse.status !== 200 || request.method !== 'GET') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseClone);
        });
        return networkResponse;
      });
    })
  );
});
