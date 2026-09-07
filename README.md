# Daniel Assefa Practicing Archtecure

Next.js, Tailwind, and English / Amharic via `next-intl`.

Live site: `https://danielassefa.org`

Local URLs: `http://localhost:3000/en` and `http://localhost:3000/am`.

## Commands


| Command         | Action                                            |
| --------------- | ------------------------------------------------- |
| `npm install`   | Install dependencies                              |
| `npm run dev`   | Dev server at `localhost:3000`                    |
| `npm run build` | Production build                                  |
| `npm test`      | Unit tests (i18n keys, blog files, locale helper) |
| `npm run lint`  | ESLint                                            |




## Journal posts (blog markdown)

Posts live in `src/content/blog/`.

Each entry needs **two files**, same slug:

```
src/content/blog/my-new-post.en.md
src/content/blog/my-new-post.am.md
```

The loader in `src/utils/posts.js` looks up `slug.{locale}.md` and falls back to `slug.en.md` if the Amharic file is missing.

### Front matter

```md
---
publishDate: 'Mar 09 2025'
title: 'The title readers see'
description: 'Short summary for listings and SEO'
excerpt: 'One or two sentences on the journal index'
image: 'https://images.unsplash.com/...'
tags: [shop, football]
---

Body in Markdown. This is the article.
```



### How a new post shows up

1. Add both `.en.md` and `.am.md` files under `src/content/blog/`.
2. Use a kebab-case slug. That becomes the URL: `/en/my-new-post` and `/am/my-new-post`.
3. The journal index at `/en/blog` and `/am/blog` reads this folder automatically. Newest `publishDate` sorts last on disk and the page reverses the list for reading.
4. Translate `title`, `excerpt`, `description`, and the body in the `.am.md` file. Do not leave the Amharic file as English.

UI chrome (header, footer, homepage, about, contact, journal intro) comes from:

- `src/messages/en.json`
- `src/messages/am.json`

Legal copy: `src/content/privacy/` (English + Amharic). There is no Terms page.

## Project layout

```
app/[locale]/          routes for /en and /am
src/content/blog/      journal markdown (this is where new posts go)
src/messages/          site translations
src/shared/data/       page content wired to those translations
src/utils/posts.js     markdown loader
public/images/         resume PDF and football art
```



## Server setup



### Prerequisites

The server must have been set up using the server setup guide (`server_setup_guide.md`). This ensures Docker, NGINX, Certbot, and the shared infrastructure (Redis, RabbitMQ) are already running.

### One-time setup for this site

**1. Create the site directory and .env on the server:**

```bash
sudo mkdir -p /var/www/daniel_website/logs
sudo chown -R deployer:deployer /var/www/daniel_website
sudo nano /var/www/daniel_website/.env
```

`.env` contents:

```
# must be 3000 inside the container
PORT=3000
HOSTNAME=0.0.0.0
# public URL is fine as the site URL, not the listen port
URL=https://danielassefa.org
```

**2. Create the NGINX virtual host config:**

### Dont forget to change the port and add github secrets!

