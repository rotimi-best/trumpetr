import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    domain: 'rotimibest.auth0.com',
    clientId: 'lO0F01RkNA1YPefn0OYd1wv4QxxF11Q6',
    clientSecret: 'J2su2MnXteVxg18rMAekME-0tjlArHGiixmAeNvYLc2iCREtkOjLbo4Dptk2Wa2x',
    scope: 'openid profile',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000/',
    session: {
        // The secret used to encrypt the cookie.
        cookieSecret: '<RANDOMLY_GENERATED_SECRET>',
        // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
        cookieLifetime: 60 * 60 * 60,
    }
});