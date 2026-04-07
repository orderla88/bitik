// Version your cache to force updates when you change files
const CACHE_NAME = 'app-precache-v1';

// Precache explicit files (from your list)
const PRECACHE_URLS = [
  // HTML folder:
  '/BITIK/index.html',
  '/BITIK/HTML/introduction.html',
  '/BITIK/HTML/explanation.html',
  '/BITIK/HTML/read.html',
  '/BITIK/HTML/write.html',
  '/BITIK/HTML/photo.html',
  '/BITIK/HTML/video.html',
  '/BITIK/HTML/news.html',
  '/BITIK/HTML/contribution.html',
  // CSS folder:
  '/BITIK/CSS/styles.css',
  '/BITIK/CSS/index.css',
  '/BITIK/CSS/read.css',
  // Other files
  '/BITIK/script.js',
  '/BITIK/sw.js',
  '/BITIK/manifest.webmanifest',
  // Images:
  '/BITIK/Assets/Images/library.webp',
  '/BITIK/Assets/Images/tenge_1.jpg',
  '/BITIK/Assets/Images/tenge_2.jpg',
  '/BITIK/Assets/Images/matin.png',
  '/BITIK/Assets/Images/Uyrenu/1shi_yereje.png',
  '/BITIK/Assets/Images/Uyrenu/2shi_yereje.png',
  '/BITIK/Assets/Images/Uyrenu/3shi_yereje.png',
  '/BITIK/Assets/Images/Uyrenu/4shi_yereje.png',
  '/BITIK/Assets/Images/Uyrenu/dauisti.png',
  '/BITIK/Assets/Images/Uyrenu/daussiz_dara.png',
  '/BITIK/Assets/Images/Uyrenu/daussiz_jup.png',
  '/BITIK/Assets/Images/Uyrenu/qos_dibis.png',
  '/BITIK/Assets/Images/Uyrenu/jattigu_1.png',
  '/BITIK/Assets/Images/Uyrenu/jattigu_2.png',
  '/BITIK/Assets/Images/Uyrenu/salistirma_1.png',
  '/BITIK/Assets/Images/Uyrenu/salistirma_2.png',
  '/BITIK/Assets/Images/Uyrenu/layout.png',
  '/BITIK/Assets/Images/Uyrenu/layout_1.png',
  '/BITIK/Assets/Images/Uyrenu/layout_2.png',
  '/BITIK/Assets/Images/Uyrenu/layout_3.png',

  '/BITIK/Assets/Images/Kultegin/160.jpg',
  '/BITIK/Assets/Images/Kultegin/127.jpg',
  '/BITIK/Assets/Images/Kultegin/132.jpg',
  '/BITIK/Assets/Images/Kultegin/134.jpg',
  '/BITIK/Assets/Images/Kultegin/165.jpg',
  '/BITIK/Assets/Images/Kultegin/137.jpg',
  '/BITIK/Assets/Images/Kultegin/1648.jpg',
  '/BITIK/Assets/Images/Kultegin/153.jpg',
  '/BITIK/Assets/Images/Kultegin/146.jpg',
  '/BITIK/Assets/Images/Kultegin/1109.jpg',

  '/BITIK/Assets/Images/Bilge/1278.jpg',
  '/BITIK/Assets/Images/Bilge/228.jpg',
  '/BITIK/Assets/Images/Bilge/239.jpg',
  '/BITIK/Assets/Images/Bilge/265.jpg',
  '/BITIK/Assets/Images/Bilge/266.jpg',
  '/BITIK/Assets/Images/Bilge/264.jpg',
  '/BITIK/Assets/Images/Bilge/267.jpg',
  '/BITIK/Assets/Images/Bilge/263.jpg',
  '/BITIK/Assets/Images/Bilge/262.jpg',
  '/BITIK/Assets/Images/Bilge/260.jpg',
  '/BITIK/Assets/Images/Bilge/1103.jpg',

  '/BITIK/Assets/Images/Tonikok/1090.jpg',
  '/BITIK/Assets/Images/Tonikok/311.jpg',
  '/BITIK/Assets/Images/Tonikok/309.jpg',
  '/BITIK/Assets/Images/Tonikok/1086.jpg',
  '/BITIK/Assets/Images/Tonikok/1094.jpg',
  '/BITIK/Assets/Images/Tonikok/1088.jpg',
  '/BITIK/Assets/Images/Tonikok/1136.jpg',
  '/BITIK/Assets/Images/Tonikok/1134.jpg',

  '/BITIK/Assets/Images/Irk_Bitik/1475.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1477.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1478.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1483.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1494.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1504.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1509.jpg',
  '/BITIK/Assets/Images/Irk_Bitik/1529.jpg',

  '/BITIK/Assets/Images/Qashau/RSWF.jpg',
  '/BITIK/Assets/Images/Qashau/RSWC.jpg',
  '/BITIK/Assets/Images/Qashau/BSWF.jpg',
  '/BITIK/Assets/Images/Qashau/BSWC.jpg',
  '/BITIK/Assets/Images/Qashau/RSGF.jpg',
  '/BITIK/Assets/Images/Qashau/RSGC.jpg',
  '/BITIK/Assets/Images/Qashau/RSSF.jpg',
  '/BITIK/Assets/Images/Qashau/RSSC.jpg',

];

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
