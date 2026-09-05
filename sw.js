// Version your cache to force updates when you change files
const CACHE_NAME = 'static-cache-v11';

// Precache explicit files (from your list)
const NETWORK_FIRST_URLS = [
  './index.html',
  './script.js',
  './manifest.webmanifest',
  // HTML folder:
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
];
  const CACHE_FIRST_URLS = [
  './Assets/Images/library.webp',
  './Assets/Images/tenge_1.jpg',
  './Assets/Images/tenge_2.jpg',
  './Assets/Images/matin.png',

  './Assets/Images/Uyrenu/1shi_yereje.png',
  './Assets/Images/Uyrenu/2shi_yereje.png',
  './Assets/Images/Uyrenu/3shi_yereje.png',
  './Assets/Images/Uyrenu/4shi_yereje.png',
  './Assets/Images/Uyrenu/dauisti.png',
  './Assets/Images/Uyrenu/daussiz_dara.png',
  './Assets/Images/Uyrenu/daussiz_jup.png',
  './Assets/Images/Uyrenu/qos_dibis.png',
  './Assets/Images/Uyrenu/jattigu_1.png',
  './Assets/Images/Uyrenu/jattigu_2.png',
  './Assets/Images/Uyrenu/salistirma_1.png',
  './Assets/Images/Uyrenu/salistirma_2.png',
  './Assets/Images/Uyrenu/layout.png',
  './Assets/Images/Uyrenu/layout_1.png',
  './Assets/Images/Uyrenu/layout_2.png',
  './Assets/Images/Uyrenu/layout_3.png',

  './Assets/Images/Kultegin/160.jpg',
  './Assets/Images/Kultegin/127.jpg',
  './Assets/Images/Kultegin/132.jpg',
  './Assets/Images/Kultegin/134.jpg',
  './Assets/Images/Kultegin/165.jpg',
  './Assets/Images/Kultegin/137.jpg',
  './Assets/Images/Kultegin/148.jpg',
  './Assets/Images/Kultegin/153.jpg',
  './Assets/Images/Kultegin/146.jpg',
  './Assets/Images/Kultegin/1109.jpg',

  './Assets/Images/Bilge/1278.jpg',
  './Assets/Images/Bilge/228.jpg',
  './Assets/Images/Bilge/239.jpg',
  './Assets/Images/Bilge/265.jpg',
  './Assets/Images/Bilge/266.jpg',
  './Assets/Images/Bilge/264.jpg',
  './Assets/Images/Bilge/267.jpg',
  './Assets/Images/Bilge/263.jpg',
  './Assets/Images/Bilge/262.jpg',
  './Assets/Images/Bilge/260.jpg',
  './Assets/Images/Bilge/1103.jpg',

  './Assets/Images/Tonikok/1090.jpg',
  './Assets/Images/Tonikok/311.jpg',
  './Assets/Images/Tonikok/309.jpg',
  './Assets/Images/Tonikok/1086.jpg',
  './Assets/Images/Tonikok/1094.jpg',
  './Assets/Images/Tonikok/1088.jpg',
  './Assets/Images/Tonikok/1136.jpg',
  './Assets/Images/Tonikok/1134.jpg',

  './Assets/Images/Irk_Bitik/1475.jpg',
  './Assets/Images/Irk_Bitik/1477.jpg',
  './Assets/Images/Irk_Bitik/1478.jpg',
  './Assets/Images/Irk_Bitik/1483.jpg',
  './Assets/Images/Irk_Bitik/1494.jpg',
  './Assets/Images/Irk_Bitik/1504.jpg',
  './Assets/Images/Irk_Bitik/1509.jpg',
  './Assets/Images/Irk_Bitik/1529.jpg',

  './Assets/Images/Qashau/RSWF.jpg',
  './Assets/Images/Qashau/RSWC.jpg',
  './Assets/Images/Qashau/BSWF.jpg',
  './Assets/Images/Qashau/BSWC.jpg',
  './Assets/Images/Qashau/RSGF.jpg',
  './Assets/Images/Qashau/RSGC.jpg',
  './Assets/Images/Qashau/RSSF.jpg',
  './Assets/Images/Qashau/RSSC.jpg',
  './Assets/Images/Qashau/tools_1.jpg',

  // PDF files
  './PDF/Atasozi/adam_kisi.pdf',
  './PDF/Atasozi/as_tamaq.pdf',
  './PDF/Atasozi/ayel_qatin.pdf',
  './PDF/Atasozi/bilim.pdf',
  './PDF/Atasozi/birlik.pdf',
  './PDF/Atasozi/dos_joldas.pdf',
  './PDF/Atasozi/mal.pdf',
  './PDF/Atasozi/oner.pdf',
  './PDF/Atasozi/sauda.pdf',
  './PDF/Atasozi/til.pdf',
  './PDF/Atasozi/yenbek.pdf',
  './PDF/Atasozi/yer.pdf',

  './PDF/Jir/patigul_mahsatova.pdf',
  './PDF/Jir/serik_abil.pdf',
  './PDF/Jir/serik_seytman.pdf',
  
  './PDF/Mongolia/bayan_ulgi.pdf',
  './PDF/Mongolia/kirispe.pdf',
  './PDF/Mongolia/mongolia_qazagi.pdf',
  './PDF/Mongolia/qazaq.pdf',
  './PDF/Mongolia/qazaq_kiyimi.pdf',
  './PDF/Mongolia/qazaq_tagami.pdf',
  './PDF/Mongolia/uy.pdf',

  './PDF/Yertegi/adal_otinshi.pdf',
  './PDF/Yertegi/bala_jane_qasqir.pdf',
  './PDF/Yertegi/ip_pen_suyek.pdf',
  './PDF/Yertegi/kishkentay_tauiq.pdf',
  './PDF/Yertegi/qiz_jane_sut.pdf',
  './PDF/Yertegi/sauisqan_jane_sut.pdf',
  './PDF/Yertegi/muyizder.pdf',
  './PDF/Yertegi/eki_tishqan.pdf',
  './PDF/Yertegi/ormandagi_janaliq.pdf',
  './PDF/Yertegi/patshanin_ashui.pdf',
  './PDF/Yertegi/tulki_men_qarga.pdf',

  './PDF/Turli/tanbalar_kestesi.pdf',
  './PDF/Turli/similarities_of_jp_kz.pdf',
];
const NETWORK_FIRST_FOLDERS = ['/HTML/', '/CSS/'];
const CACHE_FIRST_FOLDERS = ['/Assets/', '/PDF/'];
const PRECACHE_URLS = [...NETWORK_FIRST_URLS, ...CACHE_FIRST_URLS];


