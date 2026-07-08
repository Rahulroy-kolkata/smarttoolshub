const CACHE_NAME = "smarttoolshub-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./about.html",
  "./privacy.html",
  "./terms.html",
  "./css/style.css",
  "./js/script.js",
  "./image/logo.png",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});