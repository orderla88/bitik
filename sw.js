// Version your cache to force updates when you change files
const APP_CACHE = 'app-cache-v2';
const ASSET_CACHE = 'asset-cache';

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
  './HTML/dictionary_1.html',
  './HTML/radicals.html',
  // CSS folder:
  './CSS/styles.css',
  './CSS/index.css',
  './CSS/read.css',
  './CSS/dictionary.css',
  './CSS/radicals.css',
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
  './PDF/Turli/jazular_jayli.pdf',
  './PDF/hansha.pdf',
];


// install event
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    console.log('SW install');
    // Refresh app shell every version
    const appCache = await caches.open(APP_CACHE);
    const appResults = await Promise.allSettled(
      NETWORK_FIRST_URLS.map(url => appCache.add(url))
    );
    appResults.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error('APP failed:', NETWORK_FIRST_URLS[i], result.reason);
      }
    });
    // Cache assets only first time
    const assetCache = await caches.open(ASSET_CACHE);
    const existingAssets = await assetCache.keys();
    if (existingAssets.length === 0) {
      console.log('First install: caching assets');
      const assetResults = await Promise.allSettled(
        CACHE_FIRST_URLS.map(url =>assetCache.add(url))
      );
      assetResults.forEach((result, i) => {
        if (result.status === 'rejected') {
          console.error('ASSET failed:', CACHE_FIRST_URLS[i], result.reason);
        }
      });
    } else {console.log('Asset cache entries:', existingAssets.length);}
  })());
});

// Delete old cache
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(key => (
      key.startsWith('app-cache-') && 
      key !== APP_CACHE) || 
      key.startsWith('static-cache-')
      )
      .map(key => {console.log('Deleting old app cache:', key);
        return caches.delete(key);
      })
    )
  ).then(() => self.clients.claim()));
});

// fetch events
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const path = new URL(event.request.url).pathname;

// if network-first 
  if (
    NETWORK_FIRST_URLS.some(p => path.endsWith(p.substring(1)))
  ) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse &&networkResponse.status === 200) 
            {const clone = networkResponse.clone();
            event.waitUntil(caches.open(APP_CACHE)
              .then(cache =>cache.put(event.request, clone))
            );
          } return networkResponse;
        })
        .catch(() =>caches.match(event.request))
    ); return;
  }
  // or cache-first
  else if (
    CACHE_FIRST_URLS.some(p => path.endsWith(p.substring(1)))
  ) {
    event.respondWith(
      caches.open(ASSET_CACHE)
        .then(async cache => {const cached = await cache.match(event.request);
          if (cached) return cached;
          try {
            const networkResponse = await fetch(event.request);
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request,networkResponse.clone());
            }
            return networkResponse;
          } catch {return cached;}
        })
    );return;
  }

  else {
    // Default fallback: network-first
    console.warn('Unhandled request:', path);
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
  }
});





