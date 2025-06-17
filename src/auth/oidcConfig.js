
import { UserManager } from 'oidc-client-ts';

const oidcConfig = {
  authority: 'https://your-idp-domain.com',
  client_id: 'your-client-id',
  redirect_uri: 'https://your-eds-site.com/callback',
  response_type: 'code',
  scope: 'openid profile email',
  post_logout_redirect_uri: 'https://your-eds-site.com/',
};

export const userManager = new UserManager(oidcConfig);
