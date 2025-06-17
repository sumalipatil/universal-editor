import { userManager } from './auth/oidcConfig';

useEffect(() => {
  userManager.getUser().then(user => {
    if (!user || user.expired) {
      userManager.signinRedirect();
    }
  });
}, []);
