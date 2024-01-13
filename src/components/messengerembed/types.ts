// types.ts
export interface FBWindow extends Window {
  fbAsyncInit: () => void;
  FB: {
    init: (options: { xfbml: boolean; version: string }) => void;
  };
}
export interface MessengerEmbedProps {
  // Add your interface properties here
  shouldInitialize: boolean;
}
