import "./styles.global.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-02SQXWRNSH"
      />
      <Script strategy="lazyOnload" id="gtm-script">
        {`
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-02SQXWRNSH')
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
