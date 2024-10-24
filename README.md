# Test ONETAP

One Tap signin for site can be disabled/enabled in chrome://settings/content/federatedIdentityApi

## Development Server

Start the development server on `http://localhost:3000`:

## Making test domain

If you using Ubuntu in Windows, you must use mkcert in windows!

```
mkcert -key-file mistergroup_org_key.pem -cert-file mistergroup_org_cert.pem mistergroup.org *.mistergroup.org
```

### Ubuntu

Follow - https://github.com/FiloSottile/mkcert

ngrok http --url=renewed-turtle-assuring.ngrok-free.app 3000

ssh -R mgtest:80:localhost:3000 serveo.net
If you need devtools on serveo.net, you must set `vite.server.hmr.protocol: 'wss'` in `nuxt.config.ts`.
Alternatively use https://telebit.cloud/