```bash
sudo nano /etc/nginx/sites-available/daniel_website
```

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name danielassefa.org www.danielassefa.org;

    access_log /var/log/nginx/daniel_website.access.log;
    error_log  /var/log/nginx/daniel_website.error.log;

    location / {
        proxy_pass http://127.0.0.1:4720;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Confirm by a command instead because

The browser fails because it uses **HTTPS**, and Cloudflare HTTPS still returns **520**:


| **Path**                                     | **Result** |
| -------------------------------------------- | ---------- |
| `http://127.0.0.1` + Host `danielassefa.org` | 200        |
| Origin `http://91.7.243.80`                  | 200        |
| Cloudflare **HTTP**                          | 200        |
| Cloudflare **HTTPS**                         | **520**    |
| Origin `:443`                                | broken     |


```nginx
sudo nginx -t && sudo systemctl reload nginx
curl -I -H 'Host: danielassefa.org' http://127.0.0.1/en
```

**3. Issue TLS certificate:**

Your DNS A record must point to the server's public IP before this step.

```bash
sudo apt install certbot python3-certbot-nginx   # Debian/Ubuntu
sudo certbot --nginx -d danielassefa.org -d www.danielassefa.org
sudo certbot renew --dry-run
```

This will create the following:

```nginx
server {
    server_name danielassefa.org www.danielassefa.org;

    access_log /var/log/nginx/daniel_website.access.log;
    error_log  /var/log/nginx/daniel_website.error.log;

    location / {
        proxy_pass http://127.0.0.1:4720;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/danielassefa.org/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/danielassefa.org/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}
server {
    if ($host = www.danielassefa.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = danielassefa.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;
    server_name danielassefa.org www.danielassefa.org;
    return 404; # managed by Certbot

}              
```

This must be done before the next step to generate the certificate.

```nginx
sudo nano /etc/nginx/snippets/daniel_website_security.conf
```

Then test and reload:

```nginx
# ── Block malformed Next-Action headers ────────────────────────────
# Allow only valid 40-char hex hashes. Anything else gets dropped.
# 444 instead of 403 — give scanners no information at all.
set $bad_action 0;
if ($http_next_action != "") {
    set $bad_action 1;
}
if ($http_next_action ~* "^[0-9a-f]{40}$") {
    set $bad_action 0;
}
if ($bad_action = 1) {
    return 444;
}

# ── Block requests with no Host header ─────────────────────────────
if ($host = "") {
    return 444;
}

# ── Block wrong Host header (direct IP access, other domains) ──────
# Only danielassefa.org and www.danielassefa.org should reach this server.
if ($host !~* "^(robera\.net|www\.robera\.net)$") {
    return 444;
}

# ── Block empty User-Agent ──────────────────────────────────────────
# Legitimate browsers and crawlers always send one.
if ($http_user_agent = "") {
    return 444;
}

# ── Block known scanner user agents ────────────────────────────────
# Extended list beyond the original — all return 444.
if ($http_user_agent ~* (sqlmap|nikto|nmap|masscan|zgrab|nuclei|l9scan|libredtail|zmeu|dirbuster|harvester|whatweb|wpscan|semrush|ahrefsbot)) {
    return 444;
}

# ── Block non-standard HTTP methods ────────────────────────────────
# Your app only needs GET, POST, HEAD. PROPFIND, OPTIONS etc.
# were showing up repeatedly in your logs.
if ($request_method !~ ^(GET|POST|HEAD)$) {
    return 444;
}
```

Then test and reload:

```nginx
sudo nginx -t
sudo systemctl reload nginx
```



### Next step

```nginx
sudo nano /etc/nginx/sites-available/daniel_website
```

then

```nginx
# 1) HTTP — redirect everything to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name danielassefa.org www.danielassefa.org;

    return 301 https://$host$request_uri;
}

# 2) HTTPS — reverse proxy to Next.js on localhost:4720
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name danielassefa.org www.danielassefa.org;

    ssl_certificate     /etc/letsencrypt/live/danielassefa.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/danielassefa.org/privkey.pem;

    # TLS settings inherited from nginx.conf — no need to repeat them here.
    # The ssl_protocols/ssl_ciphers in nginx.conf already apply globally.

    # ── Logging ────────────────────────────────────────────────────
    access_log /var/log/nginx/daniel_website.access.log;
    error_log  /var/log/nginx/daniel_website.error.log;

    # ── Probe path blocking — silent drop (444) ────────────────────
    # Return nothing for common scanner targets.
    # 444 closes the connection without sending any response.
    location ~* "(\.git|\.env|\.aws|wp-admin|wp-includes|phpunit|actuator|cgi-bin|xmlrpc|\.vscode)" {
        return 444;
    }

    # ── Rate limiting — applied globally to this server ────────────
    limit_req zone=general burst=50 nodelay;

    # ── Security rules (next-action block, host check, etc.) ───────
    include snippets/daniel_website_security.conf;

    # ── Next.js Server Actions — stricter rate limit ───────────────
    # Next.js uses POST /_next/data or the Next-Action header,
    # not a dedicated /_next/action path. Matching on the header
    # is more reliable than a location block.
    location / {
        # Extra rate limit for Server Action POSTs
        if ($http_next_action) {
            # Can't nest limit_req in if blocks — handled via security.conf
            # or CrowdSec. See note below.
        }

        proxy_pass http://localhost:4720;
        proxy_http_version 1.1;
        proxy_set_header Upgrade    $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host       $host;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /_next/static/ {
	limit_req zone=general burst=200 nodelay;
	proxy_pass http://localhost:4720;
	proxy_http_version 1.1;
	proxy_set_header Host $host;
    }
}
```

```bash
sudo ln -sf /etc/nginx/sites-available/daniel_website /etc/nginx/sites-enabled/daniel_website
sudo nginx -t && sudo systemctl reload nginx
```



### 4. This will

Get Let’s Encrypt certs.

Auto‑insert the ssl_certificate and ssl_certificate_key lines.

Optionally set up the HTTP→HTTPS redirect for you.

After that, check:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

