const CACHE_NAME = 'finflow-shell-v2';
const APP_ROOT = self.registration.scope;
const APP_SHELL = [
  'index.html',
  'tailwind.generated.css',
  'styles.css',
  'core.js',
  'app.js',
  'manifest.webmanifest',
  'finflow-icon.svg',
  'finflow-icon-180.png',
  'finflow-icon-192.png',
  'finflow-icon-512.png'
].map(path => new URL(path, APP_ROOT).href);
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('finflow-shell-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        const cached = await cache.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate') {
          return (await cache.match(new URL('index.html', APP_ROOT).href)) || Response.error();
        }
        return Response.error();
      }
    })());
    return;
  }

});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (clients.length) return clients[0].focus();
    return self.clients.openWindow(new URL('./', APP_ROOT).href);
  })());
});
