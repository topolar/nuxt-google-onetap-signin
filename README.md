# OneTapLogin

Google OneTap/Button Sign-in example build with Nuxt 3, Pinia and Nuxt UI. Received user information are just displayed and not used in any other way.

Deployed version is available on [Vercel](https://nuxt-google-onetap-signin.vercel.app)

## Development environment

Google Sign-in doesn't work on localhost. Your app must be running on some real domain. You can setup it by mkcert tool. Alternatively you can use ngrok, serveo or any other tool.

```
mkcert -key-file local.example.org.key.pem -cert-file local.example.org.cert.pem local.example.org
```

## Google API access

Open Google Cloud Console, create project, create Credentials for web app and define OAuth content screen. Store ClientID and Secret to env variables.

## Persistent store

This example is using Pinia with pinia-plugin-persistedstate plugin to store signed user information in cookies. You can find it in `useAuthStore.ts`.

## Composable for fast user access

useAuth composable makes user properties easy to access. See `useAuth.ts`.

## Google Sign-in Library

Create Nuxt client plugin to load and activate Google sign-in library. See `GoogleAuth.client.ts`.

## Token validation API

Create access point for checking user token and receiving User information. See `server/api/auth/google.ts`.

## Required env variables

```
# Create Google Cloud API Credentials for web application and OAuth2
NUXT_PUBLIC_GA_CLIENT_ID=...
NUXT_GA_SECRET=...

# local domain with mkcert certificates for testing, for example local.example.org
NUXT_DEVHOST=...
```
