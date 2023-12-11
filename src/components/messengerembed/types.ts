// types.ts
// export interface FBWindow extends Window {
//   fbAsyncInit: () => void;
//   FB: {
//     init: (options: { xfbml: boolean; version: string }) => void;
//   };
// }

// import { FacebookStatic } from 'facebook';
// export type FBWindow = {
//   fbAsyncInit: () => void;
//   FB: FacebookStatic;
// };

// import fb = facebook;
// declare var FB: fb.FacebookStatic;

export type FB = {
  fbAsyncInit: any;
  FB: any;
};
