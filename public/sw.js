let cacheData = "cache1";

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) =>
      cache.addAll([
        "./",
        "./sw.js",
        "./index.html",
        "./logo192.png",
        "./logo512.png",
        "./favicon.ico",
        "./manifest.js",
        "./static/css/main.88411b9e.chunk.css",
        "./static/js/2.f935c2f7.chunk.js",
        "./static/js/3.770260a0.chunk.js",
        "./static/js/main.803fc70f.chunk.js",
        "./static/js/runtime-main.4bf77563.js",
        "./static/media/appointment.37680d70.svg",
        "./static/media/email.f719840a.svg",
        "./static/media/gallery.53a4e4d7.svg",
        "./static/media/image2.7755af15.png",
        "./static/media/image3.46b4252b.png",
        "./static/media/left.6d13f12e.svg",
        "./static/media/phone.58c41d5c.svg",
        "./static/media/play.a4126d3c.svg",
        "./static/media/share.4ece2a64.svg",
        "./static/media/whatsapp.f02afb2f.svg",
      ])
    )
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheData).then(function (cache) {
      return cache.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((response) => {
            // cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
