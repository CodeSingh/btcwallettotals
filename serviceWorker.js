const staticDevCoffee = "btcwallettotals-v1.2"
const assets = [
  "/btcwallettotals/",
  "/btcwallettotals/home.html",
  "/btcwallettotals/css/bulma.css",
  "/btcwallettotals/img/bwt.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})