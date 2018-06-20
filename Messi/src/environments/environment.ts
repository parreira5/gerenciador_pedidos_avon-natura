// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAFM5A0oRybunlkv_88ae2IymRic-HS6_M",
    authDomain: "projetotcc-7a495.firebaseapp.com",
    databaseURL: "https://projetotcc-7a495.firebaseio.com",
    projectId: "projetotcc-7a495",
    storageBucket: "projetotcc-7a495.appspot.com",
    messagingSenderId: "620616593183"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
