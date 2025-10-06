const CACHE_NAME = "drytern-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/pixgg-proxy.js",
  "/style.css", // se criar separado
  "/favicon.ico",
  "/assets/logo.png", // se tiver imagens locais
];

// Instalando o SW e cacheando arquivos
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Ativação do SW
self.addEventListener("activate", (evt) => {
  evt.waitUntil(clients.claim());
});

// Interceptando requisições
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((resp) => resp || fetch(evt.request))
  );
});
