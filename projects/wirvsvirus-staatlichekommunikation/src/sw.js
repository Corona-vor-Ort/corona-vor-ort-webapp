importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');


if (workbox) {
  console.log(`Yay! Workbox is loaded`);
  workbox.setConfig({ debug: true });

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

//   workbox.routing.registerRoute(
//     new RegExp('https://api.corona-vor-ort.de/api/*'),
//     workbox.strategies.NetworkFirst({
//         cacheName: 'api',
//         cacheExpiration: {
//             maxAgeSeconds: 60 * 10
//         }
//     })
// );

workbox.routing.registerRoute(
  new RegExp('https://api.corona-vor-ort.de/api/*'),
   new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'api',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 *  10, // 10 minutes
      }),
    ],
  })
)




} else {
  console.log(`Boo! Workbox didn't load`);
}