self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const existingKeys = await cache.keys();
      if (existingKeys.length === 0) {
        // First install → precache everything, but tolerate failures
        return Promise.allSettled(
          PRECACHE_URLS.map(url =>
            cache.add(url)
          )
        ).then(results => {
          results.forEach((result, i) => {
            if (result.status === 'rejected') {
              console.error('Failed to cache:', PRECACHE_URLS[i], result.reason);
              // Continue caching other files
            }
          });
        });
      }
      // Otherwise, skip re‑caching
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Decide strategy based on path
  const path = url.pathname;

  if (
  NETWORK_FIRST_URLS.some(p => path.endsWith(p)) ||
  NETWORK_FIRST_FOLDERS.some(folder => path.startsWith(folder))
) {
    // Network-first
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
        }
        return networkResponse;
      }).catch(() => caches.match(event.request))
    );
  } else if  (
  CACHE_FIRST_URLS.some(p => path.endsWith(p)) ||
  CACHE_FIRST_FOLDERS.some(folder => path.startsWith(folder))
) {
    // Cache-first
event.respondWith(
  caches.match(event.request).then(cachedResponse => {
    const fetchPromise = fetch(event.request).then(networkResponse => {
      if (networkResponse && networkResponse.status === 200) {
        caches.open(CACHE_NAME).then(cache =>
          cache.put(event.request, networkResponse.clone())
        );
      }
      return networkResponse;
    }).catch(() => cachedResponse);

    // Return cached immediately, update in background
    return cachedResponse || fetchPromise;
  })
);
  } else {
    // Default fallback: network-first
    console.warn('Unhandled request:', path);
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
  }
});



