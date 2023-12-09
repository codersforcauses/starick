import { useEffect } from "react";
import { FBWindow } from "./types";

declare let window: FBWindow;

export default function MessengerChat() {
  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    if (chatbox) {
      chatbox.setAttribute("page_id", "174020045800640");
      chatbox.setAttribute("attribution", "biz_inbox");
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "18.0"
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      if (fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
