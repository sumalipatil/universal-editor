// callback.js
import { userManager } from './oidcConfig';

userManager.signinRedirectCallback().then(user => {
  //console.log('User logged in', user);
});
