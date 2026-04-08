const main = (config) => {
config["dns"] = {
    "enable": true,
    "ipv6": true,
    "prefer-h3": true,
    "default-nameserver": [
      "tls://223.5.5.5:853",
      "tls://223.6.6.6:853",
      "tls://[2400:3200::1]:853",
      "tls://[2402:4e00::]:853"
    ],
    "nameserver": [
      "https://cloudflare-dns.com/dns-query",
      "https://dns.google/dns-query"
    ],
    "proxy-server-nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],
    "direct-nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],
    "respect-rules": true
  };
  return config;
}
