// Version your cache to force updates when you change files
const CACHE_NAME = 'app-precache-v1';

// Precache explicit files (from your list)
const PRECACHE_URLS = [
  // HTML folder:
  '/bitik/index.html',
  '/bitik/HTML/introduction.html',
  '/bitik/HTML/explanation.html',
  '/bitik/HTML/read.html',
  '/bitik/HTML/write.html',
  '/bitik/HTML/photo.html',
  '/bitik/HTML/video.html',
  '/bitik/HTML/news.html',
  '/bitik/HTML/contribution.html',
  // CSS folder:
  '/bitik/CSS/styles.css',
  '/bitik/CSS/index.css',
  '/bitik/CSS/read.css',
  // Other files
  '/bitik/script.js',
  '/bitik/manifest.webmanifest',
]
  


  // Images:
 //  '/bitik/Assets/Images/library.webp',
  // '/bitik/Assets/Images/tenge_1.jpg',
  // '/bitik/Assets/Images/tenge_2.jpg',
  // '/bitik/Assets/Images/matin.png',
  // '/bitik/Assets/Images/Uyrenu/1shi_yereje.png',
  // '/bitik/Assets/Images/Uyrenu/2shi_yereje.png',
  // '/bitik/Assets/Images/Uyrenu/3shi_yereje.png',
  // '/bitik/Assets/Images/Uyrenu/4shi_yereje.png',
  // '/bitik/Assets/Images/Uyrenu/dauisti.png',
  // '/bitik/Assets/Images/Uyrenu/daussiz_dara.png',
  // '/bitik/Assets/Images/Uyrenu/daussiz_jup.png',
  // '/bitik/Assets/Images/Uyrenu/qos_dibis.png',
  // '/bitik/Assets/Images/Uyrenu/jattigu_1.png',
  // '/bitik/Assets/Images/Uyrenu/jattigu_2.png',
  // '/bitik/Assets/Images/Uyrenu/salistirma_1.png',
  // '/bitik/Assets/Images/Uyrenu/salistirma_2.png',
  // '/bitik/Assets/Images/Uyrenu/layout.png',
  // '/bitik/Assets/Images/Uyrenu/layout_1.png',
  // '/bitik/Assets/Images/Uyrenu/layout_2.png',
  // '/bitik/Assets/Images/Uyrenu/layout_3.png',

//   '/bitik/Assets/Images/Kultegin/160.jpg',
//   '/bitik/Assets/Images/Kultegin/127.jpg',
//   '/bitik/Assets/Images/Kultegin/132.jpg',
//   '/bitik/Assets/Images/Kultegin/134.jpg',
//   '/bitik/Assets/Images/Kultegin/165.jpg',
//   '/bitik/Assets/Images/Kultegin/137.jpg',
//   '/bitik/Assets/Images/Kultegin/1648.jpg',
//   '/bitik/Assets/Images/Kultegin/153.jpg',
//   '/bitik/Assets/Images/Kultegin/146.jpg',
//   '/bitik/Assets/Images/Kultegin/1109.jpg',

//   '/bitik/Assets/Images/Bilge/1278.jpg',
//   '/bitik/Assets/Images/Bilge/228.jpg',
//   '/bitik/Assets/Images/Bilge/239.jpg',
//   '/bitik/Assets/Images/Bilge/265.jpg',
//   '/bitik/Assets/Images/Bilge/266.jpg',
//   '/bitik/Assets/Images/Bilge/264.jpg',
//   '/bitik/Assets/Images/Bilge/267.jpg',
//   '/bitik/Assets/Images/Bilge/263.jpg',
//   '/bitik/Assets/Images/Bilge/262.jpg',
//   '/bitik/Assets/Images/Bilge/260.jpg',
//   '/bitik/Assets/Images/Bilge/1103.jpg',

//   '/bitik/Assets/Images/Tonikok/1090.jpg',
//   '/bitik/Assets/Images/Tonikok/311.jpg',
//   '/bitik/Assets/Images/Tonikok/309.jpg',
//   '/bitik/Assets/Images/Tonikok/1086.jpg',
//   '/bitik/Assets/Images/Tonikok/1094.jpg',
//   '/bitik/Assets/Images/Tonikok/1088.jpg',
//   '/bitik/Assets/Images/Tonikok/1136.jpg',
//   '/bitik/Assets/Images/Tonikok/1134.jpg',

//   '/bitik/Assets/Images/Irk_Bitik/1475.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1477.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1478.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1483.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1494.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1504.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1509.jpg',
//   '/bitik/Assets/Images/Irk_Bitik/1529.jpg',

//   '/bitik/Assets/Images/Qashau/RSWF.jpg',
//   '/bitik/Assets/Images/Qashau/RSWC.jpg',
//   '/bitik/Assets/Images/Qashau/BSWF.jpg',
//   '/bitik/Assets/Images/Qashau/BSWC.jpg',
//   '/bitik/Assets/Images/Qashau/RSGF.jpg',
//   '/bitik/Assets/Images/Qashau/RSGC.jpg',
//   '/bitik/Assets/Images/Qashau/RSSF.jpg',
//   '/bitik/Assets/Images/Qashau/RSSC.jpg',

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
