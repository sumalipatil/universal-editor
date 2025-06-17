// login.js
import { userManager } from './oidcConfig';

export function login() {
  userManager.signinRedirect();
}
